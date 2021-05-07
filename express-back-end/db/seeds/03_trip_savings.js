exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trip_savings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trip_savings").insert([
        {
          id: 1,
          savings: 550,
          daily_drip: 2,
          cost: 1000,
          description: "very nice place",
          location: "Iceland",
          stretch_goal: 500,
          user_id: 1,
          group_id: 1,
        },
      ]);
    });
};
