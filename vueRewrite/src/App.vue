<template>
  <v-app dark>
    <toolbar v-if="this.$route.path != '/'" color="primary" app></toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <foot v-if="this.$route.path != '/'"></foot>
  </v-app>
</template>

<script>
import toolbar from './components/menu-components/ToolbarMenu.vue'
import foot from './components/miscellaneous/Footer.vue'
export default {
  name: 'App',
  data () {
    return {
      showNav: true
    }
  },
  components: {
    toolbar,
    foot
  }
}
</script>
