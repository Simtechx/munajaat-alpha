
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface SixDirectionalDiagramProps {
  selectedDay: DayOfWeek;
}

export const SixDirectionalDiagram: React.FC<SixDirectionalDiagramProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  const directions = [
    { name: 'Above', position: 'top-2 left-1/2 transform -translate-x-1/2', symbol: '↑', color: '#8B7355' },
    { name: 'East', position: 'top-1/2 right-2 transform -translate-y-1/2', symbol: '→', color: '#A0845C' },
    { name: 'Below', position: 'bottom-2 left-1/2 transform -translate-x-1/2', symbol: '↓', color: '#8B7355' },
    { name: 'West', position: 'top-1/2 left-2 transform -translate-y-1/2', symbol: '←', color: '#A0845C' },
    { name: 'North', position: 'top-6 right-6', symbol: '↗', color: '#B8956A' },
    { name: 'South', position: 'bottom-6 left-6', symbol: '↙', color: '#B8956A' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6">
      <h4 className="font-bold text-gray-800 text-base md:text-lg mb-2">Six-Directional Blowing</h4>
      
      {/* Responsive Circular Diagram */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Main Circle */}
        <div 
          className="w-full h-full rounded-full border-3 shadow-lg relative"
          style={{ 
            borderColor: '#8B7355',
            background: 'linear-gradient(135deg, #F5F1EB 0%, #EAE3D8 100%)'
          }}
        >
          {/* Center Point - You */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg"
            style={{ backgroundColor: '#8B7355' }}
          >
            YOU
          </div>
          
          {/* Direction Points */}
          {directions.map((direction, index) => (
            <div key={direction.name} className={`absolute ${direction.position}`}>
              <div className="flex flex-col items-center">
                <div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: direction.color }}
                >
                  {direction.symbol}
                </div>
                <span 
                  className="text-[10px] md:text-xs font-medium mt-1 px-1.5 py-0.5 rounded-full text-white whitespace-nowrap"
                  style={{ backgroundColor: `${direction.color}dd` }}
                >
                  {direction.name}
                </span>
              </div>
            </div>
          ))}
          
          {/* Connecting Lines - Responsive */}
          <div className="absolute inset-2 md:inset-4">
            {/* Horizontal Line */}
            <div 
              className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2"
              style={{ backgroundColor: '#8B735540' }}
            />
            {/* Vertical Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
              style={{ backgroundColor: '#8B735540' }}
            />
            {/* Diagonal Lines */}
            <div 
              className="absolute inset-0 rounded-full border border-transparent"
              style={{ 
                borderTopColor: '#8B735530',
                borderBottomColor: '#8B735530',
                transform: 'rotate(45deg)'
              }}
            />
            <div 
              className="absolute inset-0 rounded-full border border-transparent"
              style={{ 
                borderTopColor: '#8B735530',
                borderBottomColor: '#8B735530',
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div 
        className="p-3 md:p-4 rounded-lg text-center max-w-xs md:max-w-md"
        style={{ backgroundColor: '#F5F1EB', border: '1px solid #E0D5C7' }}
      >
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold text-amber-800">
            After completing the full recitation:
          </span>
          <br />
          <span className="text-xs md:text-sm">
            Blow gently in each direction, starting from Above and moving clockwise, 
            then to North and South to complete the six directions.
          </span>
        </p>
      </div>
    </div>
  );
};
