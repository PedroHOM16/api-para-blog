// const Sequelize = require('sequelize');
// const config = require('../database/config/config');

// const sequelize = new Sequelize(config.development);

const models = require('../database/models');
const { decodeToken } = require('./jwtService');
const { throwingError } = require('./middlewares');

const getAll = async () => {
  const data = await models.BlogPost.findAll({
    include: [
      { model: models.Category, as: 'categories' },
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  console.log('listall : ', data);
  // const response = [];
  // data.map((each) => response.push(each));
  return data;
};

const organizePost = async ({ title, content, categoryIds, authorization }) => {
  const categories = await models.Category.findAll();
  const check = categories.some((category) => categoryIds.includes(category.dataValues.id));
  // const check = true;
  if (!check) return throwingError(400, '"categoryIds" not found');
  console.log('servicecategory2: ', decodeToken(authorization));
  const { id } = decodeToken(authorization).data;
  const newPost = {
    title, content, userId: id, updated: new Date(), published: new Date(),
  };
  return newPost;
};

const createPost = async ({ title, content, categoryIds, authorization }) => {
  // const t = sequelize.transaction();
  const newPost = await organizePost({ title, content, categoryIds, authorization });
  const data = await models.BlogPost.create(newPost);
  console.log('service category: ', categoryIds, data);
  categoryIds.map(async (category) => (
    models.PostCategory.bulkCreate({ postId: data.dataValues.id, categoryId: category })));

  return data;
};

module.exports = {
  getAll,
  createPost,
};