import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';
import { HizbulBahr } from '@/components/HizbulBahr';
import { DayOfWeek } from '@/types';
import { AppHeader } from '@/components/AppHeader';

const HizbulBahrPage: React.FC = () => {
  const selectedDay: DayOfWeek = 'Sunday';
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <BackgroundLayers 
        selectedDay={selectedDay}
        selectedTheme="color"
        backgroundOpacity={3}
      />

      {/* App Header */}
      <div className="relative z-30">
        <AppHeader
          selectedDay={selectedDay}
          showHizbulBahr={true}
          onShowInfo={() => {}}
          onShowPublisher={() => {}}
          onHizbulBahrToggle={() => navigate('/munajaat')}
        />
      </div>

      <div className="relative z-10 py-8">
        <HizbulBahr 
          selectedDay={selectedDay}
          arabicVisible={true}
          englishVisible={true}
        />
      </div>
    </div>
  );
};

export default HizbulBahrPage;