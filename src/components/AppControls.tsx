
import React from 'react';
import { DayNavigator } from '@/components/DayNavigator';
import { ViewControls } from '@/components/ViewControls';
import { DayOfWeek, LayoutMode } from '@/types';
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
}

export const AppControls: React.FC<AppControlsProps> = ({
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


    </div>
  );
};
