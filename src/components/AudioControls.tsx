
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipForward, Repeat, RotateCcw } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onReset: () => void;
  continuousMode: boolean;
  onContinuousModeToggle: () => void;
  selectedDay: DayOfWeek;
  audioSrc?: string;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onReset,
  continuousMode,
  onContinuousModeToggle,
  selectedDay,
  audioSrc
}) => {
  const theme = DAY_THEMES[selectedDay];
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioSrc) {
      console.log('Loading audio src:', audioSrc);
      audio.src = audioSrc;
      audio.load();
    }

    const handleEnded = () => {
      console.log('Audio ended, continuous mode:', continuousMode);
      if (continuousMode) {
        onNext();
      } else {
        onReset();
      }
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
    };

    const handleLoadStart = () => {
      console.log('Audio load started');
    };

    const handleCanPlay = () => {
      console.log('Audio can play');
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [audioSrc, continuousMode, onNext, onReset]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      console.log('Attempting to play audio');
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      console.log('Pausing audio');
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    console.log('Play/Pause clicked, current state:', isPlaying);
    onPlayPause();
  };

  const handleReset = () => {
    console.log('Reset clicked');
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.pause();
    }
    onReset();
  };

  const handleNext = () => {
    console.log('Next clicked');
    onNext();
  };

  const handleContinuousToggle = () => {
    console.log('Continuous mode toggle clicked, current:', continuousMode);
    onContinuousModeToggle();
  };

  return (
    <>
      <audio 
        ref={audioRef}
        preload="metadata"
        style={{ display: 'none' }}
      />
      <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl">
        <Button
          onClick={handleContinuousToggle}
          variant={continuousMode ? "default" : "outline"}
          size="sm"
          className={continuousMode ? 'text-white' : ''}
          style={{
            backgroundColor: continuousMode ? theme.color : 'transparent',
            borderColor: theme.color,
            color: continuousMode ? 'white' : theme.color
          }}
        >
          <Repeat className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handleReset}
          variant="outline"
          size="sm"
          style={{ borderColor: theme.color, color: theme.color }}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handlePlayPause}
          variant="default"
          size="lg"
          className="text-white px-6"
          style={{ backgroundColor: theme.color }}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <Button
          onClick={handleNext}
          variant="outline"
          size="sm"
          style={{ borderColor: theme.color, color: theme.color }}
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
};
