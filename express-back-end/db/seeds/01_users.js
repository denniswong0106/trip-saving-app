exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Rex Raptor",
          bank_account: 1000,
          avatar: "https://i.imgur.com/LpaY82x.png",
        },
        {
          id: 2,
          name: "Egg Eggerson",
          bank_account: 1500,
          avatar: "https://i.imgur.com/Nmx0Qxo.png",
        },
        {
          id: 3,
          name: "Weavile Underwood",
          bank_account: 1005,
          avatar: "https://i.imgur.com/FK8V841.jpg",
        },
        {
          id: 4,
          name: "Megan Mann",
          bank_account: 1305,
          avatar: "https://i.imgur.com/TdOAdde.jpg",
        },
        {
          id: 5,
          name: "Nima Toed",
          bank_account: 1005,
          avatar: "https://i.imgur.com/nPywAp1.jpg",
        },
      ]);
    });
};
