const { Router } = require('express');
const userController = require('../controllers/userController');
const { tokenCheck } = require('../database/middlewares/tokenCheck');
require('express-async-errors');

const user = Router();

user.post('/', userController.addUser);

// user.use(tokenCheck);

user.get('/', tokenCheck, userController.listAll);
user.get('/:id', tokenCheck, userController.listById);

module.exports = user;