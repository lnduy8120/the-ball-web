'use client';

import React, { useState, useEffect } from 'react';
import NewsCard, { NewsArticle } from '../../../components/news/NewsCard';
import { newsService } from '@/services/newsService';
import Skeleton from '../../../components/ui/Skeleton';

export default function NewsClient() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const data = await newsService.getAllNews();
                setNews(data);
            } catch (error) {
                console.error("Failed to fetch news", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const categories = ['All', 'Match Analysis', 'Transfer News', 'Tournament Update', 'Player Focus'];

    const filteredNews = activeCategory === 'All'
        ? news
        : news.filter(n => n.category === activeCategory);

    const featuredArticle = news.length > 0 ? news[0] : null;
    const listArticles = filteredNews.filter(article => !featuredArticle || article.id !== featuredArticle.id || activeCategory !== 'All');

    if (loading) {
        return (
            <div className="bg-slate-50 min-h-screen pb-24 font-sans p-6 container mx-auto max-w-7xl space-y-8">
                <Skeleton variant="rectangular" height={400} className="rounded-[32px]" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Skeleton variant="rectangular" height={300} className="rounded-[24px]" />
                    <Skeleton variant="rectangular" height={300} className="rounded-[24px]" />
                    <Skeleton variant="rectangular" height={300} className="rounded-[24px]" />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30 pt-4 pb-4 px-6 md:px-0 shadow-sm">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                        Nhận Định & Tin Tức
                    </h1>

                    {/* Categories Scroll */}
                    <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat
                                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                                        }`}
                                >
                                    {cat === 'All' ? 'Tất cả' : cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 md:px-6 py-8 space-y-12">
                {/* Featured Section - Only show on 'All' view */}
                {activeCategory === 'All' && featuredArticle && (
                    <section className="animate-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-tight">Tiêu điểm hôm nay</h2>
                        </div>
                        <NewsCard article={featuredArticle} featured />
                    </section>
                )}

                {/* Latest News Grid */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                        <h2 className="text-xl font-black uppercase tracking-tight">
                            {activeCategory === 'All' ? 'Mới cập nhật' : activeCategory}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listArticles.length > 0 ? (
                            listArticles.map((article, idx) => (
                                <div key={article.id} className={`animate-in slide-in-from-bottom-8 duration-700 delay-${idx * 100}`}>
                                    <NewsCard article={article} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-20 bg-white rounded-[32px] border border-slate-100">
                                <p className="text-slate-400 font-bold">Không có bài viết nào trong danh mục này.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter Signup (SEO Engagement) */}
                <section className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-primary text-xs font-black uppercase tracking-widest border border-white/10 backdrop-blur-md">
                            Đăng ký nhận tin
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                            Không bỏ lỡ bất kỳ <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kèo thơm</span> nào
                        </h2>
                        <p className="text-slate-400 font-medium">
                            Nhận định chuyên sâu và thông tin nội bộ được gửi trực tiếp vào email của bạn mỗi sáng thứ 7.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 rounded-2xl border border-white/10 mt-8 backdrop-blur-sm">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn..."
                                className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 py-3"
                            />
                            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
