
import React, { useRef } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';
import { DayIndicatorStyle } from '@/hooks/useAppState';
import { ViewControlsHeader } from './ViewControlsHeader';
import { ViewControlsContent } from './ViewControlsContent';
import { useIsMobile } from '@/hooks/use-mobile';

interface ViewControlsSheetProps {
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
  onToggleCompactView: () => void;
  isHybridView: boolean;
  onToggleHybridView: () => void;
}

export const ViewControlsSheet: React.FC<ViewControlsSheetProps> = (props) => {
  const theme = DAY_THEMES[props.selectedDay];
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile();

  // Determine effective view mode - hybrid for mobile when isHybridView is true, normal otherwise
  const effectiveViewMode = props.isHybridView ? 'hybrid' : 'normal';

  // Helper function to get display name for layout
  const getLayoutDisplayName = (layout: LayoutMode): string => {
    if (layout === 'Carousel') return 'Swipe';
    return layout;
  };

  // Function to handle clicks on non-control areas
  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isNonControlArea = target.classList.contains('sheet-background-area') || 
                           target.tagName === 'DIV' && !target.closest('button, select, input, label, [role="switch"], [role="slider"], [role="tab"], [role="tablist"]');
    
    if (isNonControlArea && sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };

  // Dynamic height for mobile - now auto-sizing based on content
  const getMobileClasses = () => {
    return 'h-auto max-h-[85vh]'; // Increased max height to accommodate content
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-3 hover:bg-gray-50 transition-colors"
          style={{
            borderColor: theme.color,
            borderWidth: '3px'
          }}
        >
          <Settings className="w-4 h-4" />
          {!isMobile && (
            <span className="text-sm font-medium">
              {props.showHizbulBahr ? 'Munājāat Companion' : getLayoutDisplayName(props.selectedLayout)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        className={`w-full overflow-y-auto p-0 ${
          isMobile 
            ? `sm:max-w-full ${getMobileClasses()} top-0 bottom-auto` 
            : 'sm:max-w-sm'
        }`}
        side={isMobile ? "top" : "right"}
        onClick={handleBackgroundClick}
      >
        <button ref={sheetCloseRef} style={{ display: 'none' }} />
        
        <ViewControlsHeader
          selectedDay={props.selectedDay}
          selectedLayout={props.selectedLayout}
          arabicVisible={props.arabicVisible}
          englishVisible={props.englishVisible}
          audioEnabled={props.audioEnabled}
          backgroundOpacity={props.backgroundOpacity}
          showHizbulBahr={props.showHizbulBahr}
          isCompactView={props.isCompactView}
          onToggleCompactView={props.onToggleCompactView}
          isHybridView={props.isHybridView}
          onToggleHybridView={props.onToggleHybridView}
          onLayoutChange={props.onLayoutChange}
          onHizbulBahrToggle={props.onHizbulBahrToggle}
          isMobile={isMobile}
          effectiveViewMode={effectiveViewMode}
        />

        <ViewControlsContent
          selectedLayout={props.selectedLayout}
          onLayoutChange={props.onLayoutChange}
          selectedDay={props.selectedDay}
          arabicVisible={props.arabicVisible}
          englishVisible={props.englishVisible}
          audioEnabled={props.audioEnabled}
          onArabicToggle={props.onArabicToggle}
          onEnglishToggle={props.onEnglishToggle}
          onAudioToggle={props.onAudioToggle}
          backgroundOpacity={props.backgroundOpacity}
          onBackgroundOpacityChange={props.onBackgroundOpacityChange}
          onArabicFontToggle={props.onArabicFontToggle}
          onEnglishFontToggle={props.onEnglishFontToggle}
          arabicFont={props.arabicFont}
          englishFont={props.englishFont}
          showHizbulBahr={props.showHizbulBahr}
          onHizbulBahrToggle={props.onHizbulBahrToggle}
          selectedTheme={props.selectedTheme}
          onThemeChange={props.onThemeChange}
          dayIndicatorStyle={props.dayIndicatorStyle}
          onDayIndicatorChange={props.onDayIndicatorChange}
          isCompactView={props.isCompactView}
          isHybridView={props.isHybridView}
          isMobile={isMobile}
          effectiveViewMode={effectiveViewMode}
        />
      </SheetContent>
    </Sheet>
  );
};
