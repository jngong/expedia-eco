"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rooms",
      [
        {
          hotelId: 1,
          type: "King-Suite",
          list_price: "$300.00",
          current_price: "$200.00",
          availability: true,
          beds: "1 King-Sized Bed",
          sleeps: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hotelId: 2,
          type: "Queen-Suite",
          list_price: "$400.00",
          current_price: "$350.00",
          availability: false,
          beds: "1 Queen-Sized Bed",
          sleeps: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hotelId: 3,
          type: "King-Suite",
          list_price: "$300.00",
          current_price: "$299.99",
          availability: true,
          beds: "2 King-Sized Beds",
          sleeps: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hotelId: 3,
          type: "King-Suite",
          list_price: "$300.00",
          current_price: "$200.00",
          availability: true,
          beds: "1 King-Sized Bed",
          sleeps: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hotelId: 3,
          type: "Queen-Suite",
          list_price: "$400.00",
          current_price: "$350.00",
          availability: false,
          beds: "1 Queen-Sized Bed",
          sleeps: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hotelId: 1,
          type: "King-Suite",
          list_price: "$300.00",
          current_price: "$299.99",
          availability: true,
          beds: "2 King-Sized Beds",
          sleeps: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rooms", null, {});
  }
};
