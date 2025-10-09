import { createStore } from 'vuex'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore"
import { auth, db } from "../fireBaseConfig"
import router from "../router"

export default createStore({
  state: {
    // Estado del usuario
    user: null,
    loadingUser: false,
    
    // Estado de los cursos
    cursos: [],
    loadingCursos: false,
    
    // Listener para desuscribirse
    unsubscribeCursos: null
  },
  
  getters: {
    // Getters para usuario
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.user !== null,
    getUserEmail: (state) => state.user?.email || '',
    
    // Getters para cursos
    getCursos: (state) => state.cursos,
    getCursoById: (state) => (id) => {
      return state.cursos.find(curso => curso.id === id)
    },
    getCursosActivos: (state) => {
      return state.cursos.filter(curso => curso.estado === true)
    },
    getTotalCursos: (state) => state.cursos.length,
    isLoadingCursos: (state) => state.loadingCursos,
    isLoadingUser: (state) => state.loadingUser
  },
  
  mutations: {
    // Mutations para usuario
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOADING_USER(state, loading) {
      state.loadingUser = loading
    },
    
    // Mutations para cursos
    SET_CURSOS(state, cursos) {
      state.cursos = cursos
    },
    SET_LOADING_CURSOS(state, loading) {
      state.loadingCursos = loading
    },
    ADD_CURSO(state, curso) {
      state.cursos.push(curso)
    },
    UPDATE_CURSO(state, cursoActualizado) {
      const index = state.cursos.findIndex(c => c.id === cursoActualizado.id)
      if (index !== -1) {
        state.cursos[index] = cursoActualizado
      }
    },
    DELETE_CURSO(state, cursoId) {
      state.cursos = state.cursos.filter(c => c.id !== cursoId)
    },
    SET_UNSUBSCRIBE_CURSOS(state, unsubscribe) {
      state.unsubscribeCursos = unsubscribe
    },
    RESET_CURSOS(state) {
      state.cursos = []
      if (state.unsubscribeCursos) {
        state.unsubscribeCursos()
        state.unsubscribeCursos = null
      }
    }
  },
  
  actions: {
    // Actions para autenticación
    async registerUser({ commit }, { email, password }) {
      commit('SET_LOADING_USER', true)
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        commit('SET_USER', { email: user.email, uid: user.uid })
        router.push({ name: 'home' })
      } catch (error) {
        console.error('Error al registrar usuario:', error)
        alert('Error al registrar usuario: ' + error.message)
        throw error
      } finally {
        commit('SET_LOADING_USER', false)
      }
    },
    
    async loginUser({ commit }, { email, password }) {
      commit('SET_LOADING_USER', true)
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        commit('SET_USER', { email: user.email, uid: user.uid })
        router.push({ name: 'home' })
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
        alert('Error al iniciar sesión: ' + error.message)
        throw error
      } finally {
        commit('SET_LOADING_USER', false)
      }
    },
    
    async logoutUser({ commit }) {
      try {
        await signOut(auth)
        commit('SET_USER', null)
        commit('RESET_CURSOS')
        router.push({ name: 'login' })
      } catch (error) {
        console.error('Error al cerrar sesión:', error)
        alert('Error al cerrar sesión: ' + error.message)
      }
    },
    
    currentUser({ commit }) {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            commit('SET_USER', { email: user.email, uid: user.uid })
          } else {
            commit('SET_USER', null)
            commit('RESET_CURSOS')
          }
          resolve(user)
          unsubscribe()
        })
      })
    },
    
    // Actions para cursos con onSnapshot (tiempo real)
    async getCursos({ commit, state }) {
      if (state.unsubscribeCursos) {
        // Ya existe un listener activo
        return
      }
      
      commit('SET_LOADING_CURSOS', true)
      try {
        const cursosCollection = collection(db, 'cursos')
        
        // onSnapshot para escuchar cambios en tiempo real
        const unsubscribe = onSnapshot(cursosCollection, (snapshot) => {
          const cursos = []
          snapshot.forEach((doc) => {
            cursos.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('SET_CURSOS', cursos)
          commit('SET_LOADING_CURSOS', false)
        }, (error) => {
          console.error('Error al obtener cursos:', error)
          commit('SET_LOADING_CURSOS', false)
        })
        
        commit('SET_UNSUBSCRIBE_CURSOS', unsubscribe)
      } catch (error) {
        console.error('Error al configurar listener de cursos:', error)
        commit('SET_LOADING_CURSOS', false)
      }
    },
    
    async addCurso({ commit, dispatch }, curso) {
      try {
        const cursosCollection = collection(db, 'cursos')
        const docRef = await addDoc(cursosCollection, curso)
        console.log('Curso agregado con ID:', docRef.id)
        
        // Forzar recarga de datos para asegurar sincronización
        await dispatch('getCursos')
        
        return docRef.id
      } catch (error) {
        console.error('Error al agregar curso:', error)
        alert('Error al agregar curso: ' + error.message)
        throw error
      }
    },
    
    async updateCurso({ commit, dispatch }, curso) {
      try {
        const { id, ...cursoData } = curso
        const cursoDoc = doc(db, 'cursos', id)
        await updateDoc(cursoDoc, cursoData)
        console.log('Curso actualizado:', id)
        
        // Forzar recarga de datos para asegurar sincronización
        await dispatch('getCursos')
        
        // No necesitamos hacer commit porque onSnapshot lo detectará automáticamente
      } catch (error) {
        console.error('Error al actualizar curso:', error)
        alert('Error al actualizar curso: ' + error.message)
        throw error
      }
    },
    
    async deleteCurso({ commit }, id) {
      try {
        const cursoDoc = doc(db, 'cursos', id)
        await deleteDoc(cursoDoc)
        console.log('Curso eliminado:', id)
        // No necesitamos hacer commit porque onSnapshot lo detectará automáticamente
      } catch (error) {
        console.error('Error al eliminar curso:', error)
        alert('Error al eliminar curso: ' + error.message)
        throw error
      }
    }
  }
})

