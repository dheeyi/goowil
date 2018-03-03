const docenteController = require('../controllers').docente;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome... API de creacion de HORARIOS!',
  }));

  app.get('/api/docente', docenteController.list);
  app.delete('/api/docente/:iddocente', docenteController.destroy);
  app.post('/api/docente/', docenteController.create);
  app.put('/api/docente/:iddocente', docenteController.update);
};