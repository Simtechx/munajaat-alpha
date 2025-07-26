
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Settings } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { OptionsPanelHeader } from '@/components/options/OptionsPanelHeader';
import { DisplayModeSection } from '@/components/options/DisplayModeSection';
import { LanguageDisplaySection } from '@/components/options/LanguageDisplaySection';
import { FontSelectionSection } from '@/components/options/FontSelectionSection';
import { AudioSettingsSection } from '@/components/options/AudioSettingsSection';

interface OptionsPanelProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
  onAudioToggle: () => void;
  onArabicFontToggle?: () => void;
  onEnglishFontToggle?: () => void;
  arabicFont?: string;
  englishFont?: string;
  selectedLayout?: string;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({
  selectedDay,
  arabicVisible,
  englishVisible,
  audioEnabled,
  onArabicToggle,
  onEnglishToggle,
  onAudioToggle,
  onArabicFontToggle,
  onEnglishFontToggle,
  arabicFont = 'scheherazade',
  englishFont = 'poppins',
  selectedLayout = 'Classic'
}) => {
  const theme = DAY_THEMES[selectedDay];
  const [open, setOpen] = useState(false);
  
  const getLanguageCount = () => {
    let count = 0;
    if (arabicVisible) count++;
    if (englishVisible) count++;
    return count;
  };

  const getStatusText = () => {
    const langCount = getLanguageCount();
    const audioStatus = audioEnabled ? 'On' : 'Off';
    return `${selectedLayout} • ${langCount} Lang${langCount !== 1 ? 's' : ''} • Audio ${audioStatus}`;
  };

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm h-10 px-4 w-full sm:w-auto"
            style={{
              borderColor: theme.color,
              color: theme.color
            }}
          >
            <Settings className="w-4 h-4" />
            <span>{getStatusText()}</span>
          </Button>
        </PopoverTrigger>
        
        <PopoverContent 
          className="w-80 p-0 bg-white/98 backdrop-blur-lg border-2 shadow-2xl rounded-xl"
          style={{ borderColor: `${theme.color}60` }}
          align="end"
        >
          <OptionsPanelHeader
            selectedDay={selectedDay}
            selectedLayout={selectedLayout}
            audioEnabled={audioEnabled}
            languageCount={getLanguageCount()}
          />

          <div className="p-6 space-y-6">
            <DisplayModeSection
              selectedDay={selectedDay}
              selectedLayout={selectedLayout}
            />

            <LanguageDisplaySection
              selectedDay={selectedDay}
              arabicVisible={arabicVisible}
              englishVisible={englishVisible}
              onArabicToggle={onArabicToggle}
              onEnglishToggle={onEnglishToggle}
            />

            <FontSelectionSection
              selectedDay={selectedDay}
              arabicVisible={arabicVisible}
              englishVisible={englishVisible}
              arabicFont={arabicFont}
              englishFont={englishFont}
              onArabicFontToggle={onArabicFontToggle}
              onEnglishFontToggle={onEnglishFontToggle}
            />

            <AudioSettingsSection
              selectedDay={selectedDay}
              audioEnabled={audioEnabled}
              onAudioToggle={onAudioToggle}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
