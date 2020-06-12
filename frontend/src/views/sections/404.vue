<template>
  <base-section id="404">
    <base-heading title="404NotFound" />

    <base-sub-heading
        class="primary--text"
        title="Oh!"
    />

    <base-sub-heading
        space="8"
        title="Looks like this page doesn't exist"
    />

    <base-image
        :src="require('@/assets/logo.svg')"
        class="mx-auto mb-12"
        contain
        height="350"
        width="250"
    />

    <div class="text-center">
      <base-button :to="{ name: 'Home' }">
        Get me Out of Here
      </base-button>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'Section404',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
