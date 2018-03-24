module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    iduser: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING(50),
    apellidos: DataTypes.STRING(50),
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(100)
  }, {});

  return user;
}
