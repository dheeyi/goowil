<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
      <v-list dense>
        <v-list-tile v-for="item in menu" :key="item.path" :to="{path: item.path}">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  mounted () {
    this.path = this.$route.path
  },
  data () {
    return {
      drawer: true,
      appTitle: 'Application ',
      path: '/',
      menu: [
        { path: '/', label: 'Home', icon: 'home' },
        { path: '/api/docente', label: 'Docentes', icon: 'event' },
        { path: '/api/aula', label: 'Aulas', icon: 'widgets' },
        { path: '/api/materia', label: 'Materias', icon: 'list' },
        { path: '/api/horario', label: 'Horarios', icon: 'event' },
        { path: '/logout', label: 'Logout', icon: 'dashboard' }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.path = to.path
    }
  }
}
</script>

<style>

</style>
