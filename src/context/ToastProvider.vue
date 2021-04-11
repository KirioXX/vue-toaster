<template>
  <span>
    <slot/>
    <div class="toast-wrapper">
      <toast v-for="toast in toasts" :key="toast.id" :toast="toast" :timeout="timeout"/>
    </div>
  </span>
</template>

<script>
import Toast from '../components/Toast'
export default {
  components: {
    'toast': Toast
  },
  props: {
    timeout: Number,
  },
  data() {
    return {
      toasts: []
    }
  },
  methods: {
    addToast(message) {
      this.toasts.push({
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
        message,
      })
    },
    removeToast(id) {
      this.toasts = this.toasts.filter(toast => toast.id !== id);
    }
  },
  provide() {
    return {
      addToast: this.addToast,
      removeToast: this.removeToast,
    }
  }
}
</script>

<style scoped>
.toast-wrapper {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
