<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cursos = computed(() => store.getters.getCursos)
const loadingCursos = computed(() => store.getters.isLoadingCursos)
const userEmail = computed(() => store.getters.getUserEmail)

const handleImageError = (event) => {
  // Si falla la imagen, usar una imagen de respaldo
  event.target.src = 'https://picsum.photos/300/200?random=fallback'
}

const getImageUrl = (imgUrl) => {
  if (!imgUrl) return 'https://picsum.photos/300/200?random=default'
  // Agregar timestamp para evitar cache
  const separator = imgUrl.includes('?') ? '&' : '?'
  return `${imgUrl}${separator}t=${Date.now()}`
}

onMounted(() => {
  store.dispatch('getCursos')
})
</script>

<template>
  <div class="home-container">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold" style="color: var(--treinta-uno-negro); text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Catálogo de Cursos</h1>
        <p class="lead" style="color: var(--treinta-uno-negro); font-weight: 500;">Explora nuestra oferta académica inspirada en 31 Minutos</p>
      </div>

      <!-- Loading State -->
      <div v-if="loadingCursos" class="text-center py-5">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3">Cargando cursos...</p>
      </div>

      <!-- Sin cursos -->
      <div v-else-if="cursos.length === 0" class="text-center py-5">
        <div class="alert alert-info">
          <h4>No hay cursos disponibles</h4>
          <p>Aún no se han agregado cursos al sistema.</p>
        </div>
      </div>

      <!-- Grid de Cursos -->
      <div v-else class="row g-4">
        <div v-for="curso in cursos" :key="curso.id" class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm curso-card">
            <div class="card-img-top-wrapper">
              <img 
                :src="getImageUrl(curso.img)" 
                :alt="curso.nombre"
                class="card-img-top"
                @error="handleImageError"
                loading="lazy"
              >
              <span 
                v-if="curso.estado" 
                class="badge position-absolute top-0 end-0 m-3"
                style="background-color: var(--treinta-uno-verde); color: white; font-weight: bold;"
              >
                ✅ Disponible
              </span>
              <span 
                v-else 
                class="badge position-absolute top-0 end-0 m-3"
                style="background-color: var(--treinta-uno-rojo); color: white; font-weight: bold;"
              >
                ❌ No disponible
              </span>
            </div>
            
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title fw-bold" style="color: var(--treinta-uno-negro);">{{ curso.nombre }}</h5>
                <span class="badge" style="background-color: var(--treinta-uno-azul); color: white; font-weight: bold;">{{ curso.codigo }}</span>
              </div>
              
              <p class="card-text text-muted flex-grow-1">{{ curso.descripcion }}</p>
              
              <div class="curso-info mt-3">
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">
                    <i class="bi bi-clock"></i> Duración:
                  </span>
                  <strong>{{ curso.duracion }}</strong>
                </div>
                
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">
                    <i class="bi bi-cash"></i> Precio:
                  </span>
                  <strong style="color: var(--treinta-uno-verde);">${{ Number(curso.precio).toLocaleString() }}</strong>
                </div>
                
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">
                    <i class="bi bi-people"></i> Cupos:
                  </span>
                  <strong>{{ curso.cupos }}</strong>
                </div>
                
                <div class="d-flex justify-content-between">
                  <span class="text-muted">
                    <i class="bi bi-person-check"></i> Inscritos:
                  </span>
                  <strong>{{ curso.inscritos }}</strong>
                </div>
              </div>
              
              <div class="mt-3">
                <div class="progress" style="height: 10px; border: 2px solid var(--treinta-uno-negro); border-radius: 10px;">
                  <div 
                    class="progress-bar" 
                    :style="{ 
                      width: `${(curso.inscritos / curso.cupos) * 100}%`,
                      backgroundColor: '#4169E1',
                      borderRadius: '8px'
                    }"
                  ></div>
                </div>
                <small class="text-muted">
                  {{ curso.cupos - curso.inscritos }} cupos disponibles
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background: linear-gradient(135deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 100%);
  min-height: calc(100vh - 56px);
  position: relative;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
  pointer-events: none;
}

.curso-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 3px solid var(--treinta-uno-negro);
  border-radius: 20px;
  overflow: hidden;
  background: var(--treinta-uno-blanco);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.curso-card:hover {
  transform: translateY(-15px) rotate(2deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
  border-color: var(--treinta-uno-rojo);
}

.card-img-top-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
  background-color: #f0f0f0;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: white;
  padding: 20px;
}

.curso-info {
  font-size: 0.9rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;
}

.display-4 {
  color: #2c3e50;
}

.badge {
  font-size: 0.8rem;
  padding: 0.5rem 0.8rem;
}
</style>