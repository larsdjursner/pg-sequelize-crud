module.exports = {
    up: async (queryInterface, Sequelize) =>
        await queryInterface.bulkInsert(
            'Comments',
            [
                {
                    userId: 3,
                    postId: 17,
                    comment:
                        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
                    updatedAt: '2021-03-03T16:16:08Z',
                    createdAt: '2019-11-06T01:33:59Z',
                },
                {
                    userId: 4,
                    postId: 25,
                    comment:
                        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
                    updatedAt: '2021-03-10T12:42:55Z',
                    createdAt: '2020-10-15T18:54:32Z',
                },
                {
                    userId: 3,
                    postId: 3,
                    comment:
                        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
                    updatedAt: '2021-01-14T20:45:14Z',
                    createdAt: '2020-10-08T17:08:36Z',
                },
                {
                    userId: 1,
                    postId: 4,
                    comment:
                        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
                    updatedAt: '2021-03-26T19:43:59Z',
                    createdAt: '2018-11-01T00:58:09Z',
                },
                {
                    userId: 5,
                    postId: 18,
                    comment:
                        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
                    updatedAt: '2021-04-17T21:45:08Z',
                    createdAt: '2020-06-01T19:57:09Z',
                },
                {
                    userId: 2,
                    postId: 10,
                    comment:
                        'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                    updatedAt: '2021-04-29T15:57:53Z',
                    createdAt: '2019-03-17T01:49:03Z',
                },
                {
                    userId: 3,
                    postId: 9,
                    comment:
                        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
                    updatedAt: '2021-03-25T18:22:49Z',
                    createdAt: '2020-12-10T23:28:57Z',
                },
                {
                    userId: 3,
                    postId: 21,
                    comment:
                        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                    updatedAt: '2021-04-29T06:19:01Z',
                    createdAt: '2019-04-29T18:27:05Z',
                },
                {
                    userId: 1,
                    postId: 15,
                    comment:
                        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
                    updatedAt: '2021-05-09T13:37:53Z',
                    createdAt: '2020-11-15T05:04:13Z',
                },
                {
                    userId: 1,
                    postId: 11,
                    comment:
                        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
                    updatedAt: '2021-04-15T13:36:42Z',
                    createdAt: '2021-01-04T06:06:50Z',
                },
                {
                    userId: 2,
                    postId: 12,
                    comment:
                        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
                    updatedAt: '2021-04-27T03:50:55Z',
                    createdAt: '2019-10-19T11:35:40Z',
                },
                {
                    userId: 2,
                    postId: 4,
                    comment:
                        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
                    updatedAt: '2021-04-01T02:51:12Z',
                    createdAt: '2021-04-08T21:48:42Z',
                },
                {
                    userId: 3,
                    postId: 7,
                    comment:
                        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
                    updatedAt: '2021-04-27T09:19:50Z',
                    createdAt: '2021-03-05T16:19:07Z',
                },
                {
                    userId: 2,
                    postId: 3,
                    comment:
                        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
                    updatedAt: '2021-04-17T11:00:29Z',
                    createdAt: '2020-12-28T16:37:34Z',
                },
                {
                    userId: 3,
                    postId: 20,
                    comment:
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
                    updatedAt: '2021-05-07T18:18:45Z',
                    createdAt: '2019-05-06T23:52:38Z',
                },
                {
                    userId: 4,
                    postId: 16,
                    comment:
                        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                    updatedAt: '2021-01-29T13:25:24Z',
                    createdAt: '2019-07-16T07:09:34Z',
                },
                {
                    userId: 4,
                    postId: 11,
                    comment:
                        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
                    updatedAt: '2021-04-09T14:28:26Z',
                    createdAt: '2020-01-17T06:29:12Z',
                },
                {
                    userId: 5,
                    postId: 10,
                    comment:
                        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
                    updatedAt: '2021-04-27T06:25:07Z',
                    createdAt: '2020-12-26T23:50:56Z',
                },
                {
                    userId: 5,
                    postId: 19,
                    comment:
                        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
                    updatedAt: '2021-04-22T00:15:51Z',
                    createdAt: '2021-04-30T23:20:30Z',
                },
                {
                    userId: 2,
                    postId: 6,
                    comment:
                        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                    updatedAt: '2021-05-02T19:01:38Z',
                    createdAt: '2019-12-31T22:42:17Z',
                },
                {
                    userId: 4,
                    postId: 8,
                    comment:
                        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                    updatedAt: '2021-04-10T12:31:29Z',
                    createdAt: '2020-09-03T00:56:40Z',
                },
                {
                    userId: 5,
                    postId: 17,
                    comment:
                        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
                    updatedAt: '2021-03-07T10:14:22Z',
                    createdAt: '2019-01-04T02:24:50Z',
                },
                {
                    userId: 3,
                    postId: 1,
                    comment:
                        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
                    updatedAt: '2021-05-07T15:56:01Z',
                    createdAt: '2018-11-08T10:14:14Z',
                },
                {
                    userId: 4,
                    postId: 9,
                    comment:
                        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
                    updatedAt: '2021-04-05T20:55:06Z',
                    createdAt: '2019-06-13T18:03:17Z',
                },
                {
                    userId: 2,
                    postId: 21,
                    comment:
                        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
                    updatedAt: '2021-04-21T03:39:56Z',
                    createdAt: '2020-08-31T19:53:00Z',
                },
                {
                    userId: 2,
                    postId: 8,
                    comment:
                        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                    updatedAt: '2021-05-04T18:55:59Z',
                    createdAt: '2019-12-07T11:46:03Z',
                },
                {
                    userId: 3,
                    postId: 7,
                    comment:
                        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
                    updatedAt: '2021-03-07T16:58:51Z',
                    createdAt: '2019-04-08T19:17:03Z',
                },
                {
                    userId: 5,
                    postId: 9,
                    comment:
                        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
                    updatedAt: '2021-01-13T11:14:49Z',
                    createdAt: '2021-05-07T12:30:01Z',
                },
                {
                    userId: 4,
                    postId: 6,
                    comment:
                        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                    updatedAt: '2021-05-08T04:18:52Z',
                    createdAt: '2020-06-29T09:40:14Z',
                },
                {
                    userId: 4,
                    postId: 23,
                    comment:
                        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                    updatedAt: '2021-03-04T08:54:27Z',
                    createdAt: '2021-03-20T06:00:00Z',
                },
                {
                    userId: 3,
                    postId: 3,
                    comment:
                        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                    updatedAt: '2021-04-02T18:30:55Z',
                    createdAt: '2020-08-07T09:00:23Z',
                },
                {
                    userId: 4,
                    postId: 4,
                    comment:
                        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                    updatedAt: '2021-03-31T16:30:07Z',
                    createdAt: '2019-02-01T12:43:06Z',
                },
                {
                    userId: 4,
                    postId: 18,
                    comment:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                    updatedAt: '2021-03-05T12:20:05Z',
                    createdAt: '2019-10-26T06:48:31Z',
                },
                {
                    userId: 4,
                    postId: 15,
                    comment:
                        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
                    updatedAt: '2021-02-19T14:33:15Z',
                    createdAt: '2021-01-06T07:57:46Z',
                },
                {
                    userId: 5,
                    postId: 18,
                    comment:
                        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                    updatedAt: '2021-01-09T15:52:07Z',
                    createdAt: '2020-06-18T14:44:07Z',
                },
                {
                    userId: 5,
                    postId: 12,
                    comment:
                        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
                    updatedAt: '2021-04-02T05:46:56Z',
                    createdAt: '2021-02-21T08:12:43Z',
                },
                {
                    userId: 1,
                    postId: 12,
                    comment:
                        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
                    updatedAt: '2021-01-24T15:17:18Z',
                    createdAt: '2019-02-22T08:25:21Z',
                },
                {
                    userId: 4,
                    postId: 23,
                    comment:
                        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
                    updatedAt: '2021-01-10T05:35:41Z',
                    createdAt: '2019-03-28T04:05:56Z',
                },
                {
                    userId: 5,
                    postId: 18,
                    comment:
                        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                    updatedAt: '2021-03-23T14:37:58Z',
                    createdAt: '2021-04-20T19:38:55Z',
                },
                {
                    userId: 1,
                    postId: 21,
                    comment:
                        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                    updatedAt: '2021-04-03T01:43:06Z',
                    createdAt: '2020-11-24T21:06:30Z',
                },
                {
                    userId: 1,
                    postId: 22,
                    comment:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
                    updatedAt: '2021-01-15T02:22:47Z',
                    createdAt: '2020-03-13T15:02:48Z',
                },
                {
                    userId: 3,
                    postId: 7,
                    comment:
                        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
                    updatedAt: '2021-05-01T07:23:04Z',
                    createdAt: '2019-03-08T07:37:52Z',
                },
                {
                    userId: 2,
                    postId: 13,
                    comment:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
                    updatedAt: '2021-01-17T23:48:53Z',
                    createdAt: '2021-04-03T14:58:21Z',
                },
                {
                    userId: 1,
                    postId: 23,
                    comment:
                        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
                    updatedAt: '2021-01-18T21:16:59Z',
                    createdAt: '2020-03-26T01:54:12Z',
                },
                {
                    userId: 5,
                    postId: 18,
                    comment:
                        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                    updatedAt: '2021-04-10T05:00:44Z',
                    createdAt: '2019-12-14T21:31:59Z',
                },
                {
                    userId: 1,
                    postId: 1,
                    comment:
                        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
                    updatedAt: '2021-03-18T16:29:49Z',
                    createdAt: '2019-01-08T12:37:21Z',
                },
                {
                    userId: 4,
                    postId: 8,
                    comment:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                    updatedAt: '2021-02-12T19:59:56Z',
                    createdAt: '2020-10-01T20:59:07Z',
                },
                {
                    userId: 4,
                    postId: 16,
                    comment:
                        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
                    updatedAt: '2021-03-28T23:25:15Z',
                    createdAt: '2019-04-28T22:17:19Z',
                },
                {
                    userId: 3,
                    postId: 15,
                    comment:
                        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
                    updatedAt: '2021-04-18T04:15:06Z',
                    createdAt: '2018-12-06T11:49:18Z',
                },
                {
                    userId: 5,
                    postId: 19,
                    comment:
                        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
                    updatedAt: '2021-01-30T16:36:53Z',
                    createdAt: '2020-10-19T21:12:39Z',
                },
            ],
            {}
        ),

    down: async (queryInterface, Sequelize) =>
        await queryInterface.bulkDelete('Comments', null, {}),
};
