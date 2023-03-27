import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { serviceRequestPlugin, ServiceRequestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(serviceRequestPlugin)
  .addPage({
    element: <ServiceRequestPage />,
    title: 'Root Page',
    path: '/service-request'
  })
  .render();
