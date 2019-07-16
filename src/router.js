import Vue from 'vue'
import Router from 'vue-router'
import ViewA from './views/ViewA.vue'

Vue.use(Router)

export const routes = [
    {
      path: '',
      name: 'app_b:view_a',
      component: ViewA
    },
    {
      path: 'view-b',
      name: 'app_b:view_b',
      component: () => import(/* webpackChunkName: "ViewB" */ './views/ViewB.vue'),
      children: [{
        path: 'view-c',
        name: 'app_b:view_c',
        component: () => import(/* webpackChunkName: "ViewB" */ './views/ViewC.vue'),
      }]
    }
  ]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
