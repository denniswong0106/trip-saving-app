// add column 'avatar' to users table

exports.up = function (knex) {
  return knex.schema.table("users", function (t) {
    t.string("avatar")
      .notNull()
      .defaultTo(
        "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1732584341.jpg"
      );
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (t) {
    t.dropColumn("avatar");
  });
};

// id: 1,
// name: "Rex Raptor",
// bank_account: 1000,
// daily_prize: false,
// avatar: "https://i.imgur.com/LpaY82x.png",
