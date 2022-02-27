<template>
  <the-toaster ref="toaster" />
  <p>
    <button @click="success">Add Success Message</button>
    <button @click="error">Add Error Message</button>
  </p>
</template>

<script>
import TheToaster from './components/TheToaster';

export default {
  name: 'App',

  components: { TheToaster },

  methods: {
    // i would just use 1 mrthod in theToaster component and pass the type there, but tests fail
    success() {
      this.$refs.toaster.success('Success ' + new Date().toLocaleTimeString());
    },
    error() {
      this.$refs.toaster.error('Error ' + new Date().toLocaleTimeString());
    },
  },
};
</script>

<style></style>
