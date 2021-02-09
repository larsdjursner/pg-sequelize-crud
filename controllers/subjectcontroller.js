const models = require('../database/models');


const createSubject = async (req, res) => {
    await models.Subject.create(req.body)
        .then((data) => {
            res.send(data);
            console.log('Subject created successfully');
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};


const readAllSubjects = async (req, res) => {
    await models.Subject.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};


module.exports = {
    createSubject,
    readAllSubjects
}