'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{username?: string, password?: string, confirmPassword?: string}>({});

  const validateForm = () => {
    const newErrors: {username?: string, password?: string, confirmPassword?: string} = {};
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = 'Vui lòng nhập tài khoản';
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Tài khoản quá ngắn';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu không khớp';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock registration logic -> redirect to login
      router.push('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col">
        <main className="flex-1 flex flex-col px-8 py-8 w-full">
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
              <span className="material-symbols-outlined text-5xl text-white">person_add</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-slate-900">Đăng ký tài khoản</h1>
            <p className="text-slate-500 text-sm text-center">Tham gia cộng đồng bóng đá ngay hôm nay.</p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            <Input
              name="username"
              label="Tài khoản"
              placeholder="Số điện thoại hoặc Email"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
              leftIcon={<span className="material-symbols-outlined">person</span>}
            />

            <Input
              name="password"
              label="Mật khẩu"
              placeholder="Mật khẩu"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              leftIcon={<span className="material-symbols-outlined">lock</span>}
              rightIcon={
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                >
                  <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              }
            />

            <Input
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              placeholder="Nhập lại mật khẩu"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              leftIcon={<span className="material-symbols-outlined">lock_reset</span>}
              rightIcon={
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                >
                  <span className="material-symbols-outlined text-lg">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              }
            />

            <div className="pt-4 space-y-4">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Đăng ký
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Hoặc tiếp tục với</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button type="button" variant="white">Google</Button>
              <Button type="button" variant="white">Apple</Button>
            </div>
          </div>

          <div className="flex-grow"></div>
          <div className="pt-6 pb-4 text-center">
            <p className="text-sm text-slate-500">Đã có tài khoản? <button onClick={() => router.push('/')} className="text-primary font-bold hover:underline">Đăng nhập</button></p>
          </div>
        </main>
      </div>
    </div>
  );
}