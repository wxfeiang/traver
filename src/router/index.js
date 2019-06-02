import Vue from 'vue'
import Router from 'vue-router'
// luyou
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})