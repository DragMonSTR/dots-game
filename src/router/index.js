import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home"
import SetGame from "@/views/SetGame"
import Rules from "@/views/Rules"
import Game from "@/views/Game"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setGame',
    name: 'SetGame',
    component: SetGame
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
