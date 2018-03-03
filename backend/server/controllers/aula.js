const aula = require('../models').aula;

module.exports = {
  
  list(req, res) {
    return aula
      .all()
      .then(aula => res.status(200).send(aula))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return aula
      .findById(req.params.idaula)
      .then(aula => {
        if (!aula) {
          return res.status(400).send({
            message: 'aula Not Found',
          });
        }
        return aula
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    return aula
      .create({
        idaula: req.body.idaula,
        name: req.body.name,
        description: req.body.description,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      })
      .then(aula => res.status(201).send(aula))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return aula
      .findById(req.params.idaula)
      .then(aula => {
        if (!aula) {
          return res.status(404).send({
            message: 'aula Not Found',
          });
        }
        return aula
          .update({
            name: req.body.name || aula.name,
            description: req.body.description || aula.description,
          })
          .then(() => res.status(200).send(aula))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};