<template>
  <v-footer class="body-2" color="primary" app>
    <div class="footer-text">Made with</div>
    <v-icon color="deep-orange darken-2" class="mx-1">favorite</v-icon>
    <div class="footer-text">by Zach Bauer</div>
    <v-spacer></v-spacer>
    <div class="footer-text">&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Page Loaded'
      }
    }
  }
</script>

<style>
  .footer-text {
    font-family: 'Special-Elite' !important;
  }
</style>
