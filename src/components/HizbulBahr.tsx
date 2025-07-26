
import React, { useState } from 'react';
import { DayOfWeek } from '@/types';
import { HizbulBahrNavigation, HizbulBahrSection } from './hizbul-bahr/HizbulBahrNavigation';
import { HizbulBahrContent } from './hizbul-bahr/HizbulBahrContent';

interface HizbulBahrProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled?: boolean;
  isPlaying?: boolean;
  onAudioPlayPause?: () => void;
  onAudioNext?: () => void;
  onAudioReset?: () => void;
  arabicFont?: string;
  englishFont?: string;
}

export const HizbulBahr: React.FC<HizbulBahrProps> = ({ 
  selectedDay, 
  arabicVisible, 
  englishVisible,
  // Audio props are accepted but not used in HizbulBahr
  audioEnabled,
  isPlaying,
  onAudioPlayPause,
  onAudioNext,
  onAudioReset,
  arabicFont = 'indopak', // Default to Indo-Pak
  englishFont = 'poppins'
}) => {
  const [selectedSection, setSelectedSection] = useState<HizbulBahrSection>('supplication');

  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-4 lg:p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
        {/* Navigation Buttons - Mobile responsive */}
        <div className="border-b border-gray-200">
          <HizbulBahrNavigation
            selectedDay={selectedDay}
            selectedSection={selectedSection}
            onSectionChange={setSelectedSection}
          />
        </div>
        
        {/* Content - Mobile responsive padding */}
        <div className="p-4 md:p-6 lg:p-8">
          <HizbulBahrContent
            selectedDay={selectedDay}
            selectedSection={selectedSection}
            arabicVisible={arabicVisible}
            englishVisible={englishVisible}
            arabicFont={arabicFont}
            englishFont={englishFont}
          />
        </div>
        
        {selectedSection === 'supplication' && (
          <div className="mt-4 md:mt-6 pt-4 border-t border-gray-200 text-center px-4 md:px-8 pb-4 md:pb-6">
            <p className="text-xs md:text-sm text-gray-600">
              This is a special spiritual litany that provides protection and spiritual elevation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
