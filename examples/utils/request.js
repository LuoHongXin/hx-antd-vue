import axios from 'axios';
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api',
  timeout: 10000,
});

export default service;
