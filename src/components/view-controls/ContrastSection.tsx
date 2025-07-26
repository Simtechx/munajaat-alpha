
import React from 'react';
import { Contrast } from 'lucide-react';
import { ThemedSlider } from '@/components/ui/themed-slider';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface ContrastSectionProps {
  selectedDay: DayOfWeek;
  backgroundOpacity: number;
  onBackgroundOpacityChange: (opacity: number) => void;
  isNeutral?: boolean;
}

export const ContrastSection: React.FC<ContrastSectionProps> = ({
  selectedDay,
  backgroundOpacity,
  onBackgroundOpacityChange,
  isNeutral = false,
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
        <Contrast className="w-4 h-4" color={theme.color} />
        <span>Background Shade</span>
      </div>
      <ThemedSlider
        value={[backgroundOpacity]}
        onValueChange={(value) => onBackgroundOpacityChange(value[0])}
        max={10}
        min={0}
        step={1}
        themeColor={theme.color}
        isNeutral={isNeutral}
        className="w-full"
      />
    </div>
  );
};
