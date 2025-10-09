<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

// Estados reactivos
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const cursoToDelete = ref(null)

// Formulario para nuevo curso
const nuevoCurso = ref({
  codigo: '',
  nombre: '',
  estado: true,
  precio: '',
  duracion: '',
  descripcion: '',
  cupos: 0,
  inscritos: 0,
  img: ''
})

// Computed
const cursos = computed(() => store.getters.getCursos)
const loadingCursos = computed(() => store.getters.isLoadingCursos)

// Métodos
const openAddModal = () => {
  nuevoCurso.value = {
    codigo: '',
    nombre: '',
    estado: true,
    precio: '',
    duracion: '',
    descripcion: '',
    cupos: 0,
    inscritos: 0,
    img: 'https://picsum.photos/300/200?random=new'
  }
  showAddModal.value = true
}

const closeAddModal = () => {
  showAddModal.value = false
}

const confirmAddCurso = async () => {
  try {
    await store.dispatch('addCurso', { ...nuevoCurso.value })
    closeAddModal()
    alert('✅ Curso agregado exitosamente')
  } catch (error) {
    alert('❌ Error al agregar curso: ' + error.message)
  }
}

const openDeleteModal = (curso) => {
  cursoToDelete.value = curso
  showDeleteModal.value = true
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  cursoToDelete.value = null
}

const confirmDeleteCurso = async () => {
  try {
    await store.dispatch('deleteCurso', cursoToDelete.value.id)
    closeDeleteModal()
    alert('✅ Curso eliminado exitosamente')
  } catch (error) {
    alert('❌ Error al eliminar curso: ' + error.message)
  }
}

const editCurso = (curso) => {
  router.push({ name: 'editar', params: { id: curso.id } })
}

const toggleEstadoCurso = async (curso) => {
  try {
    await store.dispatch('updateCurso', {
      id: curso.id,
      ...curso,
      estado: !curso.estado
    })
    alert(`✅ Curso ${curso.estado ? 'desactivado' : 'activado'} exitosamente`)
  } catch (error) {
    alert('❌ Error al actualizar curso: ' + error.message)
  }
}


onMounted(() => {
  store.dispatch('getCursos')
})
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: var(--treinta-uno-negro); text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Administración de Cursos</h1>
      <p class="lead" style="color: var(--treinta-uno-negro); font-weight: 500;">Gestiona todos los cursos del sistema</p>
    </div>

    <!-- Botón para agregar curso -->
    <div class="text-center mb-4">
      <button 
        @click="openAddModal"
        class="btn btn-lg"
        style="
          background: linear-gradient(45deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 50%, var(--treinta-uno-rojo) 100%);
          border: 3px solid var(--treinta-uno-negro);
          color: var(--treinta-uno-negro);
          font-weight: bold;
          padding: 15px 30px;
          border-radius: 15px;
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        "
        @mouseover="$event.target.style.transform = 'translateY(-3px) scale(1.02)'"
        @mouseout="$event.target.style.transform = 'translateY(0) scale(1)'"
      >
        ➕ Agregar Nuevo Curso
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loadingCursos" class="text-center py-5">
      <div class="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3" style="color: var(--treinta-uno-negro);">Cargando cursos...</p>
    </div>

    <!-- Sin cursos -->
    <div v-else-if="cursos.length === 0" class="text-center py-5">
      <div class="alert alert-info" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-beige);">
        <h4 style="color: var(--treinta-uno-negro);">📚 No hay cursos disponibles</h4>
        <p style="color: var(--treinta-uno-negro);">Aún no se han agregado cursos al sistema.</p>
      </div>
    </div>

    <!-- Tabla de cursos -->
    <div v-else class="table-responsive">
      <table class="table table-striped table-hover" style="border: 3px solid var(--treinta-uno-negro); border-radius: 15px; overflow: hidden;">
        <thead style="background: linear-gradient(45deg, var(--treinta-uno-azul), var(--treinta-uno-verde)); color: white;">
          <tr>
            <th style="border: none; font-weight: bold;">Código</th>
            <th style="border: none; font-weight: bold;">Nombre</th>
            <th style="border: none; font-weight: bold;">Precio</th>
            <th style="border: none; font-weight: bold;">Duración</th>
            <th style="border: none; font-weight: bold;">Cupos</th>
            <th style="border: none; font-weight: bold;">Estado</th>
            <th style="border: none; font-weight: bold;">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="curso in cursos" :key="curso.id" style="background: var(--treinta-uno-blanco);">
            <td style="border: 1px solid var(--treinta-uno-negro); font-weight: bold;">{{ curso.codigo }}</td>
            <td style="border: 1px solid var(--treinta-uno-negro);">
              <strong style="color: var(--treinta-uno-azul);">{{ curso.nombre }}</strong>
              <br>
              <small style="color: #666;">{{ curso.descripcion }}</small>
            </td>
            <td style="border: 1px solid var(--treinta-uno-negro);">
              <span style="color: var(--treinta-uno-verde); font-weight: bold;">${{ parseInt(curso.precio).toLocaleString() }}</span>
            </td>
            <td style="border: 1px solid var(--treinta-uno-negro);">{{ curso.duracion }}</td>
            <td style="border: 1px solid var(--treinta-uno-negro);">
              <span style="color: var(--treinta-uno-azul);">{{ curso.inscritos }}</span> / 
              <span style="color: var(--treinta-uno-rojo);">{{ curso.cupos }}</span>
            </td>
            <td style="border: 1px solid var(--treinta-uno-negro);">
              <span 
                :class="curso.estado ? 'badge bg-success' : 'badge bg-danger'"
                style="font-weight: bold;"
              >
                {{ curso.estado ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td style="border: 1px solid var(--treinta-uno-negro);">
              <div class="btn-group" role="group">
                <button 
                  @click="editCurso(curso)"
                  class="btn btn-sm"
                  style="
                    background: var(--treinta-uno-azul);
                    color: white;
                    border: 2px solid var(--treinta-uno-negro);
                    font-weight: bold;
                  "
                  title="Editar curso"
                >
                  ✏️
                </button>
                <button 
                  @click="toggleEstadoCurso(curso)"
                  class="btn btn-sm"
                  :style="{
                    background: curso.estado ? 'var(--treinta-uno-naranja)' : 'var(--treinta-uno-verde)',
                    color: 'white',
                    border: '2px solid var(--treinta-uno-negro)',
                    fontWeight: 'bold'
                  }"
                  :title="curso.estado ? 'Desactivar curso' : 'Activar curso'"
                >
                  {{ curso.estado ? '⏸️' : '▶️' }}
                </button>
                <button 
                  @click="openDeleteModal(curso)"
                  class="btn btn-sm"
                  style="
                    background: var(--treinta-uno-rojo);
                    color: white;
                    border: 2px solid var(--treinta-uno-negro);
                    font-weight: bold;
                  "
                  title="Eliminar curso"
                >
                  🗑️
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal para agregar curso -->
    <div v-if="showAddModal" class="modal show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="border: 3px solid var(--treinta-uno-negro); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <div class="modal-header" style="background: linear-gradient(45deg, var(--treinta-uno-amarillo), var(--treinta-uno-naranja)); color: var(--treinta-uno-negro); border-bottom: 3px solid var(--treinta-uno-negro);">
            <h5 class="modal-title fw-bold" style="color: var(--treinta-uno-negro); text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">➕ Agregar Nuevo Curso</h5>
            <button type="button" class="btn-close" @click="closeAddModal" style="filter: invert(1);"></button>
          </div>
          <div class="modal-body" style="background: var(--treinta-uno-blanco);">
            <form @submit.prevent="confirmAddCurso">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Código:</label>
                  <input v-model="nuevoCurso.codigo" type="text" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Nombre:</label>
                  <input v-model="nuevoCurso.nombre" type="text" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Precio:</label>
                  <input v-model="nuevoCurso.precio" type="number" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Duración:</label>
                  <input v-model="nuevoCurso.duracion" type="text" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Cupos:</label>
                  <input v-model.number="nuevoCurso.cupos" type="number" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">URL Imagen:</label>
                  <input v-model="nuevoCurso.img" type="url" class="form-control" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" placeholder="https://ejemplo.com/imagen.jpg">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold" style="color: var(--treinta-uno-negro);">Descripción:</label>
                <textarea v-model="nuevoCurso.descripcion" class="form-control" rows="3" style="border: 2px solid var(--treinta-uno-negro); border-radius: 10px; background: var(--treinta-uno-beige);" required placeholder="Describe el curso..."></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input v-model="nuevoCurso.estado" type="checkbox" class="form-check-input" id="estado" style="border: 2px solid var(--treinta-uno-negro);">
                  <label class="form-check-label fw-bold" for="estado" style="color: var(--treinta-uno-negro);">✅ Curso activo</label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer" style="background: var(--treinta-uno-beige); border-top: 3px solid var(--treinta-uno-negro); padding: 1.5rem;">
            <button type="button" class="btn btn-lg me-3" @click="closeAddModal" style="
              background: var(--treinta-uno-rojo);
              color: white;
              border: 3px solid var(--treinta-uno-negro);
              font-weight: bold;
              border-radius: 10px;
              padding: 10px 25px;
            ">❌ Cancelar</button>
            <button type="button" class="btn btn-lg" @click="confirmAddCurso" style="
              background: linear-gradient(45deg, var(--treinta-uno-verde), var(--treinta-uno-azul));
              color: white;
              border: 3px solid var(--treinta-uno-negro);
              font-weight: bold;
              border-radius: 10px;
              padding: 10px 25px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            ">✅ Agregar Curso</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para confirmar eliminación -->
    <div v-if="showDeleteModal" class="modal show d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content" style="border: 3px solid var(--treinta-uno-rojo); border-radius: 20px;">
          <div class="modal-header" style="background: var(--treinta-uno-rojo); color: white;">
            <h5 class="modal-title fw-bold">⚠️ Confirmar Eliminación</h5>
            <button type="button" class="btn-close btn-close-white" @click="closeDeleteModal"></button>
          </div>
          <div class="modal-body" style="background: var(--treinta-uno-blanco);">
            <p style="color: var(--treinta-uno-negro); font-weight: bold;">
              ¿Estás seguro de que deseas eliminar el curso <strong style="color: var(--treinta-uno-rojo);">{{ cursoToDelete?.nombre }}</strong>?
            </p>
            <p style="color: var(--treinta-uno-negro);">
              Esta acción no se puede deshacer.
            </p>
          </div>
          <div class="modal-footer" style="background: var(--treinta-uno-beige);">
            <button type="button" class="btn btn-secondary" @click="closeDeleteModal" style="border: 2px solid var(--treinta-uno-negro); font-weight: bold;">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="confirmDeleteCurso" style="border: 2px solid var(--treinta-uno-negro); font-weight: bold;">Sí, borrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 56px);
}

.modal {
  z-index: 1050;
}

.btn-group .btn {
  margin: 0 2px;
}

.table th, .table td {
  vertical-align: middle;
}
</style>