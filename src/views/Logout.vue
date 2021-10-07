<template>
  <div style="padding-top: 65px;">
    Logout
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Logout',
  mounted() {
    this.logout();
  },
  methods: {
    ...mapActions(['unauthenticate']),
    logout() {
      axios.get('/api/test')
        .then((response) => {
          console.log(response);
        });
    },
  }
}
</script>
