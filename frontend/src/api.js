import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://esg-backend-hqpz.onrender.com',
});

export default api;
