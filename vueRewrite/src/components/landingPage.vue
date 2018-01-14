<template>
  <v-parallax src="@/assets/pebbles.png">
    <Menu></Menu>
    <v-layout>
      <v-card>
        <h1>Hello World!</h1>
      </v-card>
    </v-layout>
  </v-parallax>
</template>

<script>
  import Menu from '@/components/menu-components/ToolbarMenu.vue'

  export default {
    data () {
      return {
        msg: 'Landing Page Loaded'
      }
    }
  }
</script>
