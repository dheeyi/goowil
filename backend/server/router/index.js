const docenteController = require('../controllers').docente;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome... API de creacion de HORARIOS!',
  }));

  app.get('/api/docente', docenteController.list);
  app.delete('/api/docente/:iduser', docenteController.destroy);
  app.post('/api/docente/', docenteController.create);
  app.put('/api/docente/:iduser', docenteController.update);
};