const { Router } = require('express');
const userController = require('../controllers/userController');
const { tokenCheck } = require('../database/middlewares/tokenCheck');
require('express-async-errors');

const user = Router();

user.post('/', userController.addUser);

// user.use(tokenCheck);

user.get('/', tokenCheck, userController.listAll);

module.exports = user;