import api from './api';
import { UserProfile } from '@/types';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: UserProfile;
}

// MOCK DATA
const MOCK_USER: UserProfile = {
  id: 'user-123',
  name: 'Lê Nhựt Duy',
  email: 'le.nhut.duy@gmail.com',
  phone_number: '0987654321',
  avatar: '',
  role: 'user'
};

export const authService = {
  login: async (credentials?: any): Promise<LoginResponse> => {
    // REAL IMPLEMENTATION:
    // const response = await api.post<LoginResponse>('/auth/login', credentials);
    // return response.data;

    // SIMULATED IMPLEMENTATION:
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accessToken: 'mock_access_token_' + Date.now(),
          refreshToken: 'mock_refresh_token_' + Date.now(),
          expiresIn: 3600,
          user: MOCK_USER
        });
      }, 800);
    });
  },

  logout: async () => {
    // await api.post('/auth/logout');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  getProfile: async (): Promise<UserProfile> => {
    // const response = await api.get<UserProfile>('/auth/me');
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_USER), 500);
    });
  },

  refreshToken: async (token: string) => {
    // Logic handled in interceptor mostly, but exposed if needed manually
    // return api.post('/auth/refresh', { refreshToken: token });
    return Promise.resolve({ accessToken: 'new_mock_token', expiresIn: 3600 });
  }
};