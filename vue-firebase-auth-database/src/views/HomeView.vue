<script setup>
import { useUserStore } from '@/stores/user';
import { useDatabaseStore } from '@/stores/database';
import { ref } from 'vue';
import router from '@/router';

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const url = ref('');

databaseStore.getUrls();

const handleSubmit = () => {
    databaseStore.addUrl(url.value);
}
</script>

<template>
    <h1>Home</h1>
    {{ userStore.userData?.email }}
    <br>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese una url" v-model="url"></input>
        <button type="submit">Guardar</button>
    </form>
    <h2>Mis documentos</h2>
    <p v-if="databaseStore.loadingDoc"> Loading...</p>
    <ul v-else>
        <li v-for="item of databaseStore.documents" :key="item.id">
            {{ item.id }}
            <br>
            {{ item.name }}
            <br>
            {{ item.short }}
            <br>
            <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
            <button @click="router.push(`/editar/${item.id}`)">Editar</button>
        </li>
    </ul>
</template>