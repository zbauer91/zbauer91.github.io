import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage.vue'
import Home from '@/components/HomePage.vue'
import Experience from '@/components/sub-pages/Experience.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      props: {
        showNav: false
      },
      mode: 'history',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: {
        showNav: true
      },
      mode: 'history'
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      props: {
        showNav: true
      },
      mode: 'history'
    }
  ]
})
