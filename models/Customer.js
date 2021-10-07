const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  custname: {
    type: String,
    required: true
  },
  smmspec: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false,
    default: "Male"
  },
  photo: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: false
  }
});
module.exports = Customer = mongoose.model("customers", CustomerSchema);