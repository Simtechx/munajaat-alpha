import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface BackgroundLayersProps {
  selectedDay: DayOfWeek;
  selectedTheme: 'color' | 'neutral';
  backgroundOpacity: number;
}

export const BackgroundLayers: React.FC<BackgroundLayersProps> = ({
  selectedDay,
  selectedTheme,
  backgroundOpacity
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <>
      {/* Base Background Layer - Theme Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: selectedTheme === 'neutral' 
            ? `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`
            : `linear-gradient(135deg, ${theme.background} 0%, ${theme.gradient} 100%)`
        }}
      />
      
      {/* Background Image Layer */}
      {backgroundOpacity > 0 && (
        <div 
          className="fixed inset-0 z-10 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
          style={{
            backgroundImage: `url('/lovable-uploads/a469b1ff-e447-400a-a8f1-bf6f57f28201.png')`,
            opacity: backgroundOpacity * 0.1
          }}
        />
      )}
    </>
  );
};