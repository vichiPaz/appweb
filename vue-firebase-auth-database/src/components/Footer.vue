<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        © {{ new Date().getFullYear() }} | Adaptado con ❤️ por un fan de 31 Minutos
      </p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  padding: 2rem 0;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.footer .container {
  text-align: center;
}

.footer-text {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin: 0;
}
</style>