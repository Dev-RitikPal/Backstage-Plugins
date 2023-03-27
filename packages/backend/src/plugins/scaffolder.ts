import { CatalogClient } from '@backstage/catalog-client';
import { ScmIntegrations } from '@backstage/integration';
import { DateTime } from 'luxon';
import {
  createBuiltinActions,
  createRouter,
} from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import {
  createCatalogCheckAndRegister,
  createGitlabCreateOrMergeAction,
} from './actions';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({ discoveryApi: env.discovery });
  const integrations = ScmIntegrations.fromConfig(env.config);

  const builtInActions = createBuiltinActions({
    integrations,
    catalogClient,
    config: env.config,
    reader: env.reader,
  });

  const actions = [
    ...builtInActions,
    createGitlabCreateOrMergeAction({
      integrations,
      config: env.config,
    }),
    createCatalogCheckAndRegister({ catalogClient, integrations }),
  ];

  return createRouter({
    additionalTemplateGlobals: {
      now: () => {
        return DateTime.now().toMillis()
      }
    },
    actions,
    catalogClient: catalogClient,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
  });
}
