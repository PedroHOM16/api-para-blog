const jwt = require('jsonwebtoken');
require('dotenv').config();

const makeToken = (userValid) => {
  const payload = { data: userValid };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const findToken = (token) => {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

module.exports = {
  makeToken,
  findToken,
};
