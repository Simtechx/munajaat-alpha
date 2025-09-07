
import React, { useState, useEffect } from 'react';
import { DayOfWeek, LayoutMode } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';
import { ViewControlsSheet } from '@/components/view-controls/ViewControlsSheet';
import { useIsMobile } from '@/hooks/use-mobile';

interface ViewControlsProps {
  selectedLayout: LayoutMode;
  onLayoutChange: (layout: LayoutMode) => void;
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
  onAudioToggle: () => void;
  backgroundOpacity: number;
  onBackgroundOpacityChange: (opacity: number) => void;
  onArabicFontToggle?: (font: string) => void;
  onEnglishFontToggle?: (font: string) => void;
  arabicFont?: string;
  englishFont?: string;
  selectedTheme: 'color' | 'neutral';
  onThemeChange: (theme: 'color' | 'neutral') => void;
  dayIndicatorStyle: DayIndicatorStyle;
  onDayIndicatorChange: (style: DayIndicatorStyle) => void;
}

export const ViewControls: React.FC<ViewControlsProps> = ({
  selectedLayout,
  onLayoutChange,
  selectedDay,
  arabicVisible,
  englishVisible,
  audioEnabled,
  onArabicToggle,
  onEnglishToggle,
  onAudioToggle,
  backgroundOpacity,
  onBackgroundOpacityChange,
  onArabicFontToggle,
  onEnglishFontToggle,
  arabicFont = 'indopak',
  englishFont = 'poppins',
  selectedTheme,
  onThemeChange,
  dayIndicatorStyle,
  onDayIndicatorChange,
}) => {
  const isMobile = useIsMobile();
  const [isCompactView, setIsCompactView] = useState(false);
  const [isHybridView, setIsHybridView] = useState(false);

  // Effect to set hybrid view as default for mobile when isMobile state is determined
  useEffect(() => {
    if (isMobile !== undefined) {
      setIsHybridView(isMobile);
    }
  }, [isMobile]);

  const handleAudioToggle = () => {
    console.log('ViewControls - Audio toggle clicked, current state:', audioEnabled);
    onAudioToggle();
  };

  return (
    <ViewControlsSheet
      selectedLayout={selectedLayout}
      onLayoutChange={onLayoutChange}
      selectedDay={selectedDay}
      arabicVisible={arabicVisible}
      englishVisible={englishVisible}
      audioEnabled={audioEnabled}
      onArabicToggle={onArabicToggle}
      onEnglishToggle={onEnglishToggle}
      onAudioToggle={handleAudioToggle}
      backgroundOpacity={backgroundOpacity}
      onBackgroundOpacityChange={onBackgroundOpacityChange}
      onArabicFontToggle={onArabicFontToggle}
      onEnglishFontToggle={onEnglishFontToggle}
      arabicFont={arabicFont}
      englishFont={englishFont}
      selectedTheme={selectedTheme}
      onThemeChange={onThemeChange}
      dayIndicatorStyle={dayIndicatorStyle}
      onDayIndicatorChange={onDayIndicatorChange}
      isCompactView={isCompactView}
      onToggleCompactView={() => setIsCompactView(!isCompactView)}
      isHybridView={isHybridView}
      onToggleHybridView={() => setIsHybridView(!isHybridView)}
    />
  );
};
