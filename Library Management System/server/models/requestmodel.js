const mongoose = require("mongoose");

const Requestmodel = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  bookname: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  currentdate: {
    type: String,
    required: true
  }
});

const requestmodel = mongoose.model("bookrequests", Requestmodel);
module.exports = requestmodel;
