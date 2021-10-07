const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NotesSchema = new Schema({
  customer: {
        type: String,
        required: true
  },
  smmspec: {
        type: String,
        required: true
  },
  note_name: {
    type: String,
    required: false
  },
  note_text: {
    type: String,
    required: true
  },
  upd_date: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Note = mongoose.model("notes", NotesSchema);