// packages/backend/src/plugins/grpc-playground.ts
import { ScmIntegrations } from '@backstage/integration';
import { createRouter } from 'backstage-grpc-playground-backend';

import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const { config, reader } = env;

  const integrations = ScmIntegrations.fromConfig(config);

  return await createRouter({
    logger: env.logger,
    // @ts-ignore
    reader,
    // @ts-ignore
    integrations,
  });
}
