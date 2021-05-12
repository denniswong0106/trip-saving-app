
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.numeric("daily_drip").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("daily_drip");
    });
};
