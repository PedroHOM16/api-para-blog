"use strict";

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING },
    email: { type : DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });
  // User.associate = (models) => {
  //   User.hasMany("BlogPosts", { foreignKey:  })
  // }

  return User;
};

module.exports = User;
