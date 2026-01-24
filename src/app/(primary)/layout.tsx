'use client';

import React from 'react';
import SideNav from '../../components/SideNav';
import BottomNav from '../../components/BottomNav';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="w-full min-h-screen relative">
        <div className="h-full w-full pb-20 md:pb-24 landscape:pl-16 landscape:pb-0">
          {children}
        </div>
        <SideNav />
        <BottomNav />
      </div>
    </div>
  );
}