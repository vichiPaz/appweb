import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdministracionView from '@/views/AdministracionView.vue'


const mockDispatch = vi.fn()
vi.mock('vuex', () => ({
  useStore: () => ({
    getters: {
      getCursos: [
        { id: '1', nombre: 'Matemáticas', estado: true },
        { id: '2', nombre: 'Historia', estado: false }
      ],
      isLoadingCursos: false,
      getInscripciones: [],
      isLoadingInscripciones: false
    },
    dispatch: mockDispatch
  })
}))


vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn()
  })
}))

describe('AdministracionView.vue', () => {
  let wrapper

  beforeEach(() => {
    // Reiniciamos el mock antes de cada test
    vi.clearAllMocks()
    wrapper = shallowMount(AdministracionView)
  })


  it('abre el modal de agregar curso al llamar openAddModal()', () => {
    wrapper.vm.openAddModal()
    expect(wrapper.vm.showAddModal).toBe(true)
    expect(wrapper.vm.nuevoCurso.img).toContain('https://picsum.photos')
  })

  
  it('cierra el modal de agregar curso al llamar closeAddModal()', () => {
    wrapper.vm.showAddModal = true
    wrapper.vm.closeAddModal()
    expect(wrapper.vm.showAddModal).toBe(false)
  })

 
  it('muestra modal de confirmación al confirmar agregar curso', () => {
    wrapper.vm.nuevoCurso = { nombre: 'Curso Test' }
    wrapper.vm.confirmAddCurso()
    expect(wrapper.vm.showConfirmCreateModal).toBe(true)
    expect(wrapper.vm.cursoToCreate.nombre).toBe('Curso Test')
  })


  it('cancela la creación de un curso y limpia el curso temporal', () => {
    wrapper.vm.cursoToCreate = { nombre: 'Curso Test' }
    wrapper.vm.showConfirmCreateModal = true
    wrapper.vm.cancelCreateCurso()
    expect(wrapper.vm.showConfirmCreateModal).toBe(false)
    expect(wrapper.vm.cursoToCreate).toBeNull()
  })

 
  it('cambia de vista correctamente al llamar cambiarVista()', () => {
    wrapper.vm.cambiarVista('inscripciones')
    expect(wrapper.vm.vistaActual).toBe('inscripciones')
  })

 
  it('abre y cierra el modal de eliminación correctamente', () => {
    const fakeCurso = { id: 1, nombre: 'Curso Test' }
    wrapper.vm.openDeleteModal(fakeCurso)
    expect(wrapper.vm.showDeleteModal).toBe(true)
    expect(wrapper.vm.cursoToDelete).toEqual(fakeCurso)

    wrapper.vm.closeDeleteModal()
    expect(wrapper.vm.showDeleteModal).toBe(false)
    expect(wrapper.vm.cursoToDelete).toBeNull()
  })


  it('obtiene el nombre correcto de un curso existente', () => {
    const nombre = wrapper.vm.obtenerNombreCurso('2')
    expect(nombre).toBe('Historia')
  })


  it('formatea una fecha correctamente', () => {
    const fecha = new Date('2023-01-01T10:00:00Z')
    const texto = wrapper.vm.formatearFecha(fecha)
    expect(typeof texto).toBe('string')
    expect(texto).toContain('2023')
  })


  it('llama a getCursos y getInscripciones en el montaje', () => {
    mount(AdministracionView)
    expect(mockDispatch).toHaveBeenCalledWith('getCursos')
    expect(mockDispatch).toHaveBeenCalledWith('getInscripciones')
  })


  it('llama a updateCurso con el estado invertido al alternar estado', async () => {
    const fakeCurso = { id: 1, estado: true }
    await wrapper.vm.toggleEstadoCurso(fakeCurso)
    expect(mockDispatch).toHaveBeenCalledWith('updateCurso', expect.objectContaining({
      id: 1,
      estado: false
    }))
  })
})