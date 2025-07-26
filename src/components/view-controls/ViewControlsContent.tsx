
import React, { useState } from 'react';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';
import { LanguageSection } from './LanguageSection';
import { AudioSection } from './AudioSection';
import { ContrastSection } from './ContrastSection';
import { FontSelectionSection } from '@/components/options/FontSelectionSection';
import { ThemeToggleSection } from './ThemeToggleSection';
import { DayIndicatorSection } from './DayIndicatorSection';
import { CompactTabLayout } from './CompactTabLayout';
import { HybridTabLayout } from './HybridTabLayout';

interface ViewControlsContentProps {
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
  showHizbulBahr: boolean;
  onHizbulBahrToggle: () => void;
  selectedTheme: 'color' | 'neutral';
  onThemeChange: (theme: 'color' | 'neutral') => void;
  dayIndicatorStyle: DayIndicatorStyle;
  onDayIndicatorChange: (style: DayIndicatorStyle) => void;
  isCompactView: boolean;
  isHybridView: boolean;
  isMobile: boolean;
  effectiveViewMode: string;
}

export const ViewControlsContent: React.FC<ViewControlsContentProps> = ({
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
  showHizbulBahr,
  onHizbulBahrToggle,
  selectedTheme,
  onThemeChange,
  dayIndicatorStyle,
  onDayIndicatorChange,
  isCompactView,
  isHybridView,
  isMobile,
  effectiveViewMode,
}) => {
  const theme = DAY_THEMES[selectedDay];
  const [showAdvancedControls, setShowAdvancedControls] = useState(false);

  const handleDoubleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isWhiteSpace = target.classList.contains('sheet-background-area') || 
                        (target.tagName === 'DIV' && !target.closest('button, select, input, label, [role="switch"], [role="slider"], [role="tab"], [role="tablist"]'));
    
    if (isWhiteSpace) {
      setShowAdvancedControls(!showAdvancedControls);
    }
  };

  const hybridTabProps = {
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
    arabicFont,
    englishFont,
    showHizbulBahr,
    onHizbulBahrToggle,
    selectedTheme,
    onThemeChange,
    dayIndicatorStyle,
    onDayIndicatorChange,
    isMobile,
  };

  const compactTabProps = {
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
    arabicFont,
    englishFont,
    showHizbulBahr,
    onHizbulBahrToggle,
    selectedTheme,
    onThemeChange,
    dayIndicatorStyle,
    onDayIndicatorChange,
  };

  // Dynamic padding based on mobile and view mode
  const getPadding = () => {
    if (isMobile && effectiveViewMode === 'hybrid') return 'p-2';
    if (isMobile) return 'p-3';
    return 'p-6';
  };

  const getSpacing = () => {
    if (isMobile && effectiveViewMode === 'hybrid') return '';
    if (effectiveViewMode === 'compact' || effectiveViewMode === 'hybrid') return '';
    return 'space-y-4';
  };

  return (
    <div 
      className={`sheet-background-area ${getPadding()} ${getSpacing()}`}
      onDoubleClick={handleDoubleClick}
    >
      {effectiveViewMode === 'hybrid' ? (
        <HybridTabLayout {...hybridTabProps} />
      ) : effectiveViewMode === 'compact' ? (
        <CompactTabLayout {...compactTabProps} />
      ) : (
        // Normal view
        <>
          <LanguageSection
            selectedDay={selectedDay}
            arabicVisible={arabicVisible}
            englishVisible={englishVisible}
            onArabicToggle={onArabicToggle}
            onEnglishToggle={onEnglishToggle}
          />

          {(arabicVisible || englishVisible) && onArabicFontToggle && onEnglishFontToggle && (
            <div 
              className="p-4 rounded-lg border-3 sheet-background-area" 
              style={{ 
                backgroundColor: `${theme.color}15`, 
                borderColor: theme.color,
                borderWidth: '3px'
              }}
            >
              <FontSelectionSection
                selectedDay={selectedDay}
                arabicVisible={arabicVisible}
                englishVisible={englishVisible}
                arabicFont={arabicFont}
                englishFont={englishFont}
                onArabicFontToggle={onArabicFontToggle}
                onEnglishFontToggle={onEnglishFontToggle}
              />
            </div>
          )}

          {showAdvancedControls && !showHizbulBahr && (
            <div 
              className="p-4 rounded-lg border-3 sheet-background-area" 
              style={{ 
                backgroundColor: `${theme.color}20`,
                borderColor: theme.color,
                borderWidth: '3px'
              }}
            >
              <DayIndicatorSection
                selectedDay={selectedDay}
                dayIndicatorStyle={dayIndicatorStyle}
                onDayIndicatorChange={onDayIndicatorChange}
              />
            </div>
          )}

          {showAdvancedControls && (
            <ContrastSection
              selectedDay={selectedDay}
              backgroundOpacity={backgroundOpacity}
              onBackgroundOpacityChange={onBackgroundOpacityChange}
              isNeutral={selectedTheme === 'neutral'}
            />
          )}

          {showAdvancedControls && (
            <ThemeToggleSection
              selectedDay={selectedDay}
              selectedTheme={selectedTheme}
              onThemeChange={onThemeChange}
            />
          )}

          {showAdvancedControls && (
            <AudioSection
              selectedDay={selectedDay}
              audioEnabled={audioEnabled}
              onAudioToggle={onAudioToggle}
            />
          )}
        </>
      )}
    </div>
  );
};
