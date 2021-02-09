'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
      await queryInterface.bulkInsert(
          'Subjects',
          [
            {
              "subject": "Greater adjutant stork",
              "createdAt": "2018-08-01T00:00:00Z",
              "updatedAt": "2018-08-01T00:00:00Z"
            }, {
              "subject": "Gaur",
              "createdAt": "2018-08-01T00:00:00Z",
              "updatedAt": "2018-08-01T00:00:00Z"
            }, {
              "subject": "Eagle, white-bellied sea",
              "createdAt": "2018-08-01T00:00:00Z",
              "updatedAt": "2018-08-01T00:00:00Z"
            }, {
              "subject": "Hyena, brown",
              "createdAt": "2018-08-01T00:00:00Z",
              "updatedAt": "2018-08-01T00:00:00Z"
            }, {
              "subject": "Tortoise, galapagos",
              "createdAt": "2018-08-01T00:00:00Z",
              "updatedAt": "2018-08-01T00:00:00Z"
            }
          ],

          {}
      ),

  down: async (queryInterface, Sequelize) =>
      await queryInterface.bulkDelete('Subjects', null, {}),
};