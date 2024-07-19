const register = async (req, res, next) => {
  res.json({ postman: "register" });
};

const login = async (req, res, next) => {
  res.json({ postman: "login" });
};

module.exports = { register, login };
