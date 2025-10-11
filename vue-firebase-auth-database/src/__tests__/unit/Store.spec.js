import { describe, it, expect, vi } from 'vitest'


vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})), 
  addDoc: vi.fn(() => Promise.resolve({ id: 'fake-id' })),
  collection: vi.fn(),
  getDocs: vi.fn(),
  deleteDoc: vi.fn(),
  updateDoc: vi.fn(),
  doc: vi.fn(),
  onSnapshot: vi.fn(),
  query: vi.fn(),
  where: vi.fn()
}))

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => ({}))
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn()
}))

import store from '@/store/index.js'



describe('Store Vuex - Cursos', () => {
  it('agrega un curso correctamente usando addCurso', async () => {
    const fakeCurso = { nombre: 'Test Curso', codigo: '123' }

    const result = await store.dispatch('addCurso', fakeCurso)

    expect(result).toBe('fake-id')
  })
})