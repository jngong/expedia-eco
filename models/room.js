"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define(
    "Rooms",
    {
      hotelId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      list_price: DataTypes.CHAR,
      current_price: DataTypes.CHAR,
      availability: DataTypes.BOOLEAN,
      beds: DataTypes.STRING,
      sleeps: DataTypes.INTEGER
    },
    {}
  );
  Rooms.associate = function(models) {
    // associations can be defined here
    Rooms.belongsTo(models.Hotels, {
      foreignKey: "hotelId"
    });
  };
  return Rooms;
};
