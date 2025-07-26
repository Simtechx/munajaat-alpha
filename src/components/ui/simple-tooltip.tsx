import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SimpleTooltipProps {
  children: React.ReactNode;
  content: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  children,
  content,
  side = 'top',
  className
}) => {
  const [visible, setVisible] = useState(false);

  const sideClasses = {
    top: '-top-8 left-1/2 transform -translate-x-1/2',
    bottom: '-bottom-8 left-1/2 transform -translate-x-1/2',
    left: 'top-1/2 -left-2 transform -translate-y-1/2 -translate-x-full',
    right: 'top-1/2 -right-2 transform -translate-y-1/2 translate-x-full'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div 
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-primary-foreground bg-primary rounded shadow-lg pointer-events-none whitespace-nowrap max-w-48",
            sideClasses[side],
            side === 'top' && "mb-2",
            side === 'bottom' && "mt-2", 
            "transform-gpu",
            className
          )}
          style={{
            left: side === 'top' || side === 'bottom' ? 'clamp(8px, 50%, calc(100vw - 8px - 100%))' : undefined
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};