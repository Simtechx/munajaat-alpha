
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface DayBadgeProps {
  day: DayOfWeek;
  onClick?: () => void;
}

export const DayBadge: React.FC<DayBadgeProps> = ({ day, onClick }) => {
  const theme = DAY_THEMES[day];
  
  return (
    <div 
      className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium text-white shadow-md backdrop-blur-sm min-w-[160px] justify-center ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      style={{ backgroundColor: theme.color }}
      onClick={onClick}
      title={onClick ? 'Click to toggle day navigation' : undefined}
    >
      Duas for {day}
    </div>
  );
};
