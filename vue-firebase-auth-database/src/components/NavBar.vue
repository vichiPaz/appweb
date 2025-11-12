<template>
  <nav class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__brand" to="/home">
        <img
          src="https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2015/09/cropped-512logo31m-wpicon.png?resize=200%2C200&ssl=1"
          alt="Logo 31 Minutos"
          class="navbar__logo"
        />
        <strong>31 MINUTOS - CURSOS</strong>
      </router-link>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="navbar__toggler"
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span>☰</span>
      </button>

      <div class="navbar__collapse" :class="{ 'is-open': isMenuOpen }">
        <ul class="navbar__nav">
          <li>
            <router-link class="navbar__link" to="/home">Inicio</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link class="navbar__link" to="/carrito">
              🛒 Carrito ({{ totalCarrito }})
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link class="navbar__link" to="/administracion">
              Administración
            </router-link>
          </li>
        </ul>

        <div class="navbar__actions">
          <div v-if="isLoggedIn" class="navbar__user-info">
            <span>{{ userEmail }}</span>
            <button @click="handleLogout" class="btn btn-secondary">
              Cerrar Sesión
            </button>
          </div>
          <div v-else>
            <router-link to="/login" class="btn btn-primary">
              Iniciar Sesión
            </router-link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ThemeToggle from "./ThemeToggle.vue";

const store = useStore();
const router = useRouter();

const isMenuOpen = ref(false);

const userEmail = computed(() => store.getters.getUserEmail);
const totalCarrito = computed(() => store.getters.getTotalCarrito);
const isLoggedIn = computed(() => store.getters.isAuthenticated);

const handleLogout = () => {
  if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
    store.dispatch("logoutUser");
    router.push("/login");
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  padding: 0.75rem 0;
  width: 100%;
  position: relative;
  gap: 16px;
}

.navbar__container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 0.75rem;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 700;
  flex-shrink: 0;
}

.navbar__logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-primary);
}

.navbar__collapse {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
}

.navbar__nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.navbar__link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.navbar__link:hover,
.navbar__link.router-link-exact-active {
  color: var(--color-primary);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar__user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.navbar__toggler {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text-primary);
  cursor: pointer;
  margin-left: auto;
}

@media (max-width: 768px) {
  .navbar__container {
    justify-content: space-between;
  }

  .navbar__toggler {
    display: block;
  }

  .navbar__collapse {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    box-shadow: var(--shadow-md);
  }

  .navbar__collapse.is-open {
    display: flex;
  }

  .navbar__nav {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .navbar__actions {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
  }

  .navbar__user-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }
}
</style>