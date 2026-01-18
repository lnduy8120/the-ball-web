import React from 'react';
import Link from 'next/link';

export interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: 'Match Analysis' | 'Transfer News' | 'Tournament Update' | 'Player Focus';
    author: string;
    date: string;
    readTime: string;
    slug: string;
}

interface NewsCardProps {
    article: NewsArticle;
    featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
    const categoryColors = {
        'Match Analysis': 'bg-blue-100 text-blue-700',
        'Transfer News': 'bg-green-100 text-green-700',
        'Tournament Update': 'bg-purple-100 text-purple-700',
        'Player Focus': 'bg-orange-100 text-orange-700',
    };

    if (featured) {
        return (
            <Link href={`/news/${article.slug}`} className="group relative block w-full h-[400px] rounded-[32px] overflow-hidden shadow-xl">
                <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-primary text-white`}>
                        {article.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
                        {article.title}
                    </h2>
                    <div className="flex items-center gap-4 text-slate-300 text-xs font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">
                                {article.author.charAt(0)}
                            </span>
                            <span>{article.author}</span>
                        </div>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/news/${article.slug}`} className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${categoryColors[article.category] || 'bg-slate-100 text-slate-700'}`}>
                        {article.category}
                    </span>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                    {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-4 border-t border-slate-50">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {article.readTime}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
