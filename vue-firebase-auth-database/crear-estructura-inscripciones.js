// Script para crear la estructura de inscripciones en Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC92WRht8eyV1sYdvzTCru6v-BepOAUH_4",
  authDomain: "vue-firebase-2-31128-afb7c.firebaseapp.com",
  projectId: "vue-firebase-2-31128-afb7c",
  storageBucket: "vue-firebase-2-31128-afb7c.firebasestorage.app",
  messagingSenderId: "501569443145",
  appId: "1:501569443145:web:f9707c0544df869974f698",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const crearEstructuraInscripciones = async () => {
  try {
    // Crear una inscripción de ejemplo
    const inscripcionEjemplo = {
      usuarioId: "usuario_ejemplo",
      usuarioEmail: "ejemplo@email.com",
      cursoId: "curso_ejemplo",
      cursoNombre: "Curso de Ejemplo",
      cursoPrecio: 50000,
      fechaInscripcion: new Date(),
      estado: "pendiente", // pendiente, confirmada, pagada
      metodoPago: "transferencia", // transferencia, efectivo, tarjeta
      total: 50000
    };

    // Crear la colección de inscripciones
    const docRef = await addDoc(collection(db, "inscripciones"), inscripcionEjemplo);
    console.log("✅ Estructura de inscripciones creada con ID:", docRef.id);
    
    console.log("📋 Estructura de inscripciones:");
    console.log("- Colección: 'inscripciones'");
    console.log("- Campos: usuarioId, usuarioEmail, cursoId, cursoNombre, cursoPrecio, fechaInscripcion, estado, metodoPago, total");
    console.log("- Estados: pendiente, confirmada, pagada");
    console.log("- Métodos de pago: transferencia, efectivo, tarjeta");
    
  } catch (error) {
    console.error("❌ Error al crear estructura de inscripciones:", error);
  }
};

crearEstructuraInscripciones();
