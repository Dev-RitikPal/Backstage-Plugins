/*
 * Copyright 2021 The Backstage Authors
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

import { resolvePackagePath } from '@backstage/backend-common';
import { Knex } from 'knex';

const migrationsDir = resolvePackagePath(
  '@internal/plugin-glossary-backend',
  'migrations',
);

type Options = {
  database: Knex;
};

export class DatabaseHandler {
  static async create(options: Options): Promise<DatabaseHandler> {
    const { database } = options;

    await database.migrate.latest({
      directory: migrationsDir,
    });

    return new DatabaseHandler(options);
  }

  private readonly database: Knex;

  private constructor(options: Options) {
    this.database = options.database;
  }

  // private columns = [
  //   'glossary.id',
  //   'glossary.entity_ref',
  //   'glossary.term',
  //   'glossary.definition',
  //   'glossary.isActive',
  //   'glossary.isApproved',
  //   'glossary.updated_at',
  // ];

  async getGlossary() {
    return await this.database('glossary_items')
      .select('*')
      .where({ 'glossary_items.isActive': '1' });
  }

  async getGlossaryByRef(entityRef: string) {
    return await this.database('glossary_items').select('*').where({
      'glossary_items.entity_ref': entityRef,
      'glossary_items.isActive': '1',
    });
  }

  async getGlossaryBySearch(searchText: string) {
    return await this.database('glossary_items')
      .select('*')
      .whereRaw('LOWER(glossary_items.term) LIKE ?', searchText.toLowerCase())
      // .where('glossary_items.term', 'like', `%${searchText[0]}%`)
      .where({ 'glossary_items.isActive': '1' });
  }
  async getGlossaryBySearchAndRef(searchText: string, entityRef: string) {
    return await this.database('glossary_items')
      .select('*')
      .whereRaw('LOWER(glossary_items.term) LIKE ?', searchText.toLowerCase())
      .modify(queryBuilder => {
        if (entityRef) {
          queryBuilder.where('glossary_items.entity_ref', entityRef);
        }
      })
      .where({
        'glossary_items.isActive': '1',
      });
  }
  async insertGlossary(glossary: any) {
    const { entityRef, term, definition, isActive, isApproved, created_by } =
      glossary;

    await this.database
      .insert({
        entity_ref: entityRef,
        term,
        definition,
        created_by,
        isActive,
        isApproved,
        updated_at: new Date().toISOString(),
      })
      .into('glossary_items');
  }

  async updateGlossary(glossary: any) {
    const {
      id,
      entityRef,
      term,
      definition,
      isActive,
      isApproved,
      created_by,
    } = glossary;

    return await this.database('glossary_items').where({ id: id }).update({
      entity_ref: entityRef,
      term,
      definition,
      isActive,
      isApproved,
      updated_at: new Date().toISOString(),
      created_by,
    });
  }
}
