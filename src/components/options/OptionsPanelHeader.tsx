
import React from 'react';
import { Settings, Volume2, VolumeX } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface OptionsPanelHeaderProps {
  selectedDay: DayOfWeek;
  selectedLayout: string;
  audioEnabled: boolean;
  languageCount: number;
}

export const OptionsPanelHeader: React.FC<OptionsPanelHeaderProps> = ({
  selectedDay,
  selectedLayout,
  audioEnabled,
  languageCount
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div 
      className="px-6 py-4 border-b-2 text-white text-sm font-semibold rounded-t-xl"
      style={{ 
        backgroundColor: theme.color,
        borderBottomColor: `${theme.color}40`
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          <span>Reading Controls</span>
        </div>
        <div className="flex items-center gap-2 text-xs bg-white/20 px-2 py-1 rounded-full">
          {audioEnabled ? (
            <Volume2 className="w-3 h-3" />
          ) : (
            <VolumeX className="w-3 h-3" />
          )}
          <span>{languageCount} Langs</span>
        </div>
      </div>
      <div className="text-xs opacity-90 mt-2 bg-white/10 px-2 py-1 rounded">
        Current: {selectedLayout} Layout • Audio {audioEnabled ? 'Enabled' : 'Disabled'}
      </div>
    </div>
  );
};
