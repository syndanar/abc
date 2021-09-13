import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/components/layout.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    component: Layout,
    path: '/',
    children: [
      {
        path: '',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/main.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
