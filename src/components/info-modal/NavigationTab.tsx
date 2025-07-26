
import React from 'react';
import { Calendar, Navigation, ArrowUp } from 'lucide-react';

export const NavigationTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Calendar className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Day Selection</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Click on any day button to view that day's special du'ās. Each day has unique supplications for your spiritual journey.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Colored buttons:</strong> Each day has its own theme color</li>
            <li>• <strong>Current day:</strong> Today's day is highlighted with special indicators</li>
            <li>• <strong>Active selection:</strong> Selected day shows with enhanced styling</li>
          </ul>
        </div>
      </div>


      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <ArrowUp className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Back to Top</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Use the arrow button in the bottom right footer to quickly return to the top.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Appears when scrolling down through content</li>
            <li>• Smooth scroll animation back to top</li>
            <li>• Convenient for long du'ā collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
