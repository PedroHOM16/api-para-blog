// const sequelize = require('sequelize');
const DataTypes = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: `displayName`,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'email',
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'password',
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image',
  }
};

module.exports = (sequelize) => {
  const userModel = sequelize.define('User',
    attributes, {
      underscored: true,
      tableName: "Users",
      timestamps: false,
    });
  userModel.associate = (models) => {
    userModel.hasMany(models.BlogPost, {
      foreignKey: 'id'
    })}
  return userModel;
};