<template>
  <toast-provider :timeout="timeout">
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </toast-provider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToastProvider from './context/ToastProvider'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToastProvider,
  },
  data() {
    return {
      timeout: 5000
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
