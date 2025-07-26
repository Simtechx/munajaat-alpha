
import React, { useState, useEffect } from 'react';
import { DuaContent, DayOfWeek, DAY_THEMES, DisplayLanguage } from '@/types';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { EndOfDuasBadge } from '@/components/EndOfDuasBadge';

interface CarouselLayoutProps {
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

export const CarouselLayout: React.FC<CarouselLayoutProps> = ({ 
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = DAY_THEMES[selectedDay];
  
  // Sync carousel with audio when audio is enabled
  useEffect(() => {
    if (audioEnabled && currentAudioIndex !== currentIndex) {
      setCurrentIndex(currentAudioIndex);
    }
  }, [audioEnabled, currentAudioIndex]);
  
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % content.Arabic.length;
    setCurrentIndex(newIndex);
    if (audioEnabled) {
      onBlockSelect?.(newIndex);
    }
  };
  
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + content.Arabic.length) % content.Arabic.length;
    setCurrentIndex(newIndex);
    if (audioEnabled) {
      onBlockSelect?.(newIndex);
    }
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (audioEnabled) {
      onBlockSelect?.(index);
    }
  };
  
  const isCurrentBlock = audioEnabled && currentAudioIndex === currentIndex;
  const isBlockPlaying = isCurrentBlock && isPlaying;
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            disabled={currentIndex === 0}
            className="flex items-center gap-2"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-3">
            <span 
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                isCurrentBlock ? 'animate-pulse' : ''
              }`}
              style={{ backgroundColor: theme.color }}
            >
              {content.Number[currentIndex]}
            </span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-600">
                {currentIndex + 1} of {content.Arabic.length}
              </span>
              {audioEnabled && isCurrentBlock && (
                <div 
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: theme.color }}
                >
                  {isBlockPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>Playing</span>
                </div>
              )}
            </div>
            {audioEnabled && (
              <Button
                onClick={() => {
                  onBlockSelect?.(currentIndex);
                  if (currentAudioIndex === currentIndex) {
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
            )}
          </div>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            disabled={currentIndex === content.Arabic.length - 1}
            className="flex items-center gap-2"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Card */}
        <div 
          className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg min-h-[400px] flex flex-col justify-center cursor-pointer transition-all duration-300 ${
            isCurrentBlock ? 'ring-2 ring-offset-2' : ''
          }`}
          style={{ 
            borderLeft: `4px solid ${theme.color}`,
            backgroundColor: isCurrentBlock ? `${theme.color}08` : undefined
          }}
          onClick={() => audioEnabled && onBlockSelect?.(currentIndex)}
        >
          {(displayLanguage === 'arabic' || displayLanguage === 'both') && (
            <div className="text-right mb-8">
              <p className={`text-2xl md:text-3xl leading-relaxed ${arabicFontClass} text-gray-800 arabic-text`} dir="rtl">
                {content.Arabic[currentIndex]}
              </p>
            </div>
          )}
          
          {(displayLanguage === 'english' || displayLanguage === 'both') && (
            <div className="text-left">
              <p className={`text-lg md:text-xl leading-relaxed ${englishFontClass} text-gray-600 english-text`}>
                {content.English[currentIndex]}
              </p>
            </div>
          )}
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {content.Arabic.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'scale-110' : 'opacity-50 hover:opacity-75'
              } ${audioEnabled && currentAudioIndex === index ? 'animate-pulse' : ''}`}
              style={{ backgroundColor: theme.color }}
            />
          ))}
        </div>
        {currentIndex === content.Arabic.length - 1 && (
          <EndOfDuasBadge selectedDay={selectedDay} />
        )}
      </div>
    </div>
  );
};
