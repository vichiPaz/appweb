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
  doc,
  getDoc
} from "firebase/firestore"
import { auth, db } from "../fireBaseConfig"
import router from "../router"

export default createStore({
  state: {
    user: null,
    loadingUser: false,
    
    cursos: [],
    loadingCursos: false,
    
    carrito: [],
    
    inscripciones: [],
    loadingInscripciones: false,
    
    unsubscribeCursos: null,
    unsubscribeInscripciones: null
  },
  
  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.user !== null,
    getUserEmail: (state) => state.user?.email || '',
    
    getCursos: (state) => state.cursos,
    getCursoById: (state) => (id) => {
      return state.cursos.find(curso => curso.id === id)
    },
    getCursosActivos: (state) => {
      return state.cursos.filter(curso => curso.estado === true)
    },
    getTotalCursos: (state) => state.cursos.length,
    isLoadingCursos: (state) => state.loadingCursos,
    isLoadingUser: (state) => state.loadingUser,
    
    getCarrito: (state) => state.carrito,
    getTotalCarrito: (state) => state.carrito.length,
    getTotalPrecioCarrito: (state) => state.carrito.reduce((total, item) => total + item.cursoPrecio, 0),
    getCursoEnCarrito: (state) => (cursoId) => state.carrito.find(item => item.cursoId === cursoId),
    
    getInscripciones: (state) => state.inscripciones,
    isLoadingInscripciones: (state) => state.loadingInscripciones,
    getInscripcionesPorCurso: (state) => (cursoId) => state.inscripciones.filter(inscripcion => inscripcion.cursoId === cursoId)
  },
  
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOADING_USER(state, loading) {
      state.loadingUser = loading
    },
    
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
    },
    
    AGREGAR_AL_CARRITO(state, curso) {
      const existeEnCarrito = state.carrito.find(item => item.cursoId === curso.id)
      if (!existeEnCarrito) {
        state.carrito.push({
          cursoId: curso.id,
          cursoNombre: curso.nombre,
          cursoPrecio: parseInt(curso.precio),
          cursoImagen: curso.img,
          cursoCodigo: curso.codigo
        })
      }
    },
    
    ELIMINAR_DEL_CARRITO(state, cursoId) {
      state.carrito = state.carrito.filter(item => item.cursoId !== cursoId)
    },
    
    LIMPIAR_CARRITO(state) {
      state.carrito = []
    },
    
    SET_INSCRIPCIONES(state, inscripciones) {
      state.inscripciones = inscripciones
    },
    
    SET_LOADING_INSCRIPCIONES(state, loading) {
      state.loadingInscripciones = loading
    },
    
    SET_UNSUBSCRIBE_INSCRIPCIONES(state, unsubscribe) {
      state.unsubscribeInscripciones = unsubscribe
    },
    
    RESET_INSCRIPCIONES(state) {
      state.inscripciones = []
      if (state.unsubscribeInscripciones) {
        state.unsubscribeInscripciones()
        state.unsubscribeInscripciones = null
      }
    }
  },
  
  actions: {
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
          }
          resolve(user)
          unsubscribe()
        })
      })
    },
    
    async getCursos({ commit, state }) {
      if (state.unsubscribeCursos) {
        return
      }
      
      commit('SET_LOADING_CURSOS', true)
      try {
        const cursosCollection = collection(db, 'cursos')
        
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
        
        await dispatch('getCursos')
        
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
      } catch (error) {
        console.error('Error al eliminar curso:', error)
        alert('Error al eliminar curso: ' + error.message)
        throw error
      }
    },
    
    agregarAlCarrito({ commit }, curso) {
      commit('AGREGAR_AL_CARRITO', curso)
    },
    
    async eliminarDelCarrito({ commit, dispatch }, cursoId) {
      commit('ELIMINAR_DEL_CARRITO', cursoId)
      await dispatch('restaurarCupo', cursoId)
    },
    
    async limpiarCarrito({ commit, state, dispatch }) {
      for (const item of state.carrito) {
        await dispatch('restaurarCupo', item.cursoId)
      }
      commit('LIMPIAR_CARRITO')
    },
    
    async reducirCupo({ commit }, cursoId) {
      try {
        const cursoDoc = doc(db, 'cursos', cursoId)
        const cursoSnapshot = await getDoc(cursoDoc)
        
        if (cursoSnapshot.exists()) {
          const cursoData = cursoSnapshot.data()
          const nuevosInscritos = (cursoData.inscritos || 0) + 1
          
          await updateDoc(cursoDoc, {
            inscritos: nuevosInscritos
          })
          
          console.log('Cupo reducido exitosamente para curso:', cursoId)
        }
      } catch (error) {
        console.error('Error al reducir cupo:', error)
        throw error
      }
    },
    
    async restaurarCupo({ commit }, cursoId) {
      try {
        const cursoDoc = doc(db, 'cursos', cursoId)
        const cursoSnapshot = await getDoc(cursoDoc)
        
        if (cursoSnapshot.exists()) {
          const cursoData = cursoSnapshot.data()
          const nuevosInscritos = Math.max((cursoData.inscritos || 0) - 1, 0)
          
          await updateDoc(cursoDoc, {
            inscritos: nuevosInscritos
          })
          
          console.log('Cupo restaurado exitosamente para curso:', cursoId)
        }
      } catch (error) {
        console.error('Error al restaurar cupo:', error)
        throw error
      }
    },
    
    async getInscripciones({ commit, state }) {
      if (state.unsubscribeInscripciones) {
        return
      }
      commit('SET_LOADING_INSCRIPCIONES', true)
      try {
        const inscripcionesCollection = collection(db, 'inscripciones')
        const unsubscribe = onSnapshot(inscripcionesCollection, (snapshot) => {
          const inscripciones = []
          snapshot.forEach((doc) => {
            inscripciones.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('SET_INSCRIPCIONES', inscripciones)
          commit('SET_LOADING_INSCRIPCIONES', false)
        }, (error) => {
          console.error('Error al obtener inscripciones:', error)
          commit('SET_LOADING_INSCRIPCIONES', false)
        })
        commit('SET_UNSUBSCRIBE_INSCRIPCIONES', unsubscribe)
      } catch (error) {
        console.error('Error al configurar listener de inscripciones:', error)
        commit('SET_LOADING_INSCRIPCIONES', false)
      }
    },
    
    async procesarCompra({ commit, state }, { metodoPago }) {
      try {
        const user = state.user
        if (!user) {
          throw new Error('Usuario no autenticado')
        }
        
        if (state.carrito.length === 0) {
          throw new Error('El carrito está vacío')
        }
        
        const inscripciones = state.carrito.map(item => ({
          usuarioId: user.uid,
          usuarioEmail: user.email,
          cursoId: item.cursoId,
          cursoNombre: item.cursoNombre,
          cursoPrecio: item.cursoPrecio,
          fechaInscripcion: new Date(),
          estado: 'confirmada',
          metodoPago: metodoPago,
          total: item.cursoPrecio
        }))
        
        for (const inscripcion of inscripciones) {
          await addDoc(collection(db, 'inscripciones'), inscripcion)
        }
        
        commit('LIMPIAR_CARRITO')
        
        console.log('Compra procesada exitosamente')
        return true
        
      } catch (error) {
        console.error('Error al procesar compra:', error)
        throw error
      }
    }
  }
})