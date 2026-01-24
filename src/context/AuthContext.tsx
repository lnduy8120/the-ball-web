
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '@/types';
import { useSession, signIn, signOut } from 'next-auth/react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserProfile | null;
  login: (returnUrl?: string) => Promise<void>;
  logout: () => void;
  token?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (session?.user) {
      // Map session user to UserProfile
      const mappedUser: UserProfile = {
        id: session.user.id || '',
        name: session.user.name || 'User',
        email: session.user.email || '',
        avatar: session.user.image || '',
        role: 'user', // Default to user
      };

      setUser(mappedUser);

      // Sync token to localStorage for legacy API interceptor
      if (session.accessToken) {
        localStorage.setItem('access_token', session.accessToken);
      }
    } else {
      setUser(null);
      localStorage.removeItem('access_token');
    }
  }, [session]);

  const login = async (returnUrl?: string) => {
    try {
      await signIn('keycloak', { callbackUrl: returnUrl || '/' });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: status === 'authenticated',
      isLoading: status === 'loading',
      user,
      login,
      logout,
      token: session?.accessToken
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