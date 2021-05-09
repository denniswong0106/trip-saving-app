exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("group_trip")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("group_trip").insert([
        { id: 1, name: "Iceland 2022!!!" },
        { id: 2, name: "Fireland 2023!!!" },
        { id: 3, name: "Earthland 2024!!!" },
      ]);
    });
};
