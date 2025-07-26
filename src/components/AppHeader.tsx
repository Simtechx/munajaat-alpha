import React from 'react';
import { Button } from '@/components/ui/button';
import { DayBadge } from '@/components/DayBadge';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { BookOpen, Info } from 'lucide-react';

// Proper Waves SVG Icon Component with overlapping circular wave patterns
const WavesIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    {/* Overlapping circular wave patterns */}
    <path d="M7 8c2 1.5 3 1.5 5 0s3-1.5 5 0" opacity="0.8"/>
    <path d="M6 10c2.5 2 4 2 6 0s3.5-2 6 0" opacity="0.9"/>
    <path d="M7 12c2 1.5 3 1.5 5 0s3-1.5 5 0" opacity="1"/>
    <path d="M6 14c2.5 2 4 2 6 0s3.5-2 6 0" opacity="0.9"/>
    <path d="M7 16c2 1.5 3 1.5 5 0s3-1.5 5 0" opacity="0.8"/>
    {/* Additional wave detail */}
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

interface AppHeaderProps {
  selectedDay: DayOfWeek;
  showHizbulBahr: boolean;
  onShowInfo: () => void;
  onShowPublisher: () => void;
  onHizbulBahrToggle: () => void;
  dayButtonsVisible?: boolean;
  onDayButtonsToggle?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ 
  selectedDay, 
  showHizbulBahr, 
  onShowInfo,
  onShowPublisher,
  onHizbulBahrToggle,
  dayButtonsVisible,
  onDayButtonsToggle
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <header className="text-center pt-6 pb-4 px-4">
      <div 
        className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border-2"
        style={{ borderColor: theme.color }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="relative">
            <Button
              onClick={onShowPublisher}
              variant="ghost"
              size="sm"
              className="p-2 rounded-full border-2 hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: theme.color }}
              title="Publisher Information"
            >
              <BookOpen 
                className="w-8 h-8 transition-all duration-300 hover:scale-110" 
                style={{ color: theme.color }} 
              />
            </Button>
          </div>
          
          {/* Clickable Header Text */}
          <h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={onHizbulBahrToggle}
            title={`Click to switch to ${showHizbulBahr ? 'Munājāat-e-Maqbūl' : 'Hizbul Bahr'}`}
          >
            {showHizbulBahr ? 'Hizbul Bahr' : 'Munājāat-e-Maqbūl'}
          </h1>
          
          <Button
            onClick={onShowInfo}
            variant="ghost"
            size="sm"
            className="ml-2 text-gray-600 hover:text-gray-800"
          >
            <Info className="w-5 h-5" />
          </Button>
        </div>
        <p 
          className="text-lg text-gray-700 mb-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={onHizbulBahrToggle}
          title={`Click to switch to ${showHizbulBahr ? 'Munājāat-e-Maqbūl' : 'Hizbul Bahr'}`}
        >
          {showHizbulBahr ? 'The Litany of the Sea' : 'A Weekly Journey of Invocations'}
        </p>
        {!showHizbulBahr && (
          <DayBadge 
            day={selectedDay} 
            onClick={onDayButtonsToggle}
          />
        )}
        {showHizbulBahr && (
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm"
            style={{ backgroundColor: theme.color }}
          >
            <WavesIcon className="w-4 h-4 mr-2" />
            Special Spiritual Protection
          </div>
        )}
      </div>
    </header>
  );
};
