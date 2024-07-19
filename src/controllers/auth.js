const { StatusCodes } = require("http-status-codes");

const User = require("../models/user");

const register = async (req, res, next) => {
  const user = await User.create({ ...req.body });
  const token = user.createJwt();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name, token } });
};

const login = async (req, res, next) => {
  res.json({ postman: "login" });
};

module.exports = { register, login };
