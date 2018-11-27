const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.createOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;
    console.log("Condition", condition);

    burger.updateOne()
})