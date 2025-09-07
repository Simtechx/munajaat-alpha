
import React from 'react';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Settings, List, Layers } from 'lucide-react';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';
import { StatusBar } from './StatusBar';
import { LayoutModeSection } from './LayoutModeSection';

interface ViewControlsHeaderProps {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  backgroundOpacity: number;
  
  isCompactView: boolean;
  onToggleCompactView: () => void;
  isHybridView: boolean;
  onToggleHybridView: () => void;
  onLayoutChange: (layout: LayoutMode) => void;
  
  isMobile: boolean;
  effectiveViewMode: string;
}

export const ViewControlsHeader: React.FC<ViewControlsHeaderProps> = ({
  selectedDay,
  selectedLayout,
  arabicVisible,
  englishVisible,
  audioEnabled,
  backgroundOpacity,
  
  isCompactView,
  onToggleCompactView,
  isHybridView,
  onToggleHybridView,
  onLayoutChange,
  isMobile,
  effectiveViewMode,
}) => {
  const theme = DAY_THEMES[selectedDay];

  const getViewModeIcon = () => {
    if (effectiveViewMode === 'hybrid') return <Layers className="w-4 h-4" />;
    return <List className="w-4 h-4" />;
  };

  const getViewModeLabel = () => {
    if (effectiveViewMode === 'hybrid') return 'Hybrid';
    return 'Normal';
  };

  const handleViewToggle = () => {
    if (isMobile) {
      onToggleHybridView();
    } else {
      // For desktop/tablet, only toggle between normal and hybrid
      onToggleHybridView();
    }
  };

  return (
    <div className="text-white p-4 sheet-background-area" style={{ backgroundColor: theme.color }}>
      <SheetHeader className="pb-2">
        <SheetTitle className="flex items-center justify-between text-lg text-white">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            View Controls
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium bg-white/20 px-2 py-1 rounded">
              {selectedDay}
            </div>
            <Button
              onClick={handleViewToggle}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              title={isMobile ? (isHybridView ? 'Switch to Normal View' : 'Switch to Hybrid View') : `Current: ${getViewModeLabel()}`}
            >
              {getViewModeIcon()}
            </Button>
          </div>
        </SheetTitle>
      </SheetHeader>

      <StatusBar
        selectedDay={selectedDay}
        selectedLayout={selectedLayout}
        arabicVisible={arabicVisible}
        englishVisible={englishVisible}
        audioEnabled={audioEnabled}
        backgroundOpacity={backgroundOpacity}
        
      />

      {/* Only show Layout Mode Section when NOT in hybrid view */}
      {effectiveViewMode !== 'hybrid' && (
        <LayoutModeSection
          selectedDay={selectedDay}
          selectedLayout={selectedLayout}
          onLayoutChange={onLayoutChange}
        />
      )}
    </div>
  );
};
