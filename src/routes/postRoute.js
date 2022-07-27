const { Router } = require('express');
const postController = require('../controllers/postController');
const { tokenCheck } = require('../database/middlewares/tokenCheck');
require('express-async-errors');

const post = Router();
post.use(tokenCheck);
post.post('/', postController.addPost);
post.get('/', postController.listAll);

module.exports = post;