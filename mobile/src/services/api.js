import axios from 'axios';

//const _baseURL = '';
const _baseURL = 'http://192.168.0.39:3000/';


const api = axios.create({
  baseURL: _baseURL
});

export default api;