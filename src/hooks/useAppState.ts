
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { DayOfWeek, LayoutMode } from '@/types';
import { getCurrentDay } from '@/utils/dateUtils';
import { isValidArabicFont, isValidEnglishFont } from '@/utils/fontUtils';

export type DayIndicatorStyle = 
  | 'corner-dot-ring' 
  | 'subtle-glow'
  | 'floating-badge'
  | 'inverted';

console.log('useAppState module loading - React version:', React?.version);
console.log('useState function:', useState);

export const useAppState = () => {
  console.log('useAppState hook called');
  
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(getCurrentDay());
  console.log('useState worked for selectedDay');
  
  const [selectedLayout, setSelectedLayout] = useState<LayoutMode>('Classic');
  const [completedDays, setCompletedDays] = useState<Set<DayOfWeek>>(new Set());
  const [showHizbulBahr, setShowHizbulBahr] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showPublisher, setShowPublisher] = useState(false);
  const [arabicVisible, setArabicVisible] = useState(true);
  const [englishVisible, setEnglishVisible] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioMode, setAudioMode] = useState<'block' | 'all'>('block');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [viewMode, setViewMode] = useState<'still' | 'slide'>('slide');
  const [dayButtonsVisible, setDayButtonsVisible] = useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = useState(3);
  const [selectedTheme, setSelectedTheme] = useState<'color' | 'neutral'>('color');
  const [dayIndicatorStyle, setDayIndicatorStyle] = useState<DayIndicatorStyle>('floating-badge');
  const [arabicFont, setArabicFont] = useState('indopak');
  const [englishFont, setEnglishFont] = useState('poppins');

  useEffect(() => {
    // Load persisted state with proper validation
    const savedLayout = localStorage.getItem('selectedLayout') as LayoutMode;
    const savedDay = localStorage.getItem('selectedDay') as DayOfWeek;
    const savedCompleted = localStorage.getItem('completedDays');
    const savedArabic = localStorage.getItem('arabicVisible');
    const savedEnglish = localStorage.getItem('englishVisible');
    const savedAudioEnabled = localStorage.getItem('audioEnabled');
    const savedAudioMode = localStorage.getItem('audioMode') as 'block' | 'all';
    const savedAnimationEnabled = localStorage.getItem('animationEnabled');
    const savedViewMode = localStorage.getItem('viewMode') as 'still' | 'slide';
    const savedDayButtonsVisible = localStorage.getItem('dayButtonsVisible');
    const savedBackgroundOpacity = localStorage.getItem('backgroundOpacity');
    const savedSelectedTheme = localStorage.getItem('selectedTheme') as 'color' | 'neutral';
    const savedDayIndicatorStyle = localStorage.getItem('dayIndicatorStyle') as DayIndicatorStyle;
    const savedArabicFont = localStorage.getItem('arabicFont');
    const savedEnglishFont = localStorage.getItem('englishFont');
    
    if (savedLayout) setSelectedLayout(savedLayout);
    if (savedDay) setSelectedDay(savedDay);
    if (savedCompleted) setCompletedDays(new Set(JSON.parse(savedCompleted)));
    if (savedArabic !== null) setArabicVisible(JSON.parse(savedArabic));
    if (savedEnglish !== null) setEnglishVisible(JSON.parse(savedEnglish));
    if (savedAudioEnabled !== null) setAudioEnabled(JSON.parse(savedAudioEnabled));
    if (savedAudioMode) setAudioMode(savedAudioMode);
    if (savedAnimationEnabled !== null) setAnimationEnabled(JSON.parse(savedAnimationEnabled));
    if (savedViewMode) setViewMode(savedViewMode);
    if (savedDayButtonsVisible !== null) setDayButtonsVisible(JSON.parse(savedDayButtonsVisible));
    if (savedBackgroundOpacity !== null) setBackgroundOpacity(Number(savedBackgroundOpacity));
    if (savedSelectedTheme) setSelectedTheme(savedSelectedTheme);
    if (savedDayIndicatorStyle) setDayIndicatorStyle(savedDayIndicatorStyle);
    
    // Validate and set Arabic font - Default to indopak
    if (savedArabicFont && isValidArabicFont(savedArabicFont)) {
      setArabicFont(savedArabicFont);
    } else {
      setArabicFont('indopak'); // Force Indo-Pak as default
      localStorage.setItem('arabicFont', 'indopak'); // Update localStorage
    }
    
    // Validate and set English font
    if (savedEnglishFont && isValidEnglishFont(savedEnglishFont)) {
      setEnglishFont(savedEnglishFont);
    } else {
      setEnglishFont('poppins');
      localStorage.setItem('englishFont', 'poppins');
    }
  }, []);

  // Batch localStorage updates to reduce I/O operations
  useEffect(() => {
    const stateToSave = {
      selectedLayout,
      selectedDay,
      completedDays: [...completedDays],
      arabicVisible,
      englishVisible,
      audioEnabled,
      audioMode,
      animationEnabled,
      viewMode,
      dayButtonsVisible,
      backgroundOpacity,
      selectedTheme,
      dayIndicatorStyle,
      arabicFont: isValidArabicFont(arabicFont) ? arabicFont : 'indopak',
      englishFont: isValidEnglishFont(englishFont) ? englishFont : 'poppins'
    };

    // Batch all localStorage operations
    Object.entries(stateToSave).forEach(([key, value]) => {
      if (key === 'completedDays') {
        localStorage.setItem(key, JSON.stringify(value));
      } else if (typeof value === 'boolean') {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, String(value));
      }
    });
  }, [selectedLayout, selectedDay, completedDays, arabicVisible, englishVisible, audioEnabled, audioMode, animationEnabled, viewMode, dayButtonsVisible, backgroundOpacity, selectedTheme, dayIndicatorStyle, arabicFont, englishFont]);

  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(() => ({
    selectedDay,
    setSelectedDay,
    selectedLayout,
    setSelectedLayout,
    completedDays,
    setCompletedDays,
    showHizbulBahr,
    setShowHizbulBahr,
    showInfo,
    setShowInfo,
    showPublisher,
    setShowPublisher,
    arabicVisible,
    setArabicVisible,
    englishVisible,
    setEnglishVisible,
    audioEnabled,
    setAudioEnabled,
    audioMode,
    setAudioMode,
    isPlaying,
    setIsPlaying,
    currentAudioIndex,
    setCurrentAudioIndex,
    animationEnabled,
    setAnimationEnabled,
    viewMode,
    setViewMode,
    dayButtonsVisible,
    setDayButtonsVisible,
    backgroundOpacity,
    setBackgroundOpacity,
    selectedTheme,
    setSelectedTheme,
    dayIndicatorStyle,
    setDayIndicatorStyle,
    arabicFont,
    setArabicFont,
    englishFont,
    setEnglishFont,
  }), [
    selectedDay, selectedLayout, completedDays, showHizbulBahr, showInfo, showPublisher,
    arabicVisible, englishVisible, audioEnabled, audioMode, isPlaying, currentAudioIndex,
    animationEnabled, viewMode, dayButtonsVisible, backgroundOpacity, selectedTheme,
    dayIndicatorStyle, arabicFont, englishFont
  ]);
};
