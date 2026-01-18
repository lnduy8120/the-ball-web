import type { Metadata, ResolvingMetadata } from 'next';
import { newsService, NewsArticleDetail } from '@/services/newsService';
import NewsDetailClient from './NewsDetailClient';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug;
    const article = await newsService.getNewsBySlug(slug);

    if (!article) {
        return {
            title: 'Bài viết không tồn tại',
        }
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    }
}

export default async function NewsDetailPage({ params }: Props) {
    const slug = (await params).slug;
    const article = await newsService.getNewsBySlug(slug);

    if (!article) {
        notFound();
    }

    // Fetch related articles
    let relatedArticles: NewsArticleDetail[] = [];
    if (article.relatedArticles && article.relatedArticles.length > 0) {
        relatedArticles = await newsService.getRelatedNews(article.relatedArticles);
    }

    return <NewsDetailClient article={article} relatedArticles={relatedArticles} />;
}
