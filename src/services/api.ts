import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { config } from '../config';

const api = axios.create({
  baseURL: config.api.url,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.api.timeout,
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
  (reqConfig: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && reqConfig.headers) {
      reqConfig.headers.Authorization = `Bearer ${token}`;
    }
    return reqConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Errors
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      // Optional: Redirect to login or let the UI handle it via AuthContext state
      // window.location.href = '/'; 
      // For now, we rely on the OIDC library to manage token validity. 
      // If a 401 happens, it means the token is definitely invalid/expired and OIDC failed to renew.
    }
    return Promise.reject(error);
  }
);

export default api;