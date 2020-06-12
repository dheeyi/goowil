<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.user
    this.$router.replace('/')
    this.$router.go('/')
  }
}
</script>
