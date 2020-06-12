<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-image
          :src="require('@/assets/logo.svg')"
          class="mr-3 hidden-xs-only"
          contain
          max-width="52"
          width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
            class="hidden-sm-and-down"
            optional
        >
          <v-tab
              v-for="(name, i) in itemsDrawer"
              :key="i"
              :to="{ name }"
              :exact="name === 'Home'"
              :ripple="false"
              active-class="text--primary"
              class="font-weight-bold"
              min-width="96"
              text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
      />

    </v-app-bar>

    <home-drawer
        v-model="drawer"
        :items="itemsDrawer"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',
    components: {
      HomeDrawer: () => import('./HomeDrawer'),
    },
    data: () => ({
      drawer: false,
      itemsDrawer: [
        'Login'
      ]
    }),
  }
</script>
