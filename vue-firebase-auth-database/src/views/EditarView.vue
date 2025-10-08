<script setup>
import { useDatabaseStore } from '@/stores/database';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const databaseStore = useDatabaseStore();

const url = ref('');

const handleSubmit = () => {
    databaseStore.updateUrl(route.params.id, url.value);
}

onMounted(async() => {
    url.value = await databaseStore.leerUrl(route.params.id);
})
</script>
<template>
    <h1>Editar</h1>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese una url" v-model="url"></input>
        <button type="submit">Editar</button>
    </form>
</template>