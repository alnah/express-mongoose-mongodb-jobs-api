const { StatusCodes } = require("http-status-codes");

const User = require("../models/user");

const register = async (req, res, next) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res, next) => {
  res.json({ postman: "login" });
};

module.exports = { register, login };
