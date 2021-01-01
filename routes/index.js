const { Router } = require('express');
const postcontroller = require('../controllers/postcontroller');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/posts', postcontroller.createPost);
router.get('/posts', postcontroller.getAllPosts);
router.get('/posts/:postId', postcontroller.getPostById);
router.put('/posts/:postId', postcontroller.updatePost);
router.delete('/posts/:postId', postcontroller.deletePost);

module.exports = router;