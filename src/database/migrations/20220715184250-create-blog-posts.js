'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'title',
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'content',
      },
      // FOREING KEY
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'published',
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated',
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
