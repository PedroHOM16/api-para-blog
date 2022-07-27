const DataTypes = require('sequelize');

const attributes = {
  postId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'BlogPosts',
      key: 'id',
    }
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories',
      key: 'id',
    }
  }
}

module.exports = (sequelize) => {
  const postCategoryModel = sequelize.define('PostCategory',
    attributes, {
    // underscored: true,
    // tableName: "PostCategories",
    timestamps: false,
  });
  postCategoryModel.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: postCategoryModel,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    }),
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  };
  return postCategoryModel;
}
