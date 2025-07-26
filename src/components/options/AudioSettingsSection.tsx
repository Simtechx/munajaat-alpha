
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface AudioSettingsSectionProps {
  selectedDay: DayOfWeek;
  audioEnabled: boolean;
  onAudioToggle: () => void;
}

export const AudioSettingsSection: React.FC<AudioSettingsSectionProps> = ({
  selectedDay,
  audioEnabled,
  onAudioToggle
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm font-semibold pb-2 border-b" 
           style={{ color: theme.color, borderColor: `${theme.color}20` }}>
        {audioEnabled ? (
          <Volume2 className="w-4 h-4" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
        <span>Audio Settings</span>
      </div>
      
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <span className="text-sm font-medium">Enable Audio</span>
        <Switch
          checked={audioEnabled}
          onCheckedChange={onAudioToggle}
          style={{
            backgroundColor: audioEnabled ? theme.color : '#e5e7eb',
          }}
        />
      </div>
    </div>
  );
};
