<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import Login from './views/Login'

export default {
  components: {TheNavbar, Login},
  data() {
    return {
      isAuth: true
    }
  },
  methods: {
    login() {
      this.isAuth = true
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page)
      } else {
        this.$router.push('/dashboard')
      }
    },
    logout() {
      this.isAuth = false
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      })
    }
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 1, theme: 'Buy PS5 now!'},
        {id: 2, theme: 'What is Vue Router'},
        {id: 3, theme: 'All info about Vue'},
        {id: 4, theme: 'Who is John Doe'},
        {id: 5, theme: 'Follow us'}
      ]
    }
  }
}
</script>

<style>
</style>
