import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Docente from '@/components/views/Docente'
import Logout from '@/components/views/Logout'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)
Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/api/docente',
      name: 'Docentes',
      component: Docente
    },
    {
      path: '/api/aula',
      name: 'Aulas',
      component: Home
    },
    {
      path: '/api/materia',
      name: 'Materias',
      component: Home
    },
    {
      path: '/api/horario',
      name: 'Horarios',
      component: Home
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
