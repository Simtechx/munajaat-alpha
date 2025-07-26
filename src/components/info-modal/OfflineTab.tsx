
import React from 'react';
import { Wifi, WifiOff, Download, Smartphone, RefreshCw, CheckCircle } from 'lucide-react';

export const OfflineTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <Wifi className="w-5 h-5" />
          How Offline Mode Works
        </h3>
        <p className="text-sm text-blue-700">
          Once loaded online, this app works completely offline with all features available anytime, anywhere!
        </p>
      </div>

      <div className="space-y-5">
        {/* First Load Section */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">🌐 1. First Load (With Internet)</h4>
            <p className="text-sm text-gray-600 mb-3">
              When you open the app for the first time with an internet connection:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• All essential files (HTML, CSS, JS, images, fonts) are downloaded and cached</li>
              <li>• A service worker is installed to handle offline support</li>
              <li>• Google Fonts and custom fonts are saved locally</li>
              <li>• Spiritual content and audio files are cached</li>
              <li>• The app becomes fully ready to use even without internet later</li>
            </ul>
          </div>
        </div>

        {/* Using Offline Section */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">📱 2. Using the App Offline (No Internet)</h4>
            <p className="text-sm text-gray-600 mb-3">
              Once everything is cached:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• The app works completely offline — no need for Wi-Fi or mobile data</li>
              <li>• All content, images, and fonts load instantly from your device</li>
              <li>• You can read, listen to audio, and navigate the app just like normal</li>
              <li>• Ideal for use while traveling (flights, trains, remote areas)</li>
            </ul>
          </div>
        </div>

        {/* Smart Caching Section */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <RefreshCw className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">✅ 3. Smart Caching System</h4>
            <ul className="text-sm text-gray-600 space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="font-medium text-green-600">Online:</span>
                <span>The app checks for updates and refreshes its cache in the background</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-orange-600">Offline:</span>
                <span>Cached data is used automatically with no interruptions</span>
              </li>
              <li>• Sync resumes in the background as soon as you're reconnected</li>
              <li>• A small orange "Offline Mode" badge will appear when you're offline</li>
            </ul>
          </div>
        </div>

        {/* Final Note */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-800">Ready for Offline Use</h4>
          </div>
          <p className="text-sm text-green-700">
            Once the app has been opened online at least once, you can enjoy full offline access anytime — 
            including all spiritual content, audio, images, and features.
          </p>
        </div>
      </div>
    </div>
  );
};
