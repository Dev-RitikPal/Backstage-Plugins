import { buildAnnouncementsContext, createRouter } from '@k-phoen/backstage-plugin-announcements-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  database,
}: PluginEnvironment): Promise<Router> {
  const announcementsContext = await buildAnnouncementsContext({
    logger: logger,
    database: database
  });

  return await createRouter(announcementsContext);
}
