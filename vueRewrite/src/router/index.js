import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage.vue'
import Experience from '@/components/Experience.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    }
  ]
})
