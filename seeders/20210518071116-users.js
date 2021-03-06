'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Bruno",
        lastName: "Doe",
        email: "bruno@doe.com",
        password: "12341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Emre",
        lastName: "Smith",
        email: "emre@smith.com",
        password: "12341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John",
        lastName: "Stone",
        email: "john@stone.com",
        password: "12341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
