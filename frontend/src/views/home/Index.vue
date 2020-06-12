<script>
  import View from '@/views/View'
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',
    metaInfo: { title: 'Home' },
    extends: View,
    mixins: [
      LoadSections([
        'home-landing-page',
        'git-hub-apps',
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
