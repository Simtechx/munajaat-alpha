
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings, Type, Volume2, Eye, EyeOff, Contrast } from 'lucide-react';
import { DayOfWeek, DAY_THEMES, LayoutMode } from '@/types';
import { BackgroundOpacitySlider } from '@/components/BackgroundOpacitySlider';

interface SettingsSliderProps {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
  onAudioToggle: () => void;
  onLayoutChange: (layout: LayoutMode) => void;
  backgroundOpacity: number;
  onBackgroundOpacityChange: (opacity: number) => void;
}

export const SettingsSlider: React.FC<SettingsSliderProps> = ({
  selectedDay,
  selectedLayout,
  arabicVisible,
  englishVisible,
  audioEnabled,
  onArabicToggle,
  onEnglishToggle,
  onAudioToggle,
  onLayoutChange,
  backgroundOpacity,
  onBackgroundOpacityChange
}) => {
  const theme = DAY_THEMES[selectedDay];

  // Use only the correct layout modes
  const layouts: LayoutMode[] = ['Classic', 'Dual', 'Carousel'];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Settings</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-sm overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2" style={{ color: theme.color }}>
            <Settings className="w-5 h-5" />
            Reading Settings
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Display Mode Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
              <Eye className="w-4 h-4" />
              <span>Display Mode</span>
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Current: {selectedLayout} Layout
            </div>
          </div>

          {/* View Mode Selection */}
          <div className="space-y-3">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Layout Options</span>
            <div className="grid grid-cols-2 gap-2">
              {layouts.map((layout) => (
                <Button
                  key={layout}
                  variant={selectedLayout === layout ? "default" : "outline"}
                  size="sm"
                  className="text-xs h-8"
                  onClick={() => onLayoutChange(layout)}
                  style={{
                    backgroundColor: selectedLayout === layout ? theme.color : 'transparent',
                    borderColor: theme.color,
                    color: selectedLayout === layout ? 'white' : theme.color
                  }}
                >
                  {layout === 'Carousel' ? 'Swipe' : layout}
                </Button>
              ))}
            </div>
          </div>

          {/* Language Display */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
              <Type className="w-4 h-4" />
              <span>Language Display</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Arabic Text</span>
                <Switch
                  checked={arabicVisible}
                  onCheckedChange={onArabicToggle}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">English Text</span>
                <Switch
                  checked={englishVisible}
                  onCheckedChange={onEnglishToggle}
                />
              </div>
            </div>
          </div>

          {/* Font Selection - Simplified Toggles */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
              <Type className="w-4 h-4" />
              <span>Font Selection</span>
            </div>
            
            {arabicVisible && (
              <div className="flex items-center justify-between">
                <span className="text-sm">Enhanced Arabic Font</span>
                <Switch
                  checked={false} // Placeholder - would need font state
                  onCheckedChange={() => {}}
                />
              </div>
            )}
            
            {englishVisible && (
              <div className="flex items-center justify-between">
                <span className="text-sm">Alternative English Font</span>
                <Switch
                  checked={false} // Placeholder - would need font state
                  onCheckedChange={() => {}}
                />
              </div>
            )}
          </div>

          {/* Background Contrast */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
              <Contrast className="w-4 h-4" />
              <span>Background Contrast</span>
            </div>
            <BackgroundOpacitySlider
              selectedDay={selectedDay}
              value={backgroundOpacity}
              onChange={onBackgroundOpacityChange}
            />
            <div className="text-xs text-gray-500 text-center">
              {backgroundOpacity * 10}% Background Visibility
            </div>
          </div>

          {/* Audio Settings */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
              <Volume2 className="w-4 h-4" />
              <span>Audio Settings</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Audio</span>
              <Switch
                checked={audioEnabled}
                onCheckedChange={onAudioToggle}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
