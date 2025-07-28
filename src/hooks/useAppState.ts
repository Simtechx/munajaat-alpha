
import { useState, useEffect } from 'react';
import { DayOfWeek, LayoutMode } from '@/types';
import { getCurrentDay } from '@/utils/dateUtils';
import { isValidArabicFont, isValidEnglishFont } from '@/utils/fontUtils';

export type DayIndicatorStyle = 
  | 'corner-dot-ring' 
  | 'subtle-glow'
  | 'floating-badge'
  | 'inverted';

export const useAppState = () => {
  console.log('🔍 useAppState: Starting hook execution');
  console.log('🔍 useAppState: useState function available?', typeof useState);
  
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('Sunday'); // Simplified initialization
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

  useEffect(() => {
    // Persist state with validation
    localStorage.setItem('selectedLayout', selectedLayout);
    localStorage.setItem('selectedDay', selectedDay);
    localStorage.setItem('completedDays', JSON.stringify([...completedDays]));
    localStorage.setItem('arabicVisible', JSON.stringify(arabicVisible));
    localStorage.setItem('englishVisible', JSON.stringify(englishVisible));
    localStorage.setItem('audioEnabled', JSON.stringify(audioEnabled));
    localStorage.setItem('audioMode', audioMode);
    localStorage.setItem('animationEnabled', JSON.stringify(animationEnabled));
    localStorage.setItem('viewMode', viewMode);
    localStorage.setItem('dayButtonsVisible', JSON.stringify(dayButtonsVisible));
    localStorage.setItem('backgroundOpacity', backgroundOpacity.toString());
    localStorage.setItem('selectedTheme', selectedTheme);
    localStorage.setItem('dayIndicatorStyle', dayIndicatorStyle);
    
    // Always save valid fonts
    if (isValidArabicFont(arabicFont)) {
      localStorage.setItem('arabicFont', arabicFont);
    }
    if (isValidEnglishFont(englishFont)) {
      localStorage.setItem('englishFont', englishFont);
    }
  }, [selectedLayout, selectedDay, completedDays, arabicVisible, englishVisible, audioEnabled, audioMode, animationEnabled, viewMode, dayButtonsVisible, backgroundOpacity, selectedTheme, dayIndicatorStyle, arabicFont, englishFont]);

  return {
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
  };
};
