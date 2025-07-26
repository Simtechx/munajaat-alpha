
import React, { useEffect } from 'react';
import { DuaContent, DayOfWeek, DAY_THEMES } from '@/types';
import { EndOfDuasBadge } from '@/components/EndOfDuasBadge';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ClassicLayoutProps {
  content: DuaContent;
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  isPlaying: boolean;
  currentAudioIndex: number;
  onAudioPlayPause: () => void;
  onAudioNext: () => void;
  onAudioReset: () => void;
  onBlockSelect: (index: number) => void;
  arabicFontClass?: string;
  englishFontClass?: string;
}

export const ClassicLayout: React.FC<ClassicLayoutProps> = ({ 
  content, 
  selectedDay, 
  arabicVisible, 
  englishVisible,
  audioEnabled,
  isPlaying,
  currentAudioIndex,
  onAudioPlayPause,
  onAudioNext,
  onAudioReset,
  onBlockSelect,
  arabicFontClass = 'font-indopak',
  englishFontClass = 'font-poppins'
}) => {
  const theme = DAY_THEMES[selectedDay];

  useEffect(() => {
    console.log('ClassicLayout - Arabic font class:', arabicFontClass);
    console.log('ClassicLayout - English font class:', englishFontClass);
    
    // Debug font loading
    setTimeout(() => {
      const arabicElements = document.querySelectorAll(`.${arabicFontClass}`);
      console.log('Arabic elements found:', arabicElements.length);
      arabicElements.forEach((el, i) => {
        const styles = window.getComputedStyle(el);
        console.log(`Arabic element ${i} font-family:`, styles.fontFamily);
      });
    }, 1000);
  }, [arabicFontClass, englishFontClass]);
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {content.Arabic.map((arabic, index) => {
        const isCurrentBlock = audioEnabled && currentAudioIndex === index;
        const isPlaying = isCurrentBlock && audioEnabled;
        
        return (
          <div 
            key={index} 
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative ${
              isCurrentBlock ? 'ring-2 ring-offset-2' : ''
            }`}
            style={{ 
              borderLeft: `4px solid ${theme.color}`,
              backgroundColor: isCurrentBlock ? `${theme.color}08` : undefined
            }}
            onClick={() => audioEnabled && onBlockSelect(index)}
          >
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
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>Playing</span>
                    </div>
                  )}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBlockSelect(index);
                      if (currentAudioIndex === index) {
                        onAudioPlayPause();
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
                    {isCurrentBlock && isPlaying ? 
                      <Pause className="w-3 h-3" style={{ color: isCurrentBlock ? 'white' : theme.color }} /> : 
                      <Play className="w-3 h-3" style={{ color: isCurrentBlock ? 'white' : theme.color }} />
                    }
                  </Button>
                </div>
              )}
            </div>
            
            {arabicVisible && (
            <div className="text-right mb-6">
              <p 
                className={`text-2xl md:text-3xl leading-relaxed text-gray-800 arabic-text ${arabicFontClass}`} 
                dir="rtl"
                style={{ 
                  fontFamily: arabicFontClass === 'font-indopak' ? "'IndoPak', 'Scheherazade New', serif" : undefined
                }}
              >
                {arabic}
              </p>
            </div>
          )}
          
          {englishVisible && (
            <div className="text-left">
              <p className={`text-lg leading-relaxed text-gray-600 english-text ${englishFontClass}`}>
                {content.English[index]}
              </p>
            </div>
            )}
          </div>
        );
      })}
      <EndOfDuasBadge selectedDay={selectedDay} />
    </div>
  );
};
