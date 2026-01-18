import React, { useState } from 'react';

interface Team {
  name: string;
  short: string;
  logo: string;
}

interface MatchStatsProps {
  match: {
    homeTeam: Team;
    awayTeam: Team;
  };
}

const MatchStats: React.FC<MatchStatsProps> = ({ match }) => {
  const [historyStatFilter, setHistoryStatFilter] = useState<'goals' | 'corners' | 'cards'>('goals');

  const homeRecentMatches = [
    { result: 'T', opp: 'AVL', score: '3 - 1', corners: 6, goals: 3, cards: 1, resColor: 'bg-win' },
    { result: 'T', opp: 'TOT', score: '4 - 2', corners: 5, goals: 4, cards: 2, resColor: 'bg-win' },
    { result: 'B', opp: 'MUN', score: '1 - 2', corners: 8, goals: 1, cards: 3, resColor: 'bg-loss' },
    { result: 'B', opp: 'SOU', score: '0 - 2', corners: 9, goals: 0, cards: 0, resColor: 'bg-loss' },
    { result: 'T', opp: 'CHE', score: '4 - 0', corners: 7, goals: 4, cards: 1, resColor: 'bg-win' },
  ];

  const awayRecentMatches = [
    { result: 'H', opp: 'LIV', score: '0 - 0', corners: 3, goals: 0, cards: 2, resColor: 'bg-draw' },
    { result: 'T', opp: 'CRY', score: '1 - 0', corners: 5, goals: 1, cards: 1, resColor: 'bg-win' },
    { result: 'B', opp: 'FUL', score: '1 - 2', corners: 4, goals: 1, cards: 4, resColor: 'bg-loss' },
    { result: 'B', opp: 'MCY', score: '0 - 4', corners: 2, goals: 0, cards: 2, resColor: 'bg-loss' },
    { result: 'B', opp: 'MCY', score: '0 - 1', corners: 3, goals: 0, cards: 1, resColor: 'bg-loss' },
  ];

  const h2hHistory = [
    { date: '12/11/23', home: 'Chelsea', homeShort: 'CHE', away: 'Man City', awayShort: 'MCY', score: '4 - 4', league: 'NHA' },
    { date: '21/05/23', home: 'Man City', homeShort: 'MCY', away: 'Chelsea', awayShort: 'CHE', score: '1 - 0', league: 'NHA' },
    { date: '08/01/23', home: 'Man City', homeShort: 'MCY', away: 'Chelsea', awayShort: 'CHE', score: '4 - 0', league: 'FA' },
    { date: '05/01/23', home: 'Chelsea', homeShort: 'CHE', away: 'Man City', awayShort: 'MCY', score: '0 - 1', league: 'NHA' },
    { date: '09/11/22', home: 'Man City', homeShort: 'MCY', away: 'Chelsea', awayShort: 'CHE', score: '2 - 0', league: 'EFL' },
  ];
  
  const h2hDetailedStats = [
      { label: 'Kiểm soát bóng', home: '54%', away: '46%', hPercent: 54, aPercent: 46 },
      { label: 'Sút trúng đích', home: '6.2', away: '4.5', hPercent: 58, aPercent: 42 },
      { label: 'Phạm lỗi', home: '10.5', away: '11.8', hPercent: 47, aPercent: 53 },
      { label: 'Việt vị', home: '1.5', away: '2.2', hPercent: 40, aPercent: 60 }
  ];

  const statsComparison = [
    { label: 'Bàn thắng TB/trận', home: '2.4', away: '0.4', highlight: 'home' },
    { label: 'Tổng số bàn thắng', home: '12', away: '2', highlight: 'home' },
    { label: 'Bàn thua TB/trận', home: '1.2', away: '1.4', highlight: 'none' },
    { label: 'Kiểm soát bóng TB', home: '62%', away: '51%', highlight: 'home' },
    { label: 'Phạt góc TB/trận', home: '7.2', away: '4.5', highlight: 'home' },
    { label: 'Giữ sạch lưới', home: '1', away: '2', highlight: 'none' },
    { label: 'Chuỗi trận', home: 'W-W-L', away: 'D-W-L', highlight: 'none' },
  ];

  const renderRecentMatches = (teamShort: string, logo: string, matches: typeof homeRecentMatches) => (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-slate-100 h-full">
        <div className="flex items-center justify-center mb-4 pb-2 border-b border-slate-200">
            <img alt={teamShort} className="w-6 h-6 object-contain mr-2" src={logo}/>
            <span className="text-xs font-bold">{teamShort}</span>
        </div>
        <div className="space-y-4">
            {matches.map((m, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full ${m.resColor} flex items-center justify-center text-[10px] font-bold text-white`}>{m.result}</span>
                        <span className="text-slate-500">vs {m.opp}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {historyStatFilter === 'goals' && (
                            <div className="flex flex-col items-end">
                                <span className="font-semibold text-slate-900">{m.score}</span>
                                <div className="flex items-center gap-1 text-slate-500">
                                    <span className="material-symbols-outlined text-[10px]">sports_soccer</span>
                                    <span className="text-[10px] font-medium">{m.goals}</span>
                                </div>
                            </div>
                        )}
                        {historyStatFilter === 'corners' && (
                            <div className="flex flex-col items-end">
                                <span className="font-semibold text-slate-900">{m.corners} Góc</span>
                                <div className="flex items-center gap-1 text-slate-500">
                                    <span className="material-symbols-outlined text-[10px]">flag</span>
                                    <span className="text-[10px] font-medium">Tổng: {m.corners + 4}</span>
                                </div>
                            </div>
                        )}
                        {historyStatFilter === 'cards' && (
                             <div className="flex flex-col items-end">
                                <span className="font-semibold text-slate-900">{m.cards} Thẻ</span>
                                <div className="flex items-center gap-1 text-slate-500">
                                    <span className="material-symbols-outlined text-[10px] text-yellow-500">style</span>
                                    <span className="text-[10px] font-medium">Vàng</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex justify-end">
          <div className="bg-slate-200 p-1 rounded-lg flex text-[10px] font-bold">
               <button 
                  onClick={() => setHistoryStatFilter('goals')}
                  className={`px-3 py-1.5 rounded-md transition-all ${historyStatFilter === 'goals' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  Bàn thắng
               </button>
               <button 
                  onClick={() => setHistoryStatFilter('corners')}
                  className={`px-3 py-1.5 rounded-md transition-all ${historyStatFilter === 'corners' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  Phạt góc
               </button>
               <button 
                  onClick={() => setHistoryStatFilter('cards')}
                  className={`px-3 py-1.5 rounded-md transition-all ${historyStatFilter === 'cards' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  Thẻ phạt
               </button>
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderRecentMatches(match.homeTeam.short, match.homeTeam.logo, homeRecentMatches)}
          {renderRecentMatches(match.awayTeam.short, match.awayTeam.logo, awayRecentMatches)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-6">Lịch sử đối đầu</h3>
              <div className="space-y-6">
                  {/* Simple summary visualization */}
                  <div className="flex items-center justify-between px-4 pb-4 border-b border-slate-100">
                      <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-primary">4</span>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Man City thắng</span>
                      </div>
                      <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-slate-400">1</span>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Hòa</span>
                      </div>
                      <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-red-500">0</span>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Chelsea thắng</span>
                      </div>
                  </div>
                  
                  {/* Detailed Stats Section */}
                  <div className="space-y-4 px-1">
                       <div className="text-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-50 px-3 py-1 rounded-full">Chỉ số trung bình</span>
                       </div>
                       {h2hDetailedStats.map((stat, idx) => (
                           <div key={idx} className="space-y-1.5">
                               <div className="flex justify-between items-center text-xs">
                                   <span className="font-bold text-slate-900 w-12">{stat.home}</span>
                                   <span className="text-slate-500 font-medium">{stat.label}</span>
                                   <span className="font-bold text-slate-900 w-12 text-right">{stat.away}</span>
                               </div>
                               <div className="flex w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                   <div className="bg-primary h-full" style={{ width: `${stat.hPercent}%` }}></div>
                                   <div className="bg-red-500 h-full" style={{ width: `${stat.aPercent}%` }}></div>
                               </div>
                           </div>
                       ))}
                  </div>

                  {/* Match List */}
                  <div className="space-y-0 pt-2 border-t border-slate-100">
                      {h2hHistory.map((h2h, idx) => (
                          <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0 text-sm hover:bg-slate-50 px-2 rounded-lg transition-colors">
                              <div className={`flex-1 text-right font-medium ${h2h.homeShort === 'MCY' ? 'text-slate-900' : 'text-slate-500'}`}>
                                  {h2h.homeShort}
                              </div>
                              <div className="px-4 flex flex-col items-center w-24">
                                  <div className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">{h2h.score}</div>
                                  <span className="text-[10px] text-slate-400 mt-0.5">{h2h.date}</span>
                              </div>
                              <div className={`flex-1 text-left font-medium ${h2h.awayShort === 'MCY' ? 'text-slate-900' : 'text-slate-500'}`}>
                                  {h2h.awayShort}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-8">Thống kê phong độ gần đây</h3>
              <div className="space-y-6">
                  {statsComparison.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between group">
                          <div className="w-12 text-left">
                              {stat.highlight === 'home' ? (
                                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{stat.home}</span>
                              ) : (
                                  <span className="text-sm font-bold text-slate-900">{stat.home}</span>
                              )}
                          </div>
                          <div className="flex-1 text-center text-sm font-medium text-slate-500 relative">
                              <div className="absolute inset-0 top-1/2 -translate-y-1/2 bg-slate-50 h-px w-full -z-10 group-hover:bg-slate-100"></div>
                              <span className="bg-white px-2 group-hover:text-slate-700 transition-colors">{stat.label}</span>
                          </div>
                          <div className="w-12 text-right">
                              {stat.highlight === 'away' ? (
                                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{stat.away}</span>
                              ) : (
                                  <span className="text-sm font-bold text-slate-900">{stat.away}</span>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center w-1/3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                              <span className="text-sm font-bold text-slate-700">60%</span>
                          </div>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Tỷ lệ thắng</span>
                      </div>
                      <div className="flex flex-col items-center w-1/3 border-x border-slate-200">
                          <div className="text-center">
                              <span className="block text-2xl font-bold text-slate-700 mb-1">5</span>
                              <span className="text-[10px] text-slate-400 uppercase font-semibold">Trận đấu</span>
                          </div>
                      </div>
                      <div className="flex flex-col items-center w-1/3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                              <span className="text-sm font-bold text-slate-700">20%</span>
                          </div>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Tỷ lệ thắng</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </div>
  );
};

export default MatchStats;