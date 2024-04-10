import {
  configApiRef,
  createApiFactory,
  createComponentExtension,
  createPlugin,
  discoveryApiRef,
  fetchApiRef,
} from '@backstage/core-plugin-api';
import { glossaryApiRef, GlossaryClient } from './api';

import { rootRouteRef } from './routes';

export const glossaryPlugin = createPlugin({
  id: 'glossary',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: glossaryApiRef,
      deps: {
        configApi: configApiRef,
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ discoveryApi, fetchApi }) =>
        new GlossaryClient({
          discoveryApi,
          fetchApi,
        }),
    }),
  ],
});

export const EntityGlossaryContent = glossaryPlugin.provide(
  createComponentExtension({
    name: 'EntityGlossaryPage',
    component: {
      lazy: () => import('./Router').then(m => m.Router),
    },
  }),
);

export const EntityGlossaryPage = glossaryPlugin.provide(
  createComponentExtension({
    name: 'EntityGlossaryPage',
    component: {
      lazy: () =>
        import('./components/GlobalGlossary/GlossaryPage').then(
          m => m.GlossaryPage,
        ),
    },
  }),
);
