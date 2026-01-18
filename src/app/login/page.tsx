'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';

export default function LoginScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push('/matches');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Spinner size="lg" variant="primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col">
        <main className="flex-1 flex flex-col px-8 py-8 w-full">
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-white">sports_soccer</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-slate-900">Đăng nhập tài khoản</h1>
            <p className="text-slate-500 text-sm text-center">Theo dõi thống kê và kết quả trực tiếp.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="material-symbols-outlined text-blue-600 text-lg">token</span>
                <p className="text-sm font-bold text-blue-800">Cơ chế Token</p>
              </div>
              <p className="text-xs text-blue-700">
                Sử dụng <b>Access Token</b> (ngắn hạn) và <b>Refresh Token</b> để duy trì phiên đăng nhập an toàn.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                leftIcon={<span className="material-symbols-outlined">login</span>}
              >
                Đăng nhập ngay
              </Button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Hoặc tiếp tục với</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="white"
                onClick={() => login()}
              >
                Google
              </Button>
              <Button
                type="button"
                variant="white"
                onClick={() => login()}
              >
                Apple
              </Button>
            </div>

            <div className="mt-4">
              <Button
                type="button"
                variant="ghost"
                fullWidth
                onClick={() => router.push('/matches')}
                className="text-slate-500 hover:text-slate-700"
              >
                Tiếp tục với tư cách Khách
              </Button>
            </div>
          </div>

          <div className="flex-grow"></div>
          <div className="pt-8 pb-4 text-center">
            <p className="text-sm text-slate-500">
              Gặp sự cố đăng nhập? <span className="text-primary font-bold cursor-pointer">Liên hệ hỗ trợ</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}