exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments().primary();
      table.string("name", 255).notNullable();
      table.string("email", 255).notNullable();
      table.string("bank_account");
      table.boolean("daily_prize").notNullable().defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("group_trip", function (table) {
      table.increments().primary();
      table.string("name", 255).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("trip_savings", function (table) {
      table.increments().primary();
      table.integer("savings").notNullable();
      table.integer("daily_drip").notNullable();
      table.integer("cost").notNullable();
      table.string("location", 255).notNullable();
      table.string("description", 255).notNullable();
      table.string("stretch_goal", 255).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("group_id")
        .references("id")
        .inTable("group_trip")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("group_trip")
    .dropTable("trip_savings");
};
