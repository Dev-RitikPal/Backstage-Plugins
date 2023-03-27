/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { resolveSafeChildPath } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import { InputError } from '@backstage/errors';
import { ScmIntegrationRegistry } from '@backstage/integration';
import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import { Types } from '@gitbeaker/core';
import { Gitlab } from '@gitbeaker/node';
import path from 'path';
import { initRepoAndPush } from './helpers';
import { serializeDirectoryContents } from './serializeDirectoryContents';
import { getRepoSourceDirectory, parseRepoUrl } from './util';

/**
 * Creates a new action that initializes a git repository of the content in the workspace
 * and publishes it to GitLab.
 *
 * @public
 */
export function createGitlabCreateOrMergeAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}) {
  const { integrations, config } = options;

  return createTemplateAction<{
    repoUrl: string;
    defaultBranch?: string;
    repoVisibility?: 'private' | 'internal' | 'public';
    sourcePath?: string;
    token?: string;
    gitCommitMessage?: string;
    gitAuthorName?: string;
    gitAuthorEmail?: string;
    setUserAsOwner?: boolean;
  }>({
    id: 'publish:gitlab:createOrMerge',
    description:
      'Initializes a git repository of the content in the workspace, and publishes it to GitLab.',
    schema: {
      input: {
        type: 'object',
        required: ['repoUrl'],
        properties: {
          repoUrl: {
            title: 'Repository Location',
            type: 'string',
          },
          repoVisibility: {
            title: 'Repository Visibility',
            type: 'string',
            enum: ['private', 'public', 'internal'],
          },
          defaultBranch: {
            title: 'Default Branch',
            type: 'string',
            description: `Sets the default branch on the repository. The default value is 'master'`,
          },
          gitCommitMessage: {
            title: 'Git Commit Message',
            type: 'string',
            description: `Sets the commit message on the repository. The default value is 'initial commit'`,
          },
          gitAuthorName: {
            title: 'Default Author Name',
            type: 'string',
            description: `Sets the default author name for the commit. The default value is 'Scaffolder'`,
          },
          gitAuthorEmail: {
            title: 'Default Author Email',
            type: 'string',
            description: `Sets the default author email for the commit.`,
          },
          sourcePath: {
            title: 'Source Path',
            description:
              'Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published as the repository.',
            type: 'string',
          },
          token: {
            title: 'Authentication Token',
            type: 'string',
            description: 'The token to use for authorization to GitLab',
          },
          setUserAsOwner: {
            title: 'Set User As Owner',
            type: 'boolean',
            description:
              'Set the token user as owner of the newly created repository. Requires a token authorized to do the edit in the integration configuration for the matching host',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          remoteUrl: {
            title: 'A URL to the repository with the provider',
            type: 'string',
          },
          repoContentsUrl: {
            title: 'A URL to the root of the repository',
            type: 'string',
          },
          projectId: {
            title: 'The ID of the project',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
      const {
        repoUrl,
        repoVisibility = 'private',
        defaultBranch = 'master',
        gitCommitMessage = 'initial commit',
        gitAuthorName,
        gitAuthorEmail,
        setUserAsOwner = false,
      } = ctx.input;

      const { owner, repo, host } = parseRepoUrl(repoUrl, integrations);

      if (!owner) {
        throw new InputError(
          `No owner provided for host: ${host}, and repo ${repo}`,
        );
      }

      const integrationConfig = integrations.gitlab.byHost(host);

      if (!integrationConfig) {
        throw new InputError(
          `No matching integration configuration for host ${host}, please check your integrations config`,
        );
      }

      if (!integrationConfig.config.token && !ctx.input.token) {
        throw new InputError(`No token available for host ${host}`);
      }

      const token = ctx.input.token || integrationConfig.config.token!;
      const tokenType = ctx.input.token ? 'oauthToken' : 'token';

      const client = new Gitlab({
        host: integrationConfig.config.baseUrl,
        [tokenType]: token,
      });

      let { id: targetNamespace } = (await client.Namespaces.show(owner)) as {
        id: number;
      };

      const { id: userId } = (await client.Users.current()) as {
        id: number;
      };

      if (!targetNamespace) {
        targetNamespace = userId;
      }

      const searchResult = await client.Projects.search(`${repo}`);
      const doesRepoWithSameNameAlreadyExists = Boolean(searchResult.length);

      if (!doesRepoWithSameNameAlreadyExists) {
        // when repo with same name does not exists

        const { id: projectId, http_url_to_repo } =
          await client.Projects.create({
            namespace_id: targetNamespace,
            name: repo,
            visibility: repoVisibility,
          });

        // When setUserAsOwner is true the input token is expected to come from an unprivileged user GitLab
        // OAuth flow. In this case GitLab works in a way that allows the unprivileged user to
        // create the repository, but not to push the default protected branch (e.g. master).
        // In order to set the user as owner of the newly created repository we need to check that the
        // GitLab integration configuration for the matching host contains a token and use
        // such token to bootstrap a new privileged client.
        if (setUserAsOwner && integrationConfig.config.token) {
          const adminClient = new Gitlab({
            host: integrationConfig.config.baseUrl,
            token: integrationConfig.config.token,
          });

          await adminClient.ProjectMembers.add(projectId, userId, 50);
        }

        const remoteUrl = (http_url_to_repo as string).replace(/\.git$/, '');
        const repoContentsUrl = `${remoteUrl}/-/blob/${defaultBranch}`;

        const gitAuthorInfo = {
          name: gitAuthorName
            ? gitAuthorName
            : config.getOptionalString('scaffolder.defaultAuthor.name'),
          email: gitAuthorEmail
            ? gitAuthorEmail
            : config.getOptionalString('scaffolder.defaultAuthor.email'),
        };

        await initRepoAndPush({
          dir: getRepoSourceDirectory(ctx.workspacePath, ctx.input.sourcePath),
          remoteUrl: http_url_to_repo as string,
          defaultBranch,
          auth: {
            username: 'oauth2',
            password: token,
          },
          logger: ctx.logger,
          commitMessage: gitCommitMessage
            ? gitCommitMessage
            : config.getOptionalString('scaffolder.defaultCommitMessage'),
          gitAuthorInfo,
        });

        ctx.output('remoteUrl', remoteUrl);
        ctx.output('repoContentsUrl', repoContentsUrl);
        ctx.output('projectId', projectId);
      } else {
        // when repo with same name already exists, create a merge request
        const api = client;
        const projectPath = `${owner}/${repo}`;
        const destinationBranch = 'new-template';

        const targetPath = resolveSafeChildPath(ctx.workspacePath, '');

        const fileContents = await serializeDirectoryContents(targetPath, {
          gitignore: true,
        });

        ctx.logger.info(
          `Creating new Merge request :: Branch name :: ${destinationBranch}`,
        );

        const actions: Types.CommitAction[] = fileContents.map(file => ({
          action: 'update',
          filePath: path.posix.join(file.path),
          encoding: 'base64',
          content: file.content.toString('base64'),
          execute_filemode: file.executable,
        }));

        const projects = await api.Projects.show(projectPath);
        const {
          default_branch: projectDefaultBranch,
          id: projectId,
          http_url_to_repo,
        } = projects;
        const remoteUrl = (http_url_to_repo as string).replace(/\.git$/, '');
        const repoContentsUrl = `${remoteUrl}/-/blob/${defaultBranch}`;

        try {
          await api.Branches.create(
            projectPath,
            destinationBranch,
            String(projectDefaultBranch),
          );
        } catch (e) {
          throw new InputError(`The branch creation failed ${e}`);
        }

        try {
          await api.Commits.create(
            projectPath,
            destinationBranch,
            'new template commit',
            actions,
          );
        } catch (e) {
          throw new InputError(
            `Committing the changes to ${destinationBranch} failed ${e}`,
          );
        }

        try {
          await api.MergeRequests.create(
            projectPath,
            destinationBranch,
            String(projectDefaultBranch),
            'new template',
            {
              description: 'new template',
              removeSourceBranch: false,
            },
          ).then((mergeRequest: { web_url: string }) => {
            return mergeRequest.web_url;
          });

          ctx.output('repoContentsUrl', repoContentsUrl);
          ctx.output('remoteUrl', remoteUrl);
          ctx.output('projectId', projectId);
        } catch (e) {
          throw new InputError(`Merge request creation failed${e}`);
        }
      }
    },
  });
}
