<template>
  <base-section id="git-hub-apps">
    <base-section-heading title="GitHub Apps">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            md="6"
        >
          <base-avatar-card
              v-bind="feature"
              align="left"
              horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGitHubApps',

    data: () => ({
      features: [
        {
          title: 'React Native and firebase',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Onboarding in Android',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Spring boot - Rest API',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Spring boot and SWING',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'RecyclerView java Android',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'Testing vueJS',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
