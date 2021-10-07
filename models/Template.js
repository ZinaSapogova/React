const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TemplateSchema = new Schema({
  tname: {
    type: String,
    required: true
  },
  tblog: {
    type: String,
    required: true
  },
  tauthor: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  upddate: {
    type: Date,
    default: Date.now
  },
  tcheck: {
    type: Number,
    default: 0
  },
  tlikes: {
    type: Number,
    default: 0
  },
  tanchor: {
    type: String,
    required: false
  },
  ttext: {
    type: String,
    required: false
  },
  timage: {
    type: String,
    required: false
  },
  tinfo: {
    type: String,
    required: false
  },
  treference: {
    type: String,
    required: false
  },
  treferenceDate: {
    type: Date,
    required: false
  }
});
module.exports = Template = mongoose.model("templates", TemplateSchema);