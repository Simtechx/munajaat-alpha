
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
  showHizbulBahr: boolean;
  isCompactView: boolean;
  onToggleCompactView: () => void;
  isHybridView: boolean;
  onToggleHybridView: () => void;
  onLayoutChange: (layout: LayoutMode) => void;
  onHizbulBahrToggle: () => void;
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
  showHizbulBahr,
  isCompactView,
  onToggleCompactView,
  isHybridView,
  onToggleHybridView,
  onLayoutChange,
  onHizbulBahrToggle,
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
              {showHizbulBahr ? 'Hizbul Bahr' : selectedDay}
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
        showHizbulBahr={showHizbulBahr}
      />

      {/* Only show Layout Mode Section when NOT in Hizbul Bahr mode and NOT in hybrid view */}
      {!showHizbulBahr && effectiveViewMode !== 'hybrid' && (
        <LayoutModeSection
          selectedDay={selectedDay}
          selectedLayout={selectedLayout}
          onLayoutChange={onLayoutChange}
          showHizbulBahr={showHizbulBahr}
          onHizbulBahrToggle={onHizbulBahrToggle}
        />
      )}

      {/* Show Hizbul Bahr toggle button when in Hizbul Bahr mode and not hybrid */}
      {showHizbulBahr && effectiveViewMode !== 'hybrid' && (
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm font-semibold text-white/90 pb-2 border-b border-white/20 sheet-background-area">
            <span>Current Mode</span>
          </div>
          <Button
            onClick={onHizbulBahrToggle}
            variant="outline"
            className="w-full h-16 justify-center gap-2 transition-all duration-200 border-white/40 hover:bg-white/10"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255,255,255,0.4)',
              color: 'white'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="font-medium">Return to Munājāat Companion</div>
              <div className="text-xs opacity-80">Weekly Journey Mode</div>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
