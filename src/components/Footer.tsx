
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Volume2, VolumeX } from 'lucide-react';
import { DayOfWeek, LayoutMode } from '@/types';
import { BackToTopButton } from '@/components/BackToTopButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { ViewControls } from '@/components/ViewControls';
import { DayIndicatorStyle } from '@/hooks/useAppState';

interface FooterProps {
  selectedDay: DayOfWeek;
  viewMode: 'still' | 'slide';
  onViewModeToggle: () => void;
  selectedLayout: LayoutMode;
  onLayoutChange: (layout: LayoutMode) => void;
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

export const Footer: React.FC<FooterProps> = ({
  selectedDay,
  viewMode,
  onViewModeToggle,
  selectedLayout,
  onLayoutChange,
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
  selectedTheme,
  onThemeChange,
  dayIndicatorStyle,
  onDayIndicatorChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left side - Settings and Explore/Fold button */}
          <div className="flex items-center gap-2">
            <ViewControls
              selectedLayout={selectedLayout}
              onLayoutChange={onLayoutChange}
              selectedDay={selectedDay}
              arabicVisible={arabicVisible}
              englishVisible={englishVisible}
              audioEnabled={audioEnabled}
              onArabicToggle={onArabicToggle}
              onEnglishToggle={onEnglishToggle}
              onAudioToggle={onAudioToggle}
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
            />
            

            <Button
              onClick={onAudioToggle}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4" />
                  {!isMobile && <span>Audio On</span>}
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  {!isMobile && <span>Audio Off</span>}
                </>
              )}
            </Button>
          </div>
          
          {/* Copyright text in the center */}
          {!isMobile ? (
            <div className="text-xs text-gray-500">
              © 2026 Munājāat.Com by Simtech W. All rights reserved.
            </div>
          ) : (
            <div className="text-xs text-gray-500">
              © 2026 Munājāat.com
            </div>
          )}
          
          {/* Show/Hide and Back to Top buttons on the right */}
          <div className="flex items-center gap-2">
            <Button
              onClick={onViewModeToggle}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              {viewMode === 'slide' ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  {!isMobile && <span>Hide</span>}
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  {!isMobile && <span>Show</span>}
                </>
              )}
            </Button>
            <BackToTopButton selectedDay={selectedDay} />
          </div>
        </div>
      </div>
    </footer>
  );
};
