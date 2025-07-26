
import React from 'react';
import { Navigation, Palette, Settings } from 'lucide-react';

export const SpecialFeaturesTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Navigation className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Hizbul Bahr</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Access the special "Litany of the Sea" protection prayer.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Switch Mode:</strong> Toggle from Settings → Special Collections</li>
            <li>• <strong>Six Directions:</strong> Interactive directional diagram</li>
            <li>• <strong>History & Virtues:</strong> Learn about its significance</li>
            <li>• <strong>Return:</strong> Easy switch back to weekly Munājāt</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Palette className="w-6 h-6 text-violet-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Theme System</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Each day has its own unique color theme and spiritual ambiance.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Sunday:</strong> Golden dawn theme</li>
            <li>• <strong>Monday:</strong> Peaceful blue</li>
            <li>• <strong>Tuesday:</strong> Energetic red</li>
            <li>• <strong>Wednesday:</strong> Growth green</li>
            <li>• <strong>Thursday:</strong> Wisdom purple</li>
            <li>• <strong>Friday:</strong> Sacred amber</li>
            <li>• <strong>Saturday:</strong> Serene indigo</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Settings className="w-6 h-6 text-rose-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Reading Modes</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Different viewing experiences for various preferences.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Classic Mode:</strong> Traditional static display</li>
            <li>• <strong>Dual Mode:</strong> Optimized dual-column layout</li>
            <li>• <strong>Swipe Mode:</strong> Touch-friendly swipe through du'ās one by one</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
