const models = require('../database/models');
const { throwingError } = require('./middlewares');
// const { throwingError } = require('./middlewares');

const listAll = async () => {
  const data = await models.Category.findAll();
  const response = [];
  data.map((each) => response.push(each));
  return response;
};

const createCategory = async (name) => {
  if (!name) return throwingError(400, '"name" is required');
  const createdCategory = await models.Category.create({ name });
  console.log('service category: ', createdCategory.dataValues);
  return createdCategory.dataValues;
};

module.exports = {
  listAll,
  createCategory,
};
