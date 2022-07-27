const DataTypes = require('sequelize');

const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // FOREING KEY
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  };

module.exports = (sequelize) => {
  const blogPostModel = sequelize.define('BlogPost',
    attributes, {
      // underscored: true,
      // tableName: "BlogPosts",
      timestamps: false,
    });
  blogPostModel.associate = (models) => {
    blogPostModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })}
  return blogPostModel;
}