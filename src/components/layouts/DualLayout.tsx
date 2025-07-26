
import React from 'react';
import { DuaContent, DayOfWeek, DAY_THEMES, DisplayLanguage } from '@/types';
import { Badge } from '@/components/ui/badge';
import { EndOfDuasBadge } from '@/components/EndOfDuasBadge';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DualLayoutProps {
  content: DuaContent;
  selectedDay: DayOfWeek;
  displayLanguage: DisplayLanguage;
  audioEnabled?: boolean;
  currentAudioIndex?: number;
  isPlaying?: boolean;
  onBlockSelect?: (index: number) => void;
  onAudioPlayPause?: () => void;
  arabicFontClass?: string;
  englishFontClass?: string;
}

export const DualLayout: React.FC<DualLayoutProps> = ({ 
  content, 
  selectedDay, 
  displayLanguage,
  audioEnabled = false,
  currentAudioIndex = 0,
  isPlaying = false,
  onBlockSelect,
  onAudioPlayPause,
  arabicFontClass = 'font-indopak',
  englishFontClass = 'font-poppins'
}) => {
  const theme = DAY_THEMES[selectedDay];
  
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {content.Arabic.map((arabic, index) => {
        const isCurrentBlock = audioEnabled && currentAudioIndex === index;
        const isBlockPlaying = isCurrentBlock && isPlaying;
        
        return (
          <div key={index} className="space-y-4">
            <div className="mb-4 flex items-center justify-between">
              <span 
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                  isCurrentBlock ? 'animate-pulse' : ''
                }`}
                style={{ backgroundColor: theme.color }}
              >
                {content.Number[index]}
              </span>
              
              {audioEnabled && (
                <div className="flex items-center gap-2">
                  {isCurrentBlock && (
                    <div 
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: theme.color }}
                    >
                      {isBlockPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>Playing</span>
                    </div>
                  )}
                  <Button
                    onClick={() => {
                      onBlockSelect?.(index);
                      if (currentAudioIndex === index) {
                        onAudioPlayPause?.();
                      }
                    }}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    style={{ 
                      borderColor: theme.color, 
                      color: theme.color,
                      backgroundColor: isCurrentBlock ? theme.color : 'white'
                    }}
                  >
                    {isCurrentBlock && isBlockPlaying ? 
                      <Pause className="w-3 h-3" style={{ color: 'white' }} /> : 
                      <Play className="w-3 h-3" style={{ color: isCurrentBlock ? 'white' : theme.color }} />
                    }
                  </Button>
                </div>
              )}
            </div>
            
            <div
              className={`backdrop-blur-sm rounded-xl p-6 shadow-lg border cursor-pointer transition-all duration-300 ${
                isCurrentBlock ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{ 
                backgroundColor: isCurrentBlock ? `${theme.color}25` : `${theme.color}15`,
                borderColor: isCurrentBlock ? theme.color : `${theme.color}40`
              }}
              onClick={() => audioEnabled && onBlockSelect?.(index)}
            >
            <div className="grid md:grid-cols-2 gap-6">
              {(displayLanguage === 'arabic' || displayLanguage === 'both') && (
                <div className="text-right order-1 md:order-1">
                  {/* Show badge only on first card for web/tablet (md and above) */}
                  {index === 0 && (
                    <div className="mb-3 text-center md:text-right hidden md:block">
                      <Badge 
                        className="px-4 py-2 text-white font-semibold text-sm"
                        style={{ backgroundColor: theme.color }}
                      >
                        Arabic
                      </Badge>
                    </div>
                  )}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <p className={`text-xl leading-relaxed text-gray-800 ${arabicFontClass} arabic-text`} dir="rtl">
                      {arabic}
                    </p>
                  </div>
                </div>
              )}
              
              {(displayLanguage === 'english' || displayLanguage === 'both') && (
                <div className="text-left order-2 md:order-2">
                  {/* Show badge only on first card for web/tablet (md and above) */}
                  {index === 0 && (
                    <div className="mb-3 text-center md:text-left hidden md:block">
                      <Badge 
                        className="px-4 py-2 text-white font-semibold text-sm"
                        style={{ backgroundColor: theme.color }}
                      >
                        English
                      </Badge>
                    </div>
                  )}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <p className={`text-lg leading-relaxed text-gray-700 ${englishFontClass} english-text`}>
                      {content.English[index]}
                    </p>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        );
      })}
      <EndOfDuasBadge selectedDay={selectedDay} />
    </div>
  );
};
