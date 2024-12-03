const mongoose = require("mongoose");

const useschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("users", useschema);
