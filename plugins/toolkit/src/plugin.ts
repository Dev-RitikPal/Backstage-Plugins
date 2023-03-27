import { createApiFactory, createPlugin, createRoutableExtension, discoveryApiRef, fetchApiRef, identityApiRef } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { toolkitApiRef, ToolkitClient } from "./api"

export const toolkitPlugin = createPlugin({
  id: 'toolkit',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: toolkitApiRef,
      deps: {
        identityApi: identityApiRef,
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ identityApi, discoveryApi, fetchApi }) =>
        new ToolkitClient({ identityApi, discoveryApi, fetchApi }),
    }),
  ]
});


export const ToolkitPage = toolkitPlugin.provide(
  createRoutableExtension({
    name: 'ToolkitDetails',
    component: () =>
      import('./components/ToolkitDetails').then(m => m.ToolkitDetails),
    mountPoint: rootRouteRef,
  }),
);
export const Toolkit = toolkitPlugin.provide(
  createRoutableExtension({
    name: 'Toolkit',
    component: () =>
      import('./components/Toolkit').then(m => m.default),
    mountPoint: rootRouteRef,
  }),
);
