import React from 'react';

const BetSummary: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg shadow-blue-500/20 text-white">
        <div className="flex justify-between items-center divide-x divide-blue-500/50">
        <div className="flex flex-col items-center flex-1 px-2">
            <span className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold mb-1">Tổng số cược</span>
            <span className="text-xl font-bold">24</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
            <span className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold mb-1">Tổng tiền thắng</span>
            <span className="text-xl font-bold text-white">12.5M</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
            <span className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold mb-1">Lợi nhuận</span>
            <span className="text-xl font-bold text-green-300">+4.2M</span>
        </div>
        </div>
    </div>
  );
};

export default BetSummary;