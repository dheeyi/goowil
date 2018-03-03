module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('horarios', {
      idmateria: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horainit: {
        type: Sequelize.TIME
      },
      horafin: {
        type: Sequelize.TIME
      },
      state: {
        type: Sequelize.STRING(10)
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
    return queryInterface.dropTable('horarios');
  }
};