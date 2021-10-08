<template>
  <div class="flex">
  </div>
</template>

<script>
export default {
  name: 'Dropbox',
  mounted() {
    console.log(this.$route.params);
    this.$router.push({ name: 'settings' });
  },
}
</script>
