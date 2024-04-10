import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { contextApiPocPlugin, ContextApiPocPage } from '../src/plugin';

createDevApp()
  .registerPlugin(contextApiPocPlugin)
  .addPage({
    element: <ContextApiPocPage />,
    title: 'Root Page',
    path: '/context-api-poc'
  })
  .render();
