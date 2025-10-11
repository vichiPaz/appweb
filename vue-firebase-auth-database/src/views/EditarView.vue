<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

// Datos del formulario
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
  
  // Esperar a que se cargue el curso
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
    
    // Pequeño delay para asegurar que los datos se sincronicen
    setTimeout(() => {
      router.push({ name: 'administracion' })
    }, 1000)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow">
          <div class="card-body p-4">
            <h2 class="text-center mb-4" style="color: var(--treinta-uno-negro);">Editar Curso</h2>
            
            <form @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="codigo" class="form-label">Código *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="codigo"
                    v-model="codigo"
                    required
                  >
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="nombre" class="form-label">Nombre *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="nombre"
                    v-model="nombre"
                    required
                  >
                </div>
              </div>

              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea 
                  class="form-control" 
                  id="descripcion"
                  rows="3"
                  v-model="descripcion"
                ></textarea>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="precio" class="form-label">Precio</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    id="precio"
                    v-model="precio"
                  >
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="duracion" class="form-label">Duración</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="duracion"
                    placeholder="ej: 2 meses"
                    v-model="duracion"
                  >
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cupos" class="form-label">Cupos</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    id="cupos"
                    v-model="cupos"
                  >
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="inscritos" class="form-label">Inscritos</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    id="inscritos"
                    v-model="inscritos"
                  >
                </div>
              </div>

              <div class="mb-3">
                <label for="img" class="form-label fw-bold" style="color: var(--treinta-uno-negro);">URL de la imagen:</label>
                <input 
                  type="url" 
                  class="form-control" 
                  id="img"
                  v-model="img"
                  style="border: 2px solid var(--treinta-uno-negro);"
                  placeholder="https://ejemplo.com/imagen.jpg"
                >
                
                <!-- Vista previa de la imagen -->
                <div v-if="img" class="mt-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-azul);">Vista previa:</label>
                  <div class="text-center">
                    <img 
                      :src="img" 
                      alt="Vista previa" 
                      class="img-fluid rounded"
                      style="max-width: 200px; max-height: 150px; border: 2px solid var(--treinta-uno-negro);"
                      @error="$event.target.style.display='none'"
                    >
                  </div>
                </div>
              </div>

              <div class="mb-3 form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="estado"
                  v-model="estado"
                >
                <label class="form-check-label" for="estado">
                  Curso activo/disponible
                </label>
              </div>

              <div class="d-flex gap-2">
                <button type="submit" class="btn btn-primary flex-grow-1">
                  💾 Guardar Cambios
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary"
                  @click="router.push({ name: 'administracion' })"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 20px;
  border: 3px solid var(--treinta-uno-negro);
  background: var(--treinta-uno-blanco);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn {
  padding: 12px;
  font-weight: 600;
  border: 2px solid var(--treinta-uno-negro);
}

.btn-primary {
  background: linear-gradient(135deg, var(--treinta-uno-azul) 0%, var(--treinta-uno-verde) 100%);
  color: white;
}
</style>