
import React from 'react';
import { Button } from '@/components/ui/button';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface ErrorScreenProps {
  selectedDay: DayOfWeek;
  error: string;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ selectedDay, error }) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-md">
        <p className="text-lg text-red-600 mb-4">Unable to load content</p>
        <p className="text-sm text-gray-600">{error}</p>
        <Button 
          onClick={() => window.location.reload()} 
          className="mt-4"
          style={{ backgroundColor: theme.color }}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};
