<script setup>

</script>
<template>
  <footer class="footer text-center py-5 mt-5">
    <div class="container">
      <div class="mb-3">
        <img
          src="https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2015/09/cropped-512logo31m-wpicon.png?resize=200%2C200&ssl=1"
          alt="Logo 31 Minutos"
          class="footer-logo img-fluid rounded-circle border border-warning shadow-sm"
        />
      </div>

      <nav class="footer-nav d-flex justify-content-center gap-4 mb-3 fw-bold flex-wrap">
        <a href="#" class="nav-link text-warning">Inicio</a>
        <a href="#" class="nav-link text-warning">Cursos</a>
        <a href="#" class="nav-link text-warning">Profesores</a>
        <a href="#" class="nav-link text-warning">Contacto</a>
      </nav>

      <div class="footer-social mb-4">
        <a href="#" class="text-warning mx-2 fs-4"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-warning mx-2 fs-4"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-warning mx-2 fs-4"><i class="fab fa-tiktok"></i></a>
        <a href="#" class="text-warning mx-2 fs-4"><i class="fab fa-youtube"></i></a>
        <a href="#" class="text-warning mx-2 fs-4"><i class="fab fa-github"></i></a>
      </div>

      <p class="footer-text small mb-1 text-light">© {{ new Date().getFullYear() }} Producciones Aplaplac SpA</p>
      <p class="footer-text small text-light mb-0">Desarrollado por <span class="fw-bold text-warning">❤️ inspirado en 31 Minutos</span></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #f8d13b;
  font-family: 'Poppins', sans-serif;
}

.footer-logo {
  max-width: 120px;
  border-width: 3px !important;
}

.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-nav .nav-link {
  text-decoration: none;
  transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
}

.footer-nav .nav-link:hover {
  color: #ffffff !important;
  text-shadow: 0 0 6px #f8d13b;
}

.footer-social a {
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.footer-social a:hover {
  color: #ffffff !important;
  text-shadow: 0 0 6px #f8d13b;
  transform: scale(1.1);
}

.footer-text {
  color: #e0e0e0;
}
</style>
