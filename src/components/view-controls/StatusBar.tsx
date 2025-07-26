
import React from 'react';
import { LayoutGrid, Languages, Volume2, Contrast } from 'lucide-react';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';

interface StatusBarProps {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  backgroundOpacity: number;
  showHizbulBahr?: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  selectedDay,
  selectedLayout,
  arabicVisible,
  englishVisible,
  audioEnabled,
  backgroundOpacity,
  showHizbulBahr = false,
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="mb-3 p-2 rounded-lg border text-xs bg-white/10 border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <LayoutGrid className="w-3 h-3 text-white" />
            <span className="font-medium text-white">
              {showHizbulBahr ? 'Hizbul Bahr' : selectedLayout}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Languages className="w-3 h-3 text-white" />
            <span className="text-white">{(arabicVisible ? 1 : 0) + (englishVisible ? 1 : 0)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Volume2 className="w-3 h-3 text-white" />
            <span className="text-white">{audioEnabled ? 'On' : 'Off'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Contrast className="w-3 h-3 text-white" />
            <span className="text-white">{backgroundOpacity}/5</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-white">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span>Active</span>
        </div>
      </div>
    </div>
  );
};
