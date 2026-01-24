import api from './api';
import { Match } from '@/types';
import { MOCK_MATCHES } from '@/lib/mock-data';

export const matchService = {
  getMatches: async (params?: { date?: string; league?: string }): Promise<Match[]> => {
    // REAL IMPLEMENTATION:
    // const response = await api.get<Match[]>('/matches', { params });
    // return response.data;

    // SIMULATED IMPLEMENTATION:
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_MATCHES), 500);
    });
  },

  getMatchDetail: async (id: string): Promise<any> => {
    // const response = await api.get(`/matches/${id}`);
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          homeTeam: { name: 'Man City', short: 'MCY', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TB7JVq97_UoXxTOZgXfgfZ5x9hiTkRQ78ZDpckn-f6xcELU2AP75qihBj-rQc6PHqeMxnp4zFhmhbKG6XOMDc4NGGG1gSqiR8v5D0N5rLmB1fLmo7swLOZVER-7PJn5JA9UbFSvhVkGkav-TSdejfypn7vrow0UhFmJkMn280hihyjh5sYzEN58OZji3k-PNQk4ZLE_cvohB2f_Qr8ECkWJ5h1f-k-qBK0cD3wAbYAwi-jc1x24JCHiUC3PZ_VgcaM8Q9nr2Odtk' },
          awayTeam: { name: 'Chelsea', short: 'CHE', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCa_YodWws3EmFS1BtJsBG1nMGsqa45EPyhz7bxVHmAkLPPo4Yla6aleDPmYrKjH6LagkDw3SkZqhnJa5d3H3x1K61CREfwxBGHPjVTr0e4IxT4WUlqO04YrQVWpUrr-VP6XQy3XdkAoxueLzKG7kcjMh1OE5wZzHmHPZh6YO6cf201uAbFW8ZosKMxJOBAxISoWMqide69WtbkxqPPYs0qS2HcCEG9rkrrk6tuGccY6hANiNhZAaAiwLZBdBpGn4qJmrjSX6DTJr4' },
          score: '1 - 1',
          status: 'KẾT THÚC'
        });
      }, 400);
    });
  }
};