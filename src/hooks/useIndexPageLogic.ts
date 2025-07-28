
import { useEffect } from 'react';
import { DayOfWeek } from '@/types';
import { useDataFetcher } from '@/hooks/useDataFetcher';
import { useAppState } from '@/hooks/useAppState';
import { initializeCustomFonts } from '@/utils/customFonts';

export const useIndexPageLogic = () => {
  const appStateHook = useAppState();
  const { data, loading, error } = useDataFetcher();

  // Initialize custom fonts on component mount
  useEffect(() => {
    const testFonts = async () => {
      try {
        await initializeCustomFonts();
        console.log('Font initialization completed - check individual font loading status above');
      } catch (error) {
        console.error('Font initialization failed:', error);
      }
    };
    testFonts();
  }, []);

  const handleDayChange = (day: DayOfWeek) => {
    console.log('handleDayChange called with:', day);
    appStateHook.setSelectedDay(day);
    appStateHook.setCompletedDays(prev => new Set([...prev, day]));
    appStateHook.setShowHizbulBahr(false);
    appStateHook.setIsPlaying(false);
    appStateHook.setCurrentAudioIndex(0);
  };

  const handleHizbulBahrToggle = () => {
    appStateHook.setShowHizbulBahr(!appStateHook.showHizbulBahr);
    appStateHook.setIsPlaying(false);
    appStateHook.setCurrentAudioIndex(0);
  };

  const handleViewModeToggle = () => {
    appStateHook.setViewMode(appStateHook.viewMode === 'still' ? 'slide' : 'still');
  };

  const handleAudioPlayPause = () => {
    console.log('handleAudioPlayPause called, current isPlaying:', appStateHook.isPlaying);
    appStateHook.setIsPlaying(!appStateHook.isPlaying);
  };

  const handleAudioNext = () => {
    if (!data || (!appStateHook.showHizbulBahr && !data[appStateHook.selectedDay])) return;
    
    const content = appStateHook.showHizbulBahr ? { Arabic: [''], English: [''] } : data[appStateHook.selectedDay];
    const maxIndex = content.Arabic.length - 1;
    
    if (appStateHook.currentAudioIndex < maxIndex) {
      appStateHook.setCurrentAudioIndex(prev => prev + 1);
    } else if (appStateHook.audioMode === 'all') {
      appStateHook.setCurrentAudioIndex(0);
    } else {
      appStateHook.setIsPlaying(false);
    }
  };

  const handleBlockSelect = (index: number) => {
    console.log('handleBlockSelect called with index:', index);
    appStateHook.setCurrentAudioIndex(index);
  };

  const handleAudioReset = () => {
    console.log('handleAudioReset called');
    appStateHook.setCurrentAudioIndex(0);
    appStateHook.setIsPlaying(false);
  };

  const handleDayButtonsToggle = () => {
    const newVisibility = !appStateHook.dayButtonsVisible;
    console.log('handleDayButtonsToggle called, changing from', appStateHook.dayButtonsVisible, 'to', newVisibility);
    appStateHook.setDayButtonsVisible(newVisibility);
  };

  const handleArabicFontChange = (font: string) => {
    console.log('handleArabicFontChange called with:', font);
    appStateHook.setArabicFont(font);
  };

  const handleEnglishFontChange = (font: string) => {
    console.log('handleEnglishFontChange called with:', font);
    appStateHook.setEnglishFont(font);
  };

  const handleAudioModeToggle = () => {
    const newMode = appStateHook.audioMode === 'block' ? 'all' : 'block';
    console.log('handleAudioModeToggle called, changing from', appStateHook.audioMode, 'to', newMode);
    appStateHook.setAudioMode(newMode);
  };

  return {
    appState: appStateHook,
    data,
    loading,
    error,
    handlers: {
      handleDayChange,
      handleHizbulBahrToggle,
      handleViewModeToggle,
      handleAudioPlayPause,
      handleAudioNext,
      handleAudioReset,
      handleDayButtonsToggle,
      handleArabicFontChange,
      handleEnglishFontChange,
      handleAudioModeToggle,
      handleBlockSelect,
    }
  };
};
