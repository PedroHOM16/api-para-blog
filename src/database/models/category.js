const DataTypes = require('sequelize');

const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'name',
    },
};

module.exports = (sequelize) => {
    const categoryModel = sequelize.define('Category',
      attributes, {
        underscored: true,
        tableName: "Categories",
        timestamps: false,
      });
    return categoryModel;
};
