import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stations',
    name: 'Stations',
    component: () => import(/* webpackChunkName: "stations" */ '../views/Stations.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
