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
  <div class="auth-page">
    <div class="form-container">
      <div class="form-header">
        <h2>Iniciar Sesión</h2>
        <p class="text-secondary">Bienvenido al sistema de cursos</p>
      </div>
      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email"
            placeholder="correo@ejemplo.com"
            v-model="email"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password"
            placeholder="Mínimo 6 caracteres"
            v-model="password"
            required
          >
        </div>
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="loadingUser"
        >
          <span v-if="loadingUser" class="spinner"></span>
          <span v-else>INICIAR SESIÓN</span>
        </button>
      </form>
      <div class="form-footer">
        <p>¿No tienes cuenta? 
          <router-link to="/register">Regístrate aquí</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 2rem;
}

.form-container {
  width: 100%;
  max-width: 450px;
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

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text-primary);
  transition: border-color var(--transition-fast);
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn {
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-footer {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
}

.form-footer a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>