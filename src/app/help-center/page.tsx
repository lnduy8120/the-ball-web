'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HelpCenterPage() {
    const router = useRouter();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const categories = [
        { icon: 'manage_accounts', title: 'Tài khoản', color: 'text-blue-500', bg: 'bg-blue-50' },
        { icon: 'payments', title: 'Thanh toán', color: 'text-green-500', bg: 'bg-green-50' },
        { icon: 'sports_soccer', title: 'Đặt cược', color: 'text-orange-500', bg: 'bg-orange-50' },
        { icon: 'security', title: 'Bảo mật', color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    const faqs = [
        { q: 'Làm thế nào để nạp tiền vào tài khoản?', a: 'Bạn có thể nạp tiền thông qua chuyển khoản ngân hàng, ví điện tử Momo, ZaloPay hoặc thẻ cào điện thoại tại mục Ví của tôi.' },
        { q: 'Tại sao tôi không thể đặt cược?', a: 'Vui lòng kiểm tra số dư tài khoản của bạn. Nếu số dư đủ nhưng vẫn không thể đặt cược, hãy kiểm tra kết nối mạng hoặc liên hệ CSKH.' },
        { q: 'Làm sao để đổi mật khẩu?', a: 'Truy cập vào mục Cá nhân > Cài đặt tài khoản > Bảo mật để thay đổi mật khẩu của bạn.' },
        { q: 'Thời gian rút tiền mất bao lâu?', a: 'Thời gian xử lý rút tiền thường từ 5-15 phút. Trong trường hợp bảo trì ngân hàng, có thể mất tới 24h.' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            <header className="px-4 py-4 bg-white border-b border-slate-200 sticky top-0 z-20">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-lg font-bold text-slate-900">Trung tâm trợ giúp</h1>
                </div>

                <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Tìm kiếm vấn đề của bạn..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    />
                </div>
            </header>

            <main className="p-4 space-y-8 max-w-3xl mx-auto">

                {/* Categories */}
                <section>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 px-2">Chủ đề phổ biến</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((cat, idx) => (
                            <button key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-95">
                                <div className={`w-12 h-12 rounded-full ${cat.bg} flex items-center justify-center mb-3`}>
                                    <span className={`material-symbols-outlined ${cat.color}`}>{cat.icon}</span>
                                </div>
                                <span className="text-sm font-bold text-slate-700">{cat.title}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 px-2">Câu hỏi thường gặp</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Support */}
                <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-primary">support_agent</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Vẫn cần trợ giúp?</h3>
                        <p className="text-sm text-slate-500 mt-1">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full pt-2">
                        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors">
                            <span className="material-symbols-outlined text-lg">chat</span>
                            Chat ngay
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                            <span className="material-symbols-outlined text-lg">call</span>
                            Gọi hotline
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
}