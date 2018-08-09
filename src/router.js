import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Disqus from '@/views/Disqus'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      name: 'disqus',
      component: Disqus
    }
  ]
})
