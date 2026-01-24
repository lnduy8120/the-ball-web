import React from 'react';
import { Metadata } from 'next';
import NewsClient from './NewsClient';
import { serverNewsService } from '@/services/server/newsService';

export const metadata: Metadata = {
    title: 'Nhận định Bóng đá & Tin tức Thể thao | Football Companion',
    description: 'Đọc các bài nhận định chuyên sâu, dự đoán tỷ số và tin tức bóng đá mới nhất từ các giải đấu hàng đầu thế giới Premier League, La Liga, C1.',
    keywords: 'nhận định bóng đá, tin tức bóng đá, soi kèo, dự đoán tỷ số, premier league, la liga',
    openGraph: {
        title: 'Nhận định Bóng đá & Tin tức Thể thao',
        description: 'Thông tin nhận định, soi kèo và tin tức bóng đá cập nhật 24/7.',
        type: 'website',
    }
};

export default async function NewsPage() {
    const initialNews = await serverNewsService.getAllNews();

    return <NewsClient initialNews={initialNews} />;
}
