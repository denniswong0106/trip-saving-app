const express = require('express');
const router  = express.Router();
const knex    = require("../db/knex.js");

// GET /api/groups
router.get("/", (req, res) => {
  
  knex("group_trip")
    .then((result) => {
      console.log("SELECT * FROM group_trip: ", result);
      return res.json(result);
    });

});

// GET /api/groups/:id
router.get("/:id", (req, res) => {

  knex("group_trip").where({ id: req.params.id })
    .then((result) => {
      console.log("SELECT * FROM group_trip WHERE id= 'req.params.id'", result);
      return res.json(result);
    });

});

module.exports = router;