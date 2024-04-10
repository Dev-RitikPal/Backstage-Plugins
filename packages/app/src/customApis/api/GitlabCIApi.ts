import { createApiRef } from '@backstage/core-plugin-api';
import { ProviderInterface } from './ProviderInterface';

export const GitlabCIApiRef = createApiRef<GitlabCIApi>({
  id: 'gitlab.api',
});

export interface GitlabCIApi extends ProviderInterface {}
