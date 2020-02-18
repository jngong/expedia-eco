'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotels = sequelize.define('Hotels', {
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    eco_friendly: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    wifi: DataTypes.BOOLEAN,
    business: DataTypes.BOOLEAN,
    laundry: DataTypes.BOOLEAN,
    smoke_free: DataTypes.BOOLEAN,
    city_id: DataTypes.INTEGER
  }, {});
  Hotels.associate = function(models) {
    // associations can be defined here
    Hotels.hasMany(models.Rooms, {
      foreignKey: 'hotel_id',
      onDelete: 'CASCADE'
    })

    Hotels.belongsTo(models.Cities, {
      foreignKey: 'city_id'
      // onDelete: 'CASCADE'
    })
  };
  return Hotels;
};