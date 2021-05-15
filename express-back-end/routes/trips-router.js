const express = require("express");
const router = express.Router();
const knex = require("../db/knex.js");

// GET /api/trips
router.get("/", (req, res) => {
  knex("trip_savings").then((result) => {
    console.log("SELECT * FROM trip_savings: ", result);
    return res.json(result);
  });
});

// GET /api/trips/:id
router.get("/:id", (req, res) => {
  knex("trip_savings")
    .where({ id: req.params.id })
    .then((result) => {
      console.log(
        "SELECT * FROM trip_savings WHERE id='req.params.id'",
        result
      );
      return res.json(result);
    });
});

// PUT /api/trips
router.put("/", (req, res) => {
  console.log("from the back: ", req.body);
  knex("trip_savings")
    .insert(req.body)
    .returning("*")
    .then((result) => {
      console.log("this was inserted --> SELECT * FROM trip_savings: ", result);
      return res.json(result);
    });
  return res.data;
});

// PATCH /api/trips/groupid
router.post("/groupid", (req, res) => {
  console.log("Calling update to groupid in trip_savings...", req.body);
  knex("trip_savings")
    .where("id", "=", req.body.id)
    .update({ group_id: req.body.group_id })
    .returning("*")
    .then((result) => {
      console.log("Successful Update", result);
      return res.json(result);
    });
  return res.data;
});
// PUT /api/trips
router.post("/", (req, res) => {
  console.log(
    "Calling update to savings and daily prize in trip_savings...",
    req.body
  );
  knex("trip_savings")
    .where("id", "=", req.body.id)
    .update({ savings: req.body.savings, daily_prize: req.body.daily_prize })
    .returning("*")
    .then((result) => {
      console.log("Successful Update", result);
      return res.json(result);
    });
  return res.data;
});

module.exports = router;
