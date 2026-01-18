'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useMatches } from '@/hooks/useMatches';
import MatchCard from '@/components/matches/MatchCard';
import Skeleton from '@/components/ui/Skeleton';

// Reuse the generated mascot image path from public folder
const MASCOT_IMAGE = '/mascot.png';

export default function PredictionPage() {
    const router = useRouter();
    const { getFilteredMatches, loading } = useMatches();
    const matches = getFilteredMatches();

    // Select upcoming matches for "predictions"
    const upcomingMatches = matches.filter(m => m.status === 'upcoming').slice(0, 6);

    // AI Predictions Mock Data
    const aiPredictions: Record<string, { insight: string; confidence: number; result: string }> = {
        '1': { insight: 'Man City có tỉ lệ thắng lên tới 68% dựa trên phong độ 5 trận gần nhất.', confidence: 85, result: 'Home Win' },
        '2': { insight: 'Hàng thủ Chelsea đang thiếu vắng trụ cột Koulibaly, rủi ro thủng lưới cao.', confidence: 72, result: 'Over 2.5' },
        '3': { insight: 'Trận đấu này dự kiến sẽ có nhiều bàn thắng (Over 2.5) với cả hai đội đều chơi tấn công.', confidence: 78, result: 'Away Win' },
        '4': { insight: 'Lịch sử đối đầu nghiêng hẳn về đội khách với 4 chiến thắng liên tiếp.', confidence: 91, result: 'Away Win' },
        '5': { insight: 'Đội nhà thường ghi bàn trong 15 phút đầu trận. Kèo rung hiệp 1 rất sáng.', confidence: 65, result: 'First Half Goal' },
        '6': { insight: 'Cả hai đội đều có xu hướng đá thực dụng, ít bàn thắng được ghi.', confidence: 88, result: 'Under 2.5' }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* AI Mascot Hero Section - Responsive Wide Layout */}
            <header className="bg-gradient-to-br from-primary via-blue-700 to-indigo-900 pt-16 pb-24 px-6 rounded-b-[60px] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-[80px]"></div>

                <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="relative group">
                        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-8 border-white/20 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] bg-white/10 backdrop-blur-xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
                            <img
                                src={MASCOT_IMAGE}
                                alt="Anh Tuoc Octopus Mascot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-black px-6 py-2 rounded-2xl shadow-2xl border-4 border-white animate-bounce tracking-widest uppercase">
                            Anh Tuộc Tiên Tri
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left text-white space-y-6">
                        <div className="bg-white/20 backdrop-blur-md inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-black mb-2 border border-white/30 tracking-widest uppercase">
                            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
                            Anh Tuộc Đang Phân Tích
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter uppercase italic">
                            Tiên Tri <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Anh Tuộc</span><br />
                            Dự Đoán Kết Quả
                        </h1>
                        <p className="text-blue-100 text-base md:text-lg font-medium max-w-xl opacity-90 leading-relaxed">
                            Chào mừng bạn đến với thế giới của những dự đoán huyền thoại. Tôi đã "soi" thấu hàng triệu dữ liệu để mang về những gợi ý chính xác nhất cho bạn.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-400">verified</span>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-blue-200 uppercase">Tỉ lệ Tiên Tri</div>
                                    <div className="text-sm font-black text-white">96.8% Chính xác</div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-blue-400">psychology</span>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-blue-200 uppercase">Trực giác số</div>
                                    <div className="text-sm font-black text-white">Đỉnh cao phân tích</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-6xl px-4 -mt-12 relative z-20">
                {/* Stats & Market Sentiment */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="md:col-span-3 bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100 flex flex-wrap items-center justify-around gap-8">
                        <div className="text-center group cursor-help">
                            <div className="text-3xl font-black text-primary mb-1 group-hover:scale-110 transition-transform">92%</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Độ chính xác</div>
                        </div>
                        <div className="h-12 w-px bg-slate-100 hidden sm:block"></div>
                        <div className="text-center group cursor-help">
                            <div className="text-3xl font-black text-green-500 mb-1 group-hover:scale-110 transition-transform">825</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kèo thắng tuần</div>
                        </div>
                        <div className="h-12 w-px bg-slate-100 hidden sm:block"></div>
                        <div className="text-center group cursor-help">
                            <div className="text-3xl font-black text-orange-500 mb-1 group-hover:scale-110 transition-transform">+12.5%</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lợi nhuận TB</div>
                        </div>
                        <div className="h-12 w-px bg-slate-100 hidden sm:block"></div>
                        <div className="text-center group cursor-help">
                            <div className="text-3xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform">1,204</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Người dùng Online</div>
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded-[32px] p-6 shadow-2xl flex flex-col justify-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-6xl">trending_up</span>
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase mb-2">Thị trường hiện tại</div>
                        <div className="text-2xl font-black mb-1">CỰC NÓNG</div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-full w-[85%] animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column: Predictions List */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <div className="flex items-center justify-between mb-6 px-2">
                                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center material-symbols-outlined">water_drop</span>
                                    Kèo Thơm "Anh Tuộc" Chọn
                                </h2>
                                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
                                    Giải đấu yêu thích
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {loading ? (
                                    Array(4).fill(0).map((_, i) => (
                                        <Skeleton key={i} variant="rectangular" width="100%" height={240} className="rounded-[24px]" />
                                    ))
                                ) : upcomingMatches.length > 0 ? (
                                    upcomingMatches.map((match, index) => {
                                        const pred = aiPredictions[(index + 1).toString()] || aiPredictions['1'];
                                        return (
                                            <div key={match.id} className="group relative">
                                                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                                                    <MatchCard match={match} />
                                                    <div className="p-5 bg-slate-900 text-white relative">
                                                        <div className="absolute -top-10 left-6">
                                                            <div className="bg-yellow-400 text-slate-900 font-black text-[10px] px-3 py-1 rounded-lg border-2 border-white shadow-lg uppercase">
                                                                Dự đoán: {pred.result}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3 mt-1">
                                                            <span className="material-symbols-outlined text-yellow-400 text-lg mt-0.5">set_meal</span>
                                                            <p className="text-[11px] leading-relaxed font-semibold text-slate-300">
                                                                {pred.insight}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                                            <div className="flex flex-col">
                                                                <span className="text-[9px] font-black uppercase text-slate-500">Tin cậy</span>
                                                                <span className="text-sm font-black text-yellow-400">{pred.confidence}%</span>
                                                            </div>
                                                            <div className="flex-1 mx-6 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-400 shadow-[0_0_10px_orange]"
                                                                    style={{ width: `${pred.confidence}%` }}
                                                                ></div>
                                                            </div>
                                                            <button className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-xl hover:bg-blue-400 transition-colors uppercase">
                                                                Xem Kèo
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="col-span-2 text-center py-20 bg-white rounded-[32px] border-2 border-dashed border-slate-200">
                                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">tsunami</span>
                                        <p className="text-lg text-slate-400 font-bold uppercase tracking-tight">Anh Tuộc đang đi câu dữ liệu...</p>
                                        <p className="text-sm text-slate-400">Vui lòng chờ trong giây lát để có những dự đoán mới nhất.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Insights & Trends */}
                    <div className="space-y-8">
                        {/* Live Alert Section */}
                        <section className="bg-white rounded-[32px] p-6 shadow-xl border border-slate-100 overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"></div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                                    Cảnh Báo Kèo Live
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-red-500">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Hot alert</span>
                                        <span className="text-[10px] font-bold text-slate-400">2 phút trước</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-700 leading-relaxed italic">"Tỉ lệ Phạt góc trận Man City đang tăng đột biến, khả năng cao nổ Over 10.5"</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-orange-500 opacity-70">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Insight</span>
                                        <span className="text-[10px] font-bold text-slate-400">15 phút trước</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-700 leading-relaxed italic">"Real Madrid kiểm soát bóng 72% ở 20 phút đầu, kèo chấp đang có lợi."</p>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors">
                                Xem tất cả alerts (12)
                            </button>
                        </section>

                        {/* Top Streaks */}
                        <section className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[32px] p-8 shadow-xl text-white">
                            <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-yellow-500">local_fire_department</span>
                                Chuỗi Thắng Đỉnh Cao
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-black group-hover:bg-primary transition-colors">#1</div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Man City</div>
                                        <div className="text-sm font-black italic">12 Trận Thắng Liên Tiếp</div>
                                    </div>
                                    <div className="text-green-400 material-symbols-outlined">trending_up</div>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-black group-hover:bg-primary transition-colors">#2</div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Arsenal</div>
                                        <div className="text-sm font-black italic">Bất bại 8 trận sân khách</div>
                                    </div>
                                    <div className="text-green-400 material-symbols-outlined">trending_up</div>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-black group-hover:bg-primary transition-colors">#3</div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Liverpool</div>
                                        <div className="text-sm font-black italic">Salah ghi bàn 5 trận liên tục</div>
                                    </div>
                                    <div className="text-green-400 material-symbols-outlined">trending_up</div>
                                </div>
                            </div>
                        </section>

                        {/* Community Sentiment */}
                        <section className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">
                            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-6">Tâm Lý Đám Đông</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-black text-slate-700">Man City vs Chelsea</span>
                                        <span className="text-[10px] font-bold text-slate-400 italic">21.5k phiếu bầu</span>
                                    </div>
                                    <div className="flex h-3 rounded-full overflow-hidden bg-slate-100">
                                        <div className="bg-blue-500 w-[72%]"></div>
                                        <div className="bg-slate-300 w-[8%]"></div>
                                        <div className="bg-red-500 w-[20%]"></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-[9px] font-black uppercase tracking-widest">
                                        <span className="text-blue-500">Home 72%</span>
                                        <span className="text-slate-400">Draw 8%</span>
                                        <span className="text-red-500">Away 20%</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Navigation Grid (Redesigned) */}
                <section className="mt-20 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <button
                            onClick={() => router.push('/matches')}
                            className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-2xl hover:bg-primary transition-all duration-300"
                        >
                            <span className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center material-symbols-outlined text-3xl mb-4 group-hover:bg-white transition-colors">sports_soccer</span>
                            <span className="block text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-white">Trận Đấu Hôm Nay</span>
                        </button>
                        <button
                            onClick={() => router.push('/standings')}
                            className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-2xl hover:bg-green-500 transition-all duration-300"
                        >
                            <span className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center material-symbols-outlined text-3xl mb-4 group-hover:bg-white transition-colors">leaderboard</span>
                            <span className="block text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-white">Bảng Xếp Hạng</span>
                        </button>
                        <button
                            onClick={() => router.push('/history')}
                            className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-2xl hover:bg-orange-500 transition-all duration-300"
                        >
                            <span className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center material-symbols-outlined text-3xl mb-4 group-hover:bg-white transition-colors">history</span>
                            <span className="block text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-white">Lịch Sử Cá Cược</span>
                        </button>
                        <button
                            className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-2xl hover:bg-slate-900 transition-all duration-300"
                        >
                            <span className="w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center material-symbols-outlined text-3xl mb-4 group-hover:bg-white transition-colors">verified_user</span>
                            <span className="block text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-white">Phòng Vip Tip</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
