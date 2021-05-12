exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("group_trip")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("group_trip").insert([
        { name: "Iceland 2022!!!" },
        { name: "Fireland 2023!!!" },
        { name: "Earthland 2024!!!" },
      ]);
    });
};
