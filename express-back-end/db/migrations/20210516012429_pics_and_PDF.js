
exports.up = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.string("pic").notNullable();
        table.string("PDF").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable("trip_savings", (table) => {
        table.dropColumn("pic");
        table.dropColumn("PDF");
    });
};
