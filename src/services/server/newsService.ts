import { serverApi } from '@/lib/server-api';
import { NewsArticleDetail, MOCK_NEWS } from '@/lib/mock-news';

export const serverNewsService = {
    getAllNews: async (): Promise<NewsArticleDetail[]> => {
        try {
            return await serverApi.get<NewsArticleDetail[]>('/news');
        } catch (error) {
            console.warn('[ServerNewsService] Failed to fetch news, falling back to mock:', error);
            return MOCK_NEWS;
        }
    },

    getNewsBySlug: async (slug: string): Promise<NewsArticleDetail | undefined> => {
        try {
            // Assuming API supports filtering by slug or finding ID by slug
            // Often APIs use ID, but for SEO friendly URLs slug is common.
            // Adjust endpoint as needed.
            return await serverApi.get<NewsArticleDetail>(`/news/${slug}`);
        } catch (error) {
            console.warn(`[ServerNewsService] Failed to fetch news ${slug}, falling back to mock`);
            return MOCK_NEWS.find(n => n.slug === slug);
        }
    }
};
