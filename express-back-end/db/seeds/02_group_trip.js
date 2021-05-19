exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("group_trip")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("group_trip").insert([
        { id: 1, name: "Iceland 2077 !!" },

      ]);
    });
};
