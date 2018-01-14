// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import Landing from './components/LandingPage.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)
Vue.component('landing-page', Landing)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
