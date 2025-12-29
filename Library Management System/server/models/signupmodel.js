const mongoose = require("mongoose");

const Signupmodel = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rollnumber: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

const signupmodel = mongoose.model("students", Signupmodel);
module.exports = signupmodel;
