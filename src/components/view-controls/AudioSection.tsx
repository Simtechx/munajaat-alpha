
import React from 'react';
import { Volume2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface AudioSectionProps {
  selectedDay: DayOfWeek;
  audioEnabled: boolean;
  onAudioToggle: () => void;
}

export const AudioSection: React.FC<AudioSectionProps> = ({
  selectedDay,
  audioEnabled,
  onAudioToggle,
}) => {
  const theme = DAY_THEMES[selectedDay];

  const handleToggle = (checked: boolean) => {
    console.log('Audio toggle clicked:', checked, 'current:', audioEnabled);
    onAudioToggle();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Audio section clicked - toggling audio');
    onAudioToggle();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
        <Volume2 className="w-4 h-4" />
        <span>Audio</span>
      </div>
      
      <div 
        className="flex items-center justify-between p-3 rounded-lg border-2 text-sm cursor-pointer transition-all duration-200"
        style={{ 
          backgroundColor: audioEnabled ? `${theme.color}15` : '#f8f9fa',
          borderColor: audioEnabled ? theme.color : '#e5e7eb'
        }}
        onClick={handleClick}
      >
        <div className="flex flex-col">
          <span className="font-medium">Narration</span>
          <span className="text-xs opacity-70">
            {audioEnabled ? 'Audio enabled' : 'Audio disabled'}
          </span>
        </div>
        <Switch
          checked={audioEnabled}
          onCheckedChange={handleToggle}
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto"
          themeColor={theme.color}
        />
      </div>
    </div>
  );
};
