<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const cursos = computed(() => store.getters.getCursos.filter(c => c.estado)) // Solo mostrar cursos activos
const loadingCursos = computed(() => store.getters.isLoadingCursos)
const isLoggedIn = computed(() => store.getters.isAuthenticated)

const handleImageError = (event) => {
  event.target.src = 'https://picsum.photos/400/200?random=fallback'
}

const getImageUrl = (imgUrl) => {
  if (!imgUrl) return 'https://picsum.photos/400/200?random=default'
  return imgUrl
}

const cursoEnCarrito = (cursoId) => {
  return store.getters.getCursoEnCarrito(cursoId)
}

const inscribirseEnCurso = async (curso) => {
  if (!isLoggedIn.value) {
    const confirmar = confirm('🔐 Para agregar cursos al carrito necesitas iniciar sesión.\n\n¿Deseas ir al login?')
    if (confirmar) {
      router.push('/login')
    }
    return
  }
  
  if (cursoEnCarrito(curso.id)) {
    alert('✅ Este curso ya está en tu carrito')
    return
  }
  
  if (curso.inscritos >= curso.cupos) {
    alert('❌ No hay cupos disponibles para este curso')
    return
  }
  
  try {
    store.dispatch('agregarAlCarrito', curso)
    await store.dispatch('reducirCupo', curso.id)
    alert(`🛒 ¡Curso "${curso.nombre}" agregado al carrito! Se ha reservado tu cupo.`) 
  } catch (error) {
    console.error('Error al inscribirse en el curso:', error)
    alert('❌ Error al inscribirse en el curso: ' + error.message)
  }
}

onMounted(() => {
  store.dispatch('getCursos')
})
</script>

<template>
  <div class="home-view">
    <header class="home-view__header">
      <h1>Catálogo de Cursos</h1>
      <p class="text-secondary">Explora nuestra oferta académica inspirada en 31 Minutos</p>
    </header>

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
        <img 
          :src="getImageUrl(curso.img)" 
          :alt="`Banner del curso ${curso.nombre}`" 
          class="course-card__image"
          @error="handleImageError"
          loading="lazy"
        />
        <div class="course-card-content">
          <h3 class="text-lg font-bold">{{ curso.nombre }}</h3>
          <p class="text-sm text-secondary mt-2">{{ curso.descripcion }}</p>
          
          <div class="course-card__details">
            <span><strong>Precio:</strong> ${{ parseInt(curso.precio).toLocaleString() }}</span>
            <span><strong>Duración:</strong> {{ curso.duracion }}</span>
            <span><strong>Cupos:</strong> {{ curso.inscritos }} / {{ curso.cupos }}</span>
          </div>

          <div class="course-card-actions">
            <button 
              @click="inscribirseEnCurso(curso)"
              class="btn"
              :class="cursoEnCarrito(curso.id) ? 'btn-secondary' : 'btn-primary'"
              :disabled="cursoEnCarrito(curso.id) || (curso.cupos - curso.inscritos <= 0)"
            >
              <span v-if="cursoEnCarrito(curso.id)">✅ En Carrito</span>
              <span v-else-if="(curso.cupos - curso.inscritos <= 0)">❌ Sin Cupos</span>
              <span v-else>🛒 Inscribirse</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 2rem 0;
}

.home-view__header {
  text-align: center;
  margin-bottom: 2rem;
}

.home-view__header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
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
</style>
