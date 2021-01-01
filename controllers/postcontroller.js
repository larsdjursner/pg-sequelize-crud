const models = require('../database/models');

const createPost = async (req, res) => {
    await models.Post.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const getAllPosts = async (req, res) => {
    await models.Post.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const getPostById = async (req, res) => {
    const { postId } = req.params;

    await models.Post.findOne({
        where: { id: postId },
        include: [
            {
                model: models.Comment,
                as: 'comments',
                include: [
                    {
                        model: models.User,
                        as: 'author',
                    },
                ],
            },
            {
                model: models.User,
                as: 'author',
            },
        ],
    })
        .then((data) => {
            if (data) res.send(data);
            else res.send({ message: 'cannot find note with id: ' + postId });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [updated] = await models.Post.update(req.body, {
            where: { id: postId },
        });
        if (updated) {
            const updatedPost = await models.Post.findOne({
                where: { id: postId },
            });
            return res.status(200).json({ post: updatedPost });
        }
        throw new Error('Post not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deletePost = async (req, res) => {
    try {
      const { postId } = req.params;
      const deleted = await models.Post.destroy({
        where: { id: postId }
      });
      if (deleted) {
        return res.status(204).send({post: deleted});
      }
      throw new Error(`Post (id ${postId}) not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};
