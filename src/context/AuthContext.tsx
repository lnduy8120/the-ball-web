'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProfile } from '@/types';
import { useToast } from './ToastContext';
import { authService } from '../services/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserProfile | null;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      setUser(null);
      window.location.href = '/';
    }
  }, []);

  const login = async () => {
    try {
      setIsLoading(true);
      const data = await authService.login();

      // Store tokens in LocalStorage
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);

      setUser(data.user);
      showToast('Đăng nhập thành công!', 'success');
    } catch (error) {
      console.error("Login failed", error);
      showToast('Đăng nhập thất bại. Vui lòng thử lại.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = localStorage.getItem('access_token');

      if (accessToken) {
        try {
          console.log("[Auth] Restoring session...");
          const userData = await authService.getProfile();
          setUser(userData);
        } catch (error) {
          console.error("Session restoration failed", error);
          // Token might be invalid
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      isLoading,
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};