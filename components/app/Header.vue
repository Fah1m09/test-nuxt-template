<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAuthStore } from "~/store/auth";
const { setLocale } = useI18n()

const authStore = useAuthStore();
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
                <div class="flex gap-8">
                    <RadioGroup default-value="en" class="flex">
                        <div class="flex items-center space-x-2">
                            <RadioGroupItem id="en" @click="setLocale('en')" value="en" />
                            <Label for="en">EN</Label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <RadioGroupItem id="bn" @click="setLocale('bn')" value="bn" />
                            <Label for="bn">BN</Label>
                        </div>
                    </RadioGroup>
                    <nuxt-link v-if="!authStore.isAuthenticated" to="/login">
                        <Button>Login</Button>
                    </nuxt-link>
                    <div v-else>authStore.user</div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>