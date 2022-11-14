import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import List from '../components/list/List'

Vue.use(Router)

// 项目下的所有路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})