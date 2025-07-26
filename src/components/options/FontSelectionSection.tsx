
import React from 'react';
import { Type, Book } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { EXTENDED_ARABIC_FONTS } from '@/utils/customFonts';

interface FontSelectionSectionProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  arabicFont: string;
  englishFont: string;
  onArabicFontToggle?: (font: string) => void;
  onEnglishFontToggle?: (font: string) => void;
}

const ENGLISH_FONTS = [
  { id: 'poppins', name: 'Poppins', className: 'font-poppins' },
  { id: 'georgia', name: 'Georgia', className: 'font-georgia' },
  { id: 'times', name: 'Times New Roman', className: 'font-times' },
  { id: 'inter', name: 'Inter', className: 'font-inter' },
  { id: 'roboto', name: 'Roboto', className: 'font-roboto' }
];

export const FontSelectionSection: React.FC<FontSelectionSectionProps> = ({
  selectedDay,
  arabicVisible,
  englishVisible,
  arabicFont,
  englishFont,
  onArabicFontToggle,
  onEnglishFontToggle
}) => {
  const theme = DAY_THEMES[selectedDay];

  if (!arabicVisible && !englishVisible) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm font-semibold pb-2 border-b" 
           style={{ 
             color: theme.color,
             borderColor: `${theme.color}40` 
           }}>
        <Type className="w-4 h-4" style={{ color: theme.color }} />
        <span>Font Selection</span>
      </div>
      
      {arabicVisible && onArabicFontToggle && (
        <div className="space-y-3">
          <span className="text-xs font-medium opacity-70 uppercase tracking-wide" style={{ color: theme.color }}>Arabic Font</span>
          <Select value={arabicFont} onValueChange={onArabicFontToggle}>
            <SelectTrigger className="w-full border bg-white/90" style={{ borderColor: `${theme.color}40` }}>
              <SelectValue placeholder="Select Arabic font" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200">
              {EXTENDED_ARABIC_FONTS.map((font) => (
                <SelectItem key={font.id} value={font.id} className="text-gray-800">
                  <span className={font.className}>
                    {font.name} - بِسْمِ اللَّهِ
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {englishVisible && onEnglishFontToggle && (
        <div className="space-y-3">
          <span className="text-xs font-medium opacity-70 uppercase tracking-wide" style={{ color: theme.color }}>English Font</span>
          <Select value={englishFont} onValueChange={onEnglishFontToggle}>
            <SelectTrigger className="w-full border bg-white/90" style={{ borderColor: `${theme.color}40` }}>
              <SelectValue placeholder="Select English font" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200">
              {ENGLISH_FONTS.map((font) => (
                <SelectItem key={font.id} value={font.id} className="text-gray-800">
                  <span className={font.className}>
                    {font.name} - In the name of Allah
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {/* Copyright notice */}
      <div className="mt-6 pt-4 border-t" style={{ borderColor: `${theme.color}20` }}>
        <div className="text-xs text-center opacity-60" style={{ color: theme.color }}>
          © 2026 Munājāat Companion<br />
          by Simtech W. All rights reserved.
        </div>
      </div>
    </div>
  );
};
