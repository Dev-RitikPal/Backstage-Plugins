import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { glossaryPlugin, EntityGlossaryContent } from '../src/plugin';

createDevApp()
  .registerPlugin(glossaryPlugin)
  .addPage({
    element: <EntityGlossaryContent />,
    title: 'Root Page',
    path: '/glossary'
  })
  .render();
