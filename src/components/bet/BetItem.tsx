import React from 'react';

interface Bet {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  matchName: string;
  league: string;
  time: string;
  status: string;
  statusLabel: string;
  statusClass: string;
  betType: string;
  stake: string;
  return: string;
  returnClass: string;
}

interface BetItemProps {
  bet: Bet;
}

const BetItem: React.FC<BetItemProps> = ({ bet }) => {
  return (
    <div className="bg-white rounded-2xl p-0 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden border border-slate-100">
        <div className="p-4 border-b border-slate-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    <img className="w-9 h-9 rounded-full bg-white object-contain border-2 border-white shadow-sm" src={bet.homeLogo} alt="" />
                    <img className="w-9 h-9 rounded-full bg-white object-contain border-2 border-white shadow-sm" src={bet.awayLogo} alt="" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-slate-900">{bet.matchName}</h3>
                    <p className="text-[11px] text-slate-500">{bet.league} • {bet.time}</p>
                </div>
            </div>
            <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${bet.statusClass}`}>{bet.statusLabel}</span>
        </div>
        <div className="p-4 bg-slate-50/50 space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-medium">Loại cược</span>
                <span className="text-sm font-bold text-slate-800">{bet.betType}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-medium">Tiền cược</span>
                <span className="text-sm font-semibold text-slate-800">{bet.stake}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-dashed border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Tổng nhận</span>
                <span className={`text-sm font-bold ${bet.returnClass}`}>{bet.return}</span>
            </div>
        </div>
    </div>
  );
};

export default React.memo(BetItem);