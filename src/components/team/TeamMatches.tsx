'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TeamMatch {
    id: string;
    date: string;
    time: string;
    competition: string;
    homeTeam: {
        name: string;
        shortName: string;
        logo: string;
    };
    awayTeam: {
        name: string;
        shortName: string;
        logo: string;
    };
    homeScore?: number;
    awayScore?: number;
    status: 'finished' | 'upcoming' | 'live';
    venue?: string;
    round?: string;
}

interface TeamMatchesProps {
    matches: TeamMatch[];
}

const TeamMatches: React.FC<TeamMatchesProps> = ({ matches }) => {
    const router = useRouter();
    const [filter, setFilter] = useState<'all' | 'home' | 'away'>('all');
    const [statusFilter, setStatusFilter] = useState<'all' | 'finished' | 'upcoming'>('all');

    // Filter matches based on selected filters
    const filteredMatches = matches.filter(match => {
        const teamName = 'Manchester City'; // This should come from props or context

        // Home/Away filter
        if (filter === 'home' && match.homeTeam.name !== teamName) return false;
        if (filter === 'away' && match.awayTeam.name !== teamName) return false;

        // Status filter
        if (statusFilter === 'finished' && match.status !== 'finished') return false;
        if (statusFilter === 'upcoming' && match.status !== 'upcoming') return false;

        return true;
    });

    const getMatchResult = (match: TeamMatch) => {
        if (match.status !== 'finished') return null;

        const teamName = 'Manchester City';
        const isHome = match.homeTeam.name === teamName;
        const teamScore = isHome ? match.homeScore : match.awayScore;
        const opponentScore = isHome ? match.awayScore : match.homeScore;

        if (teamScore! > opponentScore!) return 'win';
        if (teamScore! < opponentScore!) return 'loss';
        return 'draw';
    };

    const getResultBadge = (result: string | null) => {
        if (!result) return null;

        const styles = {
            win: 'bg-green-50 text-green-600 border-green-200',
            draw: 'bg-slate-100 text-slate-600 border-slate-200',
            loss: 'bg-red-50 text-red-600 border-red-200'
        };

        const labels = {
            win: 'T',
            draw: 'H',
            loss: 'B'
        };

        return (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${styles[result as keyof typeof styles]}`}>
                {labels[result as keyof typeof labels]}
            </div>
        );
    };

    return (
        <div className="animate-in fade-in duration-300 space-y-6">
            {/* Filters */}
            <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 space-y-4">
                <div className="flex flex-wrap gap-3">
                    <div className="flex-1 min-w-[200px]">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Địa điểm</label>
                        <div className="flex p-1 bg-slate-100 rounded-lg">
                            <button
                                onClick={() => setFilter('all')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Tất cả
                            </button>
                            <button
                                onClick={() => setFilter('home')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${filter === 'home' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Sân nhà
                            </button>
                            <button
                                onClick={() => setFilter('away')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${filter === 'away' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Sân khách
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Trạng thái</label>
                        <div className="flex p-1 bg-slate-100 rounded-lg">
                            <button
                                onClick={() => setStatusFilter('all')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${statusFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Tất cả
                            </button>
                            <button
                                onClick={() => setStatusFilter('finished')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${statusFilter === 'finished' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Đã đấu
                            </button>
                            <button
                                onClick={() => setStatusFilter('upcoming')}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${statusFilter === 'upcoming' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Sắp tới
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Matches List */}
            <div className="space-y-3">
                {filteredMatches.length > 0 ? (
                    filteredMatches.map((match) => {
                        const result = getMatchResult(match);

                        return (
                            <div
                                key={match.id}
                                onClick={() => router.push(`/match/${match.id}`)}
                                className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group"
                            >
                                {/* Competition & Date */}
                                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-50">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">sports_soccer</span>
                                        <span className="text-xs font-bold text-slate-700">{match.competition}</span>
                                        {match.round && (
                                            <>
                                                <span className="text-slate-300">•</span>
                                                <span className="text-xs text-slate-500">{match.round}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {result && getResultBadge(result)}
                                        <span className="text-xs text-slate-500">{match.date}</span>
                                    </div>
                                </div>

                                {/* Teams & Score */}
                                <div className="flex items-center justify-between">
                                    {/* Home Team */}
                                    <div className="flex items-center gap-3 flex-1">
                                        <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-10 h-10 object-contain" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{match.homeTeam.name}</span>
                                            {match.venue && match.homeTeam.name === 'Manchester City' && (
                                                <span className="text-[10px] text-slate-400 font-medium">Sân nhà</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Score / Time */}
                                    <div className="flex flex-col items-center justify-center px-6">
                                        {match.status === 'finished' ? (
                                            <>
                                                <span className="text-xs font-bold text-slate-400 mb-1">KẾT THÚC</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl font-bold text-slate-900">{match.homeScore}</span>
                                                    <span className="text-sm text-slate-300">-</span>
                                                    <span className="text-2xl font-bold text-slate-900">{match.awayScore}</span>
                                                </div>
                                            </>
                                        ) : match.status === 'live' ? (
                                            <>
                                                <div className="flex items-center gap-1 mb-1">
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                                    <span className="text-xs font-bold text-red-500">LIVE</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl font-bold text-slate-900">{match.homeScore}</span>
                                                    <span className="text-sm text-slate-300">-</span>
                                                    <span className="text-2xl font-bold text-slate-900">{match.awayScore}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-xs font-medium text-slate-500 mb-1">{match.time}</span>
                                                <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
                                                    <span className="text-sm font-bold text-slate-700">vs</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Away Team */}
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{match.awayTeam.name}</span>
                                            {match.venue && match.awayTeam.name === 'Manchester City' && (
                                                <span className="text-[10px] text-slate-400 font-medium">Sân khách</span>
                                            )}
                                        </div>
                                        <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-10 h-10 object-contain" />
                                    </div>
                                </div>

                                {/* Venue */}
                                {match.venue && (
                                    <div className="mt-3 pt-3 border-t border-slate-50 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">location_on</span>
                                        <span className="text-xs text-slate-500">{match.venue}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <span className="material-symbols-outlined text-5xl mb-4 text-slate-200">event_busy</span>
                        <p className="text-sm font-medium">Không tìm thấy trận đấu nào</p>
                    </div>
                )}
            </div>

            {/* Summary Stats */}
            {filteredMatches.length > 0 && statusFilter === 'finished' && (
                <div className="bg-card rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Thống kê tổng hợp</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl border border-green-100">
                            <span className="text-2xl font-bold text-green-600">
                                {filteredMatches.filter(m => getMatchResult(m) === 'win').length}
                            </span>
                            <span className="text-xs text-green-600 font-medium mt-1">Thắng</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-slate-100 rounded-xl border border-slate-200">
                            <span className="text-2xl font-bold text-slate-600">
                                {filteredMatches.filter(m => getMatchResult(m) === 'draw').length}
                            </span>
                            <span className="text-xs text-slate-600 font-medium mt-1">Hòa</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-red-50 rounded-xl border border-red-100">
                            <span className="text-2xl font-bold text-red-600">
                                {filteredMatches.filter(m => getMatchResult(m) === 'loss').length}
                            </span>
                            <span className="text-xs text-red-600 font-medium mt-1">Thua</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamMatches;
