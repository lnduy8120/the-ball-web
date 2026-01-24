'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Table, { Column } from '../../../components/ui/Table';
import { useStandings } from '../../../hooks/useStandings';
import { StandingRow } from '../../../types';
import Skeleton from '../../../components/ui/Skeleton';


const LEAGUES = [
  { id: 'PL', name: 'Premier League', logo: 'https://media.api-sports.io/football/leagues/39.png' },
  { id: 'LL', name: 'La Liga', logo: 'https://media.api-sports.io/football/leagues/140.png' },
  { id: 'SA', name: 'Serie A', logo: 'https://media.api-sports.io/football/leagues/135.png' },
  { id: 'BL', name: 'Bundesliga', logo: 'https://media.api-sports.io/football/leagues/78.png' },
  { id: 'VL', name: 'V-League', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/V.League_1_logo_%282024%29.svg' },
];

interface StandingsClientProps {
  initialStandings?: StandingRow[];
}

export default function StandingsClient({ initialStandings }: StandingsClientProps) {
  const router = useRouter();
  const [selectedLeague, setSelectedLeague] = React.useState(LEAGUES[0]);
  const { filter, setFilter, displayData, loading } = useStandings(selectedLeague.id, initialStandings);

  const columns: Column<StandingRow>[] = [
    {
      key: 'rank',
      title: '#',
      width: '48px',
      className: 'pl-4 pr-2',
      render: (item) => (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
          ${item.status === 'ucl' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
            item.status === 'uel' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
              item.status === 'relegation' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                'text-gray-500'
          }`}>
          {item.rank}
        </div>
      )
    },
    {
      key: 'team',
      title: 'Đội bóng',
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 p-1 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <img src={item.logo} alt={item.team} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-sm text-[#111418] dark:text-white">{item.team}</span>
        </div>
      )
    },
    {
      key: 'played',
      title: 'Trận',
      align: 'center',
      width: '48px',
      render: (item) => <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.played}</span>
    },
    {
      key: 'gd',
      title: 'HS',
      align: 'center',
      headerClassName: 'hidden sm:table-cell',
      className: 'hidden sm:table-cell',
      render: (item) => (
        <span className={`text-sm font-medium ${parseInt(item.gd) > 0 ? 'text-green-600' : parseInt(item.gd) < 0 ? 'text-red-600' : 'text-gray-500'}`}>
          {item.gd}
        </span>
      )
    },
    {
      key: 'record',
      title: 'T-H-B',
      align: 'center',
      headerClassName: 'hidden md:table-cell',
      className: 'hidden md:table-cell',
      render: (item) => <span className="text-sm font-medium text-gray-500">{item.record}</span>
    },
    {
      key: 'points',
      title: 'Điểm',
      align: 'center',
      width: '64px',
      className: 'pl-2 pr-4',
      render: (item) => <span className="text-sm font-bold text-[#111418] dark:text-white">{item.points}</span>
    }
  ];

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen pb-24 font-display text-[#111418] dark:text-white flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100 dark:border-gray-800 px-4 py-4">
        <div className="container mx-auto max-w-7xl">
          {/* Top Bar */}
          {/* <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Bảng xếp hạng</h1>
            </div> */}


          {/* League List */}
          <div className="pb-6">
            <div
              className="flex items-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 select-none [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {LEAGUES.map((league) => {
                const isActive = selectedLeague.id === league.id;
                return (
                  <button
                    key={league.id}
                    onClick={() => setSelectedLeague(league)}
                    className={`flex-shrink-0 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full transition-all duration-300 border
                      ${isActive
                        ? 'bg-white dark:bg-[#1A2633] border-gray-100 dark:border-gray-700 shadow-md scale-100'
                        : 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <div className={`w-10 h-10 p-1.5 rounded-full bg-slate-50 dark:bg-gray-800 flex items-center justify-center transition-all ${!isActive ? 'grayscale' : ''}`}>
                      <img
                        src={league.logo}
                        alt={league.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className={`font-bold whitespace-nowrap ${isActive ? 'text-[#111418] dark:text-white text-lg' : 'text-gray-500 text-base'}`}>
                      {league.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="">
            <div className="flex h-10 w-full max-w-md items-center rounded-full bg-[#f0f2f4] dark:bg-gray-800 p-1">
              {['overall', 'home', 'away'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 rounded-full text-xs font-bold uppercase tracking-wide h-full transition-all ${filter === f
                    ? 'bg-white dark:bg-[#1A2633] shadow-sm text-primary'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  {f === 'overall' ? 'Tổng quan' : f === 'home' ? 'Sân nhà' : 'Sân khách'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Table Content */}
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="bg-white dark:bg-[#1A2633] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
          {loading ? (
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton variant="circular" width={24} height={24} />
                  <div className="flex-1 flex items-center gap-3">
                    <Skeleton variant="circular" width={32} height={32} />
                    <Skeleton variant="text" width={100} height={16} />
                  </div>
                  <Skeleton variant="text" width={30} height={16} />
                  <Skeleton variant="text" width={30} height={16} />
                  <Skeleton variant="text" width={30} height={16} />
                </div>
              ))}
            </div>
          ) : (
            <Table
              data={displayData}
              columns={columns}
              onRowClick={() => router.push('/team-detail')}
            />
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 px-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-xs text-gray-500">Champions League</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="text-xs text-gray-500">Europa League</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-xs text-gray-500">Xuống hạng</span>
          </div>
        </div>
      </div>
    </div>
  );
}