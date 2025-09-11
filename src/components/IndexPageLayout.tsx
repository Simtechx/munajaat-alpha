
import React, { memo, useMemo, useEffect } from 'react';
import { AppHeader } from '@/components/AppHeader';
// DayNavigatorWithBadge removed - badge now in AppControls
import { Footer } from '@/components/Footer';
import { BackToTopButton } from '@/components/BackToTopButton';
import { InfoModal } from '@/components/InfoModal';
import { PublisherModal } from '@/components/PublisherModal';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { AudioControlsManager } from '@/components/audio/AudioControlsManager';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

import { DayOfWeek, LayoutMode } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface IndexPageLayoutProps {
  appState: {
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
    backgroundOpacity: number;
    selectedTheme: 'color' | 'neutral';
    dayIndicatorStyle: DayIndicatorStyle;
    showInfo: boolean;
    showPublisher: boolean;
    dayButtonsVisible: boolean;
    arabicFont: string;
    englishFont: string;
    setSelectedLayout: (layout: LayoutMode) => void;
    setArabicVisible: (visible: boolean) => void;
    setEnglishVisible: (visible: boolean) => void;
    setAudioEnabled: (enabled: boolean) => void;
    setAudioMode: (mode: 'block' | 'all') => void;
    setBackgroundOpacity: (opacity: number) => void;
    setSelectedTheme: (theme: 'color' | 'neutral') => void;
    setDayIndicatorStyle: (style: DayIndicatorStyle) => void;
    setShowInfo: (show: boolean) => void;
    setShowPublisher: (show: boolean) => void;
    setViewMode: (mode: 'still' | 'slide') => void;
    setDayButtonsVisible: (visible: boolean) => void;
    currentAudioIndex: number;
  };
  data: any;
  handlers: {
    handleDayChange: (day: DayOfWeek) => void;
    handleHizbulBahrToggle: () => void;
    handleViewModeToggle: () => void;
    handleAudioPlayPause: () => void;
    handleAudioNext: () => void;
    handleAudioReset: () => void;
    handleDayButtonsToggle: () => void;
    handleArabicFontChange: (font: string) => void;
    handleEnglishFontChange: (font: string) => void;
    handleAudioModeToggle: () => void;
    handleBlockSelect: (index: number) => void;
  };
}

const IndexPageLayoutComponent: React.FC<IndexPageLayoutProps> = ({
  appState,
  data,
  handlers
}) => {
  
  // Debug audio state
  useEffect(() => {
    console.log('Audio controls render - audioEnabled:', appState.audioEnabled, 'isPlaying:', appState.isPlaying);
  }, [appState.audioEnabled, appState.isPlaying]);

  // Memoize expensive calculations
  const totalBlocks = useMemo(() => {
    return data && !appState.showHizbulBahr && data[appState.selectedDay] 
      ? data[appState.selectedDay].Arabic.length 
      : 0;
  }, [data, appState.showHizbulBahr, appState.selectedDay]);

  return (
    <div className="min-h-screen relative">
      <OfflineIndicator />
      
      <BackgroundLayers 
        selectedDay={appState.selectedDay}
        selectedTheme={appState.selectedTheme}
        backgroundOpacity={appState.backgroundOpacity}
      />

      {/* Content Layer */}
      <div className="relative z-30">
        <AppHeader 
          selectedDay={appState.selectedDay}
          showHizbulBahr={appState.showHizbulBahr}
          onShowInfo={() => appState.setShowInfo(true)}
          onShowPublisher={() => appState.setShowPublisher(true)}
          onHizbulBahrToggle={handlers.handleHizbulBahrToggle}
          dayButtonsVisible={appState.dayButtonsVisible}
          onDayButtonsToggle={handlers.handleDayButtonsToggle}
          onDayChange={handlers.handleDayChange}
        />

        {/* DayNavigatorWithBadge removed - badge now in AppControls */}
        
        <ContentWrapper 
          appState={appState}
          data={data}
          handlers={handlers}
        />

        {/* Audio Controls - Above Footer */}
        <AudioControlsManager
          isVisible={appState.audioEnabled}
          isPlaying={appState.isPlaying}
          onPlayPause={handlers.handleAudioPlayPause}
          onNext={handlers.handleAudioNext}
          onReset={handlers.handleAudioReset}
          audioMode={appState.audioMode}
          onAudioModeToggle={handlers.handleAudioModeToggle}
          selectedDay={appState.selectedDay}
          currentAudioIndex={appState.currentAudioIndex}
          totalBlocks={totalBlocks}
        />

        <Footer
          selectedDay={appState.selectedDay}
          viewMode={appState.viewMode}
          onViewModeToggle={handlers.handleViewModeToggle}
          selectedLayout={appState.selectedLayout}
          onLayoutChange={appState.setSelectedLayout}
          arabicVisible={appState.arabicVisible}
          englishVisible={appState.englishVisible}
          audioEnabled={appState.audioEnabled}
          onArabicToggle={() => appState.setArabicVisible(!appState.arabicVisible)}
          onEnglishToggle={() => appState.setEnglishVisible(!appState.englishVisible)}
          onAudioToggle={() => appState.setAudioEnabled(!appState.audioEnabled)}
          backgroundOpacity={appState.backgroundOpacity}
          onBackgroundOpacityChange={appState.setBackgroundOpacity}
          onArabicFontToggle={handlers.handleArabicFontChange}
          onEnglishFontToggle={handlers.handleEnglishFontChange}
          arabicFont={appState.arabicFont}
          englishFont={appState.englishFont}
          selectedTheme={appState.selectedTheme}
          onThemeChange={appState.setSelectedTheme}
          dayIndicatorStyle={appState.dayIndicatorStyle}
          onDayIndicatorChange={appState.setDayIndicatorStyle}
        />
        
        <BackToTopButton selectedDay={appState.selectedDay} />
        
        <InfoModal
          isOpen={appState.showInfo}
          onClose={() => appState.setShowInfo(false)}
          selectedDay={appState.selectedDay}
        />
        
        <PublisherModal
          isOpen={appState.showPublisher}
          onClose={() => appState.setShowPublisher(false)}
          selectedDay={appState.selectedDay}
        />
        
        
      </div>
    </div>
  );
};

// Export memoized component to prevent unnecessary re-renders
export const IndexPageLayout = memo(IndexPageLayoutComponent);
