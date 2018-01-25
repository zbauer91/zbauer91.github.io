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
import toolbar from './components/Main-Components/ToolbarMenu.vue'
import foot from './components/Main-Components/Footer.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Page Loaded'
    }
  },
  components: {
    toolbar,
    foot
  }
}

</script>
