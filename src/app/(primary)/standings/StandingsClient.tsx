'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Table, { Column } from '../../../components/ui/Table';
import { useStandings } from '../../../hooks/useStandings';
import { StandingRow } from '../../../types';
import Skeleton from '../../../components/ui/Skeleton';

export default function StandingsClient() {
  const router = useRouter();
  const { filter, setFilter, displayData, loading } = useStandings();

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

          {/* League Selector */}
          <div className="pb-3">
            <div className="relative w-full max-w-md">
              <select className="appearance-none w-full bg-slate-50 dark:bg-gray-800 text-[#111418] dark:text-white border-none rounded-2xl py-3 pl-12 pr-10 text-lg font-semibold cursor-pointer focus:ring-2 focus:ring-primary/20">
                <option>Premier League</option>
                <option>La Liga</option>
                <option>Serie A</option>
                <option>Bundesliga</option>
                <option>V-League</option>
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASl46Hj6T1DM7EqHg4eYypaMSKa4mCdEpB8mgJt_zvd6j9XuzkWXqfCdHVMZzDaJ1snconVzIdQGgd27l8w3X0odCscElH4yl61tPnFv6uFsRIcIkPDfIQepbBzJWmTQ1htkv_x6moW_1G_dFtWXkweEES6t1ZpHcxKjvRqkeWOjpgQOTvLC3Y1Bhvo2LpvDV_rvx6gyhe4mYmY0jZTW8HDN4_DkN5nGqVsxT4VFs6mMKUblhvNVL1wMkwawGqB2UFxDchKXQxyLmN')" }}></div>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
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