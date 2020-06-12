<script>
  import View from '@/views/View'
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: '404',
    metaInfo: { title: 'Oops! No Page Found' },
    extends: View,
    mixins: [
      LoadSections([
        '404',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
