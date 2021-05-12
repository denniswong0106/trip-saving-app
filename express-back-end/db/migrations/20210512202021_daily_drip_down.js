
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("daily_drip");
        table.dropColumn("savings");
        table.dropColumn("cost");
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.integer("daily_drip").notNullable();
        table.integer("savings").notNullable();
        table.integer("cost").notNullable();
    });
};
