import { authUtilityApiRef } from '../apis';
import { SignInProviderConfig } from '@backstage/core-components';
import {
  gitlabAuthApiRef,
  microsoftAuthApiRef,
  githubAuthApiRef,
} from '@backstage/core-plugin-api';
import { isFeatureAvailable } from './../hooks/featureCheck/isFeatureAvailable';

export const getProviders = () => {
  const arr = [oidcProvider, azureDevOpsProvider, githubProvider];
  if (isFeatureAvailable('featureFlags.gitLabLogin')) {
    arr.push(gitlabProvider);
  }
  return arr;
};

const gitlabProvider: SignInProviderConfig = {
  id: 'gitlab-auth-provider',
  title: 'GitLab',
  message: 'Sign in using Corporate GitLab Account',
  apiRef: gitlabAuthApiRef,
};

const githubProvider: SignInProviderConfig = {
  id: 'github-auth-provider',
  title: 'GitHub',
  message: 'Sign in using your Corporate GitHub Account',
  apiRef: githubAuthApiRef,
};

const oidcProvider: SignInProviderConfig = {
  id: 'oidc',
  title: 'Ping Identity SSO',
  message:
    'The Enterprise AD group allows you to sign in with your Single Sign-On Account with Ping Federation.',
  apiRef: authUtilityApiRef,
};

const azureDevOpsProvider: SignInProviderConfig = {
  id: 'microsoft-auth-provider',
  title: 'Microsoft Azure AAD',
  message: "Use your StatusNeo's Microsoft Account to log onto RearPortal",
  apiRef: microsoftAuthApiRef,
};
