import React from 'react';
import { Match } from '@/types';
import MatchCard from './MatchCard';

interface LeagueGroupProps {
  league: string;
  icon: string;
  matches: Match[];
}

const LeagueGroup: React.FC<LeagueGroupProps> = ({ league, icon, matches }) => {
  if (matches.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-xs text-slate-600">{icon}</span>
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">{league}</h3>
        </div>
        <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">Xem tất cả</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
};

export default LeagueGroup;