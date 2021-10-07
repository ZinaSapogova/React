const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CheckSchema = new Schema({
//   temp_check: {
//     type: Schema.Types.ObjectId,
//     ref: "Template"
//   },
  temp_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tcheck: {
    type: Number,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Check = mongoose.model("checks", CheckSchema);