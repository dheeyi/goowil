module.exports = (sequelize, DataTypes) => {
  var horario = sequelize.define('horario', {
    idhorario: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    horainit: DataTypes.TIME,
    horafin: DataTypes.TIME,
    state: DataTypes.STRING(10)
  }, {});
  horario.associate = function(models) {
    horario.belongsTo(models.docente, { 
      foreignKey: { 
        name: 'iddocente', 
        allowNull: false 
      } 
    });
    horario.belongsTo(models.docente, { 
      foreignKey: { 
        name: 'iddocente', 
        allowNull: false 
      } 
    });
    horario.belongsTo(models.aula, { 
      foreignKey: { 
        name: 'idaula', 
        allowNull: false 
      } 
    });
    horario.belongsTo(models.materia, { 
      foreignKey: { 
        name: 'idmateria', 
        allowNull: false 
      } 
    });
  };
  return horario;
};