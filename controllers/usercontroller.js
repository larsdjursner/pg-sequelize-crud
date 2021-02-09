const models = require('../database/models');


const createUser = async (req, res) => {
    await models.User.create(req.body)
        .then((data) => {
            res.send(data);
            console.log('user created successfully');
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};


const readAllUsers = async (req, res) => {
    await models.User.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const readUserById = async(req, res) => {
    const { userId } = req.params;

    await models.User.findOne({
        where: { id: userId },
        include: [
            {
                model: models.Post,
                as: 'posts',
            },
            {
                model: models.Comment,
                as: 'comments',
            },
            
        ],
    })
        .then((data) => {
            if (data) res.send(data);
            else res.send({ message: 'cannot find note with id: ' + userId });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

const updateUser = async(req, res) => {
    try {
        const { userId } = req.params;
        const [updated] = await models.User.update(req.body, {
            where: { id: userId },
        });
        if (updated) {
            const updatedUser = await models.User.findOne({
                where: { id: userId },
            });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('user not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//delete all posts associated with the user as well
const deleteUser = async(req, res) => {
    try {
        const { userId } = req.params;
        const deleted = await models.User.destroy({
          where: { id: userId }
        });
        if (deleted) {
          return res.status(204).send({user: deleted});
        }
        throw new Error(`User (id ${userId}) not found`);
      } catch (error) {
        return res.status(500).send(error.message);
      }
};

module.exports = {
    createUser,
    readAllUsers,
    readUserById,
    updateUser,
    deleteUser
}