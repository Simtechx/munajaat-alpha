
import React from 'react';
import { Languages } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface LanguageSectionProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  onArabicToggle: () => void;
  onEnglishToggle: () => void;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({
  selectedDay,
  arabicVisible,
  englishVisible,
  onArabicToggle,
  onEnglishToggle,
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: theme.color }}>
        <Languages className="w-4 h-4" style={{ color: theme.color }} />
        <span>Languages</span>
      </div>
      
      <div className="space-y-1.5">
        <div 
          className="flex items-center justify-between p-2 rounded-lg border text-sm cursor-pointer transition-colors hover:bg-gray-50"
          style={{ 
            backgroundColor: arabicVisible ? `${theme.color}15` : '#f8f9fa',
            borderColor: arabicVisible ? theme.color : '#e5e7eb'
          }}
          onClick={onArabicToggle}
        >
          <span className="font-medium">العربية</span>
          <Switch
            checked={arabicVisible}
            onCheckedChange={onArabicToggle}
            themeColor={theme.color}
            onClick={(e) => e.stopPropagation()} // Prevent double toggle
          />
        </div>
        
        <div 
          className="flex items-center justify-between p-2 rounded-lg border text-sm cursor-pointer transition-colors hover:bg-gray-50"
          style={{ 
            backgroundColor: englishVisible ? `${theme.color}15` : '#f8f9fa',
            borderColor: englishVisible ? theme.color : '#e5e7eb'
          }}
          onClick={onEnglishToggle}
        >
          <span className="font-medium">English</span>
          <Switch
            checked={englishVisible}
            onCheckedChange={onEnglishToggle}
            themeColor={theme.color}
            onClick={(e) => e.stopPropagation()} // Prevent double toggle
          />
        </div>
      </div>
      
      {/* Copyright Section */}
      <div 
        className="p-4 rounded-lg border-3 text-center text-xs font-medium leading-relaxed mt-4"
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
    </div>
  );
};
