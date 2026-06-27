import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Request interceptor — tambahkan auth token di v1
api.interceptors.request.use((config) => {
  return config;
});

// Response interceptor — normalisasi error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error?.message || 'Terjadi kesalahan jaringan';
    console.error(`[API Error] ${error.config?.url}:`, message);
    return Promise.reject(error);
  },
);

export { api };
