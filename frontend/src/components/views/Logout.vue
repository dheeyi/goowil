<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.token
    this.$router.replace('/')
    this.$router.go({ path: '/' })
  }
}
</script>
