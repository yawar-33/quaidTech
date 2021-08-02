'use strict'

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('Users', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: DataTypes.INTEGER,

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

 

  return User
}
