
import { useState, useRef, useCallback } from 'react';

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      
      audioRef.current.addEventListener('loadstart', () => {
        console.log('Audio loading started');
        setIsLoading(true);
        setError(null);
      });
      
      audioRef.current.addEventListener('canplay', () => {
        console.log('Audio can play');
        setIsLoading(false);
        setDuration(audioRef.current?.duration || 0);
      });
      
      audioRef.current.addEventListener('play', () => {
        console.log('Audio started playing');
        setIsPlaying(true);
      });
      
      audioRef.current.addEventListener('pause', () => {
        console.log('Audio paused');
        setIsPlaying(false);
      });
      
      audioRef.current.addEventListener('ended', () => {
        console.log('Audio ended');
        setIsPlaying(false);
        setCurrentTime(0);
      });
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        setError('Failed to load audio');
        setIsLoading(false);
        setIsPlaying(false);
      });
      
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      });
    }
  }, []);

  const loadAudio = useCallback((src: string) => {
    console.log('Loading audio from:', src);
    initializeAudio();
    
    if (audioRef.current && src) {
      audioRef.current.src = src;
      audioRef.current.load();
    }
  }, [initializeAudio]);

  const play = useCallback(async () => {
    if (audioRef.current) {
      try {
        console.log('Attempting to play audio');
        await audioRef.current.play();
        
        // Start time tracking
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }, 1000);
        
      } catch (error) {
        console.error('Error playing audio:', error);
        setError('Failed to play audio');
        setIsPlaying(false);
      }
    } else {
      console.warn('No audio element available');
      // For demo purposes when no actual audio file
      setIsPlaying(true);
      console.log('Demo: Audio playback started');
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      
      // Clear time tracking
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // For demo purposes
      setIsPlaying(false);
      console.log('Demo: Audio playback paused');
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      
      // Clear time tracking
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    setIsPlaying(false);
    console.log('Audio stopped');
  }, []);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    isLoading,
    error,
    loadAudio,
    play,
    pause,
    stop,
    seekTo,
    setVolume
  };
};
