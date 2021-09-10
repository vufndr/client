<template>
  <div style="padding-top: 65px;">
    Login
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  mounted() {
    this.login();
  },
  methods: {
    login() {
      axios.get('/sanctum/csrf-cookie').then(() => {
          // Login...
      });
    }
  }
}
</script>

<style>
.demo-card__media {
  background-image: url('https://picsum.photos/200');
}

.demo-card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.demo-card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
}
</style>