
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { SixDirectionalDiagram } from './SixDirectionalDiagram';

interface HizbulBahrInstructionsProps {
  selectedDay: DayOfWeek;
}

export const HizbulBahrInstructions: React.FC<HizbulBahrInstructionsProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Reading Instructions</h3>
      </div>

      <div className="grid gap-6">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-3">Spiritual Preparation</h4>
          <ol className="text-gray-700 leading-relaxed space-y-1">
            <li>1. Perform ablution (wudu) if possible</li>
            <li>2. Face the Qibla direction</li>
            <li>3. Sit or stand with dignity and humility</li>
            <li>4. Clear your heart and focus your intention</li>
          </ol>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-3">Hand Gestures</h4>
          <ol className="text-gray-700 leading-relaxed space-y-1">
            <li>1. Close your little finger while reciting the mystical letters</li>
            <li>2. Keep other fingers naturally positioned</li>
            <li>3. Place hands on your knees or in your lap</li>
            <li>4. Maintain the gesture throughout the mystical sections</li>
          </ol>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-3">Timing & Frequency</h4>
          <ol className="text-gray-700 leading-relaxed space-y-1">
            <li>1. Best recited after Fajr or Maghrib prayers</li>
            <li>2. Can be recited anytime for protection</li>
            <li>3. Especially recommended before travel</li>
            <li>4. Daily recitation brings continuous blessings</li>
          </ol>
        </div>

        {/* Modern Circular Six-Directional Diagram */}
        <div 
          className="p-8 rounded-xl text-center"
          style={{ backgroundColor: `${theme.color}05`, border: `2px solid ${theme.color}20` }}
        >
          <SixDirectionalDiagram selectedDay={selectedDay} />
        </div>
      </div>
    </div>
  );
};
