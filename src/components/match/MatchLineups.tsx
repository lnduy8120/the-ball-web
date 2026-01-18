import React from 'react';

interface Team {
    name: string;
    short: string;
    logo: string;
}

interface MatchLineupsProps {
    match: {
        homeTeam: Team;
        awayTeam: Team;
    };
}

const MatchLineups: React.FC<MatchLineupsProps> = ({ match }) => {
    const lineups = {
        home: {
            formation: '4-3-3',
            color: 'bg-blue-600',
            starters: [
                { num: 31, name: 'Ederson', pos: 'GK', y: 8, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/263433-1668423233.jpg' },
                { num: 2, name: 'Walker', pos: 'DF', y: 18, x: 15, avatar: 'https://img.a.transfermarkt.technology/portrait/header/95424-1668422736.jpg' },
                { num: 3, name: 'Dias', pos: 'DF', y: 18, x: 38, avatar: 'https://img.a.transfermarkt.technology/portrait/header/357164-1668422896.jpg' },
                { num: 25, name: 'Akanji', pos: 'DF', y: 18, x: 62, avatar: 'https://img.a.transfermarkt.technology/portrait/header/284730-1668423004.jpg' },
                { num: 6, name: 'Ake', pos: 'DF', y: 18, x: 85, avatar: 'https://img.a.transfermarkt.technology/portrait/header/177476-1668423086.jpg' },
                { num: 17, name: 'De Bruyne', pos: 'MF', y: 30, x: 30, avatar: 'https://img.a.transfermarkt.technology/portrait/header/88755-1668423371.jpg' },
                { num: 16, name: 'Rodri', pos: 'MF', y: 35, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/357565-1668423479.jpg' },
                { num: 8, name: 'Gundogan', pos: 'MF', y: 30, x: 70, avatar: 'https://img.a.transfermarkt.technology/portrait/header/53622-1668423577.jpg' },
                { num: 26, name: 'Mahrez', pos: 'FW', y: 44, x: 20, avatar: 'https://img.a.transfermarkt.technology/portrait/header/171424-1668423681.jpg' },
                { num: 9, name: 'Haaland', pos: 'FW', y: 44, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/418560-1668423774.jpg' },
                { num: 47, name: 'Foden', pos: 'FW', y: 44, x: 80, avatar: 'https://img.a.transfermarkt.technology/portrait/header/406635-1668423871.jpg' },
            ],
            subs: [
                { num: 18, name: 'Ortega', pos: 'GK', avatar: 'https://img.a.transfermarkt.technology/portrait/header/144391-1662998394.jpg' },
                { num: 4, name: 'Phillips', pos: 'MF', avatar: 'https://img.a.transfermarkt.technology/portrait/header/225050-1668423982.jpg' },
                { num: 19, name: 'Alvarez', pos: 'FW', avatar: 'https://img.a.transfermarkt.technology/portrait/header/576024-1668424089.jpg' },
                { num: 20, name: 'Silva', pos: 'MF', avatar: 'https://img.a.transfermarkt.technology/portrait/header/240430-1668424192.jpg' }
            ]
        },
        away: {
            formation: '4-2-3-1',
            color: 'bg-red-600',
            starters: [
                { num: 1, name: 'Kepa', pos: 'GK', y: 92, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/192279-1663152002.jpg' },
                { num: 32, name: 'Cucurella', pos: 'DF', y: 82, x: 15, avatar: 'https://img.a.transfermarkt.technology/portrait/header/284857-1663152204.jpg' },
                { num: 26, name: 'Koulibaly', pos: 'DF', y: 82, x: 38, avatar: 'https://img.a.transfermarkt.technology/portrait/header/93128-1663152309.jpg' },
                { num: 6, name: 'Silva', pos: 'DF', y: 82, x: 62, avatar: 'https://img.a.transfermarkt.technology/portrait/header/29102-1663152412.jpg' },
                { num: 28, name: 'Azpili', pos: 'DF', y: 82, x: 85, avatar: 'https://img.a.transfermarkt.technology/portrait/header/57500-1663152515.jpg' },
                { num: 5, name: 'Jorginho', pos: 'MF', y: 70, x: 35, avatar: 'https://img.a.transfermarkt.technology/portrait/header/102017-1663152618.jpg' },
                { num: 8, name: 'Kovacic', pos: 'MF', y: 70, x: 65, avatar: 'https://img.a.transfermarkt.technology/portrait/header/51471-1663152721.jpg' },
                { num: 19, name: 'Mount', pos: 'MF', y: 60, x: 20, avatar: 'https://img.a.transfermarkt.technology/portrait/header/346483-1663152824.jpg' },
                { num: 29, name: 'Havertz', pos: 'MF', y: 60, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/309400-1663152927.jpg' },
                { num: 17, name: 'Sterling', pos: 'MF', y: 60, x: 80, avatar: 'https://img.a.transfermarkt.technology/portrait/header/134468-1663153030.jpg' },
                { num: 9, name: 'Aubameyang', pos: 'FW', y: 48, x: 50, avatar: 'https://img.a.transfermarkt.technology/portrait/header/58864-1663153133.jpg' },
            ],
            subs: [
                { num: 16, name: 'Mendy', pos: 'GK', avatar: 'https://img.a.transfermarkt.technology/portrait/header/442531-1663153236.jpg' },
                { num: 22, name: 'Ziyech', pos: 'MF', avatar: 'https://img.a.transfermarkt.technology/portrait/header/217111-1663153339.jpg' },
                { num: 23, name: 'Gallagher', pos: 'MF', avatar: 'https://img.a.transfermarkt.technology/portrait/header/488339-1663153442.jpg' },
                { num: 10, name: 'Pulisic', pos: 'FW', avatar: 'https://img.a.transfermarkt.technology/portrait/header/315779-1663153545.jpg' }
            ]
        }
    };

    return (
        <div className="animate-in fade-in duration-500 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pitch Section */}
                <div className="lg:col-span-3">
                    <div className="bg-card rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                            <div className="flex items-center gap-3">
                                <img src={match.homeTeam.logo} alt={match.homeTeam.short} className="w-8 h-8 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">{match.homeTeam.name}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">{lineups.home.formation}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sơ đồ thi đấu</span>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[9px] font-black text-green-600 uppercase">Live Match</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-right">
                                <div className="flex flex-col items-end">
                                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">{match.awayTeam.name}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">{lineups.away.formation}</span>
                                </div>
                                <img src={match.awayTeam.logo} alt={match.awayTeam.short} className="w-8 h-8 object-contain" />
                            </div>
                        </div>

                        <div className="p-4 md:p-8 bg-slate-50 flex justify-center">
                            {/* Premium Field */}
                            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#2d5a27] rounded-lg overflow-hidden shadow-2xl border-4 border-[#3d7a35]">
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
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white/40"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40"></div>

                                    {/* Penalty Box Top */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 border-2 border-white/40 border-t-0"></div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-6 border-2 border-white/40 border-t-0"></div>

                                    {/* Penalty Box Bottom */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-16 border-2 border-white/40 border-b-0"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-6 border-2 border-white/40 border-b-0"></div>
                                </div>

                                {/* Player Markers (Home) */}
                                {lineups.home.starters.map((p, i) => (
                                    <div
                                        key={`h-${i}`}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                                        style={{ top: `${p.y}%`, left: `${p.x}%` }}
                                    >
                                        <div className="flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                                            {/* Avatar-based Marker */}
                                            <div className="relative group/player cursor-pointer">
                                                <div className="relative">
                                                    <div
                                                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white shadow-lg relative z-10"
                                                        style={{ backgroundImage: `url('${p.avatar}')` }}
                                                    ></div>
                                                    <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm"></div>
                                                </div>

                                                {/* Number Badge */}
                                                <div className={`absolute -bottom-1 -right-1 ${lineups.home.color} rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-md z-20`}>
                                                    <span className="text-white text-[9px] font-black">{p.num}</span>
                                                </div>

                                                {/* Hover Popover */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-90 group-hover:scale-100">
                                                    <div className="bg-slate-900/95 backdrop-blur-md text-white p-2.5 rounded-xl shadow-2xl border border-white/20 min-w-[120px]">
                                                        <div className="text-[10px] font-black uppercase tracking-tight">{p.name}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-[9px] font-bold text-blue-400">{p.pos}</span>
                                                            <span className="text-white/30">•</span>
                                                            <span className="text-[9px] text-white/70">{match.homeTeam.short}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-2 h-2 bg-slate-900/95 rotate-45 mx-auto -mt-1 border-r border-b border-white/20"></div>
                                                </div>
                                            </div>
                                            {/* Name Tag */}
                                            <div className="bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm text-center max-w-[70px]">
                                                <span className="text-[8px] font-bold text-white truncate block">{p.name.split(' ').pop()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Player Markers (Away) */}
                                {lineups.away.starters.map((p, i) => (
                                    <div
                                        key={`a-${i}`}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                                        style={{ top: `${p.y}%`, left: `${p.x}%` }}
                                    >
                                        <div className="flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                                            {/* Avatar-based Marker */}
                                            <div className="relative group/player cursor-pointer">
                                                <div className="relative">
                                                    <div
                                                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white shadow-lg relative z-10"
                                                        style={{ backgroundImage: `url('${p.avatar}')` }}
                                                    ></div>
                                                    <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm"></div>
                                                </div>

                                                {/* Number Badge */}
                                                <div className={`absolute -bottom-1 -right-1 ${lineups.away.color} rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-md z-20`}>
                                                    <span className="text-white text-[9px] font-black">{p.num}</span>
                                                </div>

                                                {/* Hover Popover */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-90 group-hover:scale-100">
                                                    <div className="w-2 h-2 bg-slate-900/95 rotate-45 mx-auto -mb-1 border-l border-t border-white/20"></div>
                                                    <div className="bg-slate-900/95 backdrop-blur-md text-white p-2.5 rounded-xl shadow-2xl border border-white/20 min-w-[120px]">
                                                        <div className="text-[10px] font-black uppercase tracking-tight">{p.name}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-[9px] font-bold text-red-400">{p.pos}</span>
                                                            <span className="text-white/30">•</span>
                                                            <span className="text-[9px] text-white/70">{match.awayTeam.short}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Name Tag */}
                                            <div className="bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm text-center max-w-[70px]">
                                                <span className="text-[8px] font-bold text-white truncate block">{p.name.split(' ').pop()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 lg:col-span-3">
                    {/* Squad List Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Home Team Squad List */}
                        <div className="bg-card rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 border-b border-slate-100 bg-blue-50/30 flex items-center gap-3">
                                <img src={match.homeTeam.logo} alt={match.homeTeam.short} className="w-8 h-8 object-contain" />
                                <h3 className="font-black text-xs text-blue-900 uppercase tracking-tighter">{match.homeTeam.name}</h3>
                            </div>
                            <div className="p-0">
                                <div className="px-4 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Đội hình chính</div>
                                <div className="divide-y divide-slate-50 max-h-[350px] overflow-y-auto no-scrollbar">
                                    {lineups.home.starters.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group cursor-pointer">
                                            <div className="relative shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-cover bg-center border border-slate-200" style={{ backgroundImage: `url('${p.avatar}')` }}></div>
                                                <div className={`absolute -bottom-1 -right-1 ${lineups.home.color} rounded-full w-4 h-4 flex items-center justify-center border border-white`}>
                                                    <span className="text-white text-[8px] font-black">{p.num}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-primary transition-colors">{p.name}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{p.pos}</p>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">info</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-4 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-y border-slate-100">Dự bị</div>
                                <div className="divide-y divide-slate-50 max-h-[200px] overflow-y-auto no-scrollbar">
                                    {lineups.home.subs.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group cursor-pointer opacity-80">
                                            <div className="relative shrink-0 grayscale">
                                                <div className="w-9 h-9 rounded-full bg-cover bg-center border border-slate-100" style={{ backgroundImage: `url('${p.avatar}')` }}></div>
                                                <div className="absolute -bottom-0.5 -right-0.5 bg-slate-400 rounded-full w-4 h-4 flex items-center justify-center border border-white">
                                                    <span className="text-white text-[8px] font-black">{p.num}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-bold text-slate-700 truncate">{p.name}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase">{p.pos}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Away Team Squad List */}
                        <div className="bg-card rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 border-b border-slate-100 bg-red-50/30 flex items-center gap-3">
                                <img src={match.awayTeam.logo} alt={match.awayTeam.short} className="w-8 h-8 object-contain" />
                                <h3 className="font-black text-xs text-red-900 uppercase tracking-tighter">{match.awayTeam.name}</h3>
                            </div>
                            <div className="p-0">
                                <div className="px-4 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Đội hình chính</div>
                                <div className="divide-y divide-slate-50 max-h-[350px] overflow-y-auto no-scrollbar">
                                    {lineups.away.starters.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group cursor-pointer">
                                            <div className="relative shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-cover bg-center border border-slate-200" style={{ backgroundImage: `url('${p.avatar}')` }}></div>
                                                <div className={`absolute -bottom-1 -right-1 ${lineups.away.color} rounded-full w-4 h-4 flex items-center justify-center border border-white`}>
                                                    <span className="text-white text-[8px] font-black">{p.num}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-primary transition-colors">{p.name}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{p.pos}</p>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">info</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-4 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-y border-slate-100">Dự bị</div>
                                <div className="divide-y divide-slate-50 max-h-[200px] overflow-y-auto no-scrollbar">
                                    {lineups.away.subs.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors group cursor-pointer opacity-80">
                                            <div className="relative shrink-0 grayscale">
                                                <div className="w-9 h-9 rounded-full bg-cover bg-center border border-slate-100" style={{ backgroundImage: `url('${p.avatar}')` }}></div>
                                                <div className="absolute -bottom-0.5 -right-0.5 bg-slate-400 rounded-full w-4 h-4 flex items-center justify-center border border-white">
                                                    <span className="text-white text-[8px] font-black">{p.num}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-bold text-slate-700 truncate">{p.name}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase">{p.pos}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchLineups;