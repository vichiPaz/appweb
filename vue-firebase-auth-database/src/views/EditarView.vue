<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()


const codigo = ref('')
const nombre = ref('')
const estado = ref(true)
const precio = ref('')
const duracion = ref('')
const descripcion = ref('')
const cupos = ref(0)
const inscritos = ref(0)
const img = ref('')

const curso = computed(() => store.getters.getCursoById(route.params.id))

onMounted(() => {
  store.dispatch('getCursos')
  

  setTimeout(() => {
    if (curso.value) {
      codigo.value = curso.value.codigo
      nombre.value = curso.value.nombre
      estado.value = curso.value.estado
      precio.value = curso.value.precio
      duracion.value = curso.value.duracion
      descripcion.value = curso.value.descripcion
      cupos.value = curso.value.cupos
      inscritos.value = curso.value.inscritos
      img.value = curso.value.img
    }
  }, 500)
})

const handleSubmit = async () => {
  if (!nombre.value || !codigo.value) {
    return alert('El nombre y código son obligatorios')
  }

  try {
    await store.dispatch('updateCurso', {
      id: route.params.id,
      codigo: codigo.value,
      nombre: nombre.value,
      estado: estado.value,
      precio: precio.value,
      duracion: duracion.value,
      descripcion: descripcion.value,
      cupos: Number(cupos.value),
      inscritos: Number(inscritos.value),
      img: img.value
    })
    
    alert('✅ Curso actualizado correctamente. Los cambios se verán reflejados en todas las vistas.')
    

    setTimeout(() => {
      router.push({ name: 'administracion' })
    }, 1000)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="edit-page">
    <div class="form-container">
      <div class="form-header">
        <h2>Editar Curso</h2>
        <p class="text-secondary">Actualiza la información del curso</p>
      </div>
      
      <form @submit.prevent="handleSubmit" v-if="curso">
        <div class="form-grid">
          <div class="form-group">
            <label for="codigo">Código *</label>
            <input type="text" id="codigo" v-model="codigo" required>
          </div>
          
          <div class="form-group">
            <label for="nombre">Nombre *</label>
            <input type="text" id="nombre" v-model="nombre" required>
          </div>

          <div class="form-group form-group--full-width">
            <label for="descripcion">Descripción</label>
            <textarea id="descripcion" rows="3" v-model="descripcion"></textarea>
          </div>

          <div class="form-group">
            <label for="precio">Precio</label>
            <input type="number" id="precio" v-model="precio">
          </div>
          
          <div class="form-group">
            <label for="duracion">Duración</label>
            <input type="text" id="duracion" placeholder="ej: 2 meses" v-model="duracion">
          </div>

          <div class="form-group">
            <label for="cupos">Cupos</label>
            <input type="number" id="cupos" v-model="cupos">
          </div>
          
          <div class="form-group">
            <label for="inscritos">Inscritos</label>
            <input type="number" id="inscritos" v-model="inscritos">
          </div>

          <div class="form-group form-group--full-width">
            <label for="img">URL de la imagen:</label>
            <input type="url" id="img" v-model="img" placeholder="https://ejemplo.com/imagen.jpg">
            
            <div v-if="img" class="image-preview">
              <p class="text-sm text-secondary">Vista previa:</p>
              <img 
                :src="img" 
                alt="Vista previa" 
                @error="$event.target.style.display='none'"
              >
            </div>
          </div>

          <div class="form-group form-group--full-width">
            <label class="form-check-label">
              <input type="checkbox" id="estado" v-model="estado">
              Curso activo/disponible
            </label>
          </div>
        </div>

        <div class="form-actions">
          <button 
            type="button" 
            class="btn btn-secondary"
            @click="router.push({ name: 'administracion' })"
          >
            Cancelar
          </button>
          <button type="submit" class="btn btn-primary">
            💾 Guardar Cambios
          </button>
        </div>
      </form>
      <div v-else class="loading-state">
        <div class="spinner"></div>
        <p>Cargando curso...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit-page {
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.form-container {
  width: 100%;
  max-width: 800px;
  padding: 2.5rem;
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group--full-width {
  grid-column: 1 / -1;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text-primary);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-check-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-primary);
}

.image-preview {
  margin-top: 1rem;
}
.image-preview img {
  max-width: 200px;
  max-height: 150px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.loading-state {
  text-align: center;
  padding: 4rem 0;
}

.spinner {
  width: 3rem;
  height: 3rem;
  border: 4px solid var(--color-primary);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>