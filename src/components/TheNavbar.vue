<template>
  <header class="navbar" v-if="visible">
    <router-link to="/" style="color: #454444;"><h3>Gmail clone</h3></router-link>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Main</router-link></li>
      <li>
        <router-link to="/mail">Emails</router-link>
      </li>
      <li><router-link to="/login" @click.prevent="logout">Logout</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  inject: ['logout']
}
</script>