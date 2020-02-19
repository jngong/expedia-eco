"use strict";
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
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
  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsTo(models.Hotel, {
      foreignKey: "hotelId"
    });
  };
  return Room;
};
