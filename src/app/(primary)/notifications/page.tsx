'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthGuard from '../../../components/AuthGuard';
import { useNotifications } from '../../../hooks/useNotifications';
import Modal from '../../../components/ui/Modal';
import { Notification } from '@/types';

export default function NotificationsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const { notifications, isLoading, markAsRead, unreadCount, markAllAsRead } = useNotifications();

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter((notif: Notification) => !notif.read);

  const handleNotificationClick = (notif: Notification) => {
    setSelectedNotification(notif);
    if (!notif.read) {
      markAsRead(notif.id);
    }
  };

  const handleAction = () => {
    if (selectedNotification?.targetUrl) {
      router.push(selectedNotification.targetUrl);
    }
    setSelectedNotification(null);
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-slate-50 font-sans pb-10">
        <header className="px-4 py-4 bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-slate-900">Thông báo</h1>
            {unreadCount > 0 && (
              <button
                onClick={() => markAllAsRead()}
                className="text-primary text-xs font-bold hover:underline py-1 px-2"
              >
                Đã đọc tất cả
              </button>
            )}
          </div>

          <div className="flex p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'unread' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Chưa đọc
            </button>
          </div>
        </header>

        <main className="p-4 space-y-3">
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex gap-4 animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-slate-100 shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-100 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredNotifications.length > 0 ? (
            filteredNotifications.map((notif: Notification) => (
              <div
                key={notif.id}
                onClick={() => handleNotificationClick(notif)}
                className={`p-4 rounded-2xl border flex gap-4 transition-colors cursor-pointer active:scale-[0.98] ${notif.read ? 'bg-white border-slate-100' : 'bg-blue-50/50 border-blue-100'}`}
              >
                <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${notif.bg} ${notif.color}`}>
                  <span className="material-symbols-outlined text-xl">{notif.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-sm font-bold ${notif.read ? 'text-slate-700' : 'text-slate-900'}`}>{notif.title}</h3>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{notif.time}</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${notif.read ? 'text-slate-500' : 'text-slate-700 font-medium'}`}>{notif.message}</p>
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <span className="material-symbols-outlined text-5xl mb-4 text-slate-200">notifications_off</span>
              <p className="text-sm font-medium">Không có thông báo nào</p>
            </div>
          )}
        </main>

        {/* Notification Detail Modal */}
        <Modal
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
          title="Chi tiết thông báo"
        >
          {selectedNotification && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedNotification.bg} ${selectedNotification.color}`}>
                  <span className="material-symbols-outlined text-2xl">{selectedNotification.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{selectedNotification.title}</h4>
                  <span className="text-[10px] text-slate-400">{selectedNotification.time}</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedNotification.message}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Đóng
                </button>
                {selectedNotification.targetUrl && (
                  <button
                    onClick={handleAction}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Xem chi tiết
                  </button>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </AuthGuard>
  );
}