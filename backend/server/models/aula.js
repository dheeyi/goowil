module.exports = (sequelize, DataTypes) => {
  var aula = sequelize.define('aula', {
    idaula: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING(50),
    description: DataTypes.STRING(50)
  }, {});
  aula.associate = function(models) {
    aula.hasMany(models.horario, {
      as: 'horario',
      foreignKey: {
        name: 'idaula', 
        allowNull: false 
      } 
    });
  };
  return aula;
};