
import React from 'react';
import { ThemedSlider } from '@/components/ui/themed-slider';
import { Contrast } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface BackgroundOpacitySliderProps {
  selectedDay: DayOfWeek;
  value: number;
  onChange: (value: number) => void;
  isNeutral?: boolean;
}

export const BackgroundOpacitySlider: React.FC<BackgroundOpacitySliderProps> = ({
  selectedDay,
  value,
  onChange,
  isNeutral = false
}) => {
  const theme = DAY_THEMES[selectedDay];

  const handleValueChange = (values: number[]) => {
    onChange(values[0]);
  };

  return (
    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border" 
         style={{ borderColor: `${theme.color}40` }}>
      <Contrast className="w-4 h-4" style={{ color: theme.color }} />
      <div className="flex-1 px-2">
        <ThemedSlider
          value={[value]}
          onValueChange={handleValueChange}
          max={10}
          min={0}
          step={1}
          themeColor={theme.color}
          isNeutral={isNeutral}
          className="w-full"
        />
      </div>
      <span className="text-xs font-medium min-w-[30px]" style={{ color: theme.color }}>
        {value * 10}%
      </span>
    </div>
  );
};
