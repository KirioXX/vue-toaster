<template>
  <div class="wrapper">
    <h1>Page 1</h1>
    <div>
      <input v-model="message" placeholder="edit me"/>
      <button @click="addToast(message ? `page1: ${message}` : 'page1: Hello World!')">Press Me</button>
    </div>
    <router-link to="/page-2">Go to Page2</router-link>
  </div>
</template>

<script>
import ToastMixin from '../mixins/ToastMixin';

export default {
  name: 'Page1',
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
