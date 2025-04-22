import { create } from "zustand";
import api from "@/api/axios";
import { useEffect } from "react";

const useBusinessStore = create((set, get) => ({
  businesses: [],
  currentBusiness: null,
  loading: false,
  error: null,

  // Fetch all businesses

  fetchBusinesses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/business/");
      set({ businesses: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load businesses";
      set({ error: errorMessage, loading: false });
    }
  },

  // Get business by ID
  getBusinessById: async (id) => {
    set({ loading: true, error: null, currentBusiness: null });
    try {
      const response = await api.get(`/business/${id}`);
      set({ currentBusiness: response.data, loading: false });
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        `Failed to load business with ID ${id}`;
      set({ error: errorMessage, loading: false });
      return null;
    }
  },
}));

export default useBusinessStore;
