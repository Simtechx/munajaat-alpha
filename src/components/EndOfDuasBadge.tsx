import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface EndOfDuasBadgeProps {
  selectedDay: DayOfWeek;
}

export const EndOfDuasBadge: React.FC<EndOfDuasBadgeProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];
  
  return (
    <div className="flex justify-center py-8">
      <div 
        className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium text-white shadow-md backdrop-blur-sm min-w-[160px] justify-center"
        style={{ backgroundColor: theme.color }}
      >
        End of Duas for {selectedDay}
      </div>
    </div>
  );
};