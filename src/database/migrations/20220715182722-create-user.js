module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Users', {
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
    })
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
