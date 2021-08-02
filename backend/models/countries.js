module.exports = function (sequelize, DataTypes) {
    const Countries = sequelize.define('Countries', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      
    })
    Countries.associate = (models) => {
        Countries.hasMany(models.Users, {
          foreignKey: {
            name: 'countryId',
            allowNull: false,
          },
          as: 'country',
        })
      }
    return Countries;
}