
import React from 'react';
import { Languages, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface LanguageDisplaySectionProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
}

export const LanguageDisplaySection: React.FC<LanguageDisplaySectionProps> = ({
  selectedDay,
  arabicVisible,
  englishVisible,
  onArabicToggle,
  onEnglishToggle
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm font-semibold pb-2 border-b" 
           style={{ color: theme.color, borderColor: `${theme.color}20` }}>
        <Languages className="w-4 h-4" />
        <span>Language Display</span>
      </div>
      
      <div className="space-y-4">
        <div 
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
          onClick={onArabicToggle}
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">العربية (Arabic)</span>
            {arabicVisible && <Check className="w-4 h-4 text-green-600" />}
          </div>
          <Switch
            checked={arabicVisible}
            onCheckedChange={onArabicToggle}
            style={{
              backgroundColor: arabicVisible ? theme.color : '#e5e7eb',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent double toggle
          />
        </div>
        
        <div 
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
          onClick={onEnglishToggle}
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">English</span>
            {englishVisible && <Check className="w-4 h-4 text-green-600" />}
          </div>
          <Switch
            checked={englishVisible}
            onCheckedChange={onEnglishToggle}
            style={{
              backgroundColor: englishVisible ? theme.color : '#e5e7eb',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent double toggle
          />
        </div>
      </div>
    </div>
  );
};
