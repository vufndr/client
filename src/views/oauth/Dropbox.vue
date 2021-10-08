<template>
  <div class="flex">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dropbox',
  mounted() {
    this.oauth();
  },
  methods: {
    oauth() {
      axios.post('/api/oauth/dropbox', {
        code: this.$route.query.code,
        state: this.$route.query.state,
      })
        .then((response) => {
          this.$router.push({ name: 'settings' });
        });
    },
  }
}
</script>
