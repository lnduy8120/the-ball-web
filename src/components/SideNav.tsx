'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useNotifications } from '../hooks/useNotifications';
import { useNavItems } from '../hooks/useNavItems';

const SideNav: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { unreadCount } = useNotifications();
    const { visibleNavItems } = useNavItems();

    const isActive = (path: string) => {
        if (path === '/matches' && pathname.includes('/match/')) return true;
        return pathname.includes(path);
    };

    const mainItems = visibleNavItems.filter(item => !['/login', '/profile', '/notifications'].includes(item.path));
    const footerItems = visibleNavItems.filter(item => ['/login', '/profile', '/notifications'].includes(item.path));

    const renderItem = (item: any) => (
        <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`group relative flex items-center justify-start px-3 gap-4 w-full py-2 transition-all ${isActive(item.path) ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                }`}
        >
            <div className={`relative p-2 rounded-xl transition-all duration-300 ${isActive(item.path) ? 'bg-primary/5' : 'group-hover:bg-slate-50'}`}>
                <span className={`material-symbols-outlined text-2xl transition-transform ${isActive(item.path) ? 'icon-filled scale-110' : ''}`}>
                    {item.icon}
                </span>
                {item.showBadge && unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 min-w-[14px] px-1 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-white">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </div>

            <span className="whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/nav:pointer-events-auto">
                {item.name}
            </span>

            {/* Active indicator bar on left */}
            {/* {isActive(item.path) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-lg"></span>
            )} */}
        </button>
    );

    return (
        <div className="hidden landscape:flex fixed left-0 top-0 h-full w-16 hover:w-44 transition-[width] duration-300 items-start bg-white/95 backdrop-blur-xl border-r border-slate-200 flex-col py-6 z-[100] shadow-xl overflow-y-auto no-scrollbar justify-between group/nav">
            <div className="flex flex-col items-center w-full gap-8">
                {/* Logo placeholder or Top Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">sports_soccer</span>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    {mainItems.map(renderItem)}
                </div>
            </div>

            <div className="flex flex-col w-full mt-auto pb-4 border-t border-slate-100 pt-6">
                {footerItems.map(renderItem)}
            </div>
        </div>
    );
};

export default SideNav;
