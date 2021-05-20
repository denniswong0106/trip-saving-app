exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Egg Eggerson",
          bank_account: 1000,
          avatar: "https://cdn.fakercloud.com/avatars/buryaknick_128.jpg",
        },
        {
          id: 2,
          name: "Rex Raptor",
          bank_account: 1500,
          avatar: "https://cdn.fakercloud.com/avatars/rehatkathuria_128.jpg",
        },
        {
          id: 3,
          name: "John Underwood",
          bank_account: 1005,
          avatar: "https://cdn.fakercloud.com/avatars/n_tassone_128.jpg",
        },
        {
          id: 4,
          name: "Nelly Cannoli",
          bank_account: 1305,
          avatar: "https://cdn.fakercloud.com/avatars/reetajayendra_128.jpg",
        },
        {
          id: 5,
          name: "Megan Mann",
          bank_account: 1005,
          avatar: "https://cdn.fakercloud.com/avatars/sunshinedgirl_128.jpg",
        },
      ]);
    });
};
