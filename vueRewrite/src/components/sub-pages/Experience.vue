<template>
  <v-container grid-list-lg justify-content-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media class="white--text" height="200px" src="this.images.ga">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span>
              <br>
              <span>Whitehaven Beach</span>
              <br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 lg3>
        <v-card>
          <v-card-title>L.B. Foster</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 lg3>
        <v-card>
          <v-card-title>Helomics Corporation</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        images: {
          ga: '../../assets/pebbles.jpeg',
          lbf: '',
          hel: ''
        }
      }
    },
    
  }
</script>
