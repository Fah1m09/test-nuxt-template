<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
    <div class="mx-auto w-[500px] lg:w-[800px] bg-slate-200 rounded-xl p-[64px]">
        <form action="" class="space-y-6">

            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
        </form>
    </div>

</template>