import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { BookOpen, Info, Home, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export const AppHeader: React.FC<AppHeaderProps> = memo(({ 
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
    <header className="relative w-full bg-background/80 backdrop-blur-sm border-b border-border/50 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Home Button */}
          <div className="flex-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors"
              title="Go to Home"
            >
              <Home className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground">Home</span>
            </Link>
          </div>

          {/* Center - Responsive Toggle (Mobile stacked, Tablet/Web linear) */}
          <div className="flex-1 flex justify-center">
            <div
              className="inline-flex md:flex-row flex-col bg-muted/70 rounded-full p-1 md:p-1.5 shadow-sm border border-border/30 w-full md:w-auto max-w-[320px] md:max-w-none"
            >
              {/* Munajat Option */}
              <button
                onClick={() => { if (showHizbulBahr) onHizbulBahrToggle(); }}
                className={`group relative rounded-full transition-all duration-200 flex items-center gap-2 md:gap-3 text-left
                  ${!showHizbulBahr
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow md:px-5 px-4 md:py-2.5 py-3'
                    : 'bg-transparent text-muted-foreground md:px-5 px-4 md:py-2.5 py-3 hover:text-foreground'}`}
                style={{ minWidth: 'auto' }}
              >
                <span className={`w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center font-bold tracking-tight 
                  ${!showHizbulBahr ? 'bg-white text-amber-700' : 'bg-white/80 text-slate-600'}`}>
                  م
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] md:text-sm font-semibold">Munajat e Maqbool</span>
                  <span className={`text-[11px] md:text-xs italic ${!showHizbulBahr ? 'text-white/90' : 'text-muted-foreground/80'}`}>مُناجاتِ مَقبول</span>
                </span>
              </button>

              {/* Hizbul Bahr Option */}
              <button
                onClick={() => { if (!showHizbulBahr) onHizbulBahrToggle(); }}
                className={`group relative rounded-full transition-all duration-200 flex items-center gap-2 md:gap-3 text-left md:ml-1
                  ${showHizbulBahr
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow md:px-5 px-4 md:py-2.5 py-3'
                    : 'bg-transparent text-muted-foreground md:px-5 px-4 md:py-2.5 py-3 hover:text-foreground'}`}
                style={{ minWidth: 'auto' }}
              >
                <span className={`w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center font-bold tracking-tight 
                  ${showHizbulBahr ? 'bg-white text-indigo-700' : 'bg-white/80 text-slate-600'}`}>
                  ح
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] md:text-sm font-semibold">Hizbul Bahr</span>
                  <span className={`text-[11px] md:text-xs italic ${showHizbulBahr ? 'text-white/90' : 'text-muted-foreground/80'}`}>حزب البحر</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Icons */}
          <div className="flex flex-1 justify-end items-center gap-2">
            <button
              onClick={onShowPublisher}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              title="Publisher Information"
            >
              <FileText className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
            <button
              onClick={onShowInfo}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              title="App Information"
            >
              <Info className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
