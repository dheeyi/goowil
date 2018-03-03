const horario = require('../models').horario;

module.exports = {
  
  list(req, res) {
    return horario
      .all()
      .then(horario => res.status(200).send(horario))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return horario
      .findById(req.params.idhorario)
      .then(horario => {
        if (!horario) {
          return res.status(400).send({
            message: 'horario Not Found',
          });
        }
        return horario
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    return horario
      .create({
        idhorario: req.body.idhorario,
        name: req.body.name,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        email: req.body.email,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      })
      .then(horario => res.status(201).send(horario))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return horario
      .findById(req.params.idhorario)
      .then(horario => {
        if (!horario) {
          return res.status(404).send({
            message: 'horario Not Found',
          });
        }
        return horario
          .update({
            name: req.body.name || horario.name,
            apellidos: req.body.apellidos || horario.apellidos, 
            edad: req.body.edad || horario.edad, 
            email: req.body.email || horario.email, 
          })
          .then(() => res.status(200).send(horario))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};