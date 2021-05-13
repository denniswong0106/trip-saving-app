exports.up = function (knex) {
  return knex.schema.alterTable("trip_savings", (table) => {
    table.dropForeign("user_id");
    table.dropForeign("group_id");

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      // .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .foreign("group_id")
      .references("id")
      .inTable("group_trip")
      // .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("trip_savings", (table) => {
    table.dropForeign("user_id");
    table.dropForeign("group_id");

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      // .onUpdate("NO ACTION")
      .onDelete("NO ACTION");

    table
      .foreign("group_id")
      .references("id")
      .inTable("group_trip")
      // .onUpdate("NO ACTION")
      .onDelete("NO ACTION");
  });
};
