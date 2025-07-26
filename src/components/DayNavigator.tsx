
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { getCurrentDay } from '@/utils/dateUtils';
import { Button } from '@/components/ui/button';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface DayNavigatorProps {
  selectedDay: DayOfWeek;
  onDayChange: (day: DayOfWeek) => void;
  completedDays: Set<DayOfWeek>;
  dayIndicatorStyle?: DayIndicatorStyle;
}

export const DayNavigator: React.FC<DayNavigatorProps> = ({
  selectedDay,
  onDayChange,
  completedDays,
  dayIndicatorStyle = 'floating-badge'
}) => {
  const currentDay = getCurrentDay();
  const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const visibleDays = days.filter(day => day !== selectedDay);

  const handleDayClick = (day: DayOfWeek) => {
    onDayChange(day);
  };

  const getButtonStyle = (day: DayOfWeek) => {
    const theme = DAY_THEMES[day];
    const isToday = day === currentDay;
    const isCompleted = completedDays.has(day);

    if (isCompleted) {
      return {
        backgroundColor: theme.color,
        borderColor: theme.color,
        color: 'white',
        fontWeight: 'bold' as const
      };
    }

    return {
      backgroundColor: theme.color,
      borderColor: theme.color,
      color: 'white',
      fontWeight: isToday ? 'bold' as const : 'normal' as const
    };
  };

  const lightenColor = (color: string, amount: number = 0.4) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const lighterR = Math.round(r + (255 - r) * amount);
    const lighterG = Math.round(g + (255 - g) * amount);
    const lighterB = Math.round(b + (255 - b) * amount);
    
    return `rgb(${lighterR}, ${lighterG}, ${lighterB})`;
  };

  const darkenColor = (color: string, amount: number = 0.3) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const darkerR = Math.round(r * (1 - amount));
    const darkerG = Math.round(g * (1 - amount));
    const darkerB = Math.round(b * (1 - amount));
    
    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
  };

  const renderTodayIndicator = (day: DayOfWeek) => {
    const isToday = day === currentDay;
    if (!isToday) return null;

    const theme = DAY_THEMES[day];

    switch (dayIndicatorStyle) {
      case 'corner-dot-ring':
        return (
          <>
            <div className="absolute top-1 right-1 w-4 h-4 border-2 border-white rounded-full bg-transparent" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full" />
          </>
        );
      case 'subtle-glow':
        return null; // The glow effect is applied to the entire button
      case 'floating-badge':
        return (
          <div 
            className="absolute -right-0.5 top-1/2 -translate-y-1/2 h-4 w-5 sm:h-5 sm:w-6 md:h-6 md:w-7 flex items-center justify-center rounded-sm shadow-lg z-10 border-2"
            style={{ 
              backgroundColor: lightenColor(theme.color, 0.4),
              borderColor: darkenColor(theme.color, 0.2),
              color: darkenColor(theme.color, 0.4),
              boxShadow: `0 2px 4px rgba(0,0,0,0.2)`
            }}
          >
            <span 
              className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-center leading-none"
              style={{ 
                letterSpacing: '0.05px',
                color: darkenColor(theme.color, 0.4)
              }}
            >
              {/* Mobile gets compact "D", tablet/desktop get "DAY" */}
              <span className="block sm:hidden">D</span>
              <span className="hidden sm:block md:block">DAY</span>
            </span>
          </div>
        );
      case 'inverted':
        return null; // Handled by different styling
      default:
        return null;
    }
  };

  const getSpecialButtonClass = (day: DayOfWeek) => {
    const isToday = day === currentDay;
    const theme = DAY_THEMES[day];
    
    if (isToday && dayIndicatorStyle === 'subtle-glow') {
      return 'subtle-glow';
    }
    return '';
  };

  const getSpecialButtonStyle = (day: DayOfWeek) => {
    const isToday = day === currentDay;
    const theme = DAY_THEMES[day];
    
    if (isToday && dayIndicatorStyle === 'subtle-glow') {
      return {
        '--day-color': theme.color,
        '--day-color-alpha': `${theme.color}80`
      } as React.CSSProperties;
    }
    
    if (isToday && dayIndicatorStyle === 'inverted') {
      return {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: theme.color,
        color: theme.color,
        fontWeight: 'bold' as const,
        boxShadow: `0 2px 8px ${theme.color}40`,
        borderWidth: '2px'
      };
    }
    
    return {};
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-lg rounded-xl mx-4 mb-4">
      {visibleDays.map((day) => {
        const specialClass = getSpecialButtonClass(day);
        const specialStyle = getSpecialButtonStyle(day);
        const defaultStyle = Object.keys(specialStyle).length === 0 ? getButtonStyle(day) : {};
        
        return (
          <Button
            key={day}
            onClick={() => handleDayClick(day)}
            variant="outline"
            className={`flex-1 min-w-[80px] transition-all duration-300 hover:scale-105 hover:shadow-md relative overflow-visible pr-2.5 ${specialClass}`}
            style={{...defaultStyle, ...specialStyle}}
          >
            {day.slice(0, 3)}
            {dayIndicatorStyle !== 'inverted' && dayIndicatorStyle !== 'subtle-glow' && renderTodayIndicator(day)}
          </Button>
        );
      })}
    </div>
  );
};
