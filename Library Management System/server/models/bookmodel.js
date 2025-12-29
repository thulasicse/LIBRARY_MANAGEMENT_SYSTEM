const mongoose = require("mongoose");

const Bookmodel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  totalcopies: {
    type: String,
    required: true
  }
});

const bookmodel = mongoose.model("books", Bookmodel);
module.exports = bookmodel;
