<template>
  <v-app dark>
    <toolbar color="primary" app></toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer class="body-2" color="primary" app>
      <div>Made with</div>
      <v-icon color="deep-orange darken-2" class="mx-1">favorite</v-icon>
      <div>by Zach Bauer</div>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import toolbar from './components/menu-components/ToolbarMenu.vue'

  export default {
    name: 'App',
    components: {
      toolbar
    }
  }
</script>
