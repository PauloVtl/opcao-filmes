import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=d9bb8e6e3386a82124f20861055d5c92&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;
