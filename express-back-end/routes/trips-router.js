const express = require('express');
const router  = express.Router();
const knex    = require("../db/knex.js");

// GET /api/trips
router.get("/", (req, res) => {
  
  knex("trip_savings")
    .then((result) => {
      console.log("SELECT * FROM trip_savings: ", result);
      return res.json(result);
    });

});

// GET /api/trips/:id
router.get("/:id", (req, res) => {

  knex("trip_savings").where({ id: req.params.id })
    .then((result) => {
      console.log("SELECT * FROM trip_savings WHERE id='req.params.id'", result);
      return res.json(result);
    });

});

// PUT /api/trips
router.put("/", (req, res) => {
  console.log("from the back: ", req.body);
  // knex("trip_savings")
  //   .insert(req.body)
  //   .then((result) => {
  //     console.log("SELECT * FROM trip_savings: ", result);
  //     return res.json(result);
  //   });
  return res;
});

module.exports = router;