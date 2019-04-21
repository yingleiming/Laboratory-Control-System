<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <MainPanel></MainPanel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
