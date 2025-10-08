<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user';

const userStore = useUserStore();
</script>

<template>
  <h1>App</h1>
  <nav>
    <router-link to="/">Home |</router-link>
    <router-link to="/login">Login |</router-link>
    <router-link to="/register">Register </router-link>
    <button @click="userStore.logoutUser">Logout</button>
  </nav>
  <RouterView />
</template>

<style scoped></style>