// remove columns 'email' and 'daily_prize' from users table

exports.up = function (knex) {
  return knex.schema.table("users", function (t) {
    t.dropColumn("email");
    t.dropColumn("daily_prize");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (t) {
    t.string("email", 255).notNull();
    t.boolean("daily_prize").notNull().defaultTo(false);
  });
};

// id: 1,
// name: "Rex Raptor",
// bank_account: 1000,
// daily_prize: false,
// avatar: "https://i.imgur.com/LpaY82x.png",
