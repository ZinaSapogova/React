const express = require("express");
const router = express.Router();

const Check = require("../../models/Check");

router.post("/templates/temp/check", (req, res) => {
    const newCheck = new Check({ temp_name: req.body.temp_name, email: req.body.email });
    newCheck.save();
});

router.post("/templates/checks", (req, res) => {
    Check.find({})
    .where('temp_name').equals(req.body.temp_name)
    .count().then(count => {
        const temp_checks = {
            count: count,
            tname: req.body.temp_name
        }
        res.json(temp_checks);
    })
});

module.exports = router;
