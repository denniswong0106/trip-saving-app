//$$$ the money update: creates tables as numeric $$$
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.numeric("daily_drip").notNullable();
        table.numeric("savings").notNullable();
        table.numeric("cost").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("daily_drip");
        table.dropColumn("savings");
        table.dropColumn("cost");
    });
};
