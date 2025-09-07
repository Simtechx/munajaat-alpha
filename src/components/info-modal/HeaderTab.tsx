import React from 'react';
import { MousePointer, ArrowLeftRight, Star } from 'lucide-react';

export const HeaderTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <MousePointer className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Header Click</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Click the header title to switch between modes.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Single Click:</strong> Switch to Hizbul Bahr mode</li>
            <li>• <strong>From Hizbul Bahr:</strong> Return to weekly Munājāt</li>
            <li>• <strong>Quick Toggle:</strong> Easy switching between collections</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <ArrowLeftRight className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Mode Switching</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Toggle between two spiritual collections.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Weekly Mode:</strong> Daily Munājāt for each day</li>
            <li>• <strong>Hizbul Bahr:</strong> Special protection prayer</li>
            <li>• <strong>Easy Return:</strong> Click header again to go back</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Star className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Hizbul Bahr Features</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Special features when in Hizbul Bahr mode.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Six Directions:</strong> Interactive directional diagram</li>
            <li>• <strong>History & Virtues:</strong> Learn about its significance</li>
            <li>• <strong>Protection Prayer:</strong> Traditional "Litany of the Sea"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};