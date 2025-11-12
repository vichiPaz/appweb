import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import RegisterView from '@/views/RegisterView.vue'
import { createStore } from 'vuex'
import { createRouter, createMemoryHistory } from 'vue-router' 

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/login', component: { template: '<div>Login</div>' } }
  ]
})

describe('RegisterView.vue', () => {
  const registerUserMock = vi.fn()


  const createStoreMock = (loadingUser = false) => {
    return createStore({
      getters: {
        isLoadingUser: () => loadingUser
      },
      actions: {
        registerUser: registerUserMock
      }
    })
  }

  it('renders inputs and button', () => {
    const wrapper = mount(RegisterView, {
      global: { plugins: [createStoreMock(), router] }
    })
    expect(wrapper.find('input#email').exists()).toBe(true)
    expect(wrapper.find('input#password').exists()).toBe(true)
    expect(wrapper.find('input#confirmPassword').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('updates v-model when typing', async () => {
    const wrapper = mount(RegisterView, {
      global: { plugins: [createStoreMock(), router] }
    })
    await wrapper.find('input#email').setValue('test@example.com')
    await wrapper.find('input#password').setValue('123456')
    await wrapper.find('input#confirmPassword').setValue('123456')

    expect(wrapper.vm.email).toBe('test@example.com')
    expect(wrapper.vm.password).toBe('123456')
    expect(wrapper.vm.confirmPassword).toBe('123456')
  })

  it('calls alert if fields are invalid or passwords do not match', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const wrapper = mount(RegisterView, {
      global: { plugins: [createStoreMock(), router] }
    })

    await wrapper.find('form').trigger('submit.prevent')
    expect(alertMock).toHaveBeenCalledWith(
      'Todos los campos son obligatorios y la contraseña debe tener al menos 6 caracteres'
    )

    await wrapper.find('input#email').setValue('test@example.com')
    await wrapper.find('input#password').setValue('123456')
    await wrapper.find('input#confirmPassword').setValue('654321')
    await wrapper.find('form').trigger('submit.prevent')
    expect(alertMock).toHaveBeenCalledWith('Las contraseñas no coinciden')

    alertMock.mockRestore()
  })

  it('calls store.dispatch when form is valid', async () => {
    const wrapper = mount(RegisterView, {
      global: { plugins: [createStoreMock(), router] }
    })
    await wrapper.find('input#email').setValue('test@example.com')
    await wrapper.find('input#password').setValue('123456')
    await wrapper.find('input#confirmPassword').setValue('123456')
    await wrapper.find('form').trigger('submit.prevent')

    expect(registerUserMock).toHaveBeenCalledOnce()
    expect(registerUserMock).toHaveBeenCalledWith(expect.anything(), {
      email: 'test@example.com',
      password: '123456'
    })
  })

  it('shows spinner and loading text when loadingUser is true', () => {
    const wrapper = mount(RegisterView, {
      global: { plugins: [createStoreMock(true), router] }
    })
    const button = wrapper.find('button[type="submit"]')
    expect(button.attributes('disabled')).toBeDefined()
    expect(button.text()).toContain('Creando cuenta...')
    expect(wrapper.find('.spinner-border').exists()).toBe(true)
  })
})