const express = require("express");
const router = express.Router();
const knex = require("../db/knex.js");

// clear database function
router.get("/deletealldata", (req, res) => {
  console.log("clearing database");

  Promise.all([
    knex("users").del(),
    knex("trip_savings").del(),
    knex("group_trip").del(),
  ]).then((all) => {
    console.log("Database data cleared!");
    return res.json("database cleared");
  });
});

module.exports = router;
