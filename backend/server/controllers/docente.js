const docente = require('../models').docente;

module.exports = {
  
  list(req, res) {
    return docente
      .all()
      .then(docente => res.status(200).send(docente))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return docente
      .findById(req.params.iddocente)
      .then(docente => {
        if (!docente) {
          return res.status(400).send({
            message: 'docente Not Found',
          });
        }
        return docente
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    return docente
      .create({
        iddocente: req.body.iddocente,
        name: req.body.name,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        email: req.body.email,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      })
      .then(docente => res.status(201).send(docente))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return docente
      .findById(req.params.iddocente)
      .then(docente => {
        if (!docente) {
          return res.status(404).send({
            message: 'docente Not Found',
          });
        }
        return docente
          .update({
            name: req.body.name || docente.name,
            apellidos: req.body.apellidos || docente.apellidos, 
            edad: req.body.edad || docente.edad, 
            email: req.body.email || docente.email, 
          })
          .then(() => res.status(200).send(docente))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};