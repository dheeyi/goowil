<template>
  <div class="home">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h2 class="display-3">Welcome to the site</h2>
          <span class="subheading" v-text="msg"></span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card>
      <v-layout align-center justify-center>
        <img src="../../assets/er.png"/>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'This application uses: Vue 2, NodeJS, Express, Sequelize, PostGreSQL and Vuetify. System that allows to create Schedules.'
      }
    }
  }
</script>

<style>

</style>
