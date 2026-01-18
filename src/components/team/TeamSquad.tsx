'use client';

import React, { useState } from 'react';

interface Player {
    name: string;
    number: number;
    position: string;
    nationality: string;
    age: number;
    height: string;
    avatar: string;
    apps: number;
    goals: number;
    assists: number;
    rating?: number;
    recentForm?: string[]; // ['W', 'D', 'L']
    injuryStatus?: string; // 'Chấn thương', 'Nghi ngờ', 'Hồi phục'
    injuryReturn?: string; // '2 tuần'
    injuryType?: string; // 'Bắp chân', 'Đùi'
}

interface Coach {
    name: string;
    role: string;
    nationality: string;
    avatar: string;
}

interface FormationPosition {
    number: number;
    x: number;
    y: number;
    position: string;
}

interface Formation {
    name: string;
    description: string;
    positions: FormationPosition[];
}

interface PlayingStyle {
    possession: number;
    passingAccuracy: number;
    pressureIntensity: number;
    defensiveLine: string;
    buildUpStyle: string;
    attackingWidth: string;
    strengths: string[];
    weaknesses: string[];
    tacticalApproach: string;
}

interface TeamSquadProps {
    squad: Player[];
    coaches?: Coach[];
    mainLineup?: number[];
    substituteLineup?: number[];
    formation?: Formation | null;
    playingStyle?: PlayingStyle | null;
}

const TeamSquad: React.FC<TeamSquadProps> = ({
    squad,
    coaches = [],
    mainLineup = [],
    substituteLineup = [],
    formation = null,
    playingStyle = null
}) => {
    const [activeView, setActiveView] = useState<'all' | 'injuries' | 'lineup' | 'coaches' | 'tactics'>('all');
    const [positionFilter, setPositionFilter] = useState<string>('all');
    const [sortBy, setSortBy] = useState<'number' | 'name' | 'apps' | 'goals'>('number');

    // Group players by position
    const positions = {
        'Thủ môn': squad.filter(p => p.position === 'Thủ môn'),
        'Hậu vệ': squad.filter(p => p.position === 'Hậu vệ'),
        'Tiền vệ': squad.filter(p => p.position === 'Tiền vệ'),
        'Tiền đạo': squad.filter(p => p.position === 'Tiền đạo'),
    };

    const positionIcons = {
        'Thủ môn': 'sports_handball',
        'Hậu vệ': 'shield',
        'Tiền vệ': 'directions_run',
        'Tiền đạo': 'sports_soccer',
    };

    const positionColors = {
        'Thủ môn': { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
        'Hậu vệ': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        'Tiền vệ': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
        'Tiền đạo': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    };

    // Get injured players
    const injuredPlayers = squad.filter(p => p.injuryStatus);

    // Get players by lineup
    const mainLineupPlayers = squad.filter(p => mainLineup.includes(p.number));
    const substitutePlayers = squad.filter(p => substituteLineup.includes(p.number));

    // Filter players
    const getFilteredPlayers = () => {
        if (positionFilter === 'all') {
            return squad;
        }
        return squad.filter(p => p.position === positionFilter);
    };

    // Sort players
    const sortPlayers = (players: Player[]) => {
        return [...players].sort((a, b) => {
            switch (sortBy) {
                case 'number':
                    return a.number - b.number;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'apps':
                    return b.apps - a.apps;
                case 'goals':
                    return b.goals - a.goals;
                default:
                    return 0;
            }
        });
    };

    const filteredAndSortedPlayers = sortPlayers(getFilteredPlayers());

    // Squad statistics
    const totalPlayers = squad.length;
    const avgAge = (squad.reduce((sum, p) => sum + p.age, 0) / totalPlayers).toFixed(1);
    const totalGoals = squad.reduce((sum, p) => sum + p.goals, 0);
    const totalAssists = squad.reduce((sum, p) => sum + p.assists, 0);

    return (
        <div className="animate-in fade-in duration-300 space-y-6">
            {/* Squad Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <div className="bg-blue-50 p-2 rounded-full">
                            <span className="material-symbols-outlined text-primary text-xl">groups</span>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{totalPlayers}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Cầu thủ</p>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <div className="bg-purple-50 p-2 rounded-full">
                            <span className="material-symbols-outlined text-purple-600 text-xl">cake</span>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{avgAge}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Tuổi TB</p>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <div className="bg-green-50 p-2 rounded-full">
                            <span className="material-symbols-outlined text-green-600 text-xl">sports_soccer</span>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{totalGoals}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Bàn thắng</p>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                    <div className="flex items-center justify-center mb-2">
                        <div className="bg-orange-50 p-2 rounded-full">
                            <span className="material-symbols-outlined text-orange-600 text-xl">assist_walker</span>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{totalAssists}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">Kiến tạo</p>
                </div>
            </div>

            {/* View Tabs */}
            <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveView('all')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${activeView === 'all'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">groups</span>
                        Toàn đội
                    </button>
                    <button
                        onClick={() => setActiveView('lineup')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${activeView === 'lineup'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">sports</span>
                        Đội hình
                    </button>
                    <button
                        onClick={() => setActiveView('injuries')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${activeView === 'injuries'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">medical_services</span>
                        Chấn thương ({injuredPlayers.length})
                    </button>
                    <button
                        onClick={() => setActiveView('coaches')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${activeView === 'coaches'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">person</span>
                        HLV ({coaches.length})
                    </button>
                    <button
                        onClick={() => setActiveView('tactics')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${activeView === 'tactics'
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">strategy</span>
                        Chiến thuật
                    </button>
                </div>
            </div>

            {/* All Squad View */}
            {activeView === 'all' && (
                <>
                    {/* Filters & Sort */}
                    <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Position Filter */}
                            <div className="flex-1">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Vị trí</label>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setPositionFilter('all')}
                                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${positionFilter === 'all'
                                            ? 'bg-primary text-white shadow-md'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        Tất cả
                                    </button>
                                    {Object.keys(positions).map((pos) => (
                                        <button
                                            key={pos}
                                            onClick={() => setPositionFilter(pos)}
                                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${positionFilter === pos
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-sm">
                                                {positionIcons[pos as keyof typeof positionIcons]}
                                            </span>
                                            {pos}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort */}
                            <div className="md:w-48">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Sắp xếp</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="w-full px-4 py-2 text-sm font-medium bg-slate-100 border-none rounded-lg text-slate-700 focus:ring-2 focus:ring-primary outline-none"
                                >
                                    <option value="number">Số áo</option>
                                    <option value="name">Tên</option>
                                    <option value="apps">Số trận</option>
                                    <option value="goals">Bàn thắng</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Players List */}
                    {positionFilter === 'all' ? (
                        // Grouped by position
                        <div className="space-y-6">
                            {Object.entries(positions).map(([position, players]) => {
                                if (players.length === 0) return null;
                                const colors = positionColors[position as keyof typeof positionColors];

                                return (
                                    <div key={position} className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                        <div className={`${colors.bg} px-4 py-3 border-b ${colors.border} flex items-center gap-2`}>
                                            <span className={`material-symbols-outlined ${colors.text}`}>
                                                {positionIcons[position as keyof typeof positionIcons]}
                                            </span>
                                            <h3 className={`text-sm font-bold ${colors.text} uppercase tracking-wide`}>
                                                {position} ({players.length})
                                            </h3>
                                        </div>
                                        <div className="divide-y divide-slate-50">
                                            {sortPlayers(players).map((player) => (
                                                <PlayerCard key={player.number} player={player} colors={colors} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        // Filtered list
                        <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="divide-y divide-slate-50">
                                {filteredAndSortedPlayers.length > 0 ? (
                                    filteredAndSortedPlayers.map((player) => {
                                        const colors = positionColors[player.position as keyof typeof positionColors];
                                        return <PlayerCard key={player.number} player={player} colors={colors} />;
                                    })
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                        <span className="material-symbols-outlined text-5xl mb-4 text-slate-200">person_off</span>
                                        <p className="text-sm font-medium">Không tìm thấy cầu thủ nào</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Lineup View */}
            {activeView === 'lineup' && (
                <div className="space-y-6">
                    {/* Formation Diagram (Starting XI) */}
                    {formation && (
                        <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="bg-green-50 px-4 py-3 border-b border-green-200 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-600">sports</span>
                                    <h3 className="text-sm font-bold text-green-600 uppercase tracking-wide">
                                        Đội hình ra sân: {formation.name}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-green-600 uppercase">Trận đấu hôm nay</span>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 bg-slate-50">
                                {/* Professional Football Pitch */}
                                <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] md:aspect-[2/3] bg-[#2d5a27] rounded-lg overflow-hidden shadow-2xl border-4 border-[#3d7a35]">
                                    {/* Grass Pattern (Stripes) */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'repeating-linear-gradient(0deg, #356b30, #356b30 10%, #2d5a27 10%, #2d5a27 20%)',
                                        backgroundSize: '100% 100%'
                                    }}></div>

                                    {/* Pitch Lines (White) */}
                                    <div className="absolute inset-4 border-2 border-white/40 pointer-events-none">
                                        {/* Center Line */}
                                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/40"></div>
                                        {/* Center Circle */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/40"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40"></div>

                                        {/* Penalty Area Top */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 border-2 border-white/40 border-t-0"></div>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-10 border-2 border-white/40 border-t-0"></div>
                                        {/* Penalty Arc Top */}
                                        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-16 border-2 border-white/40 border-t-0 rounded-b-full"></div>

                                        {/* Penalty Area Bottom */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 border-2 border-white/40 border-b-0"></div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-10 border-2 border-white/40 border-b-0"></div>
                                        {/* Penalty Arc Bottom */}
                                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-32 h-16 border-2 border-white/40 border-b-0 rounded-t-full"></div>
                                    </div>

                                    {/* Player Nodes */}
                                    {formation.positions.map((pos) => {
                                        const player = squad.find(p => p.number === pos.number);
                                        if (!player) return null;

                                        return (
                                            <div
                                                key={pos.number}
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                                                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                                            >
                                                <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110 cursor-pointer">
                                                    <div className="relative group">
                                                        {/* 3D-like Player Badge */}
                                                        <div className="relative">
                                                            <div
                                                                className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white shadow-lg relative z-10"
                                                                style={{ backgroundImage: `url('${player.avatar}')` }}
                                                            ></div>
                                                            <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm"></div>
                                                        </div>

                                                        {/* Number Badge */}
                                                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md z-20">
                                                            <span className="text-white text-[10px] font-black">{player.number}</span>
                                                        </div>

                                                        {/* Hover Profile Popover */}
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-95 group-hover:scale-100">
                                                            <div className="bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl border border-white/20 min-w-[140px]">
                                                                <div className="text-xs font-black uppercase mb-1">{player.name}</div>
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="text-[10px] font-bold text-primary">{pos.position}</span>
                                                                    <span className="text-white/30">•</span>
                                                                    <span className="text-[10px] text-white/70">{player.nationality}</span>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                                                                    <div className="text-center">
                                                                        <div className="text-[9px] text-white/50">Goals</div>
                                                                        <div className="text-[11px] font-bold">{player.goals}</div>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <div className="text-[9px] text-white/50">Rating</div>
                                                                        <div className="text-[11px] font-bold text-yellow-500">{player.rating || '-'}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-2 h-2 bg-slate-900/95 rotate-45 mx-auto -mt-1 border-r border-b border-white/20"></div>
                                                        </div>
                                                    </div>

                                                    {/* Position Tag */}
                                                    <div className="bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-sm border border-slate-200">
                                                        <span className="text-[9px] font-black text-slate-800 uppercase tracking-tighter">{pos.position}</span>
                                                    </div>
                                                    {/* Name Tag (Mobile optimized) */}
                                                    <div className="bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm text-center max-w-[80px]">
                                                        <span className="text-[9px] font-bold text-white truncate block">{player.name.split(' ').pop()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Starters List (Standard) */}
                    <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-xs font-bold text-slate-600 uppercase tracking-widest">Chi tiết đội hình chính</h3>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {mainLineupPlayers.map((player) => {
                                const colors = positionColors[player.position as keyof typeof positionColors];
                                return <PlayerCard key={player.number} player={player} colors={colors} showForm />;
                            })}
                        </div>
                    </div>

                    {/* Substitutes Section */}
                    <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="bg-orange-50 px-4 py-3 border-b border-orange-200 flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-600">group</span>
                            <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wide">
                                Cầu thủ dự bị ({substitutePlayers.length})
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {substitutePlayers.map((player) => {
                                const colors = positionColors[player.position as keyof typeof positionColors];
                                return <PlayerCard key={player.number} player={player} colors={colors} showForm />;
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Injuries View */}
            {activeView === 'injuries' && (
                <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="bg-red-50 px-4 py-3 border-b border-red-200 flex items-center gap-2">
                        <span className="material-symbols-outlined text-red-600">medical_services</span>
                        <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide">
                            Danh sách chấn thương ({injuredPlayers.length})
                        </h3>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {injuredPlayers.length > 0 ? (
                            injuredPlayers.map((player) => {
                                const colors = positionColors[player.position as keyof typeof positionColors];
                                return <InjuryCard key={player.number} player={player} colors={colors} />;
                            })
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                <span className="material-symbols-outlined text-5xl mb-4 text-slate-200">healing</span>
                                <p className="text-sm font-medium">Không có cầu thủ chấn thương</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Coaches View */}
            {activeView === 'coaches' && (
                <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="bg-purple-50 px-4 py-3 border-b border-purple-200 flex items-center gap-2">
                        <span className="material-symbols-outlined text-purple-600">person</span>
                        <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wide">
                            Ban huấn luyện ({coaches.length})
                        </h3>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {coaches.map((coach, index) => (
                            <CoachCard key={index} coach={coach} />
                        ))}
                    </div>
                </div>
            )}

            {/* Tactics View */}
            {activeView === 'tactics' && (
                <div className="space-y-6">
                    {/* Summary Card */}
                    <div className="bg-gradient-to-br from-indigo-600 to-primary p-6 rounded-2xl shadow-lg border border-white/20 text-white">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tight">{formation?.name || 'Chiến Thuật'}</h3>
                                <p className="text-indigo-100 text-sm mt-1 max-w-md">{formation?.description}</p>
                            </div>
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                <span className="material-symbols-outlined text-3xl">strategy</span>
                            </div>
                        </div>
                    </div>

                    {/* Playing Style */}
                    {playingStyle && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Statistics */}
                            <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <div className="bg-blue-50 px-4 py-3 border-b border-blue-200 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-blue-600">analytics</span>
                                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                                        Phong cách chơi
                                    </h3>
                                </div>
                                <div className="p-4 space-y-4">
                                    {/* Possession */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Kiểm soát bóng</span>
                                            <span className="text-sm font-bold text-primary">{playingStyle.possession}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full transition-all"
                                                style={{ width: `${playingStyle.possession}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Passing Accuracy */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Độ chính xác chuyền bóng</span>
                                            <span className="text-sm font-bold text-green-600">{playingStyle.passingAccuracy}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full transition-all"
                                                style={{ width: `${playingStyle.passingAccuracy}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Pressure Intensity */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Cường độ pressing</span>
                                            <span className="text-sm font-bold text-orange-600">{playingStyle.pressureIntensity}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-orange-600 h-2 rounded-full transition-all"
                                                style={{ width: `${playingStyle.pressureIntensity}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Tactical Details */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <div className="bg-slate-50 rounded-lg p-3">
                                            <div className="text-xs text-slate-500 mb-1">Hàng phòng ngự</div>
                                            <div className="text-sm font-bold text-slate-900">{playingStyle.defensiveLine}</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-3">
                                            <div className="text-xs text-slate-500 mb-1">Xây dựng lối chơi</div>
                                            <div className="text-sm font-bold text-slate-900">{playingStyle.buildUpStyle}</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-lg p-3 col-span-2">
                                            <div className="text-xs text-slate-500 mb-1">Độ rộng tấn công</div>
                                            <div className="text-sm font-bold text-slate-900">{playingStyle.attackingWidth}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Strengths & Weaknesses */}
                            <div className="space-y-6">
                                {/* Strengths */}
                                <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                    <div className="bg-green-50 px-4 py-3 border-b border-green-200 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-green-600">check_circle</span>
                                        <h3 className="text-sm font-bold text-green-600 uppercase tracking-wide">
                                            Điểm mạnh
                                        </h3>
                                    </div>
                                    <div className="p-4">
                                        <ul className="space-y-2">
                                            {playingStyle.strengths.map((strength, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">arrow_forward</span>
                                                    <span className="text-sm text-slate-700">{strength}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Weaknesses */}
                                <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                    <div className="bg-red-50 px-4 py-3 border-b border-red-200 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-red-600">warning</span>
                                        <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide">
                                            Điểm yếu
                                        </h3>
                                    </div>
                                    <div className="p-4">
                                        <ul className="space-y-2">
                                            {playingStyle.weaknesses.map((weakness, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="material-symbols-outlined text-red-600 text-lg mt-0.5">arrow_forward</span>
                                                    <span className="text-sm text-slate-700">{weakness}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tactical Approach */}
                    {playingStyle && (
                        <div className="bg-card rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-600">description</span>
                                <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                                    Triết lý chiến thuật
                                </h3>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    {playingStyle.tacticalApproach}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Player Card Component
const PlayerCard: React.FC<{ player: Player; colors: any; showForm?: boolean }> = ({ player, colors, showForm = false }) => {
    return (
        <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
                {/* Player Number & Avatar */}
                <div className="relative shrink-0">
                    <div
                        className="w-16 h-16 rounded-full bg-cover bg-center bg-slate-100 border-2 border-slate-200"
                        style={{ backgroundImage: `url('${player.avatar}')` }}
                    ></div>
                    <div className={`absolute -bottom-1 -right-1 ${colors.bg} rounded-full px-2 py-1 border-2 ${colors.border} shadow-sm flex items-center justify-center min-w-[32px]`}>
                        <span className={`text-sm font-bold ${colors.text}`}>{player.number}</span>
                    </div>
                </div>

                {/* Player Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex-1 min-w-0">
                            <h4 className="text-base font-bold text-slate-900 truncate group-hover:text-primary transition-colors">
                                {player.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs font-medium ${colors.text}`}>{player.position}</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-xs text-slate-500">{player.nationality}</span>
                            </div>
                        </div>
                        {player.rating && (
                            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-sm">star</span>
                                <span className="text-sm font-bold text-primary">{player.rating}</span>
                            </div>
                        )}
                    </div>

                    {/* Player Details */}
                    <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                            <span className="material-symbols-outlined text-sm">cake</span>
                            <span>{player.age} tuổi</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                            <span className="material-symbols-outlined text-sm">height</span>
                            <span>{player.height}</span>
                        </div>
                    </div>

                    {/* Recent Form */}
                    {showForm && player.recentForm && player.recentForm.length > 0 && (
                        <div className="flex items-center gap-2 mt-3">
                            <span className="text-xs text-slate-500 font-medium">Phong độ:</span>
                            <div className="flex gap-1">
                                {player.recentForm.map((result, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${result === 'W'
                                            ? 'bg-green-500 text-white'
                                            : result === 'D'
                                                ? 'bg-gray-400 text-white'
                                                : 'bg-red-500 text-white'
                                            }`}
                                    >
                                        {result}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Player Stats */}
                <div className="hidden md:flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex flex-col items-center px-3">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Trận</span>
                        <span className="text-base font-bold text-slate-700 mt-1">{player.apps}</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Bàn</span>
                        <span className="text-base font-bold text-green-600 mt-1">{player.goals}</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">KT</span>
                        <span className="text-base font-bold text-blue-600 mt-1">{player.assists}</span>
                    </div>
                </div>

                {/* Mobile Stats */}
                <div className="flex md:hidden flex-col gap-2">
                    <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                            <span className="text-slate-400">Trận:</span>
                            <span className="font-bold text-slate-700">{player.apps}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-slate-400">Bàn:</span>
                            <span className="font-bold text-green-600">{player.goals}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-slate-400">KT:</span>
                            <span className="font-bold text-blue-600">{player.assists}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Injury Card Component
const InjuryCard: React.FC<{ player: Player; colors: any }> = ({ player, colors }) => {
    const getInjuryStatusColor = (status?: string) => {
        switch (status) {
            case 'Chấn thương':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'Nghi ngờ':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'Hồi phục':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
                {/* Player Number & Avatar */}
                <div className="relative shrink-0">
                    <div
                        className="w-16 h-16 rounded-full bg-cover bg-center bg-slate-100 border-2 border-slate-200 opacity-75"
                        style={{ backgroundImage: `url('${player.avatar}')` }}
                    ></div>
                    <div className={`absolute -bottom-1 -right-1 ${colors.bg} rounded-full px-2 py-1 border-2 ${colors.border} shadow-sm flex items-center justify-center min-w-[32px]`}>
                        <span className={`text-sm font-bold ${colors.text}`}>{player.number}</span>
                    </div>
                </div>

                {/* Player Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-slate-900 truncate">{player.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium ${colors.text}`}>{player.position}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{player.nationality}</span>
                    </div>

                    {/* Injury Info */}
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                        <div className={`px-3 py-1 rounded-lg border text-xs font-bold ${getInjuryStatusColor(player.injuryStatus)}`}>
                            {player.injuryStatus}
                        </div>
                        {player.injuryType && (
                            <div className="flex items-center gap-1 text-xs text-slate-600">
                                <span className="material-symbols-outlined text-sm">emergency</span>
                                <span>{player.injuryType}</span>
                            </div>
                        )}
                        {player.injuryReturn && (
                            <div className="flex items-center gap-1 text-xs text-slate-600">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                <span>Trở lại: {player.injuryReturn}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Coach Card Component
const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => {
    return (
        <div className="p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
                {/* Coach Avatar */}
                <div
                    className="w-16 h-16 rounded-full bg-cover bg-center bg-slate-100 border-2 border-slate-200 shrink-0"
                    style={{ backgroundImage: `url('${coach.avatar}')` }}
                ></div>

                {/* Coach Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-slate-900 truncate">{coach.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-primary">{coach.role}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{coach.nationality}</span>
                    </div>
                </div>

                {/* Role Icon */}
                <div className="bg-purple-50 p-3 rounded-full">
                    <span className="material-symbols-outlined text-purple-600">person</span>
                </div>
            </div>
        </div>
    );
};

export default TeamSquad;
