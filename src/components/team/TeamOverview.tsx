import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

interface Player {
  name: string;
  number: number;
  role: string;
  goals: number;
  assists: number;
  apps: number;
  avatar: string;
}

interface TeamOverviewProps {
  performanceData: { name: string; value: number; color: string }[];
  lineData: { name: string; rank: number }[];
  players: Player[];
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ performanceData, lineData, players }) => {
  return (
    <div className="animate-in fade-in duration-300 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-card shadow-sm items-center text-center border border-slate-100">
                <div className="bg-blue-50 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined text-xl">sports_soccer</span>
                </div>
                <div>
                    <p className="text-slate-900 tracking-light text-2xl font-bold leading-tight">82</p>
                    <p className="text-slate-500 text-sm font-medium leading-normal">Bàn thắng</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-card shadow-sm items-center text-center border border-slate-100">
                <div className="bg-green-50 p-2 rounded-full text-green-600">
                    <span className="material-symbols-outlined text-xl">shield</span>
                </div>
                <div>
                    <p className="text-slate-900 tracking-light text-2xl font-bold leading-tight">12</p>
                    <p className="text-slate-500 text-sm font-medium leading-normal">Sạch lưới</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-card shadow-sm items-center text-center border border-slate-100">
                <div className="bg-orange-50 p-2 rounded-full text-orange-600">
                    <span className="material-symbols-outlined text-xl">percent</span>
                </div>
                <div>
                    <p className="text-slate-900 tracking-light text-2xl font-bold leading-tight">65%</p>
                    <p className="text-slate-500 text-sm font-medium leading-normal">Kiểm soát</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col rounded-xl bg-card shadow-sm p-6 border border-slate-100">
                <h3 className="text-slate-900 text-lg font-bold mb-4">Phong độ qua các vòng</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                            <YAxis reversed hide domain={[1, 10]} />
                            <Tooltip />
                            <Line type="monotone" dataKey="rank" stroke="#10B981" strokeWidth={3} dot={{r: 5, fill: '#10B981', strokeWidth: 2, stroke: '#fff'}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="rounded-xl p-6 bg-card shadow-sm flex flex-col border border-slate-100 h-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-slate-900 text-lg font-bold">Trận tiếp theo</h3>
                    <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-1 rounded">Sân nhà</span>
                </div>
                <div className="flex items-center justify-between flex-1 py-8">
                    <div className="flex flex-col items-center gap-2 w-1/3">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDHln_xMZw7yrlgGNIqf3VOjLdLD2tf6lgEFQNfBoq1x496EX5gGKTeDfzMiSkEIKJxdbAXnAZ_j9bjiaQek9PcKIVGF2EanLZvbuNlboouqsTPOe4nnjSgCdeGsypZXzrhCTCvCrJ-aBZ5j3l4rZPwa41EoXIUrLcA61DdpHCQcZS9n_lma6Jz-21AXaAOm2_-ERS5RXf7f8dOZ3V9gLVfPDZLzCx4DlaVEb1gNEWie3Hdy_72TMtQ35ZdIg3srSXaxgDXE4s5KxW" alt="MCY" className="size-16 object-contain" />
                        <span className="text-sm font-bold text-center">Man City</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-1/3">
                        <span className="text-base font-bold text-slate-500">18/05</span>
                        <span className="text-3xl font-bold text-slate-900">20:00</span>
                        <span className="text-xs text-slate-500 uppercase font-semibold">Vòng 34</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-1/3">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq" alt="ARS" className="size-16 object-contain" />
                        <span className="text-sm font-bold text-center">Arsenal</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 bg-card shadow-sm flex flex-col items-center border border-slate-100">
                <h3 className="text-slate-900 text-lg font-bold mb-6 self-start w-full">Thống kê kết quả</h3>
                <div className="flex items-center gap-12 w-full justify-center">
                    <div className="relative size-40">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie data={performanceData} innerRadius={50} outerRadius={80} dataKey="value">
                                    {performanceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-sm font-bold text-slate-500">27 Trận</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {performanceData.map((item) => (
                            <div key={item.name} className="flex items-center justify-between text-base min-w-[120px]">
                                <div className="flex items-center gap-3">
                                    <div className="size-3 rounded-full" style={{backgroundColor: item.color}}></div>
                                    <span className="text-slate-600">{item.name}</span>
                                </div>
                                <span className="font-bold">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col rounded-xl bg-card shadow-sm overflow-hidden p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-slate-900 text-lg font-bold">Cầu thủ nổi bật</h3>
                    <button className="text-sm font-semibold text-primary hover:underline">Xem tất cả</button>
                </div>
                <div className="flex flex-col gap-4">
                    {players.map((player) => (
                        <React.Fragment key={player.name}>
                            <div className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl transition-colors cursor-pointer">
                                <div className="relative shrink-0">
                                    <div className="size-14 rounded-full bg-cover bg-center bg-slate-100 border border-slate-200" style={{backgroundImage: `url('${player.avatar}')`}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-2 py-0.5 border border-slate-100 shadow-sm flex items-center justify-center min-w-[24px]">
                                        <span className="text-xs font-bold text-slate-700">{player.number}</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-bold text-slate-900 truncate">{player.name}</p>
                                    <p className="text-sm text-slate-500 truncate">{player.role}</p>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-50 rounded-lg p-3 border border-slate-100">
                                    <div className="flex flex-col items-center px-2">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Trận</span>
                                        <span className="text-sm font-bold text-slate-700">{player.apps}</span>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200"></div>
                                    <div className="flex flex-col items-center px-2">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Bàn</span>
                                        <span className="text-sm font-bold text-primary">{player.goals}</span>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200"></div>
                                    <div className="flex flex-col items-center px-2">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">KT</span>
                                        <span className="text-sm font-bold text-blue-500">{player.assists}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-slate-50 w-full last:hidden"></div>
                        </React.Fragment>
                    ))}
                    {players.length === 0 && (
                        <p className="text-center text-slate-500 text-sm py-2">Không tìm thấy cầu thủ</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TeamOverview;