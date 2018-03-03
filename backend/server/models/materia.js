module.exports = (sequelize, DataTypes) => {
  var materia = sequelize.define('materia', {
    idmateria: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING(50),
    codmat: DataTypes.STRING(50)
  }, {});
  materia.associate = function(models) {
    materia.hasMany(models.horario, {
      as: 'horario',
      foreignKey: { 
        name: 'idmateria', 
        allowNull: false 
      } 
    });
  };
  return materia;
};