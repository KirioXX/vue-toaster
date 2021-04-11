<template>
  <div class="toast" @click="removeMe">
      <span>{{toast.message}}</span>
  </div>
</template>

<script>
import ToastMixin from '../mixins/ToastMixin';

export default {
  name: 'Toast',
  mixins: [ToastMixin],
  props: {
    toast: {
      type: Object,
      require: true
    },
    timeout: Number,
  },
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    if (this.timeout) {
      this.timer = setTimeout(() => this.removeToast(this.toast.id), this.timeout)
    }
  },
  methods: {
    removeMe() {
      clearTimeout(this.timer);
      this.removeToast(this.toast.id);
    }
  }
}
</script>

<style scoped>
.toast {
  background: lightgrey;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;
  animation: slideIn 0.25s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(50%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
