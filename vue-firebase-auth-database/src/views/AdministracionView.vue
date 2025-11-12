<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const showAddModal = ref(false);
const showDeleteModal = ref(false);
const cursoToDelete = ref(null);
const showConfirmCreateModal = ref(false);
const cursoToCreate = ref(null);

const nuevoCurso = ref({
  codigo: "",
  nombre: "",
  estado: true,
  precio: "",
  duracion: "",
  descripcion: "",
  cupos: 0,
  inscritos: 0,
  img: "",
});

const vistaActual = ref("cursos");

const cursos = computed(() => store.getters.getCursos);
const loadingCursos = computed(() => store.getters.isLoadingCursos);
const inscripciones = computed(() => store.getters.getInscripciones);
const loadingInscripciones = computed(
  () => store.getters.isLoadingInscripciones
);

const openAddModal = () => {
  nuevoCurso.value = {
    codigo: "",
    nombre: "",
    estado: true,
    precio: "",
    duracion: "",
    descripcion: "",
    cupos: 0,
    inscritos: 0,
    img: `https://picsum.photos/seed/${Date.now()}/400/200`,
  };
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const confirmAddCurso = () => {
  cursoToCreate.value = { ...nuevoCurso.value };
  showConfirmCreateModal.value = true;
};

const createCursoFinal = async () => {
  try {
    await store.dispatch("addCurso", { ...cursoToCreate.value });
    showConfirmCreateModal.value = false;
    closeAddModal();
    alert("✅ Curso agregado exitosamente");
  } catch (error) {
    alert("❌ Error al agregar curso: " + error.message);
  }
};

const cancelCreateCurso = () => {
  showConfirmCreateModal.value = false;
  cursoToCreate.value = null;
};

const openDeleteModal = (curso) => {
  cursoToDelete.value = curso;
  showDeleteModal.value = true;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  cursoToDelete.value = null;
};

const confirmDeleteCurso = async () => {
  try {
    await store.dispatch("deleteCurso", cursoToDelete.value.id);
    closeDeleteModal();
    alert("✅ Curso eliminado exitosamente");
  } catch (error) {
    alert("❌ Error al eliminar curso: " + error.message);
  }
};

const editCurso = (curso) => {
  router.push({ name: "editar", params: { id: curso.id } });
};

const toggleEstadoCurso = async (curso) => {
  try {
    await store.dispatch("updateCurso", {
      id: curso.id,
      ...curso,
      estado: !curso.estado,
    });
    alert(`✅ Curso ${curso.estado ? "desactivado" : "activado"} exitosamente`);
  } catch (error) {
    alert("❌ Error al actualizar curso: " + error.message);
  }
};

const cambiarVista = (vista) => {
  vistaActual.value = vista;
};

const obtenerNombreCurso = (cursoId) => {
  const curso = cursos.value.find((c) => c.id === cursoId);
  return curso ? curso.nombre : "Curso no encontrado";
};

const inscripcionesPorCurso = computed(() => {
  const agrupadas = {};
  inscripciones.value.forEach((inscripcion) => {
    if (!agrupadas[inscripcion.cursoId]) {
      agrupadas[inscripcion.cursoId] = {
        cursoNombre: inscripcion.cursoNombre,
        alumnos: [],
      };
    }
    agrupadas[inscripcion.cursoId].alumnos.push(inscripcion);
  });
  return agrupadas;
});

const formatearFecha = (fecha) => {
  if (!fecha) return "N/A";
  const date = fecha.toDate ? fecha.toDate() : new Date(fecha);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(() => {
  store.dispatch("getCursos");
  store.dispatch("getInscripciones");
});
</script>

<template>
  <div class="admin-panel">
    <header class="admin-panel__header">
      <h1>Panel de Administración</h1>
      <p class="text-secondary">Gestiona cursos e inscripciones</p>
    </header>

    <div class="view-switcher">
      <button @click="cambiarVista('cursos')" class="btn" :class="{ 'btn-primary': vistaActual === 'cursos', 'btn-secondary': vistaActual !== 'cursos' }">
        📚 Gestión de Cursos
      </button>
      <button @click="cambiarVista('inscripciones')" class="btn" :class="{ 'btn-primary': vistaActual === 'inscripciones', 'btn-secondary': vistaActual !== 'inscripciones' }">
        👥 Alumnos Inscritos
      </button>
    </div>

    <section v-if="vistaActual === 'cursos'">
      <div class="section-header">
        <button @click="openAddModal" class="btn btn-primary">
          ➕ Agregar Nuevo Curso
        </button>
      </div>

      <div v-if="loadingCursos" class="loading-state">
        <div class="spinner"></div>
        <p>Cargando cursos...</p>
      </div>

      <div v-else-if="cursos.length === 0" class="empty-state">
        <h4>📚 No hay cursos disponibles</h4>
        <p class="text-secondary">Aún no se han agregado cursos al sistema.</p>
      </div>

      <div v-else class="course-grid">
        <article v-for="curso in cursos" :key="curso.id" class="course-card">
          <img :src="curso.img" :alt="`Banner del curso ${curso.nombre}`" class="course-card__image" />
          <div class="course-card-content">
            <h3 class="text-lg font-bold">{{ curso.nombre }}</h3>
            <p class="text-sm text-secondary mt-2">{{ curso.descripcion }}</p>
            <div class="course-card__details">
              <span><strong>Precio:</strong> ${{ parseInt(curso.precio).toLocaleString() }}</span>
              <span><strong>Duración:</strong> {{ curso.duracion }}</span>
              <span><strong>Cupos:</strong> {{ curso.inscritos }} / {{ curso.cupos }}</span>
              <span><strong>Estado:</strong>
                <span class="status-badge" :class="curso.estado ? 'status-badge--active' : 'status-badge--inactive'">
                  {{ curso.estado ? "Activo" : "Inactivo" }}
                </span>
              </span>
            </div>
            <div class="course-card-actions">
              <button @click="editCurso(curso)" class="btn btn-secondary" title="Editar curso">✏️</button>
              <button @click="toggleEstadoCurso(curso)" class="btn btn-secondary" :title="curso.estado ? 'Desactivar curso' : 'Activar curso'">
                {{ curso.estado ? "⏸️" : "▶️" }}
              </button>
              <button @click="openDeleteModal(curso)" class="btn btn-secondary" title="Eliminar curso">🗑️</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section v-if="vistaActual === 'inscripciones'">
      <div v-if="loadingInscripciones" class="loading-state">
        <div class="spinner"></div>
        <p>Cargando inscripciones...</p>
      </div>

      <div v-else-if="inscripciones.length === 0" class="empty-state">
        <h4>📋 No hay inscripciones registradas</h4>
        <p class="text-secondary">Aún no hay estudiantes inscritos en los cursos.</p>
      </div>

      <div v-else class="enrollments-list">
        <div class="summary-card">
          <h5 class="font-bold">📊 Resumen Total</h5>
          <p class="mb-0">
            <strong>Total de inscripciones:</strong> {{ inscripciones.length }}
          </p>
        </div>

        <div v-for="(datos, cursoId) in inscripcionesPorCurso" :key="cursoId" class="enrollment-card">
          <header class="enrollment-card__header">
            <h4 class="font-bold">📚 {{ datos.cursoNombre }}</h4>
            <span class="enrollment-count">{{ datos.alumnos.length }} alumno(s)</span>
          </header>
          <div class="enrollment-card__body">
            <div class="table-responsive">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email del Alumno</th>
                    <th>Fecha de Inscripción</th>
                    <th>Precio Pagado</th>
                    <th>Método de Pago</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(inscripcion, index) in datos.alumnos" :key="inscripcion.id">
                    <td>{{ index + 1 }}</td>
                    <td class="font-bold">{{ inscripcion.usuarioEmail }}</td>
                    <td>{{ formatearFecha(inscripcion.fechaInscripcion) }}</td>
                    <td>${{ Number(inscripcion.cursoPrecio).toLocaleString() }}</td>
                    <td><span class="status-badge status-badge--neutral">{{ inscripcion.metodoPago }}</span></td>
                    <td>
                      <span class="status-badge" :class="`status-badge--${inscripcion.estado}`">
                        {{ inscripcion.estado }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showAddModal" class="modal-overlay" @click.self="closeAddModal">
      <div class="modal-container">
        <header class="modal-header">
          <h5 class="modal-title">➕ Agregar Nuevo Curso</h5>
          <button @click="closeAddModal" class="modal-close-btn">×</button>
        </header>
        <div class="modal-body">
          <form @submit.prevent="confirmAddCurso" class="form-grid">
            <div class="form-group">
              <label>Código:</label>
              <input v-model="nuevoCurso.codigo" type="text" required />
            </div>
            <div class="form-group">
              <label>Nombre:</label>
              <input v-model="nuevoCurso.nombre" type="text" required />
            </div>
            <div class="form-group">
              <label>Precio:</label>
              <input v-model="nuevoCurso.precio" type="number" required />
            </div>
            <div class="form-group">
              <label>Duración:</label>
              <input v-model="nuevoCurso.duracion" type="text" required />
            </div>
            <div class="form-group">
              <label>Cupos:</label>
              <input v-model.number="nuevoCurso.cupos" type="number" required />
            </div>
            <div class="form-group">
              <label>URL Imagen:</label>
              <input v-model="nuevoCurso.img" type="url" placeholder="https://ejemplo.com/imagen.jpg" />
            </div>
            <div class="form-group form-group--full-width">
              <label>Descripción:</label>
              <textarea v-model="nuevoCurso.descripcion" rows="3" required></textarea>
            </div>
            <div class="form-group form-group--full-width">
              <label class="form-check-label">
                <input v-model="nuevoCurso.estado" type="checkbox" />
                Curso activo
              </label>
            </div>
          </form>
        </div>
        <footer class="modal-footer">
          <button @click="closeAddModal" class="btn btn-secondary">Cancelar</button>
          <button @click="confirmAddCurso" class="btn btn-primary">Agregar Curso</button>
        </footer>
      </div>
    </div>

    <div v-if="showConfirmCreateModal" class="modal-overlay" @click.self="cancelCreateCurso">
        <div class="modal-container">
            <header class="modal-header">
                <h5 class="modal-title">✅ Confirmar Creación</h5>
                <button @click="cancelCreateCurso" class="modal-close-btn">×</button>
            </header>
            <div class="modal-body">
                <p>Confirmas que deseas crear el curso <strong>{{ cursoToCreate?.nombre }}</strong>?</p>
            </div>
            <footer class="modal-footer">
                <button @click="cancelCreateCurso" class="btn btn-secondary">Cancelar</button>
                <button @click="createCursoFinal" class="btn btn-primary">Confirmar</button>
            </footer>
        </div>
    </div>

    <div v-if="showDeleteModal" class="modal-overlay" @click.self="closeDeleteModal">
        <div class="modal-container">
            <header class="modal-header">
                <h5 class="modal-title">⚠️ Confirmar Eliminación</h5>
                <button @click="closeDeleteModal" class="modal-close-btn">×</button>
            </header>
            <div class="modal-body">
                <p>¿Estás seguro de que deseas eliminar el curso <strong>{{ cursoToDelete?.nombre }}</strong>?</p>
                <p class="text-secondary">Esta acción no se puede deshacer.</p>
            </div>
            <footer class="modal-footer">
                <button @click="closeDeleteModal" class="btn btn-secondary">Cancelar</button>
                <button @click="confirmDeleteCurso" class="btn btn-primary">Sí, borrar</button>
            </footer>
        </div>
    </div>

  </div>
</template>

<style scoped>
.admin-panel {
  padding: 2rem 0;
}
.admin-panel__header {
  text-align: center;
  margin-bottom: 2rem;
}
.admin-panel__header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
}
.view-switcher {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.section-header {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.loading-state, .empty-state {
  text-align: center;
  padding: 4rem 0;
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
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

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.course-card__image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.course-card__details {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  font-size: 0.75rem;
  color: white;
  text-transform: capitalize;
}
.status-badge--active, .status-badge--confirmada {
  background-color: #10B981;
}
.status-badge--inactive {
  background-color: #EF4444;
}
.status-badge--neutral, .status-badge--pendiente {
    background-color: #F59E0B;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-container {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}
.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}
.modal-close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
}
.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-border);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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
.form-group input, .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: border-color var(--transition-fast);
}
.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}
.form-check-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.enrollments-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.summary-card {
  background-color: var(--color-surface);
  padding: 1.5rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
}
.enrollment-card {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}
.enrollment-card__header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.enrollment-count {
  background-color: var(--color-primary);
  color: var(--color-surface);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}
.enrollment-card__body {
  padding: 0;
}
.table-responsive {
  overflow-x: auto;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
}
.custom-table th,
.custom-table td {
  padding: 0.75rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}
.custom-table thead {
  background-color: var(--color-background);
}
.custom-table th {
  font-weight: 600;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}
.custom-table tbody tr:last-child td {
  border-bottom: none;
}
</style>