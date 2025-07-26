
import React from 'react';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface LoadingScreenProps {
  selectedDay: DayOfWeek;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <LoaderCircle className="w-8 h-8 animate-spin mx-auto mb-4" style={{ color: theme.color }} />
        <p className="text-lg text-gray-600">Loading spiritual content...</p>
      </div>
    </div>
  );
};
