'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useNotifications } from '../hooks/useNotifications';
import { useNavItems } from '../hooks/useNavItems';

const BottomNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { unreadCount } = useNotifications();
  const { visibleNavItems } = useNavItems();
  const [showMore, setShowMore] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === '/matches' && pathname.includes('/match/')) return true;
    return pathname.includes(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const MAX_VISIBLE = 5;
  const shouldCollapse = visibleNavItems.length > MAX_VISIBLE;

  const mainItems = shouldCollapse ? visibleNavItems.slice(0, MAX_VISIBLE - 1) : visibleNavItems;
  const moreItems = shouldCollapse ? visibleNavItems.slice(MAX_VISIBLE - 1) : [];

  const renderNavItem = (item: any, isMenu = false) => (
    <button
      key={item.path}
      onClick={() => {
        router.push(item.path);
        if (isMenu) setShowMore(false);
      }}
      className={`group relative flex ${isMenu ? 'w-full px-4 py-3 gap-3 hover:bg-slate-50' : 'flex-col items-center justify-center p-2'} transition-all ${isActive(item.path) ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <div className={`relative transition-all duration-300 ${!isMenu && isActive(item.path) ? '-translate-y-1' : ''} ${!isMenu ? 'group-hover:-translate-y-1' : ''}`}>
        <span className={`material-symbols-outlined ${isMenu ? 'text-xl' : 'text-2xl'} transition-transform ${!isMenu && isActive(item.path) ? 'icon-filled scale-110' : ''}`}>
          {item.icon}
        </span>
        {item.showBadge && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-3.5 min-w-[14px] px-1 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </div>

      {isMenu ? (
        <span className={`text-sm font-medium ${isActive(item.path) ? 'font-bold' : ''}`}>{item.name}</span>
      ) : (
        /* Tooltip Title */
        <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] font-bold py-1 px-2 rounded-lg shadow-lg pointer-events-none whitespace-nowrap">
          {item.name}
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></span>
        </span>
      )}
    </button>
  );

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-auto min-w-[320px] bg-white/95 backdrop-blur-xl border-t border-x border-white/40 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] rounded-t-[24px] flex items-center justify-center gap-6 px-6 py-2 z-50 landscape:hidden">
      {mainItems.map(item => renderNavItem(item))}

      {shouldCollapse && (
        <div className="relative" ref={menuRef}>
          {showMore && (
            <div className="absolute bottom-full right-0 mb-4 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
              {moreItems.map(item => renderNavItem(item, true))}
            </div>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`group relative flex flex-col items-center justify-center p-2 transition-all ${showMore ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">more_horiz</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default BottomNav;