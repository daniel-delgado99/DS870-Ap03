'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Physicians', [{
      name: "Médico 01",
      email: "email01@medicina.com",
      password: "sapato01"
    },
    {
      name: "Médico 02",
      email: "email02@medicina.com",
      password: "sapato02"
    },
    {
      name: "Médico 03",
      email: "email03@medicina.com",
      password: "sapato03"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Physicians', null, {});
  }
};
