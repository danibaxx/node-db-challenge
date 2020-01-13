
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id")
    table.string("name").notNullable()
    table.string("description", 128).notNullable()
    table.boolean("completed").defaultTo(false).notNullable()
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id")
    table.string("resource_name").unique()
    table.string("resource_description")
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
  });

  await knex.schema.createTable("task", (table) => {
    table.increments("id")
    table.string("task_description")
    table.string("notes")
    table.boolean("completed").defaultTo(false).notNullable()
  });

  await knex.schema.createTable("projects_tasks", (table) => {
    table.integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
    table.integer("task_id")
      .notNullable()
      .references("id")
      .inTable("task")
    table.primary(["project_id", "task_id"])
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_tasks")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
