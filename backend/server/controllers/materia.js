const materia = require('../models').materia;

module.exports = {
  
  list(req, res) {
    return materia
      .all()
      .then(materia => res.status(200).send(materia))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return materia
      .findById(req.params.idmateria)
      .then(materia => {
        if (!materia) {
          return res.status(400).send({
            message: 'materia Not Found',
          });
        }
        return materia
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    return materia
      .create({
        idmateria: req.body.idmateria,
        name: req.body.name,
        codmat: req.body.codmat,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      })
      .then(materia => res.status(201).send(materia))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return materia
      .findById(req.params.idmateria)
      .then(materia => {
        if (!materia) {
          return res.status(404).send({
            message: 'materia Not Found',
          });
        }
        return materia
          .update({
            name: req.body.name || materia.name,
            codmat: req.body.codmat || materia.codmat,
          })
          .then(() => res.status(200).send(materia))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};