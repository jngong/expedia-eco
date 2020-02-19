"use strict";
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define(
    "Hotel",
    {
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
      cityId: DataTypes.INTEGER
    },
    {}
  );
  Hotel.associate = function(models) {
    // associations can be defined here
    Hotel.hasMany(models.Room, {
      foreignKey: "hotelId",
      onDelete: "CASCADE"
    });

    Hotel.belongsTo(models.City, {
      foreignKey: "cityId",
      onDelete: "CASCADE"
    });
  };
  return Hotel;
};
