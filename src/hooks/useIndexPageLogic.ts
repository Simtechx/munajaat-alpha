
import { useEffect, useCallback, useMemo } from 'react';
import { DayOfWeek } from '@/types';
import { useDataFetcher } from '@/hooks/useDataFetcher';
import { useAppState } from '@/hooks/useAppState';
import { useToast } from '@/hooks/use-toast';
import { initializeCustomFonts } from '@/utils/customFonts';

export const useIndexPageLogic = () => {
  const appStateHook = useAppState();
  const { data, loading, error } = useDataFetcher();
  const { toast } = useToast();

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

  const handleDayChange = useCallback((day: DayOfWeek) => {
    console.log('handleDayChange called with:', day);
    appStateHook.setSelectedDay(day);
    appStateHook.setCompletedDays(prev => new Set([...prev, day]));
    appStateHook.setShowHizbulBahr(false);
    appStateHook.setIsPlaying(false);
    appStateHook.setCurrentAudioIndex(0);
    toast({
      title: `Switched to ${day}`,
      description: `Now viewing ${day}'s spiritual journey`,
    });
  }, [appStateHook, toast]);

  const handleHizbulBahrToggle = useCallback(() => {
    appStateHook.setShowHizbulBahr(!appStateHook.showHizbulBahr);
    appStateHook.setIsPlaying(false);
    appStateHook.setCurrentAudioIndex(0);
    if (!appStateHook.showHizbulBahr) {
      toast({
        title: "Hizbul Bahr",
        description: "The Litany of the Sea - Special spiritual protection",
      });
    } else {
      toast({
        title: "Munājāat Companion",
        description: "A Weekly Journey of Divine Invocations",
      });
    }
  }, [appStateHook, toast]);

  const handleViewModeToggle = useCallback(() => {
    appStateHook.setViewMode(appStateHook.viewMode === 'still' ? 'slide' : 'still');
  }, [appStateHook]);

  const handleAudioPlayPause = useCallback(() => {
    console.log('handleAudioPlayPause called, current isPlaying:', appStateHook.isPlaying);
    appStateHook.setIsPlaying(!appStateHook.isPlaying);
  }, [appStateHook]);

  const handleAudioNext = useCallback(() => {
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
  }, [data, appStateHook]);

  const handleBlockSelect = useCallback((index: number) => {
    console.log('handleBlockSelect called with index:', index);
    appStateHook.setCurrentAudioIndex(index);
  }, [appStateHook]);

  const handleAudioReset = useCallback(() => {
    console.log('handleAudioReset called');
    appStateHook.setCurrentAudioIndex(0);
    appStateHook.setIsPlaying(false);
  }, [appStateHook]);

  const handleDayButtonsToggle = useCallback(() => {
    const newVisibility = !appStateHook.dayButtonsVisible;
    console.log('handleDayButtonsToggle called, changing from', appStateHook.dayButtonsVisible, 'to', newVisibility);
    appStateHook.setDayButtonsVisible(newVisibility);
    toast({
      title: newVisibility ? "Day Navigation Shown" : "Day Navigation Hidden",
      description: newVisibility ? "Day buttons are now visible" : "Day buttons are now hidden",
    });
  }, [appStateHook, toast]);

  const handleArabicFontChange = useCallback((font: string) => {
    console.log('handleArabicFontChange called with:', font);
    appStateHook.setArabicFont(font);
    toast({
      title: "Arabic Font Changed",
      description: `Switched to ${font}`,
    });
  }, [appStateHook, toast]);

  const handleEnglishFontChange = useCallback((font: string) => {
    console.log('handleEnglishFontChange called with:', font);
    appStateHook.setEnglishFont(font);
    toast({
      title: "English Font Changed", 
      description: `Switched to ${font}`,
    });
  }, [appStateHook, toast]);

  const handleAudioModeToggle = useCallback(() => {
    const newMode = appStateHook.audioMode === 'block' ? 'all' : 'block';
    console.log('handleAudioModeToggle called, changing from', appStateHook.audioMode, 'to', newMode);
    appStateHook.setAudioMode(newMode);
    toast({
      title: `Audio Mode: ${newMode === 'all' ? 'Play All' : 'Single Block'}`,
      description: newMode === 'all' ? 'Will play all blocks continuously' : 'Will play current block only',
    });
  }, [appStateHook, toast]);

  // Memoize handlers object to prevent unnecessary re-renders
  const handlers = useMemo(() => ({
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
  }), [
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
  ]);

  return {
    appState: appStateHook,
    data,
    loading,
    error,
    handlers
  };
};
