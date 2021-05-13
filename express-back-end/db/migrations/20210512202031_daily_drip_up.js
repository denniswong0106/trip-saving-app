//$$$ the money update: creates tables as numeric $$$
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.decimal("daily_drip").notNullable();
        table.decimal("savings").notNullable();
        table.decimal("cost").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("daily_drip");
        table.dropColumn("savings");
        table.dropColumn("cost");
    });
};
