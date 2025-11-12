<template>
  <NavBar />
  <main class="container">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
main {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>