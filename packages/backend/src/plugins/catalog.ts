import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { GitLabDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-gitlab';
import { OpenApiRefProcessor } from '@backstage/plugin-catalog-backend-module-openapi';
// import { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);

  // Default Polling Time is set to 2 minutes (120 seconds) - passing 80 as seconds given interval is 1.5 times the polling time
  builder.setProcessingIntervalSeconds(80);
  // builder.addEntityProvider(
  //   ...GitlabDiscoveryEntityProvider.fromConfig(env.config, {
  //     logger: env.logger,
  //     schedule: env.scheduler.createScheduledTaskRunner({
  //       frequency: { minutes: 30 },
  //       timeout: { minutes: 3 },
  //     }),
  //   }),
  // );

  builder.addProcessor(
    GitLabDiscoveryProcessor.fromConfig(env.config, { logger: env.logger, skipReposWithoutExactFileMatch: true }),
    OpenApiRefProcessor.fromConfig(env.config, {
      logger: env.logger,
      reader: env.reader,
      }
    )
  );
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
