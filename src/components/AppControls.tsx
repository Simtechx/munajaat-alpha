
import React, { memo } from 'react';
import { DayNavigator } from '@/components/DayNavigator';
import { ViewControls } from '@/components/ViewControls';
import { Button } from '@/components/ui/button';
import { DayOfWeek, LayoutMode, DAY_THEMES } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface AppControlsProps {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  showHizbulBahr: boolean;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  audioMode: 'block' | 'all';
  isPlaying: boolean;
  completedDays: Set<DayOfWeek>;
  viewMode: 'still' | 'slide';
  onDayChange: (day: DayOfWeek) => void;
  onLayoutChange: (layout: LayoutMode) => void;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
  onAudioToggle: () => void;
  onAudioPlayPause: () => void;
  onAudioNext: () => void;
  onAudioReset: () => void;
  onContinuousModeToggle: () => void;
  backgroundOpacity: number;
  onBackgroundOpacityChange: (opacity: number) => void;
  onHizbulBahrToggle: () => void;
  selectedTheme: 'color' | 'neutral';
  onThemeChange: (theme: 'color' | 'neutral') => void;
  dayIndicatorStyle: DayIndicatorStyle;
  onDayIndicatorChange: (style: DayIndicatorStyle) => void;
  arabicFont: string;
  englishFont: string;
  onArabicFontToggle: (font: string) => void;
  onEnglishFontToggle: (font: string) => void;
  dayButtonsVisible?: boolean;
  onDayButtonsToggle?: () => void;
}

export const AppControls: React.FC<AppControlsProps> = memo(({
  selectedDay,
  selectedLayout,
  showHizbulBahr,
  arabicVisible,
  englishVisible,
  audioEnabled,
  audioMode,
  isPlaying,
  completedDays,
  viewMode,
  onDayChange,
  onLayoutChange,
  onArabicToggle,
  onEnglishToggle,
  onAudioToggle,
  onAudioPlayPause,
  onAudioNext,
  onAudioReset,
  onContinuousModeToggle,
  backgroundOpacity,
  onBackgroundOpacityChange,
  onHizbulBahrToggle,
  selectedTheme,
  onThemeChange,
  dayIndicatorStyle,
  onDayIndicatorChange,
  arabicFont,
  englishFont,
  onArabicFontToggle,
  onEnglishFontToggle,
  dayButtonsVisible = true,
  onDayButtonsToggle,
}) => {

  return (
    <div className="space-y-4">
      {/* Day Navigation - Only show when not in Hizbul Bahr mode AND when dayButtonsVisible is true */}
      {!showHizbulBahr && dayButtonsVisible && (
        <DayNavigator
          selectedDay={selectedDay}
          onDayChange={onDayChange}
          completedDays={completedDays}
          dayIndicatorStyle={dayIndicatorStyle}
        />
      )}

      {/* Day Badge - positioned below day navigation buttons */}
      {!showHizbulBahr && (
        <div className="text-center">
          <button
            onClick={onDayButtonsToggle}
            className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
            style={{ 
              borderColor: `${DAY_THEMES[selectedDay].color}40`,
              boxShadow: `0 4px 12px ${DAY_THEMES[selectedDay].color}20, 0 2px 4px rgba(0,0,0,0.1)`,
              color: DAY_THEMES[selectedDay].color
            }}
          >
            Du'ās for {selectedDay}
          </button>
        </div>
      )}

    </div>
  );
});
