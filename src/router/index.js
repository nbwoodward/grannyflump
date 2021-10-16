import Vue from 'vue'
import VueRouter from 'vue-router'
import GrannyFlump from '@/pages/GrannyFlump.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: GrannyFlump
  },
  {
    path: '/:encoded',
    component: GrannyFlump
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
