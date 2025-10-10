
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: { template: '<div>Home</div>' } },
    { path: '/login', component: { template: '<div>Login</div>' } },
    { path: '/carrito', component: { template: '<div>Carrito</div>' } },
    { path: '/administracion', component: { template: '<div>Admin</div>' } },
  ],
})


const mountNavBarWithStore = (isLoggedIn = false, totalCarrito = 0, userEmail = null) => {
  const store = createStore({
    getters: {
      getUserEmail: () => userEmail,
      getTotalCarrito: () => totalCarrito,
      isAuthenticated: () => isLoggedIn,
    },
  })

  return mount(NavBar, { global: { plugins: [store, router] } })
}

describe('NavBar.vue - basic test with extra checks', () => {
  it('renders correctly when user is logged in', async () => {
    const wrapper = mountNavBarWithStore(true, 3, 'user@example.com')
    await router.isReady()

   
    expect(wrapper.text()).toContain('user@example.com')
    expect(wrapper.text()).toContain('Carrito (3)')
    expect(wrapper.text()).toContain('Administración')
    expect(wrapper.find('button').exists()).toBe(true)

    
    expect(wrapper.text()).toContain('31 MINUTOS - CURSOS')
    expect(wrapper.find('a.navbar-brand').exists()).toBe(true)
  })

  it('renders correctly when user is logged out', async () => {
    const wrapper = mountNavBarWithStore(false)
    await router.isReady()

  
    expect(wrapper.text()).toContain('Iniciar Sesión')
    expect(wrapper.text()).not.toContain('Carrito')
    expect(wrapper.text()).not.toContain('Administración')

    
    expect(wrapper.text()).toContain('31 MINUTOS - CURSOS')
    expect(wrapper.find('a.navbar-brand').exists()).toBe(true)
  })
})

