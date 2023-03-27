import { useApi, configApiRef } from '@backstage/core-plugin-api';

export const isFeatureAvailable = (config: string) => {
  const configApi = useApi(configApiRef);
  const flag = configApi.getOptionalBoolean(config) || false;
  return Boolean(flag);
};
