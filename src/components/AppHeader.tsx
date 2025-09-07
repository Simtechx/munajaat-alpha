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
  onDayChange?: (day: DayOfWeek) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ 
  selectedDay, 
  showHizbulBahr, 
  onShowInfo,
  onShowPublisher,
  onHizbulBahrToggle,
  dayButtonsVisible,
  onDayButtonsToggle,
  onDayChange
}) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <header className="text-center pt-4 pb-4 px-4">
      <div className="max-w-md mx-auto">
        {/* Toggle Switch Header */}
        <div className="bg-muted p-1 rounded-full shadow-lg mb-3">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => !showHizbulBahr && onHizbulBahrToggle()}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !showHizbulBahr 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Munājāt-e-Maqbūl
            </button>
            <button
              onClick={() => showHizbulBahr && onHizbulBahrToggle()}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                showHizbulBahr 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Hizbul Bahar
            </button>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {showHizbulBahr ? 'The Litany of the Sea' : 'A Weekly Journey of Invocations'}
        </p>

        {/* Publisher and Info buttons */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Button
            onClick={onShowPublisher}
            variant="outline"
            size="sm"
            className="p-2"
            title="Publisher Information"
          >
            <BookOpen className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={onShowInfo}
            variant="outline"
            size="sm"
            className="p-2"
            title="Information"
          >
            <Info className="w-4 h-4" />
          </Button>
        </div>

        {showHizbulBahr && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-sm">
            <WavesIcon className="w-3 h-3 mr-1" />
            Special Spiritual Protection
          </div>
        )}
      </div>
    </header>
  );
};
