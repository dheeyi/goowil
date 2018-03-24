const docenteController = require('../controllers').docente;
const aulaController = require('../controllers').aula;
const materiaController = require('../controllers').materia;
const horarioController = require('../controllers').horario;
const userController = require('../controllers').user;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome ... API for creation SCHEDULES!'
  }));

  app.post('/api/user/login', userController.userLogin);
  app.post('/api/user/', userController.create);

  app.get('/api/docente', docenteController.list);
  app.delete('/api/docente/:iddocente', docenteController.destroy);
  app.post('/api/docente/', docenteController.create);
  app.put('/api/docente/:iddocente', docenteController.update);

  app.get('/api/aula', aulaController.list);
  app.delete('/api/aula/:idaula', aulaController.destroy);
  app.post('/api/aula/', aulaController.create);
  app.put('/api/aula/:idaula', aulaController.update);

  app.get('/api/materia', materiaController.list);
  app.delete('/api/materia/:idmateria', materiaController.destroy);
  app.post('/api/materia/', materiaController.create);
  app.put('/api/materia/:idmateria', materiaController.update);

  app.get('/api/horario', horarioController.list);
  app.delete('/api/horario/:idhorario', horarioController.destroy);
  app.post('/api/horario/', horarioController.create);
  app.put('/api/horario/:idhorario', horarioController.update);
};