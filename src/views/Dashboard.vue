<template>
  <div class="card">
    <h1>Hello! Main page</h1>

    <p>Here you can navigate to any page and read pre-prepared letters in advance :)</p>

    <router-link :to='{name: "email"}'>To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    const leave = confirm("Are you sure?")

    if (leave) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>

</style>