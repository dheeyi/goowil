<template>
  <div class="home">
    <v-flex class="text-xs-center">
      <p>{{ msg }}</p>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'App para el manejo de Docentes, Aulas, Materias y Horarios utilizando VueJS, Node, Express, Sequelize y PostgreSQL'
    }
  }
}
</script>

<style >

</style>
