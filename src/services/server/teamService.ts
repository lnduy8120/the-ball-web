import { serverApi } from '@/lib/server-api';
import { StandingRow } from '@/types';
import { MOCK_DATA_MAP, MOCK_STANDINGS_PL } from '@/lib/mock-standings';

export const serverTeamService = {
    getStandings: async (league: string): Promise<StandingRow[]> => {
        try {
            // Attempt to call API. Assuming endpoint is /leagues/standings?league=...
            return await serverApi.get<StandingRow[]>('/leagues/standings', { league });
        } catch (error) {
            console.warn(`[ServerTeamService] Failed to fetch standings for ${league}, falling back to mock`);
            // Note: Currently teamService mapping uses 'PL', 'LL' etc.
            // The server API might expect or return these codes. 
            // For mock fallback, we need to map the full league name or ID if that's what's passed, 
            // but here we simply assume the caller passes the code or we fallback to PL.

            // Ideally we should normalize the league key here.
            // If the input 'league' is an ID like '39' (Premier League), we would need a map.
            // For now, let's try to lookup directly.
            return MOCK_DATA_MAP[league] || MOCK_STANDINGS_PL;
        }
    },

    getTeamDetail: async (teamId: string): Promise<any> => {
        try {
            return await serverApi.get(`/teams/${teamId}`);
        } catch (error) {
            console.warn(`[ServerTeamService] Failed to fetch team detail ${teamId}, falling back to mock`);
            // Fallback to the complex mock object used in client service
            return {
                performanceData: [
                    { name: 'Thắng', value: 20, color: '#3B82F6' },
                    { name: 'Hòa', value: 4, color: '#9CA3AF' },
                    { name: 'Thua', value: 3, color: '#EF4444' },
                ],
                lineData: [
                    { name: 'V26', rank: 5 },
                    { name: 'V27', rank: 4 },
                    { name: 'V28', rank: 6 },
                    { name: 'V29', rank: 6 },
                    { name: 'V30', rank: 4 },
                    { name: 'V31', rank: 2 },
                    { name: 'V32', rank: 2 },
                    { name: 'V33', rank: 1 },
                ],
                matchStats: [
                    { name: 'Toàn trận', win: 20, draw: 4, loss: 3 },
                    { name: 'Sân nhà', win: 12, draw: 2, loss: 0 },
                    { name: 'Sân khách', win: 8, draw: 2, loss: 3 },
                ],
                goalStats: [
                    { name: 'Toàn trận', scored: 82, conceded: 25 },
                    { name: 'Sân nhà', scored: 48, conceded: 10 },
                    { name: 'Sân khách', scored: 34, conceded: 15 },
                ],
                players: [
                    { name: 'Erling Haaland', number: 9, role: 'Tiền đạo', goals: 28, assists: 5, apps: 26, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS' },
                    // ... truncated for brevity, but ideally should be full if we want full fallback
                ],
                matches: [
                    { id: '1', date: '15/05/2024', time: '20:00', competition: 'Premier League', round: 'Vòng 34', homeTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, awayTeam: { name: 'Arsenal', shortName: 'ARS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq' }, homeScore: 3, awayScore: 1, status: 'finished', venue: 'Etihad Stadium' },
                ],
                squad: [],
                coaches: [],
                mainLineup: [31, 2, 3, 5, 24, 16, 20, 17, 47, 9, 10],
                substituteLineup: [18, 6, 25, 8, 27, 19, 11],
                formation: { name: '4-3-3', description: 'Sơ đồ tấn công linh hoạt', positions: [] },
                playingStyle: { possession: 68, passingAccuracy: 89, pressureIntensity: 85, defensiveLine: 'Cao', buildUpStyle: 'Chuyền ngắn', attackingWidth: 'Rộng', strengths: [], weaknesses: [], tacticalApproach: '' }
            };
        }
    }
};
