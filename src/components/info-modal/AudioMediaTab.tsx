
import React from 'react';
import { Volume2, Settings } from 'lucide-react';

export const AudioMediaTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Volume2 className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Audio Controls</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Enable audio mode to follow along with recitation.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Play/Pause:</strong> Control audio playback</li>
            <li>• <strong>Next:</strong> Skip to next du'ā</li>
            <li>• <strong>Reset:</strong> Return to beginning</li>
            <li>• <strong>Continuous Mode:</strong> Auto-advance through all du'ās</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Settings className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Audio Features</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Enhanced audio experience for spiritual reflection.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>High Quality:</strong> Clear Arabic recitation</li>
            <li>• <strong>Offline Playback:</strong> Audio works without internet</li>
            <li>• <strong>Auto-scroll:</strong> Text follows audio progression</li>
            <li>• <strong>Repeat Options:</strong> Loop individual du'ās or entire day</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Volume2 className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Audio Modes</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Choose between different audio playback modes for your preference.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>DUA Mode:</strong> Play individual du'ās one at a time</li>
            <li>• <strong>ALL Mode:</strong> Continuous playback through all du'ās</li>
            <li>• <strong>Block Progress:</strong> See current position (e.g., "DUA 1-35")</li>
            <li>• <strong>Smart Controls:</strong> Play, pause, next, and reset buttons</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Settings className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Audio Navigation</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            Convenient navigation controls integrated into the audio interface.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Mode Toggle:</strong> Switch between DUA and ALL modes with one click</li>
            <li>• <strong>Progress Display:</strong> Current block number shown in mode button</li>
            <li>• <strong>Skip Controls:</strong> Next button to jump to next du'ā</li>
            <li>• <strong>Reset Function:</strong> Return to beginning of audio sequence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
