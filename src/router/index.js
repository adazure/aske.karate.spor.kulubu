import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Athlets from '@/components/Athlets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Hello
    },
    {
      path: '/Athlets',
      name: 'Athlets',
      component: Athlets
    }
  ]
})
