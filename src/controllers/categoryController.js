const categoryService = require('../services/categoryService');

const listAll = async (_req, res) => {
  try {
    const categories = await categoryService.listAll();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(err.status).json({ message: err.warning });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await categoryService.createCategory(name);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(err.status).json({ message: err.warning });
  }
};

module.exports = {
  listAll,
  addCategory,
};
