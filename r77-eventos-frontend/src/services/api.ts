import axios from 'axios';

// Criando uma instância do Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000", // URL da sua API
});

// Adicionando o interceptor para incluir o token nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Pegando o token do localStorage
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // Adicionando o token no header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Caso o request falhe
  }
);

export default api;
