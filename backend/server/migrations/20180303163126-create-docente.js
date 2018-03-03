module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('docentes', {
      iddocente: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      apellidos: {
        type: Sequelize.STRING(50)
      },
      edad: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('docentes');
  }
};