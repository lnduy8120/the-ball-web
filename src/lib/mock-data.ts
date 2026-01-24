import { Match } from '@/types';

export const MOCK_MATCHES: Match[] = [
    {
        id: 'm1',
        league: 'Ngoại Hạng Anh',
        time: '21:00',
        date: '2024-05-15',
        status: 'upcoming',
        homeTeam: { id: 'ars', name: 'Arsenal', shortName: 'ARS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv5NVVh9T-UaTIMRxnS8clAtqWurB3cwOLl4OE0i9ottPQgZLI25ClbVNSGQgo-S7DJY70a4kLXVkom5h-x2vRMabIjbgiF173Fr200qagrxK4-o1lQ_TnyLE3yI-dY21wL4AGddmPhn1LF-NQqhPuQenMvtD0jXCHn26mdGK6AfYPfQplvRLuFlURYNzR6GzPeK0BKkCzby0O8ASmbskILXdRHcwc1oY8S807puNvZWA1UC8LwBLwCpo2qyEtbG0YPeYydZWUth73' },
        awayTeam: { id: 'liv', name: 'Liverpool', shortName: 'LIV', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkyDoc0HzKTO91GcaRn2eV_PLButIkoNrMzuhw4u1tMPxXpwtuuBCkfjpwuP9x7W4JegCNTYheTMvIVwVaPHUnMviZB_1Vsl9Ft8SivJ5wNofOa7t-2tcQZUx6fi1q2-RRIUbNyfE7bhG2I7_l3eRp5zk_EfsQmT_XM8WrT8dhnW07Ap5Erzi3xYPEVlwZim2nAYoAum-E5Qq6zvw49PUiDPMDrxEiL4u_AUQVE2WuQTMzNB9jaMM84CMXHI7A4spgCg-MZVrgCq5g' }
    },
    {
        id: 'm2',
        league: 'Ngoại Hạng Anh',
        time: '23:30',
        date: '2024-05-15',
        status: 'upcoming',
        homeTeam: { id: 'avl', name: 'Aston Villa', shortName: 'AVL', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjxJkTaLfNRGQDVYlnMIdAPY1KWtp92S2CDLBh0VUtfol_uA_H0GndLnVN4ig7BrPF-PyMns3RHQlNCGRR9cDTlnh9mkB4t4ViFUx9GXoUkOKkmKcpoDZ3_b7P1xhEOt2VVwl9jMsgWC8V_aLVU6I7m_VffYPEqTCUr64kb6RzREDsVugL_alKlr3ul873r8zdO-d0YPq7B5I-fAuvsN4Vh80F1B8oSPAKGGKuBdsg3kVVWLcT9Ba4ZQ8cYR2HdGZ1e8pwGtJtBIm' },
        awayTeam: { id: 'mcy', name: 'Man City', shortName: 'MCY', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsDjyZ_ZDqhitWSNcFLGV9nS6TR81p5kHwOOL-XUAy0CetJEPAFiLe2pYso0UnC_rbYa8rdRmve8zrUkhdfxGxXF31LQWmImsYNlznlXn2AXtISMhlhPwcBtoymBWSWbcRHeRuQzl0audWcwRga8mWaBRyBBqmElfDmo81GKqHYYsW5vOBaet5P1LDMu8kT6uH-tj9az4XSmbZ0OFCbW9dUMscK0NXGZM7AxUFf8PnlujMjy7r0Swfaf735VaDP_WOwiavD9TR2E4L' }
    },
    {
        id: 'm3',
        league: 'La Liga',
        time: '02:00',
        date: '2024-05-16',
        status: 'upcoming',
        minute: 'Ngày mai',
        homeTeam: { id: 'rma', name: 'Real Madrid', shortName: 'RMA', logo: '' },
        awayTeam: { id: 'bar', name: 'Barcelona', shortName: 'FCB', logo: '' }
    },
    {
        id: 'm4',
        league: 'V.League 1',
        time: 'FT',
        date: '2024-05-15',
        status: 'finished',
        homeScore: 2,
        awayScore: 0,
        homeTeam: { id: 'han', name: 'Hà Nội FC', shortName: 'HAN', logo: '' },
        awayTeam: { id: 'vtl', name: 'Viettel', shortName: 'VTL', logo: '' }
    }
];
