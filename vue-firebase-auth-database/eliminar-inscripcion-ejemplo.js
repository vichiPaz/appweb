import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

// Configuración de Firebase (usa la misma que en tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyD7hL8k7J8k7J8k7J8k7J8k7J8k7J8k7J8",
  authDomain: "vue-firebase-auth-database.firebaseapp.com",
  projectId: "vue-firebase-auth-database",
  storageBucket: "vue-firebase-auth-database.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefghijklmnop"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function eliminarInscripcionEjemplo() {
  try {
    console.log('🔍 Buscando inscripciones de ejemplo...')
    
    // Obtener todas las inscripciones
    const inscripcionesRef = collection(db, 'inscripciones')
    const snapshot = await getDocs(inscripcionesRef)
    
    let encontradas = 0
    
    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data()
      
      // Buscar inscripciones con email de ejemplo
      if (data.usuarioEmail === 'ejemplo@email.com' || 
          data.cursoNombre === 'Curso de Ejemplo') {
        console.log(`📋 Encontrada inscripción de ejemplo: ${docSnapshot.id}`)
        console.log(`   Email: ${data.usuarioEmail}`)
        console.log(`   Curso: ${data.cursoNombre}`)
        console.log(`   Estado: ${data.estado}`)
        
        // Eliminar la inscripción
        deleteDoc(doc(db, 'inscripciones', docSnapshot.id))
          .then(() => {
            console.log(`✅ Inscripción eliminada: ${docSnapshot.id}`)
            encontradas++
          })
          .catch((error) => {
            console.error(`❌ Error al eliminar inscripción ${docSnapshot.id}:`, error)
          })
      }
    })
    
    if (encontradas === 0) {
      console.log('ℹ️ No se encontraron inscripciones de ejemplo para eliminar')
    } else {
      console.log(`🎯 Proceso completado. ${encontradas} inscripción(es) de ejemplo eliminada(s)`)
    }
    
  } catch (error) {
    console.error('❌ Error al eliminar inscripciones de ejemplo:', error)
  }
}

// Ejecutar la función
eliminarInscripcionEjemplo()

