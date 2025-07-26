
import React from 'react';
import { DayOfWeek } from '@/types';
import { HizbulBahrSupplication } from './HizbulBahrSupplication';
import { HizbulBahrVirtues } from './HizbulBahrVirtues';
import { HizbulBahrHistory } from './HizbulBahrHistory';
import { HizbulBahrInstructions } from './HizbulBahrInstructions';
import { HizbulBahrSection } from './HizbulBahrNavigation';

interface HizbulBahrContentProps {
  selectedDay: DayOfWeek;
  selectedSection: HizbulBahrSection;
  arabicVisible: boolean;
  englishVisible: boolean;
  arabicFont?: string;
  englishFont?: string;
}

export const HizbulBahrContent: React.FC<HizbulBahrContentProps> = ({
  selectedDay,
  selectedSection,
  arabicVisible,
  englishVisible,
  arabicFont = 'indopak',
  englishFont = 'poppins'
}) => {
  switch (selectedSection) {
    case 'supplication':
      return (
        <HizbulBahrSupplication
          selectedDay={selectedDay}
          arabicVisible={arabicVisible}
          englishVisible={englishVisible}
          arabicFont={arabicFont}
          englishFont={englishFont}
        />
      );
    case 'virtues':
      return <HizbulBahrVirtues selectedDay={selectedDay} />;
    case 'history':
      return <HizbulBahrHistory selectedDay={selectedDay} />;
    case 'instructions':
      return <HizbulBahrInstructions selectedDay={selectedDay} />;
    default:
      return (
        <HizbulBahrSupplication
          selectedDay={selectedDay}
          arabicVisible={arabicVisible}
          englishVisible={englishVisible}
          arabicFont={arabicFont}
          englishFont={englishFont}
        />
      );
  }
};
