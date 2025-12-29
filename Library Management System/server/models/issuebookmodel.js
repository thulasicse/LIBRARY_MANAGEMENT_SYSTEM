const mongoose = require("mongoose");

const Issuebookmodel = new mongoose.Schema({
  bookname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  currentdate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const issuebookmodel = mongoose.model("booksissued", Issuebookmodel);
module.exports = issuebookmodel;
