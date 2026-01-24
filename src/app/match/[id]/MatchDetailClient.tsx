'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MatchHero from '../../../components/match/MatchHero';
import MatchLineups from '../../../components/match/MatchLineups';
import MatchStats from '../../../components/match/MatchStats';
import MatchPrediction from '../../../components/match/MatchPrediction';
import SideNav from '../../../components/SideNav';
import BottomNav from '../../../components/BottomNav';
import { useMatchDetail } from '../../../hooks/useMatchDetail';
import Skeleton from '../../../components/ui/Skeleton';

interface MatchDetailClientProps {
   initialData?: any;
}

export default function MatchDetailClient({ initialData }: MatchDetailClientProps) {
   const router = useRouter();
   const { match, activeTab, setActiveTab, tabs, loading } = useMatchDetail(initialData);

   if (loading) {
      return (
         <div className="min-h-screen bg-slate-100 font-sans pb-10">
            {/* Skeleton Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 px-4 py-4 flex items-center justify-between">
               <Skeleton variant="circular" width={40} height={40} />
               <Skeleton variant="text" width={150} height={20} />
               <Skeleton variant="circular" width={36} height={36} />
            </div>

            {/* Skeleton Hero */}
            <div className="bg-white pt-6 pb-6 border-b border-slate-200">
               <div className="flex justify-between max-w-2xl mx-auto px-4">
                  <div className="flex flex-col items-center">
                     <Skeleton variant="circular" width={80} height={80} className="mb-3" />
                     <Skeleton variant="text" width={40} height={16} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                     <Skeleton variant="text" width={60} height={20} className="mb-2" />
                     <Skeleton variant="text" width={80} height={40} />
                  </div>
                  <div className="flex flex-col items-center">
                     <Skeleton variant="circular" width={80} height={80} className="mb-3" />
                     <Skeleton variant="text" width={40} height={16} />
                  </div>
               </div>
            </div>

            {/* Skeleton Tabs */}
            <div className="bg-white border-b border-slate-200 px-4 py-4 flex justify-center gap-6">
               <Skeleton variant="text" width={80} height={24} />
               <Skeleton variant="text" width={80} height={24} />
               <Skeleton variant="text" width={80} height={24} />
            </div>

            {/* Skeleton Content */}
            <div className="p-4 container mx-auto max-w-5xl space-y-4">
               <Skeleton variant="rectangular" width="100%" height={200} />
               <Skeleton variant="rectangular" width="100%" height={100} />
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-slate-100 font-sans pb-10 landscape:pl-20">
         {/* Match Banner (Hero Section) */}
         <MatchHero match={match} />

         <nav className="sticky top-[0px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
            <div className="container mx-auto max-w-5xl px-4 flex justify-center overflow-x-auto no-scrollbar">
               {tabs.map((tab) => {
                  return (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                           ? 'font-bold text-primary border-primary'
                           : 'font-semibold text-slate-500 border-transparent hover:text-slate-700'
                           }`}
                     >
                        {tab}
                     </button>
                  )
               })}
            </div>
         </nav>

         <main className="p-4 space-y-4 container mx-auto max-w-5xl min-h-[500px]">
            {activeTab === 'Đội hình ra sân' && (
               <MatchLineups match={match} />
            )}

            {activeTab === 'Thống kê' && (
               <MatchStats match={match} />
            )}

            {activeTab === 'AI Dự đoán' && (
               <MatchPrediction match={match} />
            )}

            {(activeTab !== 'Thống kê' && activeTab !== 'AI Dự đoán' && activeTab !== 'Đội hình ra sân' && activeTab !== 'Bình luận') && (
               <div className="text-center py-10 text-slate-500">
                  Nội dung {activeTab} đang được cập nhật...
               </div>
            )}
         </main>
         <SideNav />
         <BottomNav />
      </div>
   );
}