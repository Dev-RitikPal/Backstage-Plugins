/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('checklists', table => {
        table.string('group').index()
        table.string('title').notNullable()
        table.string('checklist_uid').primary().unique()
        table.string('formSchema',1000).notNullable()
        table.string('forRoles').notNullable()
        table.string('checklistHash').notNullable()
        table.string('groupHash').notNullable()
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    })

    await knex.schema.createTable('checklistResponse', table => {
            table.string('user').notNullable().index()
            table.string('checklist_uid').notNullable()
            table.foreign('checklist_uid').references('checklist_uid').inTable('checklists')
            table.string('userResponse')
            table.integer('progressStatus').notNullable()
            table.string('checklistHash').notNullable()
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {

};
