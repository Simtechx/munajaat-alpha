
import React from 'react';
import { Monitor } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface DisplayModeSectionProps {
  selectedDay: DayOfWeek;
  selectedLayout: string;
}

export const DisplayModeSection: React.FC<DisplayModeSectionProps> = ({
  selectedDay,
  selectedLayout
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm font-semibold pb-2 border-b" 
           style={{ color: theme.color, borderColor: `${theme.color}20` }}>
        <Monitor className="w-4 h-4" />
        <span>Display Mode</span>
      </div>
      
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border shadow-sm">
        <div className="text-center">
          <div className="text-lg font-bold mb-1" style={{ color: theme.color }}>
            {selectedLayout} View
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wider font-medium">
            Current Layout Mode
          </div>
        </div>
      </div>
    </div>
  );
};
