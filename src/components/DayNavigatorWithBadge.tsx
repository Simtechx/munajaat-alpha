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
      {/* Day Badge - only the badge, day buttons are now in AppControls */}
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