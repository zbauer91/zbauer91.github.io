<template>
  <v-toolbar color="primary">
    <v-toolbar-title class="hidden-sm-and-down">Red Rabbit Web Development</v-toolbar-title>
    <v-toolbar-title class="hidden-md-and-up">Red Rabbit WebDev</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="experience">Experience</v-btn>
      <v-btn flat>Stuff</v-btn>
      <v-btn flat>Projects</v-btn>
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
