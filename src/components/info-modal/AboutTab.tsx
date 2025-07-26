
import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

export const AboutTab: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Munājāat-e-Maqbūl is a timeless collection of Qur'ānic and Prophetic du'ās compiled by Maulana Ashraf Ali Thanwi (رحمه الله). The du'ās are organized by the days of the week and serve as a spiritual guide for Muslims seeking closeness to Allāh.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Originally written in Urdu and Arabic, this English version makes it easier for everyone to benefit daily from these beautiful supplications.
        </p>
      </div>
      
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Sacred Collection</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Based on "Munājāat Maqbūl" by Ashraf 'Ali Thanawi, a collection of authentic Islamic supplications.
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Spiritual Journey</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Experience different reading modes, audio playback, and view options for a personalized spiritual experience.
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 text-center italic leading-relaxed">
          "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." - Quran 2:186
        </p>
      </div>
    </div>
  );
};
