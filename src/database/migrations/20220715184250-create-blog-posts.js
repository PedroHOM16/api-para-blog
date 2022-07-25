'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('BlogPosts', {
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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
