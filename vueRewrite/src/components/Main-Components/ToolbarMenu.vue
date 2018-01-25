<template>
  <v-toolbar color="primary">
    <v-btn small icon to="/">
      <img src='../../assets/rrlogo.png' alt='rrlogo'>
    </v-btn>
    <v-toolbar-title class="hidden-xs-only">Red Rabbit Web Development</v-toolbar-title>
    <v-toolbar-title class="hidden-sm-and-up">Red Rabbit WebDev</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/experience">Experience</v-btn>
      <v-btn flat to="/projects">Projects</v-btn>
      <v-btn flat to="/home">Home</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Component Loaded'
    }
  }
}

</script>

<style>
  .title-toolbar {
    font-family: 'Righteous';
  }

  .colored-title {
    color: #b71c1c;
  }

</style>
