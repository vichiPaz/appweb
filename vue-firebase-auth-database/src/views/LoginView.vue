<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
//import { useRouter } from 'vue-router';
const handleSubmit = async () => {
    if (!email.value || password.value < 6) return alert('todos los campos son obligatorios');

    await userStore.loginUser(email.value, password.value);

    //router.push({ name: 'home' });

}

const email = ref('test1@gmail.com');
const password = ref('123456');
const userStore = useUserStore();
//const router = useRouter();

</script>
<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="email" v-model="email"></input>
        <input type="password" placeholder="password" v-model="password"></input>
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
</template>