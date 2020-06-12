<template>
  <v-app>
    <home-system-bar />
    <home-app-bar />
    <home-page />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
      HomeSystemBar: () => import('@/layouts/home/HomeSystemBar'),
      HomeAppBar: () => import('@/layouts/home/HomeAppBar'),
      HomePage: () => import('@/layouts/home/HomePage'),
    }
  }
</script>
