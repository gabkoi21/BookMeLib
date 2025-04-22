import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/api/axios";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      login: async (credentials) => {
        set({ loading: true, error: null });

        try {
          const res = await api.post("/auth/login", credentials);
          const { access_token, refresh_token, user_type } = res.data;

          const user = { user_type };

          set({
            user,
            token: access_token,
            loading: false,
            error: null,
          });

          return true;
        } catch (error) {
          const errorMessage =
            error?.response?.data?.message || "Login failed. Try again.";
          set({ error: errorMessage, loading: false });
          return false;
        }
      },

      register: async (userData) => {
        set({ loading: true, error: null });

        try {
          const res = await api.post("/auth/register", userData);
          const { user, token } = res.data;

          set({ user, token, loading: false, error: null });
          return true;
        } catch (error) {
          const errorMessage =
            error?.response?.data?.message || "Registration failed. Try again.";
          set({ error: errorMessage, loading: false });
          return false;
        }
      },

      logout: () => {
        set({ user: null, token: null, loading: false, error: null });
        localStorage.removeItem("auth-storage");
      },
    })
    // {
    //   name: "auth-storage", // LocalStorage key
    //   getStorage: () => localStorage,
    // }
  )
);

export default useAuthStore;
