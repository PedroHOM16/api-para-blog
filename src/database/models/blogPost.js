const DataTypes = require('sequelize');

const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'title',
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'content',
    },
    // FOREING KEY
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'published',
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated',
    }
  };

module.exports = (sequelize) => {
  const userModel = sequelize.define('BlogPost',
    attributes, {
      underscored: true,
      tableName: "BlogPosts",
      timestamps: false,
    });
  userModel.associate = (models) => {
    userModel.belongsTo(models.User, {
      foreignKey: 'userId'
    })}
  return userModel;
}