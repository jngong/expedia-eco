"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Rooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hotels",
          key: "id",
          as: "hotelId"
        }
      },
      type: {
        type: Sequelize.STRING
      },
      list_price: {
        type: Sequelize.CHAR
      },
      current_price: {
        type: Sequelize.CHAR
      },
      availability: {
        type: Sequelize.BOOLEAN
      },
      beds: {
        type: Sequelize.STRING
      },
      sleeps: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Rooms");
  }
};
