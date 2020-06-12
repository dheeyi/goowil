<template>
  <v-system-bar
    v-if="showSystemBar"
    app
    color="#262626"
    class="px-4"
    dark
    height="58"
  >
    <v-spacer />

    <v-btn
        class="text-capitalize subtitle-2 mr-6"
        color="success"
        :href="urlGit"
        target="_blank"
        min-width="125"
    >
      Live preview in HEROKU
    </v-btn>

    <v-btn
        class="text-capitalize subtitle-2 font-weight-bold"
        color="primary"
        light
        :href="urlDownload"
        target="_blank"
        min-width="125"
    >
      Download this example
    </v-btn>

    <v-divider
        class="ml-6 mr-3"
        vertical
    />

    <v-btn
        class="text-capitalize grey--text mr-n2 mr-sm-n1"
        small
        text
        @click="showSystemBar = false"
    >
      <v-icon
          color="white"
          :left="$vuetify.breakpoint.smAndUp"
      >
        mdi-close
      </v-icon>

      <span class="hidden-xs-only">
        Close
      </span>
    </v-btn>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'HomeSystemBar',
    props: {
      urlGit: {
        type: String,
        default: () => ("https://github.com/dheeyi"),
      },
      urlDownload: {
        type: String,
        default: () => ("https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-system-bar"),
      },
    },
    data: () =>({
      showSystemBar: true
    })
  }
</script>

<style scoped>

</style>
