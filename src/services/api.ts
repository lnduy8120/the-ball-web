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

// Response Interceptor: Handle Token Refresh & Errors
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 Unauthorized (Token Expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('No refresh token');

        // Call refresh endpoint (using a separate instance to avoid infinite loops)
        const response = await axios.post(`${config.api.url}/auth/refresh`, { refreshToken });
        
        const { accessToken } = response.data;
        localStorage.setItem('access_token', accessToken);

        // Update header and retry original request
        if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed - logout user
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/'; // Redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;