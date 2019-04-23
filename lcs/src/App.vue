<template>
  <div id="app">
    <Login></Login>
    <MainPanel></MainPanel>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'app',
  components: {
    Login
    ,MainPanel
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
