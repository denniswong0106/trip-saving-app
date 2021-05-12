// add date and daily_prize to trips table

exports.up = function (knex) {
  return knex.schema.table("trip_savings", function (t) {
    t.boolean("daily_prize").notNull().defaultTo(false);
    t.date("booking_date").notNull();
    t.string("trip_name").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.table("trip_savings", function (t) {
    t.dropColumn("daily_prize");
    t.dropColumn("booking_date");
    t.dropColumn("trip_name");
  });
};

// {
//   id: 1,
//   savings: 100,
//   daily_drip: 1,
//   trip_name: "Ice Land Adventures",
//   cost: 1400,
//   location: "Ice Land",
//   description: "It's cold",
//   booking_date:
//   daily_prize: true,
//   user_id: 1,
//   group_id: 1,
// }
