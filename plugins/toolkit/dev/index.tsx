import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { toolkitPlugin, ToolkitPage } from '../src/plugin';

createDevApp()
  .registerPlugin(toolkitPlugin)
  .addPage({
    element: <ToolkitPage />,
    title: 'Root Page',
    path: '/toolkit'
  })
  .render();
