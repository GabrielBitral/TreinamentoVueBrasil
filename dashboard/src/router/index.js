import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/Index.vue')
const Feedbacks = () => import('../views/Feedbacks/Index.vue')
const Credencials = () => import('../views/Credencials/Index.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
