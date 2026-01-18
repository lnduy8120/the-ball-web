'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NewsArticleDetail } from '@/services/newsService';
import NewsCard from '@/components/news/NewsCard';

interface NewsDetailClientProps {
    article: NewsArticleDetail;
    relatedArticles: NewsArticleDetail[];
}

export default function NewsDetailClient({ article, relatedArticles }: NewsDetailClientProps) {
    const router = useRouter();

    return (
        <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-900">
            <article>
                {/* Hero Image */}
                <div className="w-full h-[40vh] md:h-[50vh] relative">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                        <div className="container mx-auto max-w-4xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-4">
                                {article.category}
                            </span>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-6 text-slate-300 text-xs font-bold uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-500">
                                        {article.author.charAt(0)}
                                    </span>
                                    <span>{article.author}</span>
                                </div>
                                <span>•</span>
                                <span>{article.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    {article.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto max-w-3xl px-4 py-12">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl md:text-2xl font-medium text-slate-600 mb-8 border-l-4 border-primary pl-6 py-1 italic">
                            "{article.excerpt}"
                        </p>

                        {/* Dangerously Set HTML for content - in real app sanitize this */}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    {/* Tags / Interaction */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Premier League', 'Man City', 'Arsenal', 'Soi Kèo'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <div className="bg-white py-12 border-t border-slate-200">
                    <div className="container mx-auto max-w-7xl px-4">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary"></span>
                            Tin liên quan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map(item => (
                                <NewsCard key={item.id} article={item} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
