import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/admin/login',
          name: 'Login',
          component: () => import('@/views/login/Index.vue'),
        },
        {
          path: '/api/docente',
          name: 'Docentes',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/api/aula',
          name: 'Aulas',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/api/materia',
          name: 'Materias',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/api/horario',
          name: 'Horarios',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/logout',
          name: 'Logout',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '*',
          name: '404',
          component: () => import('@/views/404/Index.vue'),
        },
      ]
    },
  ]
})
