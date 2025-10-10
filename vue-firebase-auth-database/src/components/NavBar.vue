<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background: linear-gradient(135deg, var(--treinta-uno-negro) 0%, #2c2c2c 100%); box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/home">
        <div class="navbar-logo-placeholder">
          <span class="navbar-logo-text">31</span>
        </div>
        <strong style="color: var(--treinta-uno-amarillo) !important;">31 MINUTOS - CURSOS</strong>
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home" active-class="active" style="color: var(--treinta-uno-beige) !important;">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrito" active-class="active" style="color: var(--treinta-uno-beige) !important;">
              🛒 Carrito ({{ totalCarrito }})
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/administracion" active-class="active" style="color: var(--treinta-uno-beige) !important;">
              Administración
            </router-link>
          </li>
        </ul>
        
        <div class="d-flex align-items-center">
          <span class="text-white me-3">
            {{ userEmail }}
          </span>
          <button 
            @click="handleLogout" 
            class="btn btn-outline-warning btn-sm"
            type="button"
            style="border-color: var(--treinta-uno-amarillo); color: var(--treinta-uno-amarillo);"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'NavBar',
  setup() {
    const store = useStore()
    
    const userEmail = computed(() => store.getters.getUserEmail)
    const totalCarrito = computed(() => store.getters.getTotalCarrito)
    
    const handleLogout = () => {
      if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        store.dispatch('logoutUser')
      }
    }
    
    return {
      userEmail,
      totalCarrito,
      handleLogout
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff !important;
}

.navbar-logo-placeholder {
  height: 35px;
  width: 35px;
  background: linear-gradient(135deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 100%);
  border: 2px solid var(--treinta-uno-negro);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.navbar-logo-text {
  font-size: 14px;
  font-weight: bold;
  color: var(--treinta-uno-negro);
}

.nav-link.active {
  color: var(--treinta-uno-amarillo) !important;
  font-weight: bold;
  background-color: rgba(255, 215, 0, 0.1);
  border-radius: 5px;
}
</style>

