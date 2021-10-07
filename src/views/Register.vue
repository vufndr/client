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
        <ui-textfield input-type="password" fullwidth v-model="confirmPassword">
          Confirm Password
        </ui-textfield>
      </div>
      <div class="m-2">
        <ui-button class="w-full" raised @click="register">
          Register
        </ui-button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions(['authenticate']),
    register() {
      axios.get('/sanctum/csrf-cookie').then(() => {
        axios.post('/register', {
          email: this.email,
          password: this.password,
        }).then((response) => {
          console.log(response);
          this.authenticate();
        });
      });
    }
  }
}
</script>
