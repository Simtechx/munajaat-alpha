
import React from 'react';
import { ClassicLayout } from '@/components/layouts/ClassicLayout';
import { DualLayout } from '@/components/layouts/DualLayout';
import { CarouselLayout } from '@/components/layouts/CarouselLayout';
import { HizbulBahr } from '@/components/HizbulBahr';
import { DayOfWeek, LayoutMode, DisplayLanguage } from '@/types';
import { getFontClassName } from '@/utils/fontUtils';

interface LayoutRendererProps {
  selectedLayout: LayoutMode;
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  isPlaying: boolean;
  currentAudioIndex: number;
  onAudioPlayPause: () => void;
  onAudioNext: () => void;
  onAudioReset: () => void;
  onBlockSelect: (index: number) => void;
  content: any;
  showHizbulBahr: boolean;
  arabicFont?: string;
  englishFont?: string;
}

export const LayoutRenderer: React.FC<LayoutRendererProps> = ({
  selectedLayout,
  selectedDay,
  arabicVisible,
  englishVisible,
  audioEnabled,
  isPlaying,
  currentAudioIndex,
  onAudioPlayPause,
  onAudioNext,
  onAudioReset,
  onBlockSelect,
  content,
  showHizbulBahr,
  arabicFont = 'indopak',
  englishFont = 'poppins'
}) => {
  // Convert visibility flags to displayLanguage
  const getDisplayLanguage = (): DisplayLanguage => {
    if (arabicVisible && englishVisible) return 'both';
    if (arabicVisible) return 'arabic';
    if (englishVisible) return 'english';
    return 'both'; // fallback
  };

  const displayLanguage = getDisplayLanguage();
  const arabicFontClass = getFontClassName('arabic', arabicFont);
  const englishFontClass = getFontClassName('english', englishFont);

  if (showHizbulBahr) {
    return (
      <HizbulBahr
        selectedDay={selectedDay}
        arabicVisible={arabicVisible}
        englishVisible={englishVisible}
        arabicFont={arabicFont}
        englishFont={englishFont}
      />
    );
  }

  const commonProps = {
    selectedDay,
    content,
    displayLanguage,
    arabicFontClass,
    englishFontClass
  };

  switch (selectedLayout) {
    case 'Classic':
      return (
        <ClassicLayout 
          {...commonProps}
          arabicVisible={arabicVisible}
          englishVisible={englishVisible}
          audioEnabled={audioEnabled}
          isPlaying={isPlaying}
          currentAudioIndex={currentAudioIndex}
          onAudioPlayPause={onAudioPlayPause}
          onAudioNext={onAudioNext}
          onAudioReset={onAudioReset}
          onBlockSelect={onBlockSelect}
        />
      );
    case 'Dual':
      return (
        <DualLayout 
          {...commonProps}
          audioEnabled={audioEnabled}
          currentAudioIndex={currentAudioIndex}
          isPlaying={isPlaying}
          onBlockSelect={onBlockSelect}
          onAudioPlayPause={onAudioPlayPause}
        />
      );
    case 'Carousel':
      return (
        <CarouselLayout 
          {...commonProps}
          audioEnabled={audioEnabled}
          currentAudioIndex={currentAudioIndex}
          isPlaying={isPlaying}
          onBlockSelect={onBlockSelect}
          onAudioPlayPause={onAudioPlayPause}
        />
      );
    default:
      return (
        <ClassicLayout 
          {...commonProps}
          arabicVisible={arabicVisible}
          englishVisible={englishVisible}
          audioEnabled={audioEnabled}
          isPlaying={isPlaying}
          currentAudioIndex={currentAudioIndex}
          onAudioPlayPause={onAudioPlayPause}
          onAudioNext={onAudioNext}
          onAudioReset={onAudioReset}
          onBlockSelect={onBlockSelect}
        />
      );
  }
};
