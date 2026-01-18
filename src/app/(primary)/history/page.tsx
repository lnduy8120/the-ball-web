'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BetSummary from '../../../components/bet/BetSummary';
import BetItem from '../../../components/bet/BetItem';
import { useBets } from '../../../hooks/useBets';
import Skeleton from '../../../components/ui/Skeleton';
import AuthGuard from '../../../components/AuthGuard';

export default function BetHistoryPage() {
    const router = useRouter();
    const {
        searchTerm, setSearchTerm,
        filterType, setFilterType,
        bets, filterOptions, loading,
        page, setPage, totalPages, isPlaceholderData, total
    } = useBets();

    return (
        <AuthGuard>
            <div className="bg-background min-h-screen pb-24 relative">
                {/* <header className="px-4 py-4 bg-white border-b border-slate-200 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-slate-900">Lịch sử đặt cược</h1>
              </div>
        </header> */}

                <main className="p-4 space-y-6">
                    <BetSummary />

                    {/* Filters */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                        {filterOptions.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setFilterType(filter.id)}
                                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm transition-all ${filterType === filter.id
                                        ? 'bg-primary text-white shadow-blue-500/20'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* List */}
                    <div className="space-y-4 min-h-[300px]">
                        {loading ? (
                            <div className="flex flex-col gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                        <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex -space-x-2">
                                                    <Skeleton variant="circular" width={36} height={36} />
                                                    <Skeleton variant="circular" width={36} height={36} className="border-2 border-white" />
                                                </div>
                                                <div className="space-y-1">
                                                    <Skeleton variant="text" width={100} height={14} />
                                                    <Skeleton variant="text" width={80} height={10} />
                                                </div>
                                            </div>
                                            <Skeleton variant="rectangular" width={60} height={24} />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <Skeleton variant="text" width={60} height={12} />
                                                <Skeleton variant="text" width={80} height={14} />
                                            </div>
                                            <div className="flex justify-between">
                                                <Skeleton variant="text" width={60} height={12} />
                                                <Skeleton variant="text" width={80} height={14} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : bets.length > 0 ? (
                            <>
                                <div className={isPlaceholderData ? 'opacity-50 transition-opacity' : 'opacity-100 transition-opacity'}>
                                    {bets.map((bet: any) => (
                                        <div key={bet.id} className="mb-4">
                                            <BetItem bet={bet} />
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination Controls */}
                                <div className="flex items-center justify-between pt-4 pb-2">
                                    <button
                                        onClick={() => setPage(Math.max(page - 1, 1))}
                                        disabled={page === 1}
                                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                                    >
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>

                                    <span className="text-sm font-medium text-slate-600">
                                        Trang {page} / {totalPages || 1}
                                    </span>

                                    <button
                                        onClick={() => {
                                            if (!isPlaceholderData && page < totalPages) {
                                                setPage(page + 1);
                                            }
                                        }}
                                        disabled={isPlaceholderData || page >= totalPages}
                                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                                    >
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10 text-slate-500">
                                <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">search_off</span>
                                <p>Không tìm thấy vé cược</p>
                            </div>
                        )}
                    </div>
                </main>

                <button
                    onClick={() => router.push('/add-bet')}
                    className="fixed bottom-24 right-4 z-40 w-14 h-14 bg-primary rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white active:scale-95 transition-transform hover:bg-blue-600"
                >
                    <span className="material-symbols-outlined text-[32px]">add</span>
                </button>
            </div>
        </AuthGuard>
    );
}