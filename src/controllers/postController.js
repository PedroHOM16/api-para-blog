const postService = require('../services/postService');
const { throwingError } = require('../services/middlewares');

const listAll = async (_req, res) => {
  try {
    const posts = await postService.getAll();
    console.log('controller category: ', posts);
    return res.status(200).json(posts);
  } catch (err) {
      return res.status(err.status).json({ message: err.warning });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
      throwingError(400, 'Some required fields are missing');
    }
    const { authorization } = req.headers;
    const data = await postService.createPost({ ...req.body, authorization });
    return res.status(201).json(data);
  } catch (err) {
    console.log('error: ', err.warning);
    return res.status(err.status).json({ message: err.warning });
  }
};

module.exports = {
  addPost,
  listAll,
};
