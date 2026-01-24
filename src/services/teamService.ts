import api from './api';
import { StandingRow } from '@/types';


const MOCK_STANDINGS_PL: StandingRow[] = [
  { rank: 1, team: 'Man City', played: 30, record: '25-3-2', gd: '+45', points: 78, logo: 'https://media.api-sports.io/football/teams/50.png', status: 'ucl' },
  { rank: 2, team: 'Arsenal', played: 30, record: '24-4-2', gd: '+40', points: 76, logo: 'https://media.api-sports.io/football/teams/42.png', status: 'ucl' },
  { rank: 3, team: 'Liverpool', played: 30, record: '22-6-2', gd: '+38', points: 72, logo: 'https://media.api-sports.io/football/teams/40.png', status: 'ucl' },
  { rank: 4, team: 'Aston Villa', played: 30, record: '18-5-7', gd: '+15', points: 59, logo: 'https://media.api-sports.io/football/teams/66.png', status: 'ucl' },
  { rank: 5, team: 'Tottenham', played: 29, record: '14-5-10', gd: '+8', points: 47, logo: 'https://media.api-sports.io/football/teams/47.png', status: 'uel' },
  { rank: 6, team: 'Man Utd', played: 29, record: '15-3-11', gd: '0', points: 48, logo: 'https://media.api-sports.io/football/teams/33.png', status: 'uel' },
  { rank: 7, team: 'West Ham', played: 30, record: '13-9-8', gd: '-4', points: 48, logo: 'https://media.api-sports.io/football/teams/48.png', status: 'normal' },
  { rank: 8, team: 'Newcastle', played: 30, record: '11-9-10', gd: '+2', points: 42, logo: 'https://media.api-sports.io/football/teams/34.png', status: 'normal' },
  { rank: 18, team: 'Luton', played: 30, record: '5-7-18', gd: '-19', points: 22, logo: 'https://media.api-sports.io/football/teams/1359.png', status: 'relegation' },
];

const MOCK_STANDINGS_LL: StandingRow[] = [
  { rank: 1, team: 'Real Madrid', played: 30, record: '23-6-1', gd: '+41', points: 75, logo: 'https://media.api-sports.io/football/teams/541.png', status: 'ucl' },
  { rank: 2, team: 'Barcelona', played: 30, record: '20-7-3', gd: '+27', points: 67, logo: 'https://media.api-sports.io/football/teams/529.png', status: 'ucl' },
  { rank: 3, team: 'Girona', played: 30, record: '20-5-5', gd: '+24', points: 65, logo: 'https://media.api-sports.io/football/teams/547.png', status: 'ucl' },
  { rank: 4, team: 'Atlético Madrid', played: 30, record: '18-4-8', gd: '+20', points: 58, logo: 'https://media.api-sports.io/football/teams/530.png', status: 'ucl' },
  { rank: 5, team: 'Athletic Club', played: 30, record: '16-8-6', gd: '+18', points: 56, logo: 'https://media.api-sports.io/football/teams/531.png', status: 'uel' },
];

const MOCK_STANDINGS_SA: StandingRow[] = [
  { rank: 1, team: 'Inter Milan', played: 30, record: '25-4-1', gd: '+57', points: 79, logo: 'https://media.api-sports.io/football/teams/505.png', status: 'ucl' },
  { rank: 2, team: 'AC Milan', played: 30, record: '20-5-5', gd: '+23', points: 65, logo: 'https://media.api-sports.io/football/teams/489.png', status: 'ucl' },
  { rank: 3, team: 'Juventus', played: 30, record: '17-8-5', gd: '+20', points: 59, logo: 'https://media.api-sports.io/football/teams/496.png', status: 'ucl' },
  { rank: 4, team: 'Bologna', played: 30, record: '16-9-5', gd: '+15', points: 57, logo: 'https://media.api-sports.io/football/teams/500.png', status: 'ucl' },
];

const MOCK_STANDINGS_BL: StandingRow[] = [
  { rank: 1, team: 'Leverkusen', played: 30, record: '25-5-0', gd: '+50', points: 80, logo: 'https://media.api-sports.io/football/teams/168.png', status: 'ucl' },
  { rank: 2, team: 'Bayern Munich', played: 30, record: '20-3-7', gd: '+45', points: 63, logo: 'https://media.api-sports.io/football/teams/157.png', status: 'ucl' },
  { rank: 3, team: 'Stuttgart', played: 30, record: '19-3-8', gd: '+25', points: 60, logo: 'https://media.api-sports.io/football/teams/172.png', status: 'ucl' },
  { rank: 4, team: 'Dortmund', played: 30, record: '16-8-6', gd: '+20', points: 56, logo: 'https://media.api-sports.io/football/teams/165.png', status: 'ucl' },
];

const MOCK_STANDINGS_VL: StandingRow[] = [
  { rank: 1, team: 'Nam Định', played: 14, record: '10-2-2', gd: '+15', points: 32, logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Nam_Dinh_FC_Link_Logo.png', status: 'ucl' },
  { rank: 2, team: 'Bình Dương', played: 14, record: '8-2-4', gd: '+5', points: 26, logo: 'https://upload.wikimedia.org/wikipedia/vi/a/a2/Logo_Becamex_Binh_Duong_2021.svg', status: 'ucl' },
  { rank: 3, team: 'CAHN', played: 14, record: '7-4-3', gd: '+8', points: 25, logo: 'https://upload.wikimedia.org/wikipedia/vi/b/b3/Cong_An_Ha_Noi_FC.svg', status: 'ucl' },
  { rank: 4, team: 'Thanh Hóa', played: 14, record: '6-4-4', gd: '+4', points: 22, logo: 'https://upload.wikimedia.org/wikipedia/vi/9/91/Logo_CLB_Thanh_H%C3%B3a_t%E1%BB%AB_2011.png', status: 'uel' },
];

const MOCK_DATA_MAP: Record<string, StandingRow[]> = {
  'PL': MOCK_STANDINGS_PL,
  'LL': MOCK_STANDINGS_LL,
  'SA': MOCK_STANDINGS_SA,
  'BL': MOCK_STANDINGS_BL,
  'VL': MOCK_STANDINGS_VL,
};

export const teamService = {
  getStandings: async (league: string): Promise<StandingRow[]> => {
    // const response = await api.get('/leagues/standings', { params: { league }});
    // return response.data;

    const data = MOCK_DATA_MAP[league] || MOCK_STANDINGS_PL;

    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  },

  getTeamDetail: async (teamId: string): Promise<any> => {
    // const response = await api.get(`/teams/${teamId}`);
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
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
            { name: 'Kevin De Bruyne', number: 17, role: 'Tiền vệ', goals: 8, assists: 15, apps: 24, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG' },
            { name: 'Phil Foden', number: 47, role: 'Tiền đạo', goals: 14, assists: 7, apps: 28, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq' },
          ],
          matches: [
            { id: '1', date: '15/05/2024', time: '20:00', competition: 'Premier League', round: 'Vòng 34', homeTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, awayTeam: { name: 'Arsenal', shortName: 'ARS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq' }, homeScore: 3, awayScore: 1, status: 'finished', venue: 'Etihad Stadium' },
            { id: '2', date: '12/05/2024', time: '18:30', competition: 'Premier League', round: 'Vòng 33', homeTeam: { name: 'Tottenham', shortName: 'TOT', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Kb_322Pbor8bHovmhqiNUph2H8ZVaOiEEd6j6hhY4eCGA1kyddGlmeOiY9aY4fysb0U_pgCZscKYS-oogabXWbuJLwkeNeUwP2siDwYdN1Jc9S59Uf5yezLWS_dYPDmdI0BKIxbFhdWEOggn-UF2--bX-xGuMbCAbcINq62umjhoN_J1WUHNdxHu5-wbaX_8lR64dxoEazt_aSsJIxacdJWzYPiJ5WmgxfDlXgc6HWob6eK6bMsdFh58r98MGPwGhxncE_SyOah' }, awayTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, homeScore: 0, awayScore: 2, status: 'finished', venue: 'Tottenham Hotspur Stadium' },
            { id: '3', date: '08/05/2024', time: '21:00', competition: 'Premier League', round: 'Vòng 32', homeTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, awayTeam: { name: 'Chelsea', shortName: 'CHE', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe3zSKtvnFalzaJvcATfFTTsK7wJMYO0bDfGUfGRyGfcSI0MwSDEQpQWWzpH8MzRTAQqu9DPUny_Pi4QX8rDwtFQbNHvCWAnA5u5p8Co-rwge_ReBMPWkM4qEX0JSMXolVRNOOZzxigHbe26pEmqima0PpD6osgv4n0gNv50KtD31IpOBYdmSbf-_k2E2c8UrbPU0Er6XfhXKN9K7j_bJtHWMWf9iF51WUfyhGszdiGPYPa4B2v0h2IXFfUHHmG7ndOrieGB91Zl_x' }, homeScore: 4, awayScore: 1, status: 'finished', venue: 'Etihad Stadium' },
            { id: '4', date: '05/05/2024', time: '17:30', competition: 'Premier League', round: 'Vòng 31', homeTeam: { name: 'Liverpool', shortName: 'LIV', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANsQFE7hZItvaH5J7vwE01aJukdVhUk5Rsbo8LnCF6igL8ND6ME296RJn-_fllAyFqCUUInogXZSsv0CCBJiJmKLxiQwBc7YRtyIXRudy9hOwLjKQQtaAiKILY_oUf9xpUwTSqXXwgtJiqD2et0Q-ssqfMEduuEJT2owwuy3RXVKLyQ7j-X-dWhrkC3Xjy9vkz7a4ENcTr7vHeaIHhx5l-6NfB51Ss_a1XZPDF-ll9_s1a4a-lA3SUAV1IDhFNQ4ovvm-GWbUZwQpW' }, awayTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, homeScore: 1, awayScore: 1, status: 'finished', venue: 'Anfield' },
            { id: '5', date: '01/05/2024', time: '20:00', competition: 'Premier League', round: 'Vòng 30', homeTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, awayTeam: { name: 'Brighton', shortName: 'BHA', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBADTAQ43jNndc-3a6XUAEf8urakRV7x1H5wc7saQx_SnKotKJZ6GjIbMwl5koqhK3FUYkNU-guToBKPO2IPAbTrciiJG5n0GbfckjTpUA2PO1CGHCrc2wYBDUmEKWnWKAhYpaS-J6k-QggQOJziSmOLKiYV4UsZGRl53qD8snJ4AxQUBOw9ZFr5qkkTPYs0BW0oHgKgcVy6E5--orIXMxAmyzZ8CpdQUERWgxC8b4EYTQman9YGjmL2Ty_r_-vtwSME0UhvJQa6tC0' }, homeScore: 5, awayScore: 0, status: 'finished', venue: 'Etihad Stadium' },
            { id: '6', date: '18/05/2024', time: '20:00', competition: 'Premier League', round: 'Vòng 35', homeTeam: { name: 'West Ham', shortName: 'WHU', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aUXb0fqRbBvbbTjvfk_Mx2M2Y3gSdZncgFkbsYyMcpb2l1H7ik1i_OlersIa-C-6-c5LP0T0kzcnoyRAmQqdO24DQOAYlcnhY52p6bONIwQk4nd6O5tBiSgXqf7HOi10Rrm5V3E9ZQrGn1c_ouT-Yp_EgxLFDQPCpIuSmtCRVa4u3oevki5kK_ZnrpUps_vtxPRpoUq8-t9P39siReqqHdV44_SyAdNATzxvIWAsgxbLVVSlp9rYJ6-MwVN_FtMYhYUex9zS9B2s' }, awayTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, status: 'upcoming', venue: 'London Stadium' },
            { id: '7', date: '22/05/2024', time: '21:00', competition: 'Premier League', round: 'Vòng 36', homeTeam: { name: 'Manchester City', shortName: 'MCI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL' }, awayTeam: { name: 'Newcastle', shortName: 'NEW', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyRWmzKrRjAhOPHKdL_6gSRKNBmBlu89RaI1xr0uoR1gsfW1Xb88YculM1NLMhsO3GQrdjuyd940lAW1i2wwyvZ3wkwqQkMJK6KI7VpmhaiDW-fHUnaHzExUc7wztlGZzTxYFZAW6eN8RcddFkjDY03hV08JdL6CKNtUq8lJlW6_EKwlgIo_K8XuTz7YleigwNX0zfxvwjLT3az13qZ9c_sZJbCixxG7XCtExdUZIhSTAHeibUKlbwH1YqO33yX-jwXpxdE-dbZM3P' }, status: 'upcoming', venue: 'Etihad Stadium' },
          ],
          squad: [
            // Goalkeepers
            { name: 'Ederson', number: 31, position: 'Thủ môn', nationality: 'Brazil', age: 30, height: '188cm', apps: 27, goals: 0, assists: 1, rating: 7.8, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
            { name: 'Stefan Ortega', number: 18, position: 'Thủ môn', nationality: 'Germany', age: 31, height: '185cm', apps: 8, goals: 0, assists: 0, rating: 7.2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'W'] },

            // Defenders
            { name: 'Kyle Walker', number: 2, position: 'Hậu vệ', nationality: 'England', age: 33, height: '183cm', apps: 25, goals: 1, assists: 3, rating: 7.5, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'W', 'D', 'W', 'W'] },
            { name: 'Rúben Dias', number: 3, position: 'Hậu vệ', nationality: 'Portugal', age: 26, height: '187cm', apps: 26, goals: 2, assists: 1, rating: 8.1, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
            { name: 'John Stones', number: 5, position: 'Hậu vệ', nationality: 'England', age: 29, height: '188cm', apps: 23, goals: 3, assists: 2, rating: 7.9, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'W', 'W', 'W'] },
            { name: 'Nathan Aké', number: 6, position: 'Hậu vệ', nationality: 'Netherlands', age: 28, height: '180cm', apps: 20, goals: 1, assists: 0, rating: 7.3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'D', 'W', 'W', 'L'] },
            { name: 'Manuel Akanji', number: 25, position: 'Hậu vệ', nationality: 'Switzerland', age: 28, height: '193cm', apps: 24, goals: 2, assists: 1, rating: 7.6, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
            { name: 'Joško Gvardiol', number: 24, position: 'Hậu vệ', nationality: 'Croatia', age: 22, height: '185cm', apps: 22, goals: 3, assists: 2, rating: 7.7, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'W', 'W', 'D'] },

            // Midfielders
            { name: 'Rodri', number: 16, position: 'Tiền vệ', nationality: 'Spain', age: 27, height: '191cm', apps: 28, goals: 7, assists: 4, rating: 8.3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'W', 'W', 'D', 'W'] },
            { name: 'Kevin De Bruyne', number: 17, position: 'Tiền vệ', nationality: 'Belgium', age: 32, height: '181cm', apps: 24, goals: 8, assists: 15, rating: 8.5, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'W', 'W', 'W', 'D'], injuryStatus: 'Hồi phục', injuryReturn: '2 tuần' },
            { name: 'Bernardo Silva', number: 20, position: 'Tiền vệ', nationality: 'Portugal', age: 29, height: '173cm', apps: 27, goals: 6, assists: 9, rating: 8.0, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'D', 'W', 'W'] },
            { name: 'Mateo Kovačić', number: 8, position: 'Tiền vệ', nationality: 'Croatia', age: 29, height: '178cm', apps: 21, goals: 2, assists: 3, rating: 7.4, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'W', 'L', 'W'] },
            { name: 'Matheus Nunes', number: 27, position: 'Tiền vệ', nationality: 'Portugal', age: 25, height: '183cm', apps: 15, goals: 1, assists: 2, rating: 7.0, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'D', 'W', 'W', 'W'] },
            { name: 'Kalvin Phillips', number: 4, position: 'Tiền vệ', nationality: 'England', age: 28, height: '178cm', apps: 8, goals: 0, assists: 1, rating: 6.8, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'D'], injuryStatus: 'Chấn thương', injuryReturn: '3 tuần', injuryType: 'Bắp chân' },

            // Forwards
            { name: 'Erling Haaland', number: 9, position: 'Tiền đạo', nationality: 'Norway', age: 23, height: '194cm', apps: 26, goals: 28, assists: 5, rating: 8.9, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'W', 'W', 'W'] },
            { name: 'Phil Foden', number: 47, position: 'Tiền đạo', nationality: 'England', age: 23, height: '171cm', apps: 28, goals: 14, assists: 7, rating: 8.2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'W', 'D', 'W'] },
            { name: 'Jack Grealish', number: 10, position: 'Tiền đạo', nationality: 'England', age: 28, height: '180cm', apps: 25, goals: 5, assists: 8, rating: 7.6, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'D', 'W', 'W', 'W'] },
            { name: 'Julián Álvarez', number: 19, position: 'Tiền đạo', nationality: 'Argentina', age: 24, height: '170cm', apps: 22, goals: 11, assists: 4, rating: 7.8, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS', recentForm: ['W', 'W', 'W', 'W', 'D'] },
            { name: 'Jérémy Doku', number: 11, position: 'Tiền đạo', nationality: 'Belgium', age: 21, height: '173cm', apps: 18, goals: 3, assists: 6, rating: 7.3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq', recentForm: ['W', 'W', 'D', 'W', 'L'], injuryStatus: 'Nghi ngờ', injuryReturn: '1 tuần', injuryType: 'Đùi' },
            { name: 'Oscar Bobb', number: 52, position: 'Tiền đạo', nationality: 'Norway', age: 20, height: '177cm', apps: 10, goals: 2, assists: 1, rating: 6.9, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG', recentForm: ['W', 'W', 'W'] },
          ],
          coaches: [
            { name: 'Pep Guardiola', role: 'Huấn luyện viên trưởng', nationality: 'Spain', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS' },
            { name: 'Juanma Lillo', role: 'Trợ lý HLV', nationality: 'Spain', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq' },
            { name: 'Enzo Maresca', role: 'Trợ lý HLV', nationality: 'Italy', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG' },
            { name: 'Carlos Vicens', role: 'HLV thủ môn', nationality: 'Spain', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS' },
          ],
          mainLineup: [31, 2, 3, 5, 24, 16, 20, 17, 47, 9, 10], // Player numbers
          substituteLineup: [18, 6, 25, 8, 27, 19, 11],
          formation: {
            name: '4-3-3',
            description: 'Sơ đồ tấn công linh hoạt với 3 tiền đạo',
            positions: [
              { number: 31, x: 50, y: 95, position: 'GK' },
              { number: 2, x: 85, y: 75, position: 'RB' },
              { number: 3, x: 65, y: 80, position: 'CB' },
              { number: 5, x: 35, y: 80, position: 'CB' },
              { number: 24, x: 15, y: 75, position: 'LB' },
              { number: 16, x: 50, y: 55, position: 'CDM' },
              { number: 20, x: 65, y: 45, position: 'CM' },
              { number: 17, x: 35, y: 45, position: 'CM' },
              { number: 47, x: 75, y: 20, position: 'RW' },
              { number: 9, x: 50, y: 10, position: 'ST' },
              { number: 10, x: 25, y: 20, position: 'LW' },
            ]
          },
          playingStyle: {
            possession: 68,
            passingAccuracy: 89,
            pressureIntensity: 85,
            defensiveLine: 'Cao',
            buildUpStyle: 'Chuyền ngắn',
            attackingWidth: 'Rộng',
            strengths: [
              'Kiểm soát bóng vượt trội',
              'Pressing cao áp lực',
              'Chuyền bóng chính xác',
              'Tấn công đa dạng'
            ],
            weaknesses: [
              'Dễ bị phản công',
              'Phụ thuộc vào cầu thủ chủ chốt'
            ],
            tacticalApproach: 'Tiki-taka với pressing cao, kiểm soát bóng tuyệt đối và tấn công vị trí. Đội hình linh hoạt với hậu vệ biên tham gia tấn công và tiền vệ trung tâm di chuyển liên tục.'
          }
        });
      }, 600);
    });
  }
};