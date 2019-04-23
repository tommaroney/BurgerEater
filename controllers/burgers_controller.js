const express = require("express");
const burgerSQL = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => 
    burgerSQL.getAllBurgers((results) => res.render("index", {burgers: results})));

router.patch("/", (req, res) => {
    burgerSQL.changeBurger(req.body, (result) => res.send(result));
});

router.post("/", (req, res) => {
    burgerSQL.addBurger(req.body, (result) => res.send(result));
});

module.exports = router;