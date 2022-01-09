import { createRouter, createWebHistory } from 'vue-router'
import Game from "../views/Game"

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
