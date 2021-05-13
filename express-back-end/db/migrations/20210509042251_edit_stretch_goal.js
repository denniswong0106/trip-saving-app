exports.up = function (knex) {
  return knex.schema.alterTable("trip_savings", (t) => {
    t.integer("stretch_goal", 255).notNullable().default(0).alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("trip_savings", (t) => {
    t.integer("stretch_goal", 255).notNullable().alter();
  });
};
