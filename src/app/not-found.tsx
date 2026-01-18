'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/ui/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 font-sans">
      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 border shadow-sm bg-slate-100 border-slate-200">
        <span className="material-symbols-outlined text-5xl text-slate-400">
          search_off
        </span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy trang</h1>
      <p className="text-slate-500 text-center mb-8 max-w-sm leading-relaxed">
        Đường dẫn bạn truy cập không tồn tại hoặc đã bị xóa.
      </p>
      <Button 
        variant="primary"
        size="lg"
        onClick={() => router.push('/matches')}
        className="px-8"
      >
        Về trang chủ
      </Button>
    </div>
  );
}