"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hotels",
      [
        {
          // id: 1,
          address: "4441 Collins Avenue, Miami Beach, FL 33140",
          name: "Fontainebleau",
          rating: 4,
          img_url: "",
          eco_friendly: false,
          description:
            "Situated on oceanfront Collins Avenue in the heart of Millionaire's Row, Fontainebleau Miami Beach is one of the most historically and architecturally significant hotels on Miami Beach, Florida.",
          wifi: true,
          business: true,
          laundry: true,
          smoke_free: true,
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          // id: 2,
          address: "1567 Broadway, New York, NY 10036",
          name: "W New York",
          rating: 5,
          img_url: "",
          eco_friendly: true,
          description:
            "W New York Times Square is located in New York City's Times Square. This hotel is a short walk from Broadway theaters of Theater District. It features an on-site restaurant.",
          wifi: true,
          business: true,
          laundry: true,
          smoke_free: true,
          cityId: 2,

          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          // id: 3,
          address: "900 W Olympic Blvd, Los Angeles, CA 90015",
          name: "The Ritz-Carlton, Los Angeles",
          rating: 4,
          img_url: "",
          eco_friendly: false,
          description:
            "Within the L.A. LIVE entertainment complex, this posh hotel is a 5-minute walk from the Staples Center, home of the Lakers and Clippers, and 1.4 miles from The Walt Disney Concert Hall.",
          wifi: true,
          business: true,
          laundry: false,
          smoke_free: false,
          cityId: 3,

          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          // id: 4,
          address: "4441 Collins Avenue, Miami Beach, LA 33140",
          name: "Fontainebleau",
          rating: 4,
          img_url: "",
          eco_friendly: false,
          description:
            "Situated on oceanfront Collins Avenue in the heart of Millionaire's Row, Fontainebleau Miami Beach is one of the most historically and architecturally significant hotels on Miami Beach, Florida.",
          wifi: true,
          business: true,
          laundry: true,
          smoke_free: true,
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          // id: 5,
          address: "1002 10th Avenue, New York, NY 10036",
          name: "Holiday Inn",
          rating: 5,
          img_url: "",
          eco_friendly: true,
          description:
            "W New York Times Square is located in New York City's Times Square. This hotel is a short walk from Broadway theaters of Theater District. It features an on-site restaurant.",
          wifi: true,
          business: true,
          laundry: true,
          smoke_free: true,
          cityId: 2,

          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hotels", null, {});
  }
};