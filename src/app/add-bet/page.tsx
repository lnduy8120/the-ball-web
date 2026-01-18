'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AuthGuard from '../../components/AuthGuard';

export default function AddBetPage() {
    const router = useRouter();

    return (
        <AuthGuard>
            <div className="min-h-screen bg-slate-50 flex justify-center font-sans p-4">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-fit">
                    <header className="px-4 py-4 bg-white border-b border-slate-100 flex items-center justify-center sticky top-0 z-20">
                        <h1 className="text-lg font-bold text-slate-900">Thêm lịch sử đặt cược</h1>
                    </header>

                    <main className="p-8 space-y-8">
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">Chọn trận đấu</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                                </div>
                                <input type="text" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 shadow-sm transition-all" placeholder="Tìm tên đội hoặc giải đấu..." />
                            </div>

                            <button type="button" className="w-full py-4 px-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99]">
                                <span className="material-symbols-outlined text-xl">calendar_month</span>
                                Chọn từ lịch thi đấu
                            </button>
                        </div>

                        <div className="space-y-3">
                            <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">Loại cược</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <button type="button" className="py-3 px-4 rounded-xl border border-primary bg-primary/10 text-primary font-bold text-sm transition-colors ring-2 ring-primary/20">Kèo Châu Á</button>
                                <button type="button" className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">Tài Xỉu</button>
                                <button type="button" className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">1x2</button>
                                <button type="button" className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">Tỉ số</button>
                            </div>
                            <div className="relative pt-2">
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 shadow-sm" placeholder="Chi tiết (VD: Chấp -0.5)" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">Tiền cược (VNĐ)</label>
                                <div className="relative">
                                    <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 shadow-sm" placeholder="0" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">Tỷ lệ cược</label>
                                <div className="relative">
                                    <input type="number" step="0.01" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 text-center font-bold shadow-sm" placeholder="1.00" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">Kết quả</label>
                            <div className="grid grid-cols-4 gap-3">
                                <label className="cursor-pointer group">
                                    <input type="radio" name="status" className="peer sr-only" />
                                    <div className="h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white peer-checked:bg-win peer-checked:text-white peer-checked:border-win peer-checked:shadow-lg peer-checked:shadow-win/30 text-xs font-bold uppercase transition-all shadow-sm group-hover:bg-slate-50">Thắng</div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input type="radio" name="status" className="peer sr-only" />
                                    <div className="h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white peer-checked:bg-loss peer-checked:text-white peer-checked:border-loss peer-checked:shadow-lg peer-checked:shadow-loss/30 text-xs font-bold uppercase transition-all shadow-sm group-hover:bg-slate-50">Thua</div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input type="radio" name="status" className="peer sr-only" />
                                    <div className="h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white peer-checked:bg-draw peer-checked:text-white peer-checked:border-draw peer-checked:shadow-lg peer-checked:shadow-draw/30 text-xs font-bold uppercase transition-all shadow-sm group-hover:bg-slate-50">Hòa</div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input type="radio" name="status" className="peer sr-only" defaultChecked />
                                    <div className="h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white peer-checked:bg-pending peer-checked:text-white peer-checked:border-pending peer-checked:shadow-lg peer-checked:shadow-pending/30 text-xs font-bold uppercase transition-all shadow-sm group-hover:bg-slate-50">Đang chờ</div>
                                </label>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] text-lg">
                                Lưu thông tin
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}