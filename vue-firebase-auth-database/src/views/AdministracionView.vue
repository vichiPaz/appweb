<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cursos = computed(() => store.getters.getCursos)
const loadingCursos = computed(() => store.getters.isLoadingCursos)

onMounted(() => {
  store.dispatch('getCursos')
})
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-4" style="color: var(--treinta-uno-negro); text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Administración de Cursos</h1>
    
    <div class="alert alert-info" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-beige);">
      <strong style="color: var(--treinta-uno-negro);">🚧 Vista en construcción</strong>
      <p class="mb-0" style="color: var(--treinta-uno-negro);">Esta vista será completada en los siguientes puntos del proyecto (5, 6, 8, 9, 10).</p>
    </div>

    <div v-if="loadingCursos" class="text-center py-5">
      <div class="spinner-border text-primary"></div>
      <p>Cargando cursos...</p>
    </div>

    <div v-else>
      <div class="alert alert-success" style="border: 3px solid var(--treinta-uno-negro); background: var(--treinta-uno-verde); color: white;">
        <h4>📊 Estadísticas</h4>
        <p class="mb-0"><strong>Total de cursos:</strong> {{ cursos.length }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 56px);
}
</style>

