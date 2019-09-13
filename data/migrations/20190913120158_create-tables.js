exports.up = function(knex) {
  return (
    knex.schema
      //! PROJECTS
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name").notNullable();
        tbl.string("project_description").nullable();
        tbl
          .boolean("project_completion")
          .notNullable()
          .defaultTo(false);
      })
      //! RESOURCES
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("resource_name")
          .notNullable()
          .unique();
        tbl.string("resource_description").nullable();
      })
      //! TASKS
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.string("task_description").notNullable();
        tbl.string("task_notes").nullable();
        tbl
          .boolean("task_completion")
          .notNullable()
          .defaultTo(false);
      })
      //! PROJECT_RESOURCES
      .createTable("project_resources", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.primary(["project_id", "resource_id"]);
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
