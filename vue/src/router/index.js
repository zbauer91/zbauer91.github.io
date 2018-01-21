import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage.vue'
import Home from '@/components/Main/HomePage/HomePage.vue'
import Experience from '@/components/Main/Experience/Experience.vue'
import Projects from '@/components/Main/Projects/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
