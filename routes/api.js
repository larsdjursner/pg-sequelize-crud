const { Router } = require('express');
const postcontroller = require('../controllers/postcontroller');
const usercontroller = require('../controllers/usercontroller');
const router = Router();

router.post('/posts', postcontroller.createPost);
router.get('/posts', postcontroller.readAllPosts);
router.get('/posts/:postId', postcontroller.readPostById);
router.put('/posts/:postId', postcontroller.updatePost);
router.delete('/posts/:postId', postcontroller.deletePost);

router.post('/users', usercontroller.createUser);
router.get('/users', usercontroller.readAllUsers);
router.get('/users/:userId', usercontroller.readUserById);
router.put('/users/:userId', usercontroller.updateUser);
router.delete('/users/:userId', usercontroller.deleteUser);

module.exports = router;