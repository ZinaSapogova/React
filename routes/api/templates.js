const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const passport = require("passport");

// Load input validation

const validateCreateInput = require("../../validation/create");

const Template = require("../../models/Template");
const Check = require("../../models/Check");
const { updateOne } = require("../../models/Template");

// @route POST api/templates/create
// @desc Register user
// @access Public
router.post("/create", (req, res) => {

    const { errors, isValid } = validateCreateInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Template.findOne({ tname: req.body.tname }).then(template => {
        if (template) {
          return res.status(400).json({ tname: "This template's name is already exists" });
        } else {
          const newTemplate = new Template({
            tname: req.body.tname,
            tblog: req.body.tblog,
            tauthor: req.body.tauthor,
            tanchor: req.body.tanchor,
            ttext: req.body.ttext,
            timage: req.body.timage,
            tinfo: req.body.tinfo
          });
          newTemplate.save(function(err) {
            if (err) throw err;
            return res.json(newTemplate);
          });
        }
    });
});


router.post("/templates", (req, res) => {

    Template.find({}).then(templates => {
          res.json(templates);
    });

});

router.post("/templates/search", (req, res) => {
    switch(req.body.search) {
        case "blog": 
            Template.
                find({tblog: req.body.tblog}).
                then(templates => {
                    res.json(templates);
                });
        break;
        case "name": 
        Template.
            find({tname: req.body.tname}).
            then(templates => {
                res.json(templates);
            });
        break;
    }
});

router.post("/templates/sort", (req, res) => {
    switch(req.body.sort) {
        case "check": 
            Template.
                find({}).
                sort('-tcheck').
                then(templates => {
                    res.json(templates);
                });
        break;
        case "likes": 
        Template.
            find({}).
            sort('-tlikes').
            then(templates => {
                res.json(templates);
            });
        break;
        case "blogasc": 
        Template.
            find({}).
            sort({tblog: 'ascending'}).
            then(templates => {
                res.json(templates);
            });
        break;
        case "nameAsc": 
            Template.
                find({}).
                sort({ tname: 'ascending' }).
                then(templates => {
                    res.json(templates);
                });
        break;
        case "nameDesc": 
        Template.
            find({}).
            sort({ tname: 'descending' }).
            then(templates => {
                res.json(templates);
            });
        break;
    }
});

router.post("/templates/temp/check", (req, res) => {
    Template.findOneAndUpdate({tname: req.body.tname}, {$inc:{ tcheck:  + 1 , "metrics.orders" :  1}}).then(template => {
          return res.json(template);
    });
});

router.post("/templates/temp/delete", (req, res) => {
    Template.findOneAndDelete({tname: req.body.tname}).then((template, error) => {
        if (error) {
          console.log(error);
        } else {
          return res.json(template);
        }
    });
    Check.deleteMany({temp_name: req.body.tname}).then((template, error) => {
        if (error) {
          console.log(error);
        } else {
          return res.json(template);
        }
    });
});

router.post("/templates/temp/like", (req, res) => {
    Template.findOneAndUpdate({tname: req.body.tname}, {$inc:{ tlikes:  + 1 , "metrics.orders" :  1}}).then(template => {
        console.log(template);
        return res.json(template);
  });
});

router.post("/templates/temp/upd", (req, res) => {
    Template.findOneAndUpdate({tname: req.body.tname}, { $set: {tinfo: req.body.tinfo, tblog: req.body.tblog, 
                                                        tsocial: req.body.tsocial, timage: req.body.timage, 
                                                        ttext: req.body.ttext, 
                                                        upddate: req.body.upddate}}, {new: true} ).then(template => {

                return res.json(template);
  });
});

router.post("/drafts", (req, res) => {

    Template.find({tauthor: req.body.tauthor}).then(templates => {
        //   console.log(templates);
          res.json(templates);
    });

});

router.post("/getonetest", (req, res) => {

    Template.findOne({tname: req.body.tname}).then(templates => {
          res.json(templates);
    });

});

module.exports = router;
