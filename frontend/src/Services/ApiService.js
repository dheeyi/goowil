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
  }
}
