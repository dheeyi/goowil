<template>
  <div id="app">
    <v-app id="inspire">
      <template v-if="loggedIn">
        <app-header></app-header>
        <section class="app-main">
          <router-view />
        </section>
        <app-footer></app-footer>
      </template>
      <template v-else>
        <app-login></app-login>
      </template>
    </v-app>
  </div>
</template>

<script>
import AppLogin from './components/views/Login'
import AppHeader from './components/layout/Header'
import AppFooter from './components/layout/Footer'
export default {
  name: 'app',
  computed: {
    loggedIn: {
      get: () => {
        return Boolean(localStorage.getItem('token'))
      }
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppLogin
  }
}
</script>

<style lang="scss">
@import 'vuetify/dist/vuetify.min.css';
</style>
