const express = require("express");
const router = express.Router();
const knex = require("../db/knex.js");

// GET /api/users
router.get("/", (req, res) => {
  console.log("get users");
  knex("users").then((result) => {
    console.log("SELECT * FROM users: ", result);
    return res.json(result);
  });
});

// GET /api/users/:id
router.get("/:id", (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .then((result) => {
      console.log("SELECT * FROM users WHERE id= 'req.params.id'", result);
      return res.json(result);
    });
});

module.exports = router;
