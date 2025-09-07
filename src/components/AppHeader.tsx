import React from 'react';
import { Button } from '@/components/ui/button';
// DayBadge import removed - not used
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
  
  // Debug log to see if component is rendering
  console.log('AppHeader rendering with showHizbulBahr:', showHizbulBahr);

  return (
    <header className="text-center pt-4 pb-4 px-4">
      <div className="max-w-md mx-auto">
        {/* Toggle Switch Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative inline-flex bg-gray-100 rounded-full p-1 shadow-inner border border-gray-200">
            <button
              onClick={() => onHizbulBahrToggle()}
              className={`relative px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 min-w-[160px] justify-center ${
                !showHizbulBahr 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-500 bg-transparent'
              }`}
              style={!showHizbulBahr ? {
                background: `linear-gradient(135deg, ${theme.color}, ${theme.color}dd)`
              } : {}}
            >
              <span className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0">
                م
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-semibold leading-tight">Munajat e Maqbool</span>
                <span className="text-xs opacity-90 italic leading-tight">مُناجاتِ مَقبول</span>
              </div>
            </button>
            <button
              onClick={() => onHizbulBahrToggle()}
              className={`relative px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 min-w-[160px] justify-center ${
                showHizbulBahr 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-400 bg-transparent'
              }`}
              style={showHizbulBahr ? {
                background: `linear-gradient(135deg, ${theme.color}, ${theme.color}dd)`
              } : {}}
            >
              <span className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0">
                ح
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="text-sm font-semibold leading-tight">Hizbul Bahr</span>
                <span className="text-xs opacity-90 italic leading-tight">حزب البحر</span>
              </div>
            </button>
          </div>

          {/* Publisher and Info buttons moved to top right */}
          <div className="flex items-center gap-2">
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
        </div>
        
        <div 
          className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full shadow-md inline-block mb-6 border-2"
          style={{
            borderColor: `${theme.color}40`,
            boxShadow: `0 4px 12px ${theme.color}20, 0 2px 4px rgba(0,0,0,0.1)`
          }}
        >
          {showHizbulBahr ? 'Divine Litanies of the Sea' : 'A Weekly Journey of Invocations'}
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
