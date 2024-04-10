import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const serviceRequestPlugin = createPlugin({
  id: 'service-request',
  routes: {
    root: rootRouteRef,
  },
});

export const ServiceRequestPage = serviceRequestPlugin.provide(
  createRoutableExtension({
    name: 'ServiceRequestPage',
    component: () =>
      import('./components/ServiceRequest').then(m => m.default),
    mountPoint: rootRouteRef,
  }),
);
