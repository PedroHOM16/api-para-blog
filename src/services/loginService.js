// const Joi = require('joi');
const models = require('../database/models');
const { throwingError } = require('./middlewares');

const validateEmail = async (email) => {
  // const { email } = obj;
  const userValid = await models.User.findOne({
    where: { email },
    raw: true,
  });
  // const { password: pass, ...infos } = userValid;
  return userValid;
};

const validateLogin = async (objReq) => {
  // const schema = Joi.object({
  //   email: Joi.string().required().email(),
  //   password: Joi.string().min(6).required(),
  // });
  // const response = schema.validate(objResponse);
  const { email, password } = objReq;
  if (!email || !password) { throwingError(400, 'Some required fields are missing'); }
  const userValid = await validateEmail(email);
  if (!userValid || userValid.password !== objReq.password) {
    throwingError(400, 'Invalid fields');
  }
  return userValid;
};

module.exports = {
  validateLogin,
  validateEmail,
};
