
import React, { useState, useEffect } from 'react';
import { DuaContent, DayOfWeek, DAY_THEMES, DisplayLanguage } from '@/types';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';

interface ReaderAudioLayoutProps {
  content: DuaContent;
  selectedDay: DayOfWeek;
  displayLanguage: DisplayLanguage;
}

export const ReaderAudioLayout: React.FC<ReaderAudioLayoutProps> = ({ content, selectedDay, displayLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedWord, setHighlightedWord] = useState(0);
  const theme = DAY_THEMES[selectedDay];
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      const currentArabic = content.Arabic[currentIndex];
      const words = currentArabic.split(' ');
      
      interval = setInterval(() => {
        setHighlightedWord((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 800); // Simulate word-by-word reading
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, content.Arabic]);
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setHighlightedWord(0);
    }
  };
  
  const nextDua = () => {
    setCurrentIndex((prev) => (prev + 1) % content.Arabic.length);
    setIsPlaying(false);
    setHighlightedWord(0);
  };
  
  const reset = () => {
    setHighlightedWord(0);
    setIsPlaying(false);
  };
  
  const renderHighlightedText = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span
        key={index}
        className={`transition-all duration-300 ${
          index === highlightedWord && isPlaying
            ? 'text-white rounded px-1'
            : ''
        }`}
        style={{
          backgroundColor: index === highlightedWord && isPlaying ? theme.color : 'transparent'
        }}
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <span 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold"
            style={{ backgroundColor: theme.color }}
          >
            {content.Number[currentIndex]}
          </span>
        </div>
        
        {(displayLanguage === 'arabic' || displayLanguage === 'both') && (
          <div className="text-right mb-8">
            <p className="text-2xl leading-relaxed font-arabic text-gray-800" style={{ fontFamily: 'Scheherazade, serif' }}>
              {renderHighlightedText(content.Arabic[currentIndex])}
            </p>
          </div>
        )}
        
        {(displayLanguage === 'english' || displayLanguage === 'both') && (
          <div className="text-left mb-8">
            <p className="text-lg leading-relaxed text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
              {content.English[currentIndex]}
            </p>
          </div>
        )}
        
        <div className="flex justify-center gap-4">
          <Button 
            onClick={togglePlayback}
            variant="default"
            className="text-white"
            style={{ backgroundColor: theme.color }}
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          
          <Button 
            onClick={reset}
            variant="outline"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          
          <Button 
            onClick={nextDua}
            variant="outline"
            style={{ borderColor: theme.color, color: theme.color }}
          >
            <SkipForward className="w-4 h-4 mr-2" />
            Next
          </Button>
        </div>
        
        <div className="text-center mt-4 text-sm text-gray-600">
          Du'a {currentIndex + 1} of {content.Arabic.length}
        </div>
      </div>
    </div>
  );
};
