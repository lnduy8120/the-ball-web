import api from './api';
import { Bet } from '@/types';

const MOCK_BETS = Array.from({ length: 25 }).map((_, index) => ({
    id: index + 1,
    homeTeam: index % 2 === 0 ? 'MCY' : 'CHE',
    awayTeam: index % 2 === 0 ? 'CHE' : 'MCY',
    homeLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TB7JVq97_UoXxTOZgXfgfZ5x9hiTkRQ78ZDpckn-f6xcELU2AP75qihBj-rQc6PHqeMxnp4zFhmhbKG6XOMDc4NGGG1gSqiR8v5D0N5rLmB1fLmo7swLOZVER-7PJn5JA9UbFSvhVkGkav-TSdejfypn7vrow0UhFmJkMn280hihyjh5sYzEN58OZji3k-PNQk4ZLE_cvohB2f_Qr8ECkWJ5h1f-k-qBK0cD3wAbYAwi-jc1x24JCHiUC3PZ_VgcaM8Q9nr2Odtk',
    awayLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCa_YodWws3EmFS1BtJsBG1nMGsqa45EPyhz7bxVHmAkLPPo4Yla6aleDPmYrKjH6LagkDw3SkZqhnJa5d3H3x1K61CREfwxBGHPjVTr0e4IxT4WUlqO04YrQVWpUrr-VP6XQy3XdkAoxueLzKG7kcjMh1OE5wZzHmHPZh6YO6cf201uAbFW8ZosKMxJOBAxISoWMqide69WtbkxqPPYs0qS2HcCEG9rkrrk6tuGccY6hANiNhZAaAiwLZBdBpGn4qJmrjSX6DTJr4',
    matchName: index % 2 === 0 ? 'MCY vs CHE' : 'CHE vs MCY',
    league: index % 3 === 0 ? 'Premier League' : 'FA Cup',
    time: '20:00 12/05',
    status: index % 3 === 0 ? 'won' : index % 3 === 1 ? 'lost' : 'pending',
    statusLabel: index % 3 === 0 ? 'Thắng' : index % 3 === 1 ? 'Thua' : 'Đang chờ',
    statusClass: index % 3 === 0 ? 'bg-green-50 text-win border-green-100' : index % 3 === 1 ? 'bg-red-50 text-loss border-red-100' : 'bg-yellow-50 text-pending border-yellow-100',
    betType: 'Kèo Châu Á -1.5',
    stake: '500.000 ₫',
    return: index % 3 === 0 ? '950.000 ₫' : '0 ₫',
    returnClass: index % 3 === 0 ? 'text-win' : 'text-slate-400'
}));

export const betService = {
    getHistory: async (page = 1, limit = 5, filterType = 'all'): Promise<{ data: any[], total: number }> => {
        // REAL IMPLEMENTATION:
        // const response = await api.get('/bets/history', { params: { page, limit, status: filterType } });
        // return response.data;

        // SIMULATED PAGINATION & FILTERING
        return new Promise((resolve) => {
            setTimeout(() => {
                let filtered = MOCK_BETS;
                if (filterType !== 'all') {
                    filtered = filtered.filter(b => b.status === filterType);
                }

                const start = (page - 1) * limit;
                const end = start + limit;
                const data = filtered.slice(start, end);

                resolve({
                    data,
                    total: filtered.length
                });
            }, 600);
        });
    },

    placeBet: async (betData: Partial<Bet>): Promise<Bet> => {
        // const response = await api.post('/bets', betData);
        // return response.data;

        return new Promise((resolve) => {
            setTimeout(() => resolve({ id: Date.now(), ...betData } as Bet), 1000);
        });
    }
};