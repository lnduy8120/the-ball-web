'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Team {
  name: string;
  short: string;
  logo: string;
}

interface MatchHeroProps {
  match: {
    homeTeam: Team;
    awayTeam: Team;
    score: string;
    status: string;
  };
}

const MatchHero: React.FC<MatchHeroProps> = ({ match }) => {
  const router = useRouter();

  return (
    <div className="bg-card border-b border-slate-200 pt-6 pb-6 shadow-sm">
      <div className="container mx-auto max-w-5xl px-4 relative">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex flex-col items-center flex-1">
            <div 
              onClick={() => router.push('/team-detail')}
              className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center mb-3 overflow-hidden border border-slate-100 p-2 cursor-pointer transition-transform active:scale-95 hover:shadow-md"
            >
              <img src={match.homeTeam.logo} alt="Home" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-600">{match.homeTeam.short}</span>
          </div>
          <div className="flex flex-col items-center flex-1 px-4">
            <span className="text-xs font-semibold text-slate-400 mb-2 px-3 py-1 bg-slate-100 rounded-full">{match.status}</span>
            <div className="flex items-center gap-6 text-slate-900">
              <span className="text-4xl md:text-6xl font-bold">{match.score.split(' - ')[0]}</span>
              <span className="text-2xl text-slate-300">-</span>
              <span className="text-4xl md:text-6xl font-bold">{match.score.split(' - ')[1]}</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div 
              onClick={() => router.push('/team-detail')}
              className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center mb-3 overflow-hidden border border-slate-100 p-2 cursor-pointer transition-transform active:scale-95 hover:shadow-md"
            >
              <img src={match.awayTeam.logo} alt="Away" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-600">{match.awayTeam.short}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchHero;