// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import App from './App'
// import Home from './components/HomePage.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify, {
  theme: {
    primary: '#546e7a',
    secondary: '#819ca9',
    accent: '#b71c1c',
    error: '#d50000'
  }
})
Vue.use(Vuex)
// Vue.component('home-page', Home)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
