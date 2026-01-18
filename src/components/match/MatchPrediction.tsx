import React from 'react';

interface Team {
  name: string;
  short: string;
  logo: string;
}

interface MatchPredictionProps {
  match: {
    homeTeam: Team;
    awayTeam: Team;
  };
}

const MatchPrediction: React.FC<MatchPredictionProps> = ({ match }) => {
  const aiInsights = [
      { label: 'Cả 2 đội ghi bàn (BTTS)', value: 'Có', probability: '72%', color: 'text-green-600', bg: 'bg-green-50', icon: 'sync_alt' },
      { label: 'Bàn thắng đầu tiên', value: 'Man City', probability: '60%', color: 'text-blue-600', bg: 'bg-blue-50', icon: 'flag' },
      { label: 'Tổng bàn thắng', value: 'Trên 2.5', probability: '65%', color: 'text-orange-600', bg: 'bg-orange-50', icon: 'sports_soccer' },
  ];

  const topScorers = [
      { name: 'Erling Haaland', team: 'MCY', prob: 65, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS' },
      { name: 'Phil Foden', team: 'MCY', prob: 42, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq' },
      { name: 'K. De Bruyne', team: 'MCY', prob: 35, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG' },
  ];

  return (
    <div className="animate-in fade-in duration-300 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Score Prediction */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">scoreboard</span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">Dự đoán tỷ số</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                  <span className="material-symbols-outlined text-[16px] text-primary">smart_toy</span>
                  <span className="text-[10px] font-bold text-primary uppercase">AI System</span>
                  </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex items-center justify-between relative overflow-hidden border border-slate-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
                  
                  <div className="flex flex-col items-center gap-2 z-10">
                  <img src={match.homeTeam.logo} alt="Home" className="w-12 h-12 object-contain" />
                  <span className="text-3xl font-bold text-slate-900">2</span>
                  </div>

                  <div className="flex flex-col items-center z-10 w-full px-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Xác suất 75%</span>
                  <div className="h-1.5 w-full max-w-[100px] bg-slate-200 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-primary w-[75%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 z-10">
                  <img src={match.awayTeam.logo} alt="Away" className="w-12 h-12 object-contain" />
                  <span className="text-3xl font-bold text-slate-900">1</span>
                  </div>
              </div>
              <p className="text-[12px] text-slate-600 mt-4 text-center leading-relaxed">
                  AI phân tích dựa trên phong độ 5 trận gần nhất và lịch sử đối đầu. Manchester City có lợi thế sân nhà.
              </p>
          </div>

          {/* Key Insights Grid */}
          <div className="grid grid-cols-2 gap-3 h-full">
              {aiInsights.map((insight, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center gap-2 ${insight.bg} ${idx === 2 ? 'col-span-2' : ''}`}>
                      <span className={`material-symbols-outlined text-2xl ${insight.color}`}>{insight.icon}</span>
                      <span className="text-[11px] text-slate-500 font-medium leading-tight">{insight.label}</span>
                      <span className={`text-lg font-bold ${insight.color}`}>{insight.value}</span>
                      <span className="text-[10px] font-bold text-slate-400">{insight.probability}</span>
                  </div>
              ))}
          </div>
      </div>

      {/* Goal Scorers */}
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">sports_soccer</span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">Cầu thủ ghi bàn</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topScorers.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="relative">
                          <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-slate-100 shadow-sm">
                             {/* Team Logo Mini */}
                             <img src={player.team === 'MCY' ? match.homeTeam.logo : match.awayTeam.logo} className="w-3 h-3 object-contain"/>
                          </div>
                      </div>
                      <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-bold text-slate-900">{player.name}</span>
                              <span className="text-xs font-bold text-primary">{player.prob}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${player.prob}%` }}></div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Corner Prediction */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">flag</span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">Dự đoán Phạt góc</h3>
              </div>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <div className="flex justify-between items-end mb-3">
                  <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500 mb-0.5">Kèo Tài/Xỉu</span>
                  <span className="text-xl font-bold text-slate-900">9.5 Góc</span>
                  </div>
                  <span className="text-xs font-bold text-win bg-white border border-win/20 px-2 py-1 rounded shadow-sm">Khả năng cao: Tài</span>
              </div>
              <div className="relative pt-2">
                  <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-win">Tài (Over) 68%</span>
                  <span className="text-slate-400">Xỉu (Under) 32%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-win relative shadow-sm" style={{ width: '68%' }}></div>
                  </div>
              </div>
              
              {/* Detailed Corner Stats */}
              <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-200">
                  <div className="flex flex-col items-center">
                      <span className="text-[10px] text-slate-500 font-medium uppercase">{match.homeTeam.short}</span>
                      <span className="text-lg font-bold text-slate-900">~ 6.5</span>
                  </div>
                  <div className="flex flex-col items-center border-l border-slate-200">
                      <span className="text-[10px] text-slate-500 font-medium uppercase">{match.awayTeam.short}</span>
                      <span className="text-lg font-bold text-slate-900">~ 3.0</span>
                  </div>
              </div>
          </div>
          </div>

          {/* Cards Prediction */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">style</span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">Dự đoán Thẻ phạt</h3>
              </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-100">
                  <div className="w-8 h-10 bg-yellow-400 rounded-sm shadow-sm flex items-center justify-center mb-1 rotate-[-6deg] ring-1 ring-yellow-500/20"></div>
                  <span className="text-xs font-medium text-slate-500">Thẻ vàng dự kiến</span>
                  <span className="text-xl font-bold text-slate-900">~ 4.5</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-100">
                  <div className="w-8 h-10 bg-red-500 rounded-sm shadow-sm flex items-center justify-center mb-1 rotate-[6deg] ring-1 ring-red-600/20"></div>
                  <span className="text-xs font-medium text-slate-500">Khả năng thẻ đỏ</span>
                  <span className="text-xl font-bold text-win">Thấp (&lt;10%)</span>
              </div>
              </div>
              
              {/* Detailed Cards Stats */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">Thẻ vàng {match.homeTeam.name}</span>
                      <span className="font-bold text-slate-900">~ 1.5</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-3">
                      <span className="text-slate-500 font-medium">Thẻ vàng {match.awayTeam.name}</span>
                      <span className="font-bold text-slate-900">~ 3.0</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MatchPrediction;