'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Rooms', [{
      "hotel_id": "1",
      "type": "",
      "list_price": "",
      "current_price": "",
      "availability": "",
      "beds": "",
      "sleeps": "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      
      {
        "hotel_id": "2",
        "type": "",
        "list_price": "",
        "current_price": "",
        "availability": "",
        "beds": "",
        "sleeps": "",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "hotel_id": "3",
        "type": "",
        "list_price": "",
        "current_price": "",
        "availability": "",
        "beds": "",
        "sleeps": "",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        "hotel_id": "4",
        "type": "",
        "list_price": "",
        "current_price": "",
        "availability": "",
        "beds": "",
        "sleeps": "",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        "hotel_id": "5",
        "type": "",
        "list_price": "",
        "current_price": "",
        "availability": "",
        "beds": "",
        "sleeps": "",
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {});
  },
 



  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
