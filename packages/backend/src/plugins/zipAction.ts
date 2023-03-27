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

import { errorHandler } from '@backstage/backend-common';

import { Config } from '@backstage/config';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { PluginEnvironment } from '../types';
import fs from 'fs-extra';
const path = require('path');
const archiver = require('archiver');

export interface NextRouterOptions {
  logger: Logger;
  config: Config;
}

export async function createZipActionRouter({
  logger,
  config,
}: PluginEnvironment) {
  const router = Router();
  router.use(express.json());

  const readonlyEnabled =
    config.getOptionalBoolean('catalog.readonly') || false;
  if (readonlyEnabled) {
    logger.info('Catalog is running in readonly mode');
  }

  router.get('/zipAction', async (req, res) => {
    const archive = archiver('zip');

    archive.on('error', function (err: { message: any }) {
      res.status(500).send({ error: err.message });
    });

    //on stream closed we can end the request
    archive.on('end', function () {
      console.log('Archive wrote %d bytes', archive.pointer());
    });

    archive.pipe(res);
    if (!req.query?.taskId) {
      return res.status(400).send({ message: 'taskId is required!' });
    }
    if (!fs.existsSync(path.join('achieves', req.query?.taskId))) {
      return res.status(400).send({ message: 'No such archieve exist!' });
    }
    //set the archive name
    res.attachment(`${String(req.query?.taskId)}.zip`);
    //this is the streaming magic
    let directories = [__dirname + '/achieves', './achieves'];
    for (let i in directories) {
      archive.directory(directories[i], false);
    }

    await archive.finalize();
    return;
  });
  router.use(errorHandler());
  return router;
}

export default createZipActionRouter;
