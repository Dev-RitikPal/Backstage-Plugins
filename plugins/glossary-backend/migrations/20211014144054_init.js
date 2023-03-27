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

exports.up = async function up(knex) {
  await knex.schema.createTable('glossary', table => {
    table.comment('The table of Glossary Terms');
    table.text('entity_ref').notNullable().comment('The ref of the entity');
    table.text('term').notNullable().comment('The Glossary term');
    table.text('definition').notNullable().comment('Definition of the term');
    table.text('created_by').notNullable().comment('User ID');
    table.text('isActive').notNullable().comment('Glossary active status');
    table.text('isApproved').notNullable().comment('Glossary approved status');
    table
      .text('updated_at')
      .notNullable()
      .comment('Timestamp on ISO 8601 format when entity was last updated');
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('glossary');
};
