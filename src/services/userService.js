const models = require('../database/models');
const { throwingError } = require('./middlewares');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userCreate = async (obj) => {
  const createdUser = await models.User.create(obj);
  return createdUser;
};

const findUser = async (email) => {
  const findedUser = await models.User.findOne({
    where: { email },
    raw: true,
  });
  if (!findedUser) return false;
  return true;
};

const findAll = async () => {
  const users = await models.User.findAll({
    attributes: { exclude: ['password'] },
  });
  const response = [];
  users.map((user) => response.push(user.dataValues));
  return response;
};

const findById = async (id) => {
  const data = await models.User.findByPk(id, {
    attributes: { exclude: ['password'] } });
    console.log('serviceLog: ', data);
  if (!data) {
    throwingError(404, 'User does not exist');
  }
  return data;
};

const fieldsValidation = async (obj) => {
  const { displayName, email, password } = obj;
  if (displayName.length < 8) {
    throwingError(400, '"displayName" length must be at least 8 characters long');
  }
  const emailCheck = emailRegex.test(email);
  if (!emailCheck) {
    throwingError(400, '"email" must be a valid email');
  }
  if (password.length < 6) {
    throwingError(400, '"password" length must be at least 6 characters long');
  }
  const userAlreadyExist = await findUser(email);
  if (userAlreadyExist) {
    throwingError(409, 'User already registered');
  }
  return obj;
};

module.exports = {
  userCreate,
  fieldsValidation,
  findAll,
  findById,
};
