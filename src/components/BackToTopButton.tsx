
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';

interface BackToTopButtonProps {
  selectedDay: DayOfWeek;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  selectedDay,
}) => {
  const theme = DAY_THEMES[selectedDay];
  const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 backdrop-blur-sm border-2"
      style={{ 
        backgroundColor: theme.color,
        borderColor: theme.color,
        color: 'white'
      }}
    >
      <ArrowUp className="w-4 h-4" />
      {!isMobile && <span>Top</span>}
    </Button>
  );
};
