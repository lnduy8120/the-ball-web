'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import AuthGuard from '../../../components/AuthGuard';

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const userName = user?.name || "Người dùng";
  const userEmail = user?.email || t('profile.notUpdated');

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageModalOpen(false);
  };

  const currentLanguage = i18n.language;

  return (
    <AuthGuard>
      <div className="bg-background-light text-slate-900 min-h-screen pb-24 font-display relative">

        <main className="px-4 py-4 space-y-6">
          {/* User Info */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3 cursor-pointer group" onClick={handleAvatarClick}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <div className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 group-active:scale-95 transition-transform">
                <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden relative">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-slate-300 text-[64px] mt-2">person</span>
                  )}
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center shadow-sm pointer-events-none">
                <span className="material-symbols-outlined text-white text-[14px]">edit</span>
              </button>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{userName}</h2>
            <div className="mt-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-yellow-600 text-[16px]">workspace_premium</span>
              <span className="text-xs font-bold text-yellow-700 uppercase tracking-wide">{t('profile.goldMember')}</span>
            </div>
          </div>

          {/* Personal Info Section */}
          <section>
            <h3 className="text-sm font-bold text-slate-900 mb-3 px-1">{t('profile.personalInfo')}</h3>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">phone</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">{t('profile.phone')}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {user?.phone_number || t('profile.notUpdated')}
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-slate-50"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">{t('profile.email')}</span>
                  <span className="text-sm font-semibold text-slate-900">{userEmail}</span>
                </div>
              </div>
              <div className="w-full h-px bg-slate-50"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">{t('profile.joinedDate')}</span>
                  <span className="text-sm font-semibold text-slate-900">15/08/2023</span>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-50">
            <button
              onClick={() => router.push('/account-settings')}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-t-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[22px]">settings</span>
                <span className="text-sm font-medium text-slate-700">{t('profile.menu.accountSettings')}</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
            </button>

            <button
              onClick={() => setLanguageModalOpen(true)}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[22px]">language</span>
                <span className="text-sm font-medium text-slate-700">{t('profile.menu.language')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">
                  {currentLanguage === 'vi' ? t('profile.languageModal.vi') : t('profile.languageModal.en')}
                </span>
                <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
              </div>
            </button>

            <button
              onClick={() => router.push('/help-center')}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[22px]">help</span>
                <span className="text-sm font-medium text-slate-700">{t('profile.menu.helpCenter')}</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
            </button>

            <button
              onClick={() => router.push('/terms-policy')}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-b-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[22px]">description</span>
                <span className="text-sm font-medium text-slate-700">{t('profile.menu.terms')}</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
            </button>
          </section>

          {/* Logout Button */}
          <div className="pt-4">
            <Button
              variant="danger"
              fullWidth
              onClick={logout}
              leftIcon={<span className="material-symbols-outlined text-[20px]">logout</span>}
              className="bg-red-50 hover:bg-red-100 text-red-500"
            >
              {t('profile.menu.logout')}
            </Button>
          </div>
        </main>

        {/* Language Modal */}
        <Modal
          isOpen={isLanguageModalOpen}
          onClose={() => setLanguageModalOpen(false)}
          title={t('profile.languageModal.title')}
        >
          <div className="space-y-1">
            <button
              onClick={() => changeLanguage('vi')}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${currentLanguage === 'vi' ? 'bg-blue-50 text-primary ring-1 ring-blue-100' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              <div className="flex items-center gap-3">
                <img src="https://flagcdn.com/w40/vn.png" alt="VN" className="w-6 h-auto rounded-sm shadow-sm object-cover" />
                <span className="font-medium">{t('profile.languageModal.vi')}</span>
              </div>
              {currentLanguage === 'vi' && <span className="material-symbols-outlined text-[20px]">check_circle</span>}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${currentLanguage === 'en' ? 'bg-blue-50 text-primary ring-1 ring-blue-100' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              <div className="flex items-center gap-3">
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-auto rounded-sm shadow-sm object-cover" />
                <span className="font-medium">{t('profile.languageModal.en')}</span>
              </div>
              {currentLanguage === 'en' && <span className="material-symbols-outlined text-[20px]">check_circle</span>}
            </button>
          </div>
        </Modal>
      </div>
    </AuthGuard>
  );
}