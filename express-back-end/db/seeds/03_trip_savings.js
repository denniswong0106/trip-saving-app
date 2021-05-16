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
          trip_name: "Ice Land Adventures",
          cost: 1400,
          location: "Ice Land",
          description: "It's cold",
          daily_prize: true,
          booking_date: "2021-11-20",
          stretch_goal: 200,
          user_id: 1,
          group_id: 1,
          pic: "https://en.wikipedia.org/wiki/Borneo#/media/File:MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
        {
          id: 2,
          savings: 1000,
          daily_drip: 10,
          trip_name: "Ice Land Adventures",
          cost: 1400,
          location: "Ice Land",
          description: "It's cold",
          daily_prize: true,
          booking_date: "2021-11-20",
          stretch_goal: 500,
          user_id: 2,
          group_id: 1,
          pic: "https://en.wikipedia.org/wiki/Borneo#/media/File:MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
        {
          id: 3,
          savings: 500,
          daily_drip: 4,
          trip_name: "Ice Land Adventures",
          cost: 1400,
          location: "Ice Land",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          daily_prize: false,
          booking_date: "2021-11-20",
          stretch_goal: 0,
          user_id: 3,
          group_id: 1,
          pic: "https://en.wikipedia.org/wiki/Borneo#/media/File:MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
        {
          id: 4,
          savings: 100,
          daily_drip: 2,
          trip_name: "Fire Land Adventures",
          cost: 1800,
          location: "Fire Land",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          daily_prize: false,
          booking_date: "2023-01-01",
          stretch_goal: 500,
          user_id: 1,
          group_id: 2,
          pic: "https://en.wikipedia.org/wiki/Borneo#/media/File:MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
        {
          id: 5,
          savings: 200,
          daily_drip: 1,
          trip_name: "Earth Land Adventures",
          cost: 3400,
          location: "Earth Land",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          daily_prize: true,
          booking_date: "2024-07-28",
          stretch_goal: 500,
          user_id: 1,
          group_id: 3,
          pic: "https://en.wikipedia.org/wiki/Borneo#/media/File:MountKinabalu_from_CheSuiKhorPagodaKK-01.jpg",
          PDF: "https://en.wikipedia.org/wiki/PDF"
        },
      ]);
    });
};
