const jwt = require('jsonwebtoken');
// const Joi = require('joi');
const models = require('../database/models');
require('dotenv').config();

const validateEmail = async (email) => {
  // const { email } = obj;
  const userValid = await models.User.findOne({
    where: { email },
    raw: true,
  });
  // const { password: pass, ...infos } = userValid;
  console.log('servicelogin2 ', userValid);
  return userValid;
};

const makeToken = (userValid) => {
  const payload = { data: userValid };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const validateLogin = async (objReq) => {
  // const schema = Joi.object({
  //   email: Joi.string().required().email(),
  //   password: Joi.string().min(6).required(),
  // });
  // const response = schema.validate(objResponse);
  const { email, password } = objReq;
  if (!email || !password) {
    const error = new Error();
    error.status = 400;
    error.warning = 'Some required fields are missing';
    throw error;
  }
  const userValid = await validateEmail(email);
  if (!userValid || userValid.password !== objReq.password) {
    const error = new Error();
    error.status = 400;
    error.warning = 'Invalid fields';
    throw error;
  }
  console.log('servicelogin ', userValid);
  return userValid;
};

const findToken = (token) => {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

module.exports = {
  makeToken,
  findToken,
  validateLogin,
  validateEmail,
};
