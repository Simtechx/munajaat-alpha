
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { Languages, Volume2, Type } from 'lucide-react';

interface LanguageToggleProps {
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
  onAudioToggle: () => void;
  selectedDay: DayOfWeek;
  onArabicFontToggle?: () => void;
  onEnglishFontToggle?: () => void;
  arabicFont?: string;
  englishFont?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  arabicVisible,
  englishVisible,
  audioEnabled,
  onArabicToggle,
  onEnglishToggle,
  onAudioToggle,
  selectedDay,
  onArabicFontToggle,
  onEnglishFontToggle,
  arabicFont = 'scheherazade',
  englishFont = 'georgia'
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="flex items-center gap-3">
      {/* Language Controls */}
      <div className="flex items-center gap-2 text-sm" style={{ color: theme.color }}>
        <Languages className="w-4 h-4" />
        <span className="hidden sm:inline">Display:</span>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <Button
            onClick={onArabicToggle}
            variant={arabicVisible ? "default" : "outline"}
            size="sm"
            className="text-xs h-8 px-3"
            style={{
              backgroundColor: arabicVisible ? theme.color : 'transparent',
              borderColor: theme.color,
              color: arabicVisible ? 'white' : theme.color
            }}
          >
            العربية
          </Button>
          {arabicVisible && onArabicFontToggle && (
            <Button
              onClick={onArabicFontToggle}
              variant="ghost"
              size="sm"
              className="text-xs h-6 px-2 flex items-center gap-1"
              style={{ color: theme.color }}
              title={`Font: ${arabicFont === 'scheherazade' ? 'Scheherazade' : 'Amiri'}`}
            >
              <Type className="w-3 h-3" />
              <span className="text-xs">{arabicFont === 'scheherazade' ? 'Sch' : 'Am'}</span>
            </Button>
          )}
        </div>
        
        <div className="flex flex-col gap-1">
          <Button
            onClick={onEnglishToggle}
            variant={englishVisible ? "default" : "outline"}
            size="sm"
            className="text-xs h-8 px-3"
            style={{
              backgroundColor: englishVisible ? theme.color : 'transparent',
              borderColor: theme.color,
              color: englishVisible ? 'white' : theme.color
            }}
          >
            English
          </Button>
          {englishVisible && onEnglishFontToggle && (
            <Button
              onClick={onEnglishFontToggle}
              variant="ghost"
              size="sm"
              className="text-xs h-6 px-2 flex items-center gap-1"
              style={{ color: theme.color }}
              title={`Font: ${englishFont === 'georgia' ? 'Georgia' : 'Times'}`}
            >
              <Type className="w-3 h-3" />
              <span className="text-xs">{englishFont === 'georgia' ? 'Geo' : 'Tim'}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Audio Toggle */}
      <div className="flex items-center gap-2 pl-3 border-l" style={{ borderColor: `${theme.color}40` }}>
        <Volume2 className="w-4 h-4" style={{ color: theme.color }} />
        <span className="text-sm" style={{ color: theme.color }}>Audio</span>
        <Switch
          checked={audioEnabled}
          onCheckedChange={onAudioToggle}
          style={{
            backgroundColor: audioEnabled ? theme.color : 'transparent',
            borderColor: theme.color,
            border: '1px solid'
          }}
        />
      </div>
    </div>
  );
};
