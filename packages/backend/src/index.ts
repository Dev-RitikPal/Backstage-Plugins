import 'global-agent/bootstrap';
import ProxyAgent from 'proxy-agent';
import http from 'http';
import https from 'https';
import kubernetes from './plugins/kubernetes';
import adr from './plugins/adr';
import kafka from './plugins/kafka';
import { ServerPermissionClient } from '@backstage/plugin-permission-node';
import Router from 'express-promise-router';
import {
  createServiceBuilder,
  loadBackendConfig,
  getRootLogger,
  useHotMemoize,
  notFoundHandler,
  CacheManager,
  DatabaseManager,
  SingleHostDiscovery,
  UrlReaders,
  ServerTokenManager,
} from '@backstage/backend-common';
import { Config } from '@backstage/config';
import app from './plugins/app';
import auth from './plugins/auth';
import catalog from './plugins/catalog';
import scaffolder from './plugins/scaffolder';
import proxy from './plugins/proxy';
import techdocs from './plugins/techdocs';
import toolkit from './plugins/toolkit';
import search from './plugins/search';
import uptl from './plugins/uptl';
import { PluginEnvironment } from './types';
import { TaskScheduler } from '@backstage/backend-tasks';
import glossary from './plugins/glossary';
import { DefaultIdentityClient } from '@backstage/plugin-auth-node';
import playlist from './plugins/playlist';
import announcements from './plugins/announcements';
import todo from './plugins/todo';
import onboardingPoc from './plugins/onboarding-poc';

import qeta from './plugins/qeta';

if (process.env.HTTP_PROXY) {
  http.globalAgent = new ProxyAgent(process.env.HTTP_PROXY);
}

if (process.env.HTTPS_PROXY) {
  https.globalAgent = new ProxyAgent(process.env.HTTPS_PROXY);
}
import createZipActionRouter from './plugins/zipAction';
import grpcPlayground from './plugins/grpc-playground';

function makeCreateEnv(config: Config) {
  const root = getRootLogger();
  const reader = UrlReaders.default({ logger: root, config });
  const discovery = SingleHostDiscovery.fromConfig(config);
  const cacheManager = CacheManager.fromConfig(config);
  const databaseManager = DatabaseManager.fromConfig(config, { logger: root });
  const tokenManager = ServerTokenManager.noop();
  const taskScheduler = TaskScheduler.fromConfig(config);
  const identity = DefaultIdentityClient.create({
    discovery,
  });
  const permissions = ServerPermissionClient.fromConfig(config, {
    discovery,
    tokenManager,
  });

  root.info(`Created UrlReader ${reader}`);

  return (plugin: string): PluginEnvironment => {
    const logger = root.child({ type: 'plugin', plugin });
    const database = databaseManager.forPlugin(plugin);
    const cache = cacheManager.forPlugin(plugin);
    const scheduler = taskScheduler.forPlugin(plugin);
    return {
      logger,
      database,
      cache,
      config,
      reader,
      discovery,
      tokenManager,
      scheduler,
      permissions,
      identity,
    };
  };
}

async function main() {
  const config = await loadBackendConfig({
    argv: process.argv,
    logger: getRootLogger(),
  });
  const createEnv = makeCreateEnv(config);
  const toolkitEnv = useHotMemoize(module, () => createEnv('toolkit'));
  const catalogEnv = useHotMemoize(module, () => createEnv('catalog'));
  const scaffolderEnv = useHotMemoize(module, () => createEnv('scaffolder'));
  const authEnv = useHotMemoize(module, () => createEnv('auth'));
  const proxyEnv = useHotMemoize(module, () => createEnv('proxy'));
  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));
  const searchEnv = useHotMemoize(module, () => createEnv('search'));
  const appEnv = useHotMemoize(module, () => createEnv('app'));
  const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));
  const kafkaEnv = useHotMemoize(module, () => createEnv('kafka'));
  const zipActionEnv = useHotMemoize(module, () => createEnv('zipAction'));
  const glossaryEnv = useHotMemoize(module, () => createEnv('glossary'));
  const playlistEnv = useHotMemoize(module, () => createEnv('playlist'));
  const grpcPlaygroundEnv = useHotMemoize(module, () => createEnv('grpc-playground'));
  const announcementsEnv = useHotMemoize(module, () => createEnv('announcements'));
  const uptlEnv = useHotMemoize(module, () => createEnv('uptl'));
  const todoEnv = useHotMemoize(module, () => createEnv('todo'));
  const onboaridngPocEnv = useHotMemoize(module, () => createEnv('onboardingPoc'));
  
  const adrEnv = useHotMemoize(module, () => createEnv('adr'));
  const qetaEnv = useHotMemoize(module, () => createEnv('qeta'));

  const apiRouter = Router();
  apiRouter.use('/catalog', await catalog(catalogEnv));
  apiRouter.use('/adr', await adr(adrEnv));
  apiRouter.use('/scaffolder', await scaffolder(scaffolderEnv));
  apiRouter.use('/auth', await auth(authEnv));
  apiRouter.use('/techdocs', await techdocs(techdocsEnv));
  apiRouter.use('/proxy', await proxy(proxyEnv));
  apiRouter.use('/search', await search(searchEnv));
  apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));
  apiRouter.use('/kafka', await kafka(kafkaEnv));
  apiRouter.use('/glossary', await glossary(glossaryEnv));
  apiRouter.use('/grpc-playground', await grpcPlayground(grpcPlaygroundEnv));
  apiRouter.use('/playlist', await playlist(playlistEnv));
  apiRouter.use('/announcements', await announcements(announcementsEnv));
  apiRouter.use('/toolkit', await toolkit(toolkitEnv))
  apiRouter.use('/uptl', await uptl(uptlEnv));
  apiRouter.use('/todo', await todo(todoEnv));
  apiRouter.use('/onboaridngPoc', await onboardingPoc(onboaridngPocEnv));
  apiRouter.use('/qeta', await qeta(qetaEnv));

  apiRouter.use(notFoundHandler());
  const service = createServiceBuilder(module)
    .loadConfig(config)
    .addRouter('/api', apiRouter)
    .addRouter('', await createZipActionRouter(zipActionEnv))
    .addRouter('', await app(appEnv));

  await service.start().catch(err => {
    console.log(err);
    process.exit(1);
  });
}

module.hot?.accept();
main().catch(error => {
  console.error('Backend failed to start up', error);
  process.exit(1);
});
