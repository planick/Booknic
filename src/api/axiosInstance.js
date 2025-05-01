// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 서버 주소
  withCredentials: true,
});

export default axiosInstance;
