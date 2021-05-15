const express = require("express");
const router = express.Router();
const knex = require("../db/knex.js");

// GET /api/groups
router.get("/", (req, res) => {
  knex("group_trip").then((result) => {
    console.log("SELECT * FROM group_trip: ", result);
    return res.json(result);
  });
});

// GET /api/groups/:id
router.get("/:id", (req, res) => {
  knex("group_trip")
    .where({ id: req.params.id })
    .then((result) => {
      console.log("SELECT * FROM group_trip WHERE id= 'req.params.id'", result);
      return res.json(result);
    });
});

// PUT /api/groups
router.put("/", (req, res) => {
  console.log("PUT new group created", req.body);
  knex("group_trip")
    .insert(req.body)
    .returning("*")
    .then((result) => {
      console.log("response from PUT new group", result);
      return res.json(result);
    });
  return res.data;
});

module.exports = router;
