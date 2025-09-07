
import React from 'react';
import { LayoutGrid, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';

interface LayoutModeSectionProps {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  onLayoutChange: (layout: LayoutMode) => void;
}

export const LayoutModeSection: React.FC<LayoutModeSectionProps> = ({
  selectedDay,
  selectedLayout,
  onLayoutChange,
}) => {
  const theme = DAY_THEMES[selectedDay];
  // Only keep the correct 3 layouts
  const layouts: LayoutMode[] = ['Classic', 'Dual', 'Carousel'];

  // Helper function to get display name for layouts
  const getLayoutDisplayName = (layout: LayoutMode): string => {
    if (layout === 'Carousel') return 'Swipe';
    return layout;
  };

  // Helper function to get layout description
  const getLayoutDescription = (layout: LayoutMode): string => {
    switch (layout) {
      case 'Classic':
        return 'Traditional View';
      case 'Dual':
        return 'Side by side';
      case 'Carousel':
        return 'Touch friendly';
      default:
        return '';
    }
  };

  // Helper function to darken a color
  const darkenColor = (color: string, amount: number = 0.3) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const darkerR = Math.round(r * (1 - amount));
    const darkerG = Math.round(g * (1 - amount));
    const darkerB = Math.round(b * (1 - amount));
    
    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm font-semibold text-white/90 pb-2 border-b border-white/20">
        <LayoutGrid className="w-4 h-4" />
        <span>Display Mode Layout</span>
      </div>
      
      {/* Layout Buttons Grid - 3 buttons in one row */}
      <div className="grid grid-cols-3 gap-2">
        {layouts.map((layout) => (
          <Button
            key={layout}
            onClick={() => onLayoutChange(layout)}
            variant={selectedLayout === layout ? "default" : "outline"}
            className={`h-16 flex flex-col items-center justify-center text-center transition-all duration-200 ${
              selectedLayout === layout 
                ? 'border-2 shadow-lg' 
                : 'border-white/40 hover:bg-white/10'
            }`}
            style={selectedLayout === layout ? {
              backgroundColor: darkenColor(theme.color, 0.2),
              borderColor: darkenColor(theme.color, 0.4),
              color: 'white'
            } : {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255,255,255,0.4)',
              color: 'white'
            }}
          >
            <div className="font-medium text-sm">{getLayoutDisplayName(layout)}</div>
            <div className="text-xs opacity-80 leading-tight">{getLayoutDescription(layout)}</div>
          </Button>
        ))}
      </div>

    </div>
  );
};
