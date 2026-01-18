'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { Match } from '@/types';
import { matchService } from '../../services/matchService';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Prefetch data when user hovers over the card
  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: ['match', match.id],
      queryFn: () => matchService.getMatchDetail(match.id),
      staleTime: 1000 * 30, // Data valid for 30s
    });
  };

  return (
    <div
      onClick={() => router.push(`/match/${match.id}`)}
      onMouseEnter={handleMouseEnter}
      className="bg-card rounded-xl p-4 shadow border border-slate-100 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        {/* Home Team */}
        <div className="flex items-center gap-3 flex-1 w-1/3">
          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); router.push('/team-detail'); }}
          >
            {match.homeTeam.logo ? (
              <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                {match.homeTeam.shortName.substring(0, 2)}
              </div>
            )}
            <span className="text-xs font-semibold hidden sm:block text-slate-900">{match.homeTeam.name}</span>
          </div>
          <span className="text-sm font-semibold sm:hidden text-slate-900">{match.homeTeam.shortName}</span>
        </div>

        {/* Match Info / Score */}
        <div className="flex flex-col items-center justify-center w-1/3">
          {match.status === 'finished' ? (
            <>
              <span className="text-xs font-bold text-slate-500 mb-1">FT</span>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                <span className="text-sm font-bold text-slate-900">{match.homeScore}</span>
                <span className="text-xs text-slate-400">-</span>
                <span className="text-sm font-bold text-slate-900">{match.awayScore}</span>
              </div>
            </>
          ) : (
            <>
              <span className="text-xs font-medium text-slate-500 mb-1">{match.time}</span>
              <div className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-sm font-bold text-slate-700">vs</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1">{match.minute || 'Ngày mai'}</span>
            </>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-3 flex-1 justify-end w-1/3">
          <span className="text-sm font-semibold sm:hidden text-slate-900">{match.awayTeam.shortName}</span>
          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); router.push('/team-detail'); }}
          >
            {match.awayTeam.logo ? (
              <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                {match.awayTeam.shortName.substring(0, 2)}
              </div>
            )}
            <span className="text-xs font-semibold hidden sm:block text-slate-900">{match.awayTeam.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MatchCard);