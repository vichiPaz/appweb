
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Login from '../views/LoginView.vue' 
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

describe('LoginView.vue', () => {
  
  const loginUserMock = vi.fn()

  const createStoreMock = (loadingUser = false) => {
    return createStore({
      getters: {
        isLoadingUser: () => loadingUser
      },
      actions: {
        loginUser: loginUserMock
      }
    })
  }

  // Mock de rutas 
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'Home' },
      { path: '/register', name: 'Register' }
    ]
  })

  it('renders the email and password inputs and the submit button', () => {
    const wrapper = mount(Login, { global: { plugins: [createStoreMock(), router] } })
    expect(wrapper.find('input#email').exists()).toBe(true)
    expect(wrapper.find('input#password').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('updates v-model when typing in inputs', async () => {
    const wrapper = mount(Login, { global: { plugins: [createStoreMock(), router] } })
    await wrapper.find('input#email').setValue('test@example.com')
    await wrapper.find('input#password').setValue('123456')
    expect(wrapper.vm.email).toBe('test@example.com')
    expect(wrapper.vm.password).toBe('123456')
  })

  it('calls store.dispatch when submitting the form', async () => {
    const wrapper = mount(Login, { global: { plugins: [createStoreMock(), router] } })
    await wrapper.find('input#email').setValue('test@example.com')
    await wrapper.find('input#password').setValue('123456')
    await wrapper.find('form').trigger('submit.prevent')
    expect(loginUserMock).toHaveBeenCalledOnce()
    expect(loginUserMock).toHaveBeenCalledWith(
      expect.anything(),
      { email: 'test@example.com', password: '123456' }
    )
  })

  it('shows an alert if fields are invalid', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const wrapper = mount(Login, { global: { plugins: [createStoreMock(), router] } })
    await wrapper.find('form').trigger('submit.prevent')
    expect(alertMock).toHaveBeenCalledWith(
      'Todos los campos son obligatorios y la contraseña debe tener al menos 6 caracteres'
    )
    alertMock.mockRestore()
  })

  it('shows a spinner and "Cargando..." text when loadingUser is true', () => {
    const wrapper = mount(Login, { global: { plugins: [createStoreMock(true), router] } })
    const button = wrapper.find('button[type="submit"]')
    expect(button.attributes('disabled')).toBeDefined()
    expect(button.text()).toContain('Cargando...')
    expect(wrapper.find('.spinner-border').exists()).toBe(true)
  })
})