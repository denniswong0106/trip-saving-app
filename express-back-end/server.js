const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const knex = require("./db/knex.js");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
// App.get("/api/users", (req, res) =>
//   res.json({
//     1: {
//       id: 1,
//       name: "Rex Raptor",
//       bank_account: 1000,
//       daily_prize: false,
//       avatar: "https://i.imgur.com/LpaY82x.png",
//     },
//     2: {
//       id: 2,
//       name: "Egg Eggerson",
//       bank_account: 1500,
//       daily_prize: true,
//       avatar: "https://i.imgur.com/Nmx0Qxo.png",
//     },
//     3: {
//       id: 3,
//       name: "Weavile Underwood",
//       bank_account: 1005,
//       daily_prize: false,
//       avatar: "https://i.imgur.com/FK8V841.jpg",
//     },
// "4": {id: 4, name: "Megan Mann", bank_account: 1305, daily_prize: true, avatar: "https://i.imgur.com/TdOAdde.jpg"},
// "5": {id: 5, name: "Nima Toed", bank_account: 1005, daily_prize: false, avatar: "https://i.imgur.com/nPywAp1.jpg"}
//   })
// );

<<<<<<< HEAD
App.get('/api/trips', (req, res) => res.json([
  {id: 1, savings: 100, daily_drip: 1, trip_name: "Ice Land Adventures", cost: 1495, location: "Ice Land", description: "It's cold", user_id: 1, group_id: 1},
  {id: 2, savings: 1000, daily_drip: 10, trip_name: "Ice Land Adventures", cost: 1495, location: "Ice Land", description: "It's cold", user_id: 2, group_id: 1},
  {id: 3, savings: 500, daily_drip: 4, trip_name: "Ice Land Adventures", cost: 1495, location: "Ice Land", description: "It's cold", user_id: 3, group_id: 1},
  {id: 4, savings: 350, daily_drip: 2, trip_name: "Ice Land Adventures", cost: 1495, location: "Ice Land", description: "It's cold", user_id: 4, group_id: 1},
  {id: 5, savings: 100, daily_drip: 1, trip_name: "Ice Land Adventures", cost: 1495, location: "Ice Land", description: "It's cold", user_id: 5, group_id: 1}
]));
=======
// Sample GET route
App.get("/api/user", (req, res) => {
  knex("users").then((res) => {
    console.log("res", res);
  });
});

App.get("/api/users", (req, res) =>
  res.json([
    {
      id: 1,
      name: "Rex Raptor",
      bank_account: 1000,
      daily_prize: false,
      avatar: "https://i.imgur.com/LpaY82x.png",
    },
    {
      id: 2,
      name: "Egg Eggerson",
      bank_account: 1500,
      daily_prize: true,
      avatar: "https://i.imgur.com/Nmx0Qxo.png",
    },
    {
      id: 3,
      name: "Weavile Underwood",
      bank_account: 1005,
      daily_prize: false,
      avatar: "https://i.imgur.com/FK8V841.jpg",
    },
    // {
    //   id: 4,
    //   name: "Megan Mann",
    //   bank_account: 1305,
    //   daily_prize: true,
    //   avatar: "https://i.imgur.com/TdOAdde.jpg",
    // },
    // {
    //   id: 5,
    //   name: "Nima Toed",
    //   bank_account: 1005,
    //   daily_prize: false,
    //   avatar: "https://i.imgur.com/nPywAp1.jpg",
    // },
  ])
);
>>>>>>> 569e2f4256df7500d3b890c48f343e3dc8bcc01d

App.get("/api/trips", (req, res) =>
  res.json([
    {
      id: 1,
      savings: 100,
      daily_drip: 1,
      trip_name: "Ice Land Adventures",
      cost: 1400,
      location: "Ice Land",
      description: "It's cold",
      daily_prize: true,
      user_id: 1,
      group_id: 1,
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
      user_id: 2,
      group_id: 1,
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
      user_id: 3,
      group_id: 1,
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
      user_id: 1,
      group_id: 2,
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
      user_id: 1,
      group_id: 3,
    },
  ])
);

App.get("/api/groups", (req, res) =>
  res.json([
    { id: 1, name: "Ice Land 2077" },
    { id: 2, name: "Ice Land 2077" },
    { id: 3, name: "Ice Land 2077" },
  ])
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
