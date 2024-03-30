<template>
  <div v-if="email">
    <h2>{{email.theme}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <router-link to="/dashboard">
      <button class="btn">Close</button>
    </router-link>
  </div>
  <div v-else>
    <h4>Choose a letter</h4>
    <a href="#"></a>
  </div>
</template>

<script>

export default {
  inject: ['emails'],
  props: ['mailId'],
  computed: {
    email() {
      return this.emails.find(e => e.id === +this.mailId)
    }
  }
}
</script>

<style scoped>

</style>