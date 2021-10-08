<template>
  <div class="flex">
  </div>
</template>

<script>
export default {
  name: 'Dropbox',
  mounted() {
    console.log(this.$route.params.code);
    this.$router.push({ name: 'settings' });
  },
}
</script>
