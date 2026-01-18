import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, BarChart, Bar } from 'recharts';

interface TeamStatsProps {
  matchStats: { name: string; win: number; draw: number; loss: number }[];
  goalStats: { name: string; scored: number; conceded: number }[];
}

const TeamStats: React.FC<TeamStatsProps> = ({ matchStats, goalStats }) => {
  return (
    <div className="animate-in fade-in duration-300 space-y-6">
       {/* Performance Chart */}
       <div className="bg-card rounded-2xl p-6 shadow-sm border border-slate-100">
           <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">ssid_chart</span>
              Biểu đồ phong độ (Điểm số 5 trận gần nhất)
           </h3>
           <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={[0, 1, 2, 3, 4].map((i) => ({
                     name: `Trận ${i+1}`,
                     Home: [3, 3, 0, 0, 3][i],
                     Away: [1, 3, 0, 0, 0][i]
                 }))}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10} />
                     <YAxis domain={[0, 3]} ticks={[0, 1, 3]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                     <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                     <Legend />
                     <Line type="monotone" dataKey="Home" name="Man City" stroke="#3B82F6" strokeWidth={3} dot={{r: 4}} />
                     <Line type="monotone" dataKey="Away" name="Chelsea" stroke="#EF4444" strokeWidth={3} dot={{r: 4}} />
                 </LineChart>
             </ResponsiveContainer>
           </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-card rounded-xl p-6 shadow-sm border border-slate-100 h-full">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-6">Lịch sử đối đầu</h3>
             <div className="space-y-4">
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
                 {/* Dummy H2H Data for demo */}
                 {[
                     { date: '12/11/23', score: '4 - 4' },
                     { date: '21/05/23', score: '1 - 0' },
                     { date: '08/01/23', score: '4 - 0' },
                 ].map((m, i) => (
                     <div key={i} className="flex items-center justify-between text-sm">
                         <span className="text-slate-500">{m.date}</span>
                         <span className="font-bold">{m.score}</span>
                     </div>
                 ))}
             </div>
         </div>

         <div className="bg-card rounded-xl p-6 shadow-sm border border-slate-100 h-full">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-6">Thống kê so sánh</h3>
             <div className="space-y-6">
                  {[
                     { label: 'Bàn thắng TB', h: 2.4, a: 0.4 },
                     { label: 'Kiểm soát bóng', h: 62, a: 51, suffix: '%' },
                     { label: 'Phạt góc', h: 7.2, a: 4.5 },
                  ].map((stat, idx) => {
                      const total = stat.h + stat.a;
                      const p1 = (stat.h / total) * 100;
                      const p2 = (stat.a / total) * 100;
                      return (
                          <div key={idx} className="flex flex-col gap-2">
                              <div className="flex justify-between text-sm font-bold">
                                  <span>{stat.h}{stat.suffix}</span>
                                  <span className="text-xs font-medium text-slate-500">{stat.label}</span>
                                  <span>{stat.a}{stat.suffix}</span>
                              </div>
                              <div className="flex h-2 bg-slate-100 rounded-full overflow-hidden gap-1">
                                  <div className="bg-blue-500 h-full rounded-l-full" style={{width: `${p1}%`}}></div>
                                  <div className="bg-red-500 h-full rounded-r-full" style={{width: `${p2}%`}}></div>
                              </div>
                          </div>
                      )
                  })}
             </div>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="rounded-xl bg-card shadow-sm p-6 border border-slate-100">
             <h3 className="text-slate-900 text-lg font-bold mb-6">Kết quả thi đấu</h3>
             <div className="h-80 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={matchStats} margin={{top: 10, right: 10, left: -20, bottom: 0}}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10}/>
                         <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}}/>
                         <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}/>
                         <Legend wrapperStyle={{paddingTop: '20px'}}/>
                         <Bar name="Thắng" dataKey="win" fill="#10B981" radius={[4, 4, 0, 0]} barSize={30} />
                         <Bar name="Hòa" dataKey="draw" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={30} />
                         <Bar name="Thua" dataKey="loss" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={30} />
                     </BarChart>
                 </ResponsiveContainer>
             </div>
         </div>

         <div className="rounded-xl bg-card shadow-sm p-6 border border-slate-100">
             <h3 className="text-slate-900 text-lg font-bold mb-6">Bàn thắng & Bàn thua</h3>
             <div className="h-80 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={goalStats} margin={{top: 10, right: 10, left: -20, bottom: 0}}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10}/>
                         <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}}/>
                         <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}/>
                         <Legend wrapperStyle={{paddingTop: '20px'}}/>
                         <Bar name="Bàn thắng" dataKey="scored" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={30} />
                         <Bar name="Bàn thua" dataKey="conceded" fill="#F59E0B" radius={[4, 4, 0, 0]} barSize={30} />
                     </BarChart>
                 </ResponsiveContainer>
             </div>
         </div>
       </div>
    </div>
  );
};

export default TeamStats;