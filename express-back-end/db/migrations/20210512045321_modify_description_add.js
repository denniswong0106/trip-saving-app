
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.string("description", 2000).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("description");
    });
};
