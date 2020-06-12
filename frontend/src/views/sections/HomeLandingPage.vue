<template>
  <section id="home-landing-page">
    <v-img
        :min-height="minHeight"
        :src="require('@/assets/home-hero.jpg')"
        class="white--text"
        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
            class="d-flex align-center"
            height="100%"
            max-width="700"
            width="100%"
        >
          <base-heading title="BASIC ADMIN EXAMPLE" />

          <base-body>
            This APP example contains code for FRONTEND and BACKEND.
            It uses Vue, Vuetify, Firebase, Node and Express technologies
            and for database management use Sequelize and PostgreSQL.
          </base-body>

          <div
              :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
              class="d-flex flex-wrap"
          >
            <base-button>
              Discover More
            </base-button>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-button
                :ripple="false"
                class="pa-1"
                height="auto"
                text
            >
              Get Started Now
            </base-button>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHomeLandingPage',
    provide: {
      theme: { isDark: true },
    },
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
