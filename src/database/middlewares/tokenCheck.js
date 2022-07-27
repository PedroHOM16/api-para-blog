const { validToken } = require('../../services/jwtService');

const tokenCheck = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const user = validToken(authorization);
    req.userId = user.id;
  } catch (err) {
    return res.status(err.status).json({ message: err.warning });
  }
  next();
};

module.exports = {
  tokenCheck,
};
