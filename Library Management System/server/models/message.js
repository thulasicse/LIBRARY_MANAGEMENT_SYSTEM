const mongoose = require("mongoose");

const Messagemodel = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  currentdate: {
    type: String,
    required: true
  }
});

const messagemodel = mongoose.model("messages", Messagemodel);
module.exports = messagemodel;
