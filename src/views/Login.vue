<template>
  <div class="mt-12 w-1/3 mx-auto">
      <div class="m-2">
        <ui-textfield fullwidth v-model="email">
        Email
      </ui-textfield>
      </div>
      <div class="m-2">
        <ui-textfield input-type="password" fullwidth v-model="password">
          Password
        </ui-textfield>
      </div>
      <div class="m-2">
        <ui-button class="w-full" raised @click="login">
          Login
        </ui-button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: 'test@example.com',
      password: 'password',
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(['authenticate']),
    login() {
      axios.get('/sanctum/csrf-cookie').then(() => {
        axios.post('/login', {
          email: this.email,
          password: this.password,
        }).then(() => {
          this.authenticate();
          this.$router.push({ name: 'search' });
        });
      });
    }
  }
}
</script>
