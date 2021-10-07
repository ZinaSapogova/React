const express = require("express");
const router = express.Router();

const Like = require("../../models/Like");

router.post("/templates/temp/like", (req, res) => {
    Like.findOne({ temp_name: req.body.temp_name }, { email: req.body.email}).then(template => {
        if (template) {
          return res.status(400).json({ temp_name: "Yours like is already exists" });
        } else {
            const newLike = new Like({ temp_name: req.body.temp_name, email: req.body.email });
            newLike.save(function(err) {
            if (err) throw err;
            return res.json(newLike);
          });
        }
    });
});

router.post("/templates/likes", (req, res) => {
    Like.find({})
    .where('temp_name').equals(req.body.temp_name)
    .count().then(count => {
        const temp_likes = {
            count: count,
            tname: req.body.temp_name
        }
        res.json(temp_likes);
    })
});

router.post("/templates/statistic/likes", (req, res) => {
    Like.find({}).
    where('-email').
    equals(req.body.tauthor).
    then(templates => {
        res.json(templates);
    });
});

module.exports = router;
