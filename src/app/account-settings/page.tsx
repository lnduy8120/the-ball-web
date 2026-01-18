'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import AuthGuard from '../../components/AuthGuard';

export default function AccountSettingsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn A',
    phone: '0987 654 321',
    email: 'nguyenvana@example.com',
    notifications: true,
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or local storage update
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-slate-50 font-sans pb-10">
        <header className="px-4 py-4 bg-white border-b border-slate-200 flex items-center justify-center sticky top-0 z-20">
          <h1 className="text-lg font-bold text-slate-900">Cài đặt tài khoản</h1>
        </header>

        <main className="max-w-2xl mx-auto p-4 space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Thông tin cá nhân</h2>

              <Input
                name="fullName"
                label="Họ và tên"
                value={formData.fullName}
                onChange={handleChange}
                className="py-3"
                containerClassName="space-y-1.5"
              />

              <Input
                name="phone"
                label="Số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="py-3"
                containerClassName="space-y-1.5"
              />

              <Input
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="py-3"
                containerClassName="space-y-1.5"
              />
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Bảo mật</h2>
              <button type="button" className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">lock</span>
                  <span className="text-sm font-medium text-slate-700">Đổi mật khẩu</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Thông báo</h2>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">Thông báo đẩy</span>
                  <span className="text-xs text-slate-500">Nhận thông báo về trận đấu và kết quả</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleChange} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">Bản tin Email</span>
                  <span className="text-xs text-slate-500">Nhận tin tức mới nhất qua email</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </main>
      </div>
    </AuthGuard>
  );
}