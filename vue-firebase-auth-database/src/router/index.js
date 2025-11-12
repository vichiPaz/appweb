import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const requireAuth = async (to, from, next) => {
  const user = await store.dispatch('currentUser')

  if (user) {
    next()
  } else {
    next({ name: 'login' })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: () => import('../views/AdministracionView.vue'),
      beforeEnter: requireAuth,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue'),
      beforeEnter: requireAuth,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../views/EditarView.vue'),
      beforeEnter: requireAuth,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router