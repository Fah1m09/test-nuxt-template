import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    isLoading: false,
    error: null,
    products: [],
  }),

  getters: {
    getProducts: (state) => state.products,
  },

  actions: {
    async getProductsAction() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = response.data;
      } catch (err: any) {
        this.error =
          err.response?.data?.message || "product list is unavailable";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
