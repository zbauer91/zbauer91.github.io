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
    <v-navigation-drawer class="hidden-med-and-up" fixed v-model="drawer" right app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => {
      drawer: false
    }
  }
</script>
