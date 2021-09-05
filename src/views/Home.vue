<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
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
