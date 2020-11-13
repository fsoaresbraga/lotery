import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lotericas.io/api/v1/jogos',
 
});

export default api;
