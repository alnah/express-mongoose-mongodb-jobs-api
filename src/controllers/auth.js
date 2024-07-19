const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");

const User = require("../models/user");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res, next) => {
  res.json({ postman: "login" });
};

module.exports = { register, login };
