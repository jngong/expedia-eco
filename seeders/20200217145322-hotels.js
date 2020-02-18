'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Hotels', [{
      "address": "1",
      "name": "",
      "rating": "",
      "img_url": "",
      "eco_friendly": "",
      "description": "",
      "wifi": "",
      "business": "",
      "laundry": "",
      "smoke_free": "",
      "city_id": "", 
      createdAt: new Date(),
      updatedAt: new Date()
    },
      
    {
      "address": "1",
      "name": "",
      "rating": "",
      "img_url": "",
      "eco_friendly": "",
      "description": "",
      "wifi": "",
      "business": "",
      "laundry": "",
      "smoke_free": "",
      "city_id": "",

      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      "address": "1",
      "name": "",
      "rating": "",
      "img_url": "",
      "eco_friendly": "",
      "description": "",
      "wifi": "",
      "business": "",
      "laundry": "",
      "smoke_free": "",
      "city_id": "",

      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "address": "1",
      "name": "",
      "rating": "",
      "img_url": "",
      "eco_friendly": "",
      "description": "",
      "wifi": "",
      "business": "",
      "laundry": "",
      "smoke_free": "",
      "city_id": "",

      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "address": "1",
      "name": "",
      "rating": "",
      "img_url": "",
      "eco_friendly": "",
      "description": "",
      "wifi": "",
      "business": "",
      "laundry": "",
      "smoke_free": "",
      "city_id": "",

      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    
    ], {});
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
