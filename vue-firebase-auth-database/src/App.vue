<script setup>
import { computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import NavBar from './components/NavBar.vue'

const store = useStore()

const isAuthenticated = computed(() => store.getters.isAuthenticated)

onMounted(() => {
  store.dispatch('currentUser')
})
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
}

/* Colores inspirados en 31 Minutos */
:root {
  --treinta-uno-amarillo: #FFD700;
  --treinta-uno-naranja: #FF8C00;
  --treinta-uno-rojo: #DC143C;
  --treinta-uno-azul: #4169E1;
  --treinta-uno-verde: #32CD32;
  --treinta-uno-negro: #1a1a1a;
  --treinta-uno-blanco: #FFFFFF;
  --treinta-uno-beige: #F5DEB3;
}
</style>