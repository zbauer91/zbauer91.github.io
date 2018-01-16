<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 order-sm2 order-xs1>
        <v-card>
          <v-card-media class="hidden-lg-and-up" :src='this.personalPhoto.src' height='400px'></v-card-media>
          <v-card-media class="hidden-md-and-down" :src='this.personalPhoto.src' height='700px'></v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 order-sm1 order-xs2>
        <v-layout row wrap>
          <v-flex>
            <v-card>
              <v-card-text class="display-1 text-xs-center hidden-md-and-down">Zach Bauer</v-card-text>
              <v-card-text class="subheading text-xs-center hidden-lg-and-up">Zach Bauer</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <v-card-text class="headline hidden-md-and-down">{{ this.personalInfo.partOne }}</v-card-text>
              <v-card-text class="subheading hidden-lg-and-up">{{ this.personalInfo.partOne }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <v-card-text class="headline hidden-md-and-down">{{ this.personalInfo.partTwo }}</v-card-text>
              <v-card-text class="subheading hidden-lg-and-up">{{ this.personalInfo.partTwo }}</v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- Displays between medium and large viewports -->
  <!-- <v-card-media class="hidden-md-and-up":src='this.personalPhoto.src' height="250px"></v-card-media> -->
</template>

<script>
  export default {
    created() {
      console.log(this.cardInfo.heightLg)
    },
    data() {
      return {
        personalPhoto: {
          src: require('@/assets/photo.jpg')
        },
        cardInfo: {
          heightLg: "700px",
          heightSm: "400px"
        },
        personalInfo: {
          partOne: 'I am a novice full-stack developer expanding my career opportunities by engaging in the Web Development Immersive at General Assembly in Washington, D.C. I am someone who consistently delivers great product, and who finds creative, resourceful ways to solve new problems. I am empowered to find results, and know who and when to ask for help.',
          partTwo: 'I have been described as an overachiever and enjoy going above and beyond on the tasks assigned to me. I take a lot of pride in the work I do, and make sure that everything I deliver is of a high quality. With these traits, My goal is to work at a company that does the same. I want to work with people that love what they do, and enjoy the people they work with. Upon completion of this program, and with my new skills, I intend to find a fulfilling career in a field I love.'
        }
      }
    }
  }
</script>

<style>
  .pic-holder {
    height: 100%;
    width: 100%;
    margin: 10px;
  }
</style>
