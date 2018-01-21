<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3>
        <v-card>
          <v-toolbar color="secondary">
            <v-toolbar-title>{{this.item.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list>
            <v-list-group v-for='item in info' :key='item.blocks.head'>
              <v-list-tile slot='item' @click=''>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.head }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for='subItem in item.blocks' v-bind:key='subItem.title' @click=''>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.content }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
          <v-card-actions>
            <v-btn color='secondary' href='http://www.generalassemb.ly'>Visit GA</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        info: [{
          title: 'General Assembly',
          blocks: [{
            head: 'Overview',
            content: 'Currently enrolled in the 12-week web-development immersive at General Assembly. The class is split up into four units each designed to push us further and help us understand the basics needed to succeed in a wed developer position'
          },
          {
            head: 'Unit One',
            content: 'Unit One focused on learning vanilla HTML, CSS, and JavaScript'
          },
          {
            head: 'Unit Two',
            content: 'Unit Two exposed us to backend development in Express and Axios, MongoDB, and templating engines such as Handlebars and Pug.'
          },
          {
            head: 'Unit Three',
            content: 'Unit three, the current Unit, focuses on learning React + Redux and the paradigm shift that came with it.'
          },
          {
            head: 'Unit Four',
            content: 'Unit four will focus introduce us to Ruby on Rails and SQL databases.'
          },
          {
            head: 'Miscellaneous',
            content: 'The course also introduced some higher-level computer science topics such as binary search trees, stack and queues, and linked lists.'
          }
          ]
        }]
      }
    }
  }

</script>
