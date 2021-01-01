// const models = require('../database/models');

// const createPost = async (req, res) => {
//   try {
//     const post = await models.Post.create(req.body);
//     return res.status(201).json({
//       post,
//     });
//   } catch (error) {
//     return res.status(500).json({error: error.message})
//   }
// }

// const getAllPosts = async (req, res) => {
//     models.Post.findAll()
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).json({error: error.message})
//         })
// }

// module.exports = {
//   createPost,
//   getAllPosts
// }