module.exports = {
    up: async (queryInterface, Sequelize) =>
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Rania Arents',
                    email: 'rarents0@prweb.com',
                    updatedAt: '2020-07-23T11:16:32Z',
                    createdAt: '2020-05-26T11:11:04Z',
                },

                {
                    name: 'Ricard Sunock',
                    email: 'rsunock1@behance.net',
                    updatedAt: '2020-04-24T10:30:00Z',
                    createdAt: '2019-03-26T19:57:07Z',
                },

                {
                    name: 'Lolita Cranmore',
                    email: 'lcranmore2@ning.com',
                    updatedAt: '2020-05-13T17:21:37Z',
                    createdAt: '2020-03-22T21:54:05Z',
                },

                {
                    name: 'Johnnie McDonagh',
                    email: 'jmcdonagh3@woothemes.com',
                    updatedAt: '2020-09-13T00:38:37Z',
                    createdAt: '2020-08-03T22:39:40Z',
                },

                {
                    name: 'Marnie Tremoille',
                    email: 'mtremoille4@homestead.com',
                    updatedAt: '2020-12-09T11:54:27Z',
                    createdAt: '2020-06-01T00:32:20Z',
                },
            ],
            {}
        ),

    down: async (queryInterface, Sequelize) =>
        await queryInterface.bulkDelete('Users', null, {}),
};
