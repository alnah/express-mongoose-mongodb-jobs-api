require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const register = async (req, res, next) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  res.status(StatusCodes.CREATED).json({ user: { name: user.name, token } });
};

const login = async (req, res, next) => {
  res.json({ postman: "login" });
};

module.exports = { register, login };
