import axios from "axios";
import useAuthStore from "@/stores/authStore";

const api = axios.create({
  baseURL: " http://192.168.235.17:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token || localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
