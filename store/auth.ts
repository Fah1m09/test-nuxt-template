import axios from "axios";
import { defineStore } from "pinia";
import type { iAuthState } from "~/types/common";

export const useAuthStore = defineStore("auth", {
  state: (): iAuthState => ({
    user: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async login(email: string, password: string) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.post("/api/login", { email, password });
        const user = response.data;
        this.user = user;
        axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      } catch (err: any) {
        this.error = err.response?.data?.message || "Login failed";
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
