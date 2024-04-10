import { createApiRef } from '@backstage/core-plugin-api';
import { ProviderInterface } from './ProviderInterface';

export const GithubApiRef = createApiRef<GithubApi>({
  id: 'github.api',
});

export interface GithubApi extends ProviderInterface {}
