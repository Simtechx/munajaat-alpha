
import React from 'react';
import { Settings, BookOpen, Palette, Target } from 'lucide-react';

export const ViewControlsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Settings className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Layout Modes</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Choose your preferred reading layout from the view controls panel.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Classic:</strong> Traditional side-by-side Arabic and English</li>
            <li>• <strong>Dual:</strong> Optimized dual-column layout</li>
            <li>• <strong>Swipe:</strong> Touch-friendly swipe through du'ās one by one</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Language Display</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Control which languages are visible during your reading.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Toggle Arabic text on/off</li>
            <li>• Toggle English translation on/off</li>
            <li>• View both languages simultaneously</li>
            <li>• Focus on single language when needed</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
