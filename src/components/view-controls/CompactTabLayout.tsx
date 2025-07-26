
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, Volume2, Palette, Settings } from 'lucide-react';
import { DayOfWeek, LayoutMode, DAY_THEMES } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';
import { LanguageSection } from './LanguageSection';
import { AudioSection } from './AudioSection';
import { ThemeToggleSection } from './ThemeToggleSection';
import { ContrastSection } from './ContrastSection';
import { LayoutModeSection } from './LayoutModeSection';
import { DayIndicatorSection } from './DayIndicatorSection';
import { FontSelectionSection } from '@/components/options/FontSelectionSection';

interface CompactTabLayoutProps {
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
}

export const CompactTabLayout: React.FC<CompactTabLayoutProps> = (props) => {
  const { selectedDay } = props;
  const theme = DAY_THEMES[selectedDay];

  return (
    <Tabs defaultValue="display" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-4">
        <TabsTrigger value="display" className="flex items-center gap-1">
          <LayoutGrid className="w-3 h-3" />
          <span className="text-xs">Display</span>
        </TabsTrigger>
        <TabsTrigger value="audio" className="flex items-center gap-1">
          <Volume2 className="w-3 h-3" />
          <span className="text-xs">Audio</span>
        </TabsTrigger>
        <TabsTrigger value="theme" className="flex items-center gap-1">
          <Palette className="w-3 h-3" />
          <span className="text-xs">Theme</span>
        </TabsTrigger>
        <TabsTrigger value="more" className="flex items-center gap-1">
          <Settings className="w-3 h-3" />
          <span className="text-xs">More</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="display" className="space-y-4 mt-0">
        {/* Display Mode Layout Section - styled exactly like full view */}
        <div className="space-y-3 p-4 rounded-lg" style={{ backgroundColor: theme.color }}>
          <LayoutModeSection
            selectedDay={props.selectedDay}
            selectedLayout={props.selectedLayout}
            onLayoutChange={props.onLayoutChange}
            showHizbulBahr={props.showHizbulBahr}
            onHizbulBahrToggle={props.onHizbulBahrToggle}
          />
        </div>
        
        {!props.showHizbulBahr && (
          <div 
            className="p-4 rounded-lg border-3" 
            style={{ 
              backgroundColor: `${theme.color}20`,
              borderColor: theme.color,
              borderWidth: '3px'
            }}
          >
            <DayIndicatorSection
              selectedDay={props.selectedDay}
              dayIndicatorStyle={props.dayIndicatorStyle}
              onDayIndicatorChange={props.onDayIndicatorChange}
            />
          </div>
        )}
      </TabsContent>

      <TabsContent value="audio" className="space-y-4 mt-0">
        <AudioSection
          selectedDay={props.selectedDay}
          audioEnabled={props.audioEnabled}
          onAudioToggle={props.onAudioToggle}
        />
        
        {/* Audio Update Notice */}
        <div 
          className="p-4 rounded-lg border-2 text-center"
          style={{ 
            backgroundColor: `${theme.color}10`,
            borderColor: `${theme.color}40`,
            color: theme.color
          }}
        >
          <div className="text-sm font-medium mb-1">Audio Updates in Progress</div>
          <div className="text-xs opacity-80 leading-relaxed">
            We're currently updating our audio library to provide you with the best recitation experience. Please check back soon.
          </div>
        </div>
      </TabsContent>

      <TabsContent value="theme" className="space-y-4 mt-0">
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

        {/* Copyright Section at bottom of theme tab */}
        <div 
          className="p-4 rounded-lg border-3 text-center text-xs font-medium leading-relaxed"
          style={{ 
            backgroundColor: `${theme.color}20`,
            borderColor: theme.color,
            borderWidth: '3px',
            color: theme.color
          }}
        >
          <div>© 2026 Munājāat Companion</div>
          <div>by Simtech W. All rights reserved.</div>
        </div>
      </TabsContent>

      <TabsContent value="more" className="space-y-4 mt-0">
        <LanguageSection
          selectedDay={props.selectedDay}
          arabicVisible={props.arabicVisible}
          englishVisible={props.englishVisible}
          onArabicToggle={props.onArabicToggle}
          onEnglishToggle={props.onEnglishToggle}
        />

        {(props.arabicVisible || props.englishVisible) && props.onArabicFontToggle && props.onEnglishFontToggle && (
          <div 
            className="p-4 rounded-lg border-3" 
            style={{ 
              backgroundColor: `${theme.color}15`, 
              borderColor: theme.color,
              borderWidth: '3px'
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
        )}
      </TabsContent>
    </Tabs>
  );
};
