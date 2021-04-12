<template>
  <div class="wrapper">
    <h1>Page 2</h1>
    <div>
      <input v-model="message" placeholder="edit me"/>
      <button @click="addToast(message ? `page2: ${message}` : 'page2: Hello World!')">Press Me</button>
    </div>
    <router-link to="/page-1">Go to Page1</router-link>
  </div>
</template>

<script>
import ToastMixin from '../mixins/ToastMixin';

export default {
  name: 'Page2',
  mixins: [ToastMixin],
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
