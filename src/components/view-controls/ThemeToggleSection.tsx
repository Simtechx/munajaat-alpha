
import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface ThemeToggleSectionProps {
  selectedDay: DayOfWeek;
  selectedTheme: 'color' | 'neutral';
  onThemeChange: (theme: 'color' | 'neutral') => void;
}

export const ThemeToggleSection: React.FC<ThemeToggleSectionProps> = ({
  selectedDay,
  selectedTheme,
  onThemeChange,
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
        <Palette className="w-4 h-4" style={{ color: theme.color }} />
        <span>Theme</span>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant={selectedTheme === 'color' ? 'default' : 'outline'}
          size="sm"
          className="flex-1"
          onClick={() => onThemeChange('color')}
          style={{
            backgroundColor: selectedTheme === 'color' ? theme.color : 'transparent',
            borderColor: theme.color,
            color: selectedTheme === 'color' ? 'white' : theme.color
          }}
        >
          Color
        </Button>
        <Button
          variant={selectedTheme === 'neutral' ? 'default' : 'outline'}
          size="sm"
          className="flex-1"
          onClick={() => onThemeChange('neutral')}
          style={{
            backgroundColor: selectedTheme === 'neutral' ? theme.color : 'transparent',
            borderColor: theme.color,
            color: selectedTheme === 'neutral' ? 'white' : theme.color
          }}
        >
          Neutral
        </Button>
      </div>
    </div>
  );
};
