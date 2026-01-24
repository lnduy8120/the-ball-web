'use client';

import React from 'react';
import MatchCard from '../../../components/matches/MatchCard';
import { useMatches } from '../../../hooks/useMatches';
import Skeleton from '../../../components/ui/Skeleton';
import { Match } from '@/types';

interface MatchesClientProps {
   initialMatches?: Match[];
}

export default function MatchesClient({ initialMatches }: MatchesClientProps) {
   const {
      activeFilter,
      setActiveFilter,
      filters,
      getFilteredMatches,
      loading
   } = useMatches(initialMatches);

   const filteredMatches = getFilteredMatches();

   // Group matches by date
   const groupMatchesByDate = (matches: Match[]) => {
      const groups: { [key: string]: Match[] } = {};
      matches.forEach(m => {
         if (!groups[m.date]) groups[m.date] = [];
         groups[m.date].push(m);
      });
      return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
   };

   const groupedMatches = groupMatchesByDate(filteredMatches);

   const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('vi-VN', {
         weekday: 'long',
         day: 'numeric',
         month: 'numeric',
         year: 'numeric'
      }).format(date);
   };

   return (
      <div className="bg-background min-h-screen pb-24 font-display text-[#111418]">
         {/* League Filter Header */}
         <div className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-4 pb-2">
            <div className="container mx-auto max-w-7xl">
               <div className="flex overflow-x-auto no-scrollbar px-4 gap-3 pb-2">
                  {filters.map((f) => (
                     <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`flex-none px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeFilter === f
                           ? 'bg-primary text-white shadow-md shadow-blue-500/20'
                           : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                           }`}
                     >
                        {f}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <main className="px-4 py-6 space-y-8 container mx-auto max-w-7xl">
            {loading ? (
               <div className="space-y-6">
                  {[1, 2, 3].map((group) => (
                     <div key={group} className="space-y-4">
                        <div className="flex items-center gap-3">
                           <Skeleton variant="circular" width={24} height={24} />
                           <Skeleton variant="text" width={150} height={20} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                           {[1, 2].map((card) => (
                              <div key={card} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 w-1/3">
                                       <Skeleton variant="circular" width={32} height={32} />
                                       <Skeleton variant="text" width={40} height={12} className="hidden sm:block" />
                                    </div>
                                    <div className="flex flex-col items-center w-1/3 gap-2">
                                       <Skeleton variant="text" width={30} height={12} />
                                       <Skeleton variant="rectangular" width={50} height={24} />
                                    </div>
                                    <div className="flex items-center gap-3 w-1/3 justify-end">
                                       <Skeleton variant="text" width={40} height={12} className="hidden sm:block" />
                                       <Skeleton variant="circular" width={32} height={32} />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            ) : groupedMatches.length > 0 ? (
               groupedMatches.map(([date, matches]) => (
                  <div key={date} className="space-y-4">
                     <div className="flex items-center gap-2 px-1">
                        <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                           {formatDate(date)}
                        </h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matches.map(match => (
                           <MatchCard key={match.id} match={match} />
                        ))}
                     </div>
                  </div>
               ))
            ) : (
               <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <span className="material-symbols-outlined text-5xl mb-4 text-slate-200">event_busy</span>
                  <p className="text-sm font-medium">Không có trận đấu nào trong danh mục này</p>
               </div>
            )}
         </main>
      </div>
   );
}