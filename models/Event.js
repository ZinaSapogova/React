const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  customer: {
    type: String,
    required: true
  },
  smmspec: {
    type: String,
    required: true
  },
  event_name: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Event = mongoose.model("events", EventSchema);