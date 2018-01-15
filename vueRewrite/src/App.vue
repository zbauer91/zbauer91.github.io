<template>
  <v-app dark>
    <toolbar v-if="this.nav" color="primary" app></toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <footer v-if="this.nav"></footer>
  </v-app>
</template>

<script>
import toolbar from './components/menu-components/ToolbarMenu.vue'
import footer from './components/miscellaneous/Footer.vue'
export default {
  name: 'App',
  components: {
    toolbar,
    footer
  }
}
</script>
