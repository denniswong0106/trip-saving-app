
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("daily_drip");
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.integer("daily_drip").notNullable();
    });
};
