<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
    <ClientOnly>
        <div class="bg-blue-300">
            <div class="container flex justify-between items-center px-4 py-2">
                <ul class="flex gap-4 font-semibold">
                    <li> <nuxt-link to="/">Home</nuxt-link></li>
                    <li> <nuxt-link to="/products">Products</nuxt-link></li>
                    <li> <nuxt-link to="/categories">Categories</nuxt-link></li>
                </ul>
                <div>
                    <button @click="setLocale('en')">en</button>
                    <button @click="setLocale('bn')">bn</button>
                    <p>{{ $t('TITLE') }}</p>
                    <nuxt-link to="/login">
                        <Button>Login</Button>
                    </nuxt-link>
                </div>

            </div>
        </div>
    </ClientOnly>
</template>