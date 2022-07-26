const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { tokenCheck } = require('../database/middlewares/tokenCheck');
require('express-async-errors');

const category = Router();

category.get('/', tokenCheck, categoryController.listAll);
category.post('/', tokenCheck, categoryController.addCategory);

// user.get('/', tokenCheck, userController.listAll);
// user.get('/:id', tokenCheck, userController.listById);

module.exports = category;