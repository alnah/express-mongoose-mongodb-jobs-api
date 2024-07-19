const mongoose = require("mongoose");
const { isEmail } = require("express-validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    minLength: 3,
    maxLength: 50,
    validate: [isEmail, "Please provide a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
    maxLength: 32,
  },
});

module.exports = mongoose.model("User", UserSchema);
