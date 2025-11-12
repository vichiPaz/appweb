<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle-btn"
    :aria-label="`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`"
    aria-live="polite"
  >
    <span v-if="theme === 'light'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle-btn {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
}

.theme-toggle-btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
</style>