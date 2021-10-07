const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LikeSchema = new Schema({
  temp_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tlike: {
    type: Number,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Like = mongoose.model("likes", LikeSchema);