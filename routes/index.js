const { Router } = require('express');
const fetch = require('node-fetch');
const models = require('../database/models');

const router = Router();

router.get('/posts', async (req, res) => {
    await fetch('http://localhost:3300/api/posts')
        .then((response) => response.json())
        .then((data) => {
            res.render('../views/index', {
                posts: data,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

//add some errorhandling
router.get('/posts/:id', async (req, res) => {
    await fetch(`http://localhost:3300/api/posts/${req.params.id}`)
        .then((response) => response.json())
        .then((data) => {
            res.render('../views/post', {
                post: data,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
}); 




module.exports = router;
