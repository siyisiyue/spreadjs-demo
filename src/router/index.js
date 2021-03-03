import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SpreadJs from '../views/SpreadJs'
import SpreadJsList from '../views/SpreadJsList'
import SpreadJsBind from '../views/SpreadJsBind'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/config',
    component:SpreadJs
  },
  {
    path:'/list',
    component:SpreadJsList
  },
  {
    path:'/SpreadJs',
    component:SpreadJsBind
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
