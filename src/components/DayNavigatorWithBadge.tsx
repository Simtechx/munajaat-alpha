import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { Button } from '@/components/ui/button';

interface DayNavigatorWithBadgeProps {
  selectedDay: DayOfWeek;
  onDayChange: (day: DayOfWeek) => void;
  dayButtonsVisible: boolean;
  onDayButtonsToggle: () => void;
}

const DAYS: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DayNavigatorWithBadge: React.FC<DayNavigatorWithBadgeProps> = ({
  selectedDay,
  onDayChange,
  dayButtonsVisible,
  onDayButtonsToggle
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="text-center pb-4 px-4">
      {/* Day Buttons */}
      {dayButtonsVisible && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {DAYS.map((day) => (
            <Button
              key={day}
              onClick={() => onDayChange(day)}
              variant={selectedDay === day ? "default" : "outline"}
              size="sm"
              className={`transition-all duration-300 ${
                selectedDay === day 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
              style={selectedDay === day ? {
                backgroundColor: theme.color,
                borderColor: theme.color,
                color: 'white'
              } : undefined}
            >
              {day}
            </Button>
          ))}
        </div>
      )}

      {/* Day Badge - moved below day buttons */}
      <div className="mb-4">
        <button
          onClick={onDayButtonsToggle}
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          style={{ backgroundColor: theme.color, borderColor: theme.color }}
        >
          Du'ās for {selectedDay}
        </button>
      </div>
    </div>
  );
};