import Vue from 'vue'
import Router from 'vue-router'
import WelcomeHome from '@/components/WelcomeHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeHome',
      component: WelcomeHome
    }
  ]
})
