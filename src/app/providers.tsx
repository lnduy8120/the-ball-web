'use client';

import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { ToastProvider } from '../context/ToastContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/lib/i18n';

// Create a client
// Create a client
const makeQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}