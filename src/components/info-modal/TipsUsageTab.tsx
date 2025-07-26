
import React from 'react';
import { Lightbulb, Navigation, Heart } from 'lucide-react';

export const TipsUsageTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Best Practices</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <strong>Daily Routine:</strong> Read your current day's du'ās each morning</li>
            <li>• <strong>Audio Learning:</strong> Use audio mode to learn proper pronunciation</li>
            <li>• <strong>Language Switching:</strong> Start with English, gradually include Arabic</li>
            <li>• <strong>Progress Tracking:</strong> Check completed days to maintain consistency</li>
            <li>• <strong>Quiet Environment:</strong> Find a peaceful space for spiritual reflection</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Navigation className="w-6 h-6 text-sky-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Quick Navigation</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <strong>Header Icons:</strong> Settings, Info, and Publisher information</li>
            <li>• <strong>Footer:</strong> Back to top button for long content</li>
            <li>• <strong>Day Buttons:</strong> Quick switch between different days</li>
            <li>• <strong>Hizbul Bahr:</strong> Access via settings or direct toggle</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Heart className="w-6 h-6 text-lime-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Spiritual Benefits</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <strong>Consistency:</strong> Daily practice builds spiritual discipline</li>
            <li>• <strong>Variety:</strong> Each day offers unique spiritual themes</li>
            <li>• <strong>Accessibility:</strong> Multiple languages and formats for everyone</li>
            <li>• <strong>Flexibility:</strong> Customize experience to your needs</li>
            <li>• <strong>Progress:</strong> Visual tracking encourages regular engagement</li>
          </ul>
        </div>
      </div>

      <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Remember:</strong> This is a spiritual journey. Take your time, be consistent, and approach each du'ā with sincerity and reflection.
        </p>
      </div>
    </div>
  );
};
