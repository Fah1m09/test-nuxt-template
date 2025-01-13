<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "~/store/product";

const productStore = useProductStore();

const getProductList = async () => {
    await productStore
        .getProductsAction()
        .then((res) => {
            console.log(res);
        })
        .catch((err: any) => {
            console.log(err);
        });
};

onMounted(() => {
    getProductList();
});
</script>

<template>
    <div class="p-[35px]">
        <div class="grid grid-cols-4 gap-4">
            <div v-for="product in productStore.getProducts" class="bg-gray-100 p-2 rounded-lg shadow">
                <img :src="product.images[0]" alt="" class="">
                <p>{{ product?.title }}</p>
                <p>{{ product?.price }}</p>
            </div>
        </div>

    </div>
</template>