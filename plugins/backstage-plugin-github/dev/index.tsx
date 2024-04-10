import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstageGithubPlugin, GithubPullRequestsCard } from '../src/plugin';

createDevApp()
  .registerPlugin(backstageGithubPlugin)
  .addPage({
    element: <GithubPullRequestsCard />,
    title: 'Root Page',
    path: '/backstage-plugin-github'
  })
  .render();
