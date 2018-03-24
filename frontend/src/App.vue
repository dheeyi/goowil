<template>
  <div id="app">
    <v-app id="inspire">
      <app-application></app-application>
    </v-app>
  </div>
</template>

<script>
import AppApplication from './components/layout/Application'

export default {
  name: 'app',
  components: {
    AppApplication
  }
}
</script>

<style>

</style>
