
export interface DuaContent {
  Number: number[];
  Arabic: string[];
  English: string[];
}

export interface ApiData {
  [key: string]: DuaContent;
}

export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export type LayoutMode = 'Classic' | 'Dual' | 'Carousel';

export type DisplayLanguage = 'arabic' | 'english' | 'both';

export interface DayTheme {
  color: string;
  name: string;
  background: string;
  gradient: string;
}

export const DAY_THEMES: Record<DayOfWeek, DayTheme> = {
  Sunday: { 
    color: '#5B3B3B', 
    name: 'Deep Muted Brown',
    background: '#f8f4f0',
    gradient: '#e8ddd4'
  },
  Monday: { 
    color: '#6F6B5D', 
    name: 'Olive Khaki',
    background: '#f9f8f6',
    gradient: '#ebe9e4'
  },
  Tuesday: { 
    color: '#4A5056', 
    name: 'Slate Gray',
    background: '#f6f7f8',
    gradient: '#e5e8ea'
  },
  Wednesday: { 
    color: '#5C4E66', 
    name: 'Deep Plum',
    background: '#f7f5f8',
    gradient: '#e9e5eb'
  },
  Thursday: { 
    color: '#705C43', 
    name: 'Burnt Ochre',
    background: '#f8f6f3',
    gradient: '#ebe7e0'
  },
  Friday: { 
    color: '#4E6561', 
    name: 'Muted Teal',
    background: '#f5f7f7',
    gradient: '#e4e9e8'
  },
  Saturday: { 
    color: '#6D5A5A', 
    name: 'Dusty Rose',
    background: '#f8f6f6',
    gradient: '#ebe6e6'
  }
};

export interface AppState {
  selectedDay: DayOfWeek;
  selectedLayout: LayoutMode;
  showHizbulBahr: boolean;
  arabicVisible: boolean;
  englishVisible: boolean;
  audioEnabled: boolean;
  audioMode: 'block' | 'all';
  isPlaying: boolean;
  animationEnabled: boolean;
  viewMode: 'still' | 'slide';
}
