import { serverApi } from '@/lib/server-api';
import { Match } from '@/types';
import { MOCK_MATCHES } from '@/lib/mock-data';

export const serverMatchService = {
    getMatches: async (params?: { date?: string; league?: string }): Promise<Match[]> => {
        try {
            // Attempt to fetch from real API
            return await serverApi.get<Match[]>('/matches', params);
        } catch (error) {
            console.warn('[ServerMatchService] Failed to fetch matches from API, falling back to mock data:', error);
            // Fallback to mock data to prevent app crash
            // In production, you might want to throw the error or return an empty array depending on requirements
            return MOCK_MATCHES;
        }
    },

    getMatchDetail: async (id: string): Promise<any> => {
        try {
            return await serverApi.get(`/matches/${id}`);
        } catch (error) {
            console.warn(`[ServerMatchService] Failed to fetch match detail ${id}, falling back to mock data`);
            return {
                homeTeam: { name: 'Man City', short: 'MCY', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TB7JVq97_UoXxTOZgXfgfZ5x9hiTkRQ78ZDpckn-f6xcELU2AP75qihBj-rQc6PHqeMxnp4zFhmhbKG6XOMDc4NGGG1gSqiR8v5D0N5rLmB1fLmo7swLOZVER-7PJn5JA9UbFSvhVkGkav-TSdejfypn7vrow0UhFmJkMn280hihyjh5sYzEN58OZji3k-PNQk4ZLE_cvohB2f_Qr8ECkWJ5h1f-k-qBK0cD3wAbYAwi-jc1x24JCHiUC3PZ_VgcaM8Q9nr2Odtk' },
                awayTeam: { name: 'Chelsea', short: 'CHE', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCa_YodWws3EmFS1BtJsBG1nMGsqa45EPyhz7bxVHmAkLPPo4Yla6aleDPmYrKjH6LagkDw3SkZqhnJa5d3H3x1K61CREfwxBGHPjVTr0e4IxT4WUlqO04YrQVWpUrr-VP6XQy3XdkAoxueLzKG7kcjMh1OE5wZzHmHPZh6YO6cf201uAbFW8ZosKMxJOBAxISoWMqide69WtbkxqPPYs0qS2HcCEG9rkrrk6tuGccY6hANiNhZAaAiwLZBdBpGn4qJmrjSX6DTJr4' },
                score: '1 - 1',
                status: 'KẾT THÚC'
            };
        }
    }
};
