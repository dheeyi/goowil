module.exports = (sequelize, DataTypes) => {
  var docente = sequelize.define('docente', {
    iddocente: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING(50),
    apellidos: DataTypes.STRING(50),
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING(100)
  }, {});
  docente.associate = function(models) {
    docente.hasMany(models.horario, {
      as: 'horario',
      foreignKey: { 
        name: 'iddocente', 
        allowNull: false 
      } 
    });
  };
  return docente;
};