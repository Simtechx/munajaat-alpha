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

          {/* Center - Switch */}
          <div className="flex-1 flex justify-center">
            <div className="inline-flex bg-muted rounded-lg p-1 shadow-sm border border-border/30">
              <button
                onClick={() => onHizbulBahrToggle()}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  !showHizbulBahr
                    ? 'bg-background text-foreground shadow-sm border border-border/20'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Munājāt-e-Maqbūl
              </button>
              <button
                onClick={() => onHizbulBahrToggle()}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  showHizbulBahr
                    ? 'bg-background text-foreground shadow-sm border border-border/20'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Hizbul Bahar
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
