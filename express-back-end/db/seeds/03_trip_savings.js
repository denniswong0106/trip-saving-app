exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trip_savings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trip_savings").insert([
        {
          id: 1,
          savings: 100,
          daily_drip: 1,
          trip_name: "Iceland Adventures",
          cost: 1400,
          location: "Iceland",
          description: "It's really cold, but it could be really fun with lots of activities in and on the snow.",
          daily_prize: true,
          booking_date: "2021-11-20",
          stretch_goal: 200,
          user_id: 1,
          group_id: 1,
          pic: "https://alignthoughts.com/wp-content/uploads/2019/02/top-tourist-attractions-in-Iceland-Ice-Caves.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
        {
          id: 2,
          savings: 475,
          daily_drip: 5,
          trip_name: "Iceland Adventures",
          cost: 1400,
          location: "Iceland",
          description: "It's really cold, but it could be really fun with lots of activities in and on the snow.",
          daily_prize: false,
          booking_date: "2021-11-20",
          stretch_goal: 200,
          user_id: 5,
          group_id: 1,
          pic: "https://alignthoughts.com/wp-content/uploads/2019/02/top-tourist-attractions-in-Iceland-Ice-Caves.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        }
      ]);
    });
};
