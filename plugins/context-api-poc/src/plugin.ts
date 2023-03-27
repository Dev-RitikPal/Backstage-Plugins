import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const contextApiPocPlugin = createPlugin({
  id: 'context-api-poc',
  routes: {
    root: rootRouteRef,
  },
});

export const ContextApiPocPage = contextApiPocPlugin.provide(
  createRoutableExtension({
    name: 'ContextApiPocPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
