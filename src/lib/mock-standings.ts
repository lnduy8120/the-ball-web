import { StandingRow } from '@/types';

export const MOCK_STANDINGS_PL: StandingRow[] = [
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

export const MOCK_STANDINGS_LL: StandingRow[] = [
    { rank: 1, team: 'Real Madrid', played: 30, record: '23-6-1', gd: '+41', points: 75, logo: 'https://media.api-sports.io/football/teams/541.png', status: 'ucl' },
    { rank: 2, team: 'Barcelona', played: 30, record: '20-7-3', gd: '+27', points: 67, logo: 'https://media.api-sports.io/football/teams/529.png', status: 'ucl' },
    { rank: 3, team: 'Girona', played: 30, record: '20-5-5', gd: '+24', points: 65, logo: 'https://media.api-sports.io/football/teams/547.png', status: 'ucl' },
    { rank: 4, team: 'Atlético Madrid', played: 30, record: '18-4-8', gd: '+20', points: 58, logo: 'https://media.api-sports.io/football/teams/530.png', status: 'ucl' },
    { rank: 5, team: 'Athletic Club', played: 30, record: '16-8-6', gd: '+18', points: 56, logo: 'https://media.api-sports.io/football/teams/531.png', status: 'uel' },
];

export const MOCK_STANDINGS_SA: StandingRow[] = [
    { rank: 1, team: 'Inter Milan', played: 30, record: '25-4-1', gd: '+57', points: 79, logo: 'https://media.api-sports.io/football/teams/505.png', status: 'ucl' },
    { rank: 2, team: 'AC Milan', played: 30, record: '20-5-5', gd: '+23', points: 65, logo: 'https://media.api-sports.io/football/teams/489.png', status: 'ucl' },
    { rank: 3, team: 'Juventus', played: 30, record: '17-8-5', gd: '+20', points: 59, logo: 'https://media.api-sports.io/football/teams/496.png', status: 'ucl' },
    { rank: 4, team: 'Bologna', played: 30, record: '16-9-5', gd: '+15', points: 57, logo: 'https://media.api-sports.io/football/teams/500.png', status: 'ucl' },
];

export const MOCK_STANDINGS_BL: StandingRow[] = [
    { rank: 1, team: 'Leverkusen', played: 30, record: '25-5-0', gd: '+50', points: 80, logo: 'https://media.api-sports.io/football/teams/168.png', status: 'ucl' },
    { rank: 2, team: 'Bayern Munich', played: 30, record: '20-3-7', gd: '+45', points: 63, logo: 'https://media.api-sports.io/football/teams/157.png', status: 'ucl' },
    { rank: 3, team: 'Stuttgart', played: 30, record: '19-3-8', gd: '+25', points: 60, logo: 'https://media.api-sports.io/football/teams/172.png', status: 'ucl' },
    { rank: 4, team: 'Dortmund', played: 30, record: '16-8-6', gd: '+20', points: 56, logo: 'https://media.api-sports.io/football/teams/165.png', status: 'ucl' },
];

export const MOCK_STANDINGS_VL: StandingRow[] = [
    { rank: 1, team: 'Nam Định', played: 14, record: '10-2-2', gd: '+15', points: 32, logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Nam_Dinh_FC_Link_Logo.png', status: 'ucl' },
    { rank: 2, team: 'Bình Dương', played: 14, record: '8-2-4', gd: '+5', points: 26, logo: 'https://upload.wikimedia.org/wikipedia/vi/a/a2/Logo_Becamex_Binh_Duong_2021.svg', status: 'ucl' },
    { rank: 3, team: 'CAHN', played: 14, record: '7-4-3', gd: '+8', points: 25, logo: 'https://upload.wikimedia.org/wikipedia/vi/b/b3/Cong_An_Ha_Noi_FC.svg', status: 'ucl' },
    { rank: 4, team: 'Thanh Hóa', played: 14, record: '6-4-4', gd: '+4', points: 22, logo: 'https://upload.wikimedia.org/wikipedia/vi/9/91/Logo_CLB_Thanh_H%C3%B3a_t%E1%BB%AB_2011.png', status: 'uel' },
];

export const MOCK_DATA_MAP: Record<string, StandingRow[]> = {
    'PL': MOCK_STANDINGS_PL,
    'LL': MOCK_STANDINGS_LL,
    'SA': MOCK_STANDINGS_SA,
    'BL': MOCK_STANDINGS_BL,
    'VL': MOCK_STANDINGS_VL,
};
