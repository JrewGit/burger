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

router.post("/", function (req, res) {
    burger.createOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    })
});

router.put("/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;
    console.log("Condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }),
    condition,
    function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();

    }
})

module.exports = router;