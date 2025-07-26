import React from 'react';
import { Target, Badge, RotateCcw } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface DayIndicatorSectionProps {
  selectedDay: DayOfWeek;
  dayIndicatorStyle: DayIndicatorStyle;
  onDayIndicatorChange: (style: DayIndicatorStyle) => void;
}

const INDICATOR_STYLES: { 
  id: DayIndicatorStyle; 
  name: string; 
  description: string; 
  icon: React.ReactNode;
}[] = [
  { id: 'corner-dot-ring', name: 'Corner Dot', description: 'Classic dot indicator', icon: <Target className="w-4 h-4" /> },
  { id: 'floating-badge', name: 'Side Bar', description: 'Badge with text indicator', icon: <Badge className="w-4 h-4" /> },
  { id: 'inverted', name: 'Inverted', description: 'Light Shade with Border', icon: <RotateCcw className="w-4 h-4" /> },
];

export const DayIndicatorSection: React.FC<DayIndicatorSectionProps> = ({
  selectedDay,
  dayIndicatorStyle,
  onDayIndicatorChange,
}) => {
  const theme = DAY_THEMES[selectedDay];
  const currentStyle = INDICATOR_STYLES.find(style => style.id === dayIndicatorStyle);

  // Create darker color for subtle glow background - medium shade between light and dark
  const darkerColor = theme.color + '70'; // More opacity for darker appearance
  const mediumColor = theme.color + '50'; // Medium shade for subtle glow
  const lightColor = theme.color + '20';

  return (
    <div 
      className="space-y-4"
      style={{
        '--day-color': theme.color,
        '--day-color-alpha': theme.color + '40',
        '--day-color-light': lightColor,
        '--day-color-medium': mediumColor,
        '--day-color-darker': darkerColor
      } as React.CSSProperties}
    >
      <div className="flex items-center gap-3 text-sm font-semibold pb-2 border-b" 
           style={{ 
             color: theme.color,
             borderColor: `${theme.color}40` 
           }}>
        <Target className="w-4 h-4" style={{ color: theme.color }} />
        <span>Current Day Indicator</span>
      </div>
      
      <Select value={dayIndicatorStyle} onValueChange={onDayIndicatorChange}>
        <SelectTrigger 
          className="w-full border-2 bg-white/90"
          style={{ 
            borderColor: theme.color,
            color: theme.color 
          }}
        >
          <SelectValue>
            <div className="flex items-center gap-2">
              {currentStyle?.icon}
              <span className="font-medium">{currentStyle?.name}</span>
              <span className="text-xs opacity-70">• {currentStyle?.description}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white border-2 shadow-xl z-50" style={{ borderColor: theme.color }}>
          {INDICATOR_STYLES.map((style) => (
            <SelectItem 
              key={style.id} 
              value={style.id}
              className="cursor-pointer hover:bg-gray-50 p-3"
            >
              <div className="flex items-center gap-2">
                {style.icon}
                <div className="flex-1">
                  <div className="font-medium">{style.name}</div>
                  <div className="text-xs opacity-70">{style.description}</div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
