/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { errorHandler, PluginDatabaseManager } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { DatabaseHandler } from './DatabaseHandler';

export interface RouterOptions {
  logger: Logger;
  database: PluginDatabaseManager;
  config: Config;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, database } = options;
  const db = await database.getClient();

  const dbHandler = await DatabaseHandler.create({ database: db });

  logger.info('Initializing Bazaar backend');

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.send({ status: 'ok' });
  });
  router.get('/all', async (_request, response) => {
    const list = await dbHandler.getGlossary();

    if (list?.length) {
      response.json({ status: 'ok', data: list });
    } else {
      response.json({ status: 'ok', data: [] });
    }
  });
  router.get('/:id', async (request, response) => {
    const list = await dbHandler.getGlossaryByRef(request.params.id);

    if (list?.length) {
      response.json({ status: 'ok', data: list });
    } else {
      response.json({ status: 'ok', data: [] });
    }
  });
  router.post('/filter', async (request, response) => {
    const list = await dbHandler.getGlossaryBySearchAndRef(
      request.body.text,
      request.body.entityRef,
    );

    if (list?.length) {
      response.json({ status: 'ok', data: list });
    } else {
      response.json({ status: 'ok', data: [] });
    }
  });
  router.get('/search/:text', async (request, response) => {
    const list = await dbHandler.getGlossaryBySearch(request.params.text);

    if (list?.length) {
      response.json({ status: 'ok', data: list });
    } else {
      response.json({ status: 'ok', data: [] });
    }
  });

  router.post('/add', async (request, response) => {
    const gloassary = {
      term: request.body.term,
      entityRef: request.body.entityRef,
      definition: request.body.definition,
      isActive: request.body.isActive,
      isApproved: request.body.isApproved,
      created_by: request.body.created_by,
    };

    await dbHandler.insertGlossary(gloassary);

    response.json({ status: 'ok' });
  });
  router.post('/update', async (request, response) => {
    const gloassary = {
      id: request.body.id,
      term: request.body.term,
      entityRef: request.body.entityRef,
      definition: request.body.definition,
      isActive: request.body.isActive,
      isApproved: request.body.isApproved,
      created_by: request.body.created_by,
    };

    await dbHandler.updateGlossary(gloassary);

    response.json({ status: 'ok' });
  });
  router.use(errorHandler());
  return router;
}
