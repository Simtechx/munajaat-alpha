import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipForward, Repeat, Building2, RotateCcw, Info } from 'lucide-react';
import { SimpleTooltip } from '@/components/ui/simple-tooltip';
import { AudioHelpPanel } from './AudioHelpPanel';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface AudioControlsManagerProps {
  isVisible: boolean;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onReset: () => void;
  audioMode: 'block' | 'all';
  onAudioModeToggle: () => void;
  selectedDay: DayOfWeek;
  currentAudioIndex: number;
  totalBlocks: number;
  audioSrc?: string;
}

export const AudioControlsManager: React.FC<AudioControlsManagerProps> = ({
  isVisible,
  isPlaying,
  onPlayPause,
  onNext,
  onReset,
  audioMode,
  onAudioModeToggle,
  selectedDay,
  currentAudioIndex,
  totalBlocks,
  audioSrc
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showHelp, setShowHelp] = useState(false);
  const theme = DAY_THEMES[selectedDay];

  // Audio management
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    audio.src = audioSrc;
    
    const handleEnded = () => {
      if (audioMode === 'all') {
        onNext();
      } else {
        onReset();
      }
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [audioSrc, audioMode, onNext, onReset]);

  // Playback control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Audio play failed:', error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleReset = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.pause();
    }
    onReset();
  };

  console.log('AudioControlsManager render - isVisible:', isVisible, 'isPlaying:', isPlaying);
  
  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />
      
      {/* Fixed Audio Controls */}
      <div 
        className={`fixed bottom-10 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Help Panel */}
        <AudioHelpPanel 
          selectedDay={selectedDay} 
          isVisible={showHelp} 
          onClose={() => setShowHelp(false)}
          currentAudioIndex={currentAudioIndex}
          totalBlocks={totalBlocks}
          audioMode={audioMode}
        />
        
        <div className="mx-4 mb-4">
          <div 
            className="flex items-center justify-center gap-3 p-4 rounded-xl shadow-lg backdrop-blur-sm"
            style={{ 
              backgroundColor: `${theme.color}10`, 
              borderColor: theme.color, 
              borderWidth: '1px' 
            }}
          >
            {/* Mode Toggle Button */}
            <SimpleTooltip content="Toggle: Play All / One Block" side="top">
              <Button
                onClick={onAudioModeToggle}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 px-2"
                style={{
                  backgroundColor: audioMode === 'all' ? theme.color : 'white',
                  borderColor: theme.color,
                  color: audioMode === 'all' ? 'white' : theme.color
                }}
              >
                {audioMode === 'all' ? (
                  <>
                    <Repeat className="w-3 h-3" />
                    <span className="text-xs font-medium">ALL {currentAudioIndex + 1}-{totalBlocks}</span>
                  </>
                ) : (
                  <>
                    <Building2 className="w-3 h-3" />
                    <span className="text-xs font-medium">DUA {currentAudioIndex + 1}-{totalBlocks}</span>
                  </>
                )}
              </Button>
            </SimpleTooltip>
            
            {/* Reset Button */}
            <SimpleTooltip content="Restart current block/session" side="top">
              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                style={{ borderColor: theme.color, color: theme.color }}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </SimpleTooltip>
            
            {/* Play/Pause Button */}
            <SimpleTooltip content="Play or Pause" side="top">
              <Button
                onClick={onPlayPause}
                variant="default"
                size="lg"
                className="text-white px-6"
                style={{ backgroundColor: theme.color }}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
            </SimpleTooltip>
            
            {/* Next Button */}
            <SimpleTooltip content="Go to next block" side="top">
              <Button
                onClick={onNext}
                variant="outline"
                size="sm"
                style={{ borderColor: theme.color, color: theme.color }}
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </SimpleTooltip>
            
            {/* Help Button */}
            <SimpleTooltip content="Player Controls Help" side="top">
              <Button
                onClick={() => setShowHelp(!showHelp)}
                variant="outline"
                size="sm"
                style={{ borderColor: theme.color, color: theme.color }}
              >
                <Info className="w-3 h-3" />
              </Button>
            </SimpleTooltip>
          </div>
        </div>
      </div>
    </>
  );
};