'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import TeamOverview from '../../components/team/TeamOverview';
import TeamStats from '../../components/team/TeamStats';
import TeamMatches from '../../components/team/TeamMatches';
import TeamSquad from '../../components/team/TeamSquad';
import { useTeam } from '../../hooks/useTeam';
import Skeleton from '../../components/ui/Skeleton';
import BottomNav from '../../components/BottomNav';
import SideNav from '../../components/SideNav';

interface TeamDetailClientProps {
    initialData?: any;
}

export default function TeamDetailClient({ initialData }: TeamDetailClientProps) {
    const router = useRouter();
    const {
        activeTab,
        setActiveTab,
        performanceData,
        lineData,
        matchStats,
        goalStats,
        players,
        matches,
        squad,
        coaches,
        mainLineup,
        substituteLineup,
        formation,
        playingStyle,
        tabs,
        loading
    } = useTeam(initialData);

    if (loading) {
        return (
            <div className="bg-background min-h-screen pb-24 font-sans">
                <div className="sticky top-0 z-50 bg-card p-4 border-b border-slate-200 flex justify-between items-center">
                    <Skeleton variant="circular" width={32} height={32} />
                    <Skeleton variant="text" width={150} height={20} />
                    <Skeleton variant="circular" width={32} height={32} />
                </div>
                <div className="bg-card border-b border-slate-50 p-6 flex flex-col items-center gap-4">
                    <Skeleton variant="circular" width={96} height={96} />
                    <Skeleton variant="text" width={200} height={32} />
                    <Skeleton variant="text" width={100} height={20} />
                </div>
                <div className="p-4 md:p-6 space-y-6 container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <Skeleton variant="rectangular" height={100} />
                        <Skeleton variant="rectangular" height={100} />
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Skeleton variant="rectangular" height={300} className="lg:col-span-2" />
                        <Skeleton variant="rectangular" height={300} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen pb-24 font-sans landscape:pl-20">
            {/* Team Hero with Clean Header */}
            {/* <div className="sticky top-0 z-50 bg-card p-4 border-b border-slate-200">
                <div className="container mx-auto max-w-7xl flex items-center justify-center">
                    <h1 className="text-xl font-bold text-slate-900">Chi tiết đội bóng</h1>
                </div>
            </div> */}

            <div className="bg-card border-b border-slate-50">
                <div className="container mx-auto max-w-7xl flex p-6 flex-col items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="bg-center bg-no-repeat bg-contain aspect-square rounded-full h-24 w-24 border border-slate-100 shadow-sm p-4">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-slate-900 text-2xl font-bold leading-tight tracking-[-0.015em] text-center">Manchester City</h1>
                            <div className="mt-2 flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                                <span className="text-primary text-sm font-bold">#1</span>
                                <span className="text-slate-500 text-sm font-normal">Premier League</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky top-[0px] z-40 bg-card shadow-sm">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex overflow-x-auto no-scrollbar px-4 border-b border-slate-200 justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 px-6 min-w-fit transition-colors ${activeTab === tab
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl flex flex-col gap-6 p-4 md:p-6">
                {activeTab === 'Tổng quan' && (
                    <TeamOverview performanceData={performanceData} lineData={lineData} players={players} />
                )}

                {activeTab === 'Thống kê' && (
                    <TeamStats matchStats={matchStats} goalStats={goalStats} />
                )}

                {activeTab === 'Trận đấu' && (
                    <TeamMatches matches={matches} />
                )}

                {activeTab === 'Đội hình' && (
                    <TeamSquad
                        squad={squad}
                        coaches={coaches}
                        mainLineup={mainLineup}
                        substituteLineup={substituteLineup}
                        formation={formation}
                        playingStyle={playingStyle}
                    />
                )}

                {(activeTab !== 'Tổng quan' && activeTab !== 'Thống kê' && activeTab !== 'Trận đấu' && activeTab !== 'Đội hình') && (
                    <div className="text-center py-20 text-slate-500 animate-in fade-in">
                        <span className="material-symbols-outlined text-4xl mb-4 text-slate-300">construction</span>
                        <p className="text-lg">Nội dung {activeTab} đang được cập nhật...</p>
                    </div>
                )}
            </div>
            <SideNav />
            <BottomNav />
        </div>
    );
}