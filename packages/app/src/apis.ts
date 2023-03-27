import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  apiDocsConfigRef,
  defaultDefinitionWidgets,
} from '@backstage/plugin-api-docs';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
  discoveryApiRef,
  oauthRequestApiRef,
  ProfileInfoApi,
  BackstageIdentityApi,
  SessionApi,
  OpenIdConnectApi,
  OAuthApi,
  createApiRef,
  ApiRef,
  analyticsApiRef,
  identityApiRef,
  fetchApiRef,
  microsoftAuthApiRef,
  githubAuthApiRef,
} from '@backstage/core-plugin-api';
import { exploreToolsConfigRef } from '@backstage/plugin-explore-react';
import { OAuth2 } from '@backstage/core-app-api';
import {
  GitlabCIClient,
  GitlabCIApiRef,
  ConfluenceClient,
  ConfluenceApiRef,
  GithubApiRef,
  GithubClient,
  UptlApiRef,
  UptlClient,
} from './customApis/api';
import { GoogleAnalytics } from '@backstage/plugin-analytics-module-ga';
import { GrpcPlaygroundComponent } from 'backstage-grpc-playground';
import { cpeRadar } from './radar/Radar';
import { techRadarApiRef } from '@backstage/plugin-tech-radar';
import { tools } from './utils/tools';
import { MicrosoftCalendarApiClient, microsoftCalendarApiRef } from '@backstage/plugin-microsoft-calendar';
import { githubApiRef, GithubClient as StatusNeoGithubClient } from '@statusneo/backstage-plugin-github';

export const authUtilityApiRef: ApiRef<
  OAuthApi &
  OpenIdConnectApi &
  ProfileInfoApi &
  BackstageIdentityApi &
  SessionApi
> = createApiRef({
  id: 'oidc',
});

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: analyticsApiRef,
    deps: { configApi: configApiRef, identityApi: identityApiRef },
    factory: ({ configApi, identityApi }) =>
      GoogleAnalytics.fromConfig(configApi, {
        identityApi,
      }),
  }),
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
  createApiFactory({
    api: authUtilityApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi, configApi }) =>
      OAuth2.create({
        discoveryApi,
        oauthRequestApi,
        provider: {
          id: 'oidc',
          title: 'Sign in to "Engineering Portal"',
          icon: () => null,
        },
        environment: configApi.getOptionalString('auth.environment'),
      }),
  }),
  createApiFactory({
    api: GitlabCIApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      configApi: configApiRef,
    },
    factory: ({ configApi, discoveryApi }) =>
      new GitlabCIClient({
        discoveryApi,
        baseUrl: configApi.getOptionalString('gitlab.baseUrl'),
      }),
  }),
  createApiFactory({
    api: GithubApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      configApi: configApiRef,
    },
    factory: ({ configApi, discoveryApi }) =>
      new GithubClient({
        discoveryApi,
        baseUrl: configApi.getOptionalString('github.baseUrl'),
      }),
  }),
  createApiFactory({
    api: UptlApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi }) =>
      new UptlClient({
        discoveryApi,
      }),
  }),
  createApiFactory({
    api: ConfluenceApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi }) =>
      new ConfluenceClient({
        discoveryApi,
      }),
  }),
  createApiFactory(techRadarApiRef, new cpeRadar()),
  createApiFactory({
    api: exploreToolsConfigRef,
    deps: {},
    factory: () => ({
      async getTools() {
        return tools;
      },
    }),
  }),
  createApiFactory({
    api: apiDocsConfigRef,
    deps: {},
    factory: () => {
      // load the default widgets
      const definitionWidgets = defaultDefinitionWidgets();

      return {
        getApiDefinitionWidget: (apiEntity:any) => {
          // custom rendering for grpc
          if (apiEntity.spec.type === 'grpc') {
            return {
              type: 'grpc',
              title: 'gRPC Playground',
              component: GrpcPlaygroundComponent,
            };
          }

          // fallback to the defaults
          return definitionWidgets.find(d => d.type === apiEntity.spec.type);
        },
      };
    },
  }),
  createApiFactory({
    api: microsoftCalendarApiRef,
    deps: { authApi: microsoftAuthApiRef, fetchApi: fetchApiRef },
    factory(deps) {
      return new MicrosoftCalendarApiClient(deps);
    }
  }),

    createApiFactory({
      api: githubApiRef,
      deps: { authApi: githubAuthApiRef, fetchApi: fetchApiRef },
      factory(deps) {
        return new StatusNeoGithubClient(deps);
      },
    }),

];
