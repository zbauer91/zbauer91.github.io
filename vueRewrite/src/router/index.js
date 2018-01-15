import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage.vue'
import Experience from '@/components/Experience.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    }
  ]
})
