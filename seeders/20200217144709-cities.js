'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cities', [{
      "name": "Miami",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "name": "New York",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      "name": "Los Angeles",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "name": "Atlanta",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "name": "Chicago",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      "name": "Houston",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
