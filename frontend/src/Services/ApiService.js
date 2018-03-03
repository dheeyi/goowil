import Api from '@/Services/Api'

export default {
  fetchDocentes () {
    return Api().get('/docente')
  },
  deleteDocente (id) {
    return Api().delete('/docente/' + id)
  },
  addDocente (params) {
    return Api().post('/docente', params)
  },
  updateDocente (params) {
    return Api().put('/docente/' + params.iddocente, params)
  },

  fetchAulas () {
    return Api().get('/aula')
  },
  deleteAula (id) {
    return Api().delete('/aula/' + id)
  },
  addAula (params) {
    return Api().post('/aula', params)
  },
  updateAula (params) {
    return Api().put('/aula/' + params.idaula, params)
  },

  fetchMaterias () {
    return Api().get('/materia')
  },
  deleteMateria (id) {
    return Api().delete('/materia/' + id)
  },
  addMateria (params) {
    return Api().post('/materia', params)
  },
  updateMateria (params) {
    return Api().put('/materia/' + params.idmateria, params)
  }
}
