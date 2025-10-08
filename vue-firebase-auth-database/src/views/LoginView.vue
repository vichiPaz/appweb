<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const loadingUser = computed(() => store.getters.isLoadingUser)

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert('Todos los campos son obligatorios y la contraseña debe tener al menos 6 caracteres')
  }

  await store.dispatch('loginUser', {
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow">
          <div class="card-body p-5">
            <!-- Logo Section -->
            <div class="text-center mb-4">
              <div class="login-logo-placeholder">
                <div class="logo-text">31</div>
              </div>
              <h2 class="mt-3" style="color: var(--treinta-uno-negro);">Iniciar Sesión</h2>
              <p class="text-muted">Bienvenido al sistema de cursos</p>
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email"
                  placeholder="correo@ejemplo.com"
                  v-model="email"
                  required
                >
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password"
                  placeholder="Mínimo 6 caracteres"
                  v-model="password"
                  required
                >
              </div>
              <button 
                type="submit" 
                class="btn w-100"
                :disabled="loadingUser"
                style="
                  background: linear-gradient(45deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 50%, var(--treinta-uno-rojo) 100%);
                  border: 3px solid var(--treinta-uno-negro);
                  color: var(--treinta-uno-negro);
                  font-weight: bold;
                  font-size: 1.1rem;
                  padding: 15px;
                  border-radius: 15px;
                  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  transition: all 0.3s ease;
                "
                @mouseover="$event.target.style.transform = 'translateY(-3px) scale(1.02)'"
                @mouseout="$event.target.style.transform = 'translateY(0) scale(1)'"
              >
                <span v-if="loadingUser" class="spinner-border spinner-border-sm me-2" style="color: var(--treinta-uno-negro);"></span>
                {{ loadingUser ? 'Cargando...' : 'INICIAR SESIÓN' }}
              </button>
            </form>
            <div class="text-center mt-3">
              <p>¿No tienes cuenta? 
                <router-link to="/register" class="text-decoration-none">Regístrate aquí</router-link>
              </p>
            </div>
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.login-logo-placeholder {
  height: 80px;
  width: 80px;
  background: linear-gradient(135deg, var(--treinta-uno-amarillo) 0%, var(--treinta-uno-naranja) 100%);
  border: 3px solid var(--treinta-uno-negro);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
}

.login-logo-placeholder:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: var(--treinta-uno-negro);
  text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
}

/* Estilos específicos para el botón de login */
.btn:hover:not(:disabled) {
  box-shadow: 0 8px 20px rgba(0,0,0,0.4) !important;
}

.btn:disabled {
  opacity: 0.6;
  transform: none !important;
  cursor: not-allowed;
}

.btn:active:not(:disabled) {
  transform: translateY(1px) scale(0.98) !important;
}
</style>