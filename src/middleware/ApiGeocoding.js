import axios from 'axios'
import store from '@/store'

export default () => {
  axios.interceptors.request.use((config) => {
    // Adiciona o cabeçalho Access-Control-Allow-Origin: * a todas as requisições
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers["Access-Control-Allow-Headers"] = "Authorization";
    config.headers["Access-Control-Allow-Methods"] ="GET, POST, OPTIONS, PUT, PATCH, DELETE";
    return config;
  });

  return axios.create({
      baseURL: process.env.urlGeocoding
    })
}