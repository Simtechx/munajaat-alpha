
import React from 'react';
import { Book, Star, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DayOfWeek, DAY_THEMES } from '@/types';

export type HizbulBahrSection = 'supplication' | 'virtues' | 'history' | 'instructions';

interface HizbulBahrNavigationProps {
  selectedDay: DayOfWeek;
  selectedSection: HizbulBahrSection;
  onSectionChange: (section: HizbulBahrSection) => void;
}

export const HizbulBahrNavigation: React.FC<HizbulBahrNavigationProps> = ({
  selectedDay,
  selectedSection,
  onSectionChange,
}) => {
  const theme = DAY_THEMES[selectedDay];

  const sections = [
    { id: 'supplication' as HizbulBahrSection, name: 'Supplication', icon: <Book className="w-3 h-3 md:w-4 md:h-4" /> },
    { id: 'virtues' as HizbulBahrSection, name: 'Virtues', icon: <Star className="w-3 h-3 md:w-4 md:h-4" /> },
    { id: 'history' as HizbulBahrSection, name: 'History', icon: <Clock className="w-3 h-3 md:w-4 md:h-4" /> },
    { id: 'instructions' as HizbulBahrSection, name: 'Instructions', icon: <BookOpen className="w-3 h-3 md:w-4 md:h-4" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 md:p-4 bg-white/80 backdrop-blur-sm">
      {sections.map((section) => {
        const isSelected = section.id === selectedSection;
        
        return (
          <Button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            variant="outline"
            className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md text-xs md:text-sm px-2 md:px-3 py-2 md:py-3"
            style={{
              backgroundColor: isSelected ? theme.color : 'transparent',
              borderColor: theme.color,
              color: isSelected ? 'white' : theme.color,
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
              {section.icon}
              <span className="text-[10px] md:text-sm leading-tight">{section.name}</span>
            </div>
          </Button>
        );
      })}
    </div>
  );
};
