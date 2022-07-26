const { validToken } = require('../../services/jwtService');

const tokenCheck = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    validToken(authorization);
  } catch (err) {
    return res.status(err.status).json({ message: err.warning });
  }
  next();
};

module.exports = {
  tokenCheck,
};
