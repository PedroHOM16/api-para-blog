const jwt = require('jsonwebtoken');
const { throwingError } = require('./middlewares');
require('dotenv').config();

const makeToken = (userValid) => {
  const payload = { data: userValid };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const validToken = (token) => {
  if (!token) return throwingError(401, 'Token not found');
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (err) {
    throwingError(401, 'Expired or invalid token');      
  }
};

module.exports = {
  makeToken,
  validToken,
};
