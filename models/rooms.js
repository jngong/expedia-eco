"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define(
    "Rooms",
    {
      hotel_id: DataTypes.INTEGER,
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
      foreignKey: "hotel_id",
      onDelete: "CASCADE"
    });
  };
  return Rooms;
};
