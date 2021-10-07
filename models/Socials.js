const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SocialsSchema = new Schema({
  customer: {
    type: String,
    required: true
  },
  smmspec: {
    type: String,
    required: true
  },
  soc1: {
    type: String,
    required: false
  },
  soc2: {
    type: String,
    required: false
  },
  soc3: {
    type: String,
    required: false
  }
});
module.exports = Socials = mongoose.model("socials", SocialsSchema);