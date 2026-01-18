import React from 'react';

interface Day {
  name: string;
  day: string;
}

interface DateNavigationProps {
  days: Day[];
  selectedDays: string[];
  onToggleDay: (day: string) => void;
}

const DateNavigation: React.FC<DateNavigationProps> = ({ days, selectedDays, onToggleDay }) => {
  return (
    <nav className="z-20 bg-background/95 backdrop-blur-sm border-b border-slate-200 pt-2 pb-2">
      <div className="container mx-auto max-w-7xl">
        <div className="flex overflow-x-auto no-scrollbar px-4 gap-3 py-2">
          {days.map((d, index) => {
            const isActive = selectedDays.includes(d.day);
            return (
              <button
                key={index}
                onClick={() => onToggleDay(d.day)}
                className={`flex flex-col items-center justify-center min-w-[64px] h-[64px] rounded-2xl shadow-sm transition-all ${isActive
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30 ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'bg-white border border-slate-100 text-slate-600 hover:text-slate-800'
                  }`}
              >
                <span className={`text-[10px] font-medium uppercase ${!isActive ? 'text-slate-400' : ''}`}>{d.name}</span>
                <span className="text-lg font-bold">{d.day}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DateNavigation;