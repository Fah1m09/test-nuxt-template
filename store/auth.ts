import axios from "axios";
import { defineStore } from "pinia";
import type { iAuthState } from "~/types/common";
interface iRes {
  access_token: string | null;
  refresh_token: string | null;
}
export const useAuthStore = defineStore("auth", {
  state: (): iAuthState => ({
    user: null,
    token: "",
    refreshToken: "",
    isLoading: false,
    error: null,
  }),
  getters: {
    getToken: (state) => state.token,
    getCurrentUser: (state) => state.user,
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email: string, password: string) {
      this.isLoading = true;
      this.error = null;

      try {
        const response: iRes = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/login",
          { email, password }
        );
        const access_token = response.access_token;
        const refresh_token = response.refresh_token;
        this.token = access_token;
        this.refreshToken = refresh_token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      } catch (err: any) {
        this.error = err.response?.data?.message || "Login failed";
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});
