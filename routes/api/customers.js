const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const passport = require("passport");

const Customer = require("../../models/Customer");

router.post("/customers/createNew", (req, res) => {
    Customer.findOne({ custname: req.body.custname }, { smmspec: req.body.smmspec}).then(customer => {
        if (customer) {
          return res.status(400).json({ custname: "This customer is already exists" });
        } else {
            const newCust = new Customer({ custname: req.body.custname, smmspec: req.body.smmspec, name: req.body.name,
                                           surname: req.body.surname, email: req.body.email, gender: req.body.gender, photo: req.body.photo});
            newCust.save(function() {
            //if (err) throw err;
            return res.json(newCust);
          });
        }
    });
});

router.post("/customers/updCustomer", (req, res) => {
  Customer.findOneAndUpdate({custname: req.body.custname, smmspec: req.body.smmspec}, 
                            { $set: {name: req.body.name, surname: req.body.surname, 
                              email: req.body.email, photo: req.body.photo}}, {new: true} ).then(customer => {

  return res.json(customer);
});
});

router.post("/customers/delCustomer", (req, res) => {
  Customer.findOneAndDelete({custname: req.body.custname}).then((customer, error) => {
      if (error) {
        console.log(error);
      } else {
        return res.json(customer);
      }
  });
});

router.post("/customers", (req, res) => {

  Customer.find({smmspec: req.body.smmspec}).then(customers => {
    //   console.log(templates);
      res.json(customers);
  });

});

router.post("/customers/customer", (req, res) => {

  Customer.findOne({smmspec: req.body.smmspec, custname: req.body.custname}).then(customer => {
      res.json(customer);
  });

});

module.exports = router;
