
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, Languages, Type, Volume2, Palette } from 'lucide-react';
import { DayOfWeek, LayoutMode, DAY_THEMES } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';
import { LanguageSection } from './LanguageSection';
import { AudioSection } from './AudioSection';
import { ThemeToggleSection } from './ThemeToggleSection';
import { ContrastSection } from './ContrastSection';
import { LayoutModeSection } from './LayoutModeSection';
import { DayIndicatorSection } from './DayIndicatorSection';
import { FontSelectionSection } from '@/components/options/FontSelectionSection';
import { Button } from '@/components/ui/button';

interface HybridTabLayoutProps {
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
  isMobile: boolean;
  showAdvancedControls?: boolean;
  onDoubleClick?: (e: React.MouseEvent) => void;
}

export const HybridTabLayout: React.FC<HybridTabLayoutProps> = (props) => {
  const { selectedDay, isMobile } = props;
  const theme = DAY_THEMES[selectedDay];
  const [showAdvancedControls, setShowAdvancedControls] = useState(false);

  // Compact spacing for mobile
  const compactClass = isMobile ? 'space-y-2' : 'space-y-3';
  const compactPadding = isMobile ? 'p-2' : 'p-3';
  const compactTabPadding = isMobile ? 'px-2 py-1' : 'px-3 py-1.5';

  const handleDoubleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isWhiteSpace = target.classList.contains('tab-background-area') || 
                        (target.tagName === 'DIV' && !target.closest('button, select, input, label, [role="switch"], [role="slider"], [role="tab"], [role="tablist"]'));
    
    if (isWhiteSpace) {
      setShowAdvancedControls(!showAdvancedControls);
    }
  };

  const totalCols = showAdvancedControls ? 5 : 3;

  return (
    <div onDoubleClick={handleDoubleClick} className="tab-background-area">
      <Tabs defaultValue="display" className="w-full">
        <TabsList className={`grid w-full grid-cols-${totalCols} mb-2 h-8 ${isMobile ? 'text-xs' : ''}`}>
          <TabsTrigger value="display" className={`flex items-center gap-1 ${compactTabPadding}`}>
            <LayoutGrid className="w-3 h-3" />
            <span className={isMobile ? 'text-xs' : 'text-xs'}>Display</span>
          </TabsTrigger>
          <TabsTrigger value="language" className={`flex items-center gap-1 ${compactTabPadding}`}>
            <Languages className="w-3 h-3" />
            <span className={isMobile ? 'text-xs' : 'text-xs'}>Language</span>
          </TabsTrigger>
          <TabsTrigger value="fonts" className={`flex items-center gap-1 ${compactTabPadding}`}>
            <Type className="w-3 h-3" />
            <span className={isMobile ? 'text-xs' : 'text-xs'}>Fonts</span>
          </TabsTrigger>
          {showAdvancedControls && (
            <TabsTrigger value="audio" className={`flex items-center gap-1 ${compactTabPadding}`}>
              <Volume2 className="w-3 h-3" />
              <span className={isMobile ? 'text-xs' : 'text-xs'}>Audio</span>
            </TabsTrigger>
          )}
          {showAdvancedControls && (
            <TabsTrigger value="theme" className={`flex items-center gap-1 ${compactTabPadding}`}>
              <Palette className="w-3 h-3" />
              <span className={isMobile ? 'text-xs' : 'text-xs'}>Theme</span>
            </TabsTrigger>
          )}
        </TabsList>

      <TabsContent value="display" className={`${compactClass} mt-0`}>
        <div className={`${compactPadding} rounded-lg`} style={{ backgroundColor: theme.color }}>
          <LayoutModeSection
            selectedDay={props.selectedDay}
            selectedLayout={props.selectedLayout}
            onLayoutChange={props.onLayoutChange}
          />
        </div>
      </TabsContent>

      <TabsContent value="language" className={`${compactClass} mt-0`}>
        <LanguageSection
          selectedDay={props.selectedDay}
          arabicVisible={props.arabicVisible}
          englishVisible={props.englishVisible}
          onArabicToggle={props.onArabicToggle}
          onEnglishToggle={props.onEnglishToggle}
        />
      </TabsContent>

      <TabsContent value="fonts" className={`${compactClass} mt-0`}>
        {(props.arabicVisible || props.englishVisible) && props.onArabicFontToggle && props.onEnglishFontToggle ? (
          <div 
            className={`${compactPadding} rounded-lg border-2`}
            style={{ 
              backgroundColor: `${theme.color}15`, 
              borderColor: theme.color
            }}
          >
            <FontSelectionSection
              selectedDay={props.selectedDay}
              arabicVisible={props.arabicVisible}
              englishVisible={props.englishVisible}
              arabicFont={props.arabicFont || 'indopak'}
              englishFont={props.englishFont || 'poppins'}
              onArabicFontToggle={props.onArabicFontToggle}
              onEnglishFontToggle={props.onEnglishFontToggle}
            />
          </div>
        ) : (
          <div 
            className={`${compactPadding} rounded-lg border-2 text-center`}
            style={{ 
              backgroundColor: `${theme.color}10`,
              borderColor: `${theme.color}40`,
              color: theme.color
            }}
          >
            <div className="text-sm font-medium mb-1">Font Options</div>
            <div className="text-xs opacity-80">
              Enable a language to access font settings
            </div>
          </div>
        )}
      </TabsContent>

      {showAdvancedControls && (
        <TabsContent value="audio" className={`${compactClass} mt-0`}>
          <AudioSection
            selectedDay={props.selectedDay}
            audioEnabled={props.audioEnabled}
            onAudioToggle={props.onAudioToggle}
          />
        </TabsContent>
      )}

      {showAdvancedControls && (
        <TabsContent value="theme" className={`${compactClass} mt-0`}>
          <ThemeToggleSection
            selectedDay={props.selectedDay}
            selectedTheme={props.selectedTheme}
            onThemeChange={props.onThemeChange}
          />
          
          <ContrastSection
            selectedDay={props.selectedDay}
            backgroundOpacity={props.backgroundOpacity}
            onBackgroundOpacityChange={props.onBackgroundOpacityChange}
            isNeutral={props.selectedTheme === 'neutral'}
          />

          {/* Copyright - More compact for mobile */}
          <div 
            className={`${compactPadding} rounded-lg border-2 text-center ${isMobile ? 'text-xs' : 'text-xs'} font-medium leading-relaxed`}
            style={{ 
              backgroundColor: `${theme.color}20`,
              borderColor: theme.color,
              color: theme.color
            }}
          >
            <div>© 2026 Munājāat Companion</div>
            <div>by Simtech W. All rights reserved.</div>
          </div>

          {/* Day Indicator Section - moved below copyright as requested */}
          <div 
            className={`${compactPadding} rounded-lg border-2`}
            style={{ 
              backgroundColor: `${theme.color}20`,
              borderColor: theme.color
            }}
          >
            <DayIndicatorSection
              selectedDay={props.selectedDay}
              dayIndicatorStyle={props.dayIndicatorStyle}
              onDayIndicatorChange={props.onDayIndicatorChange}
            />
          </div>
        </TabsContent>
      )}
      </Tabs>
    </div>
  );
};
