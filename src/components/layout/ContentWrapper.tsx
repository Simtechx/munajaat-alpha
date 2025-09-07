import React from 'react';
import { AppControls } from '@/components/AppControls';
import { LayoutRenderer } from '@/components/LayoutRenderer';
import { DayOfWeek, LayoutMode } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface ContentWrapperProps {
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
    currentAudioIndex: number;
  };
  data: any;
  handlers: {
    handleDayChange: (day: DayOfWeek) => void;
    handleHizbulBahrToggle: () => void;
    handleAudioPlayPause: () => void;
    handleAudioNext: () => void;
    handleAudioReset: () => void;
    handleArabicFontChange: (font: string) => void;
    handleEnglishFontChange: (font: string) => void;
    handleBlockSelect: (index: number) => void;
    handleDayButtonsToggle: () => void;
  };
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  appState,
  data,
  handlers
}) => {
  return (
    <>
      {/* Controls - Sticky in slide mode with frosted glass */}
      <div className={appState.viewMode === 'slide' ? 'sticky top-0 z-40 bg-white/5 backdrop-blur-lg shadow-sm' : ''}>
        <main className="container mx-auto px-4 py-2">
          <AppControls
            selectedDay={appState.selectedDay}
            selectedLayout={appState.selectedLayout}
            showHizbulBahr={appState.showHizbulBahr}
            arabicVisible={appState.arabicVisible}
            englishVisible={appState.englishVisible}
            audioEnabled={appState.audioEnabled}
            audioMode={appState.audioMode}
            isPlaying={appState.isPlaying}
            completedDays={appState.completedDays}
            viewMode={appState.viewMode}
            onDayChange={handlers.handleDayChange}
            onLayoutChange={appState.setSelectedLayout}
            onArabicToggle={() => appState.setArabicVisible(!appState.arabicVisible)}
            onEnglishToggle={() => appState.setEnglishVisible(!appState.englishVisible)}
            onAudioToggle={() => appState.setAudioEnabled(!appState.audioEnabled)}
            onAudioPlayPause={handlers.handleAudioPlayPause}
            onAudioNext={handlers.handleAudioNext}
            onAudioReset={handlers.handleAudioReset}
            onContinuousModeToggle={() => appState.setAudioMode(appState.audioMode === 'block' ? 'all' : 'block')}
            backgroundOpacity={appState.backgroundOpacity}
            onBackgroundOpacityChange={appState.setBackgroundOpacity}
            onHizbulBahrToggle={handlers.handleHizbulBahrToggle}
            selectedTheme={appState.selectedTheme}
            onThemeChange={appState.setSelectedTheme}
            dayIndicatorStyle={appState.dayIndicatorStyle}
            onDayIndicatorChange={appState.setDayIndicatorStyle}
            arabicFont={appState.arabicFont}
            englishFont={appState.englishFont}
            onArabicFontToggle={handlers.handleArabicFontChange}
            onEnglishFontToggle={handlers.handleEnglishFontChange}
            dayButtonsVisible={appState.dayButtonsVisible}
            onDayButtonsToggle={handlers.handleDayButtonsToggle}
          />
        </main>
      </div>

      {/* Main Content - Add bottom padding when audio is enabled */}
      <div className={`pt-4 ${appState.audioEnabled ? 'pb-24' : ''}`}>
        <LayoutRenderer
          selectedLayout={appState.selectedLayout}
          selectedDay={appState.selectedDay}
          arabicVisible={appState.arabicVisible}
          englishVisible={appState.englishVisible}
          audioEnabled={appState.audioEnabled}
          isPlaying={appState.isPlaying}
          currentAudioIndex={appState.currentAudioIndex}
          onAudioPlayPause={handlers.handleAudioPlayPause}
          onAudioNext={handlers.handleAudioNext}
          onAudioReset={handlers.handleAudioReset}
          onBlockSelect={handlers.handleBlockSelect}
          content={data ? data[appState.selectedDay] : null}
          showHizbulBahr={appState.showHizbulBahr}
          arabicFont={appState.arabicFont}
          englishFont={appState.englishFont}
        />
      </div>
    </>
  );
};