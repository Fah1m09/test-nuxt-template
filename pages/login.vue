<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
    await authStore.login(email.value, password.value);
    if (authStore.isAuthenticated) {
        router.push('/');
    }
};
</script>

<template>
    <div class="mx-auto w-[500px] lg:w-[800px] bg-slate-200 rounded-xl p-[64px]">
        <h2 class="title has-text-centered">Welcome back!</h2>
        <form method="post" @submit.prevent="handleLogin" class="space-y-6">
            <label class="label">Email</label>
            <Input type="email" placeholder="Email" v-model="email" />
            <label class="label">Password</label>
            <Input type="password" placeholder="Password" v-model="password" />
            <Button type="submit">Login</Button>
        </form>
    </div>

</template>