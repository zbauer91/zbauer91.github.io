<template>
  <v-app dark>
    <NavBar v-if="this.$route.path != '/'" color="primary" app></NavBar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Footer v-if="this.$route.path != '/'" />
  </v-app>
</template>

<script>
  import NavBar from './components/SmallComponents/NavBar/NavBar.vue'
  import Footer from './components/SmallComponents/Footer/Footer.vue'
  export default {
    name: 'App',
    data () {
      return {
        msg: 'Page Loaded'
      }
    },
    components: {
      NavBar,
      Footer
    }
  }

</script>
