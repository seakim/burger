var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function (data) {
        var hasObject = {
            burgers: data
        }
        res.render("index", hasObject);
    })
});
router.get("/api/burgers", function(req, res) {

    burger.all(function (data) {
        var hasObject = {
            burgers: data
        }
        return res.json(hasObject);
    })
});

router.post("/api/burgers", function(req, res) {
    // console.log(req.body);
    burger.create(
        ["burger_name", "devoured"]
        , [req.body.burger_name, 0]
        , function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
    });
});

module.exports = router;
