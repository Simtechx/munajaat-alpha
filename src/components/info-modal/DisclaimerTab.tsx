
import React from 'react';
import { AlertTriangle, BookOpen, Shield } from 'lucide-react';

export const DisclaimerTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3 className="font-semibold text-amber-800">Important Notice</h3>
        </div>
        <p className="text-sm text-amber-700">
          This is a spiritual companion tool. Please consult qualified scholars for religious guidance.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">Purpose & Scope</h4>
            <p className="text-sm text-gray-600 mb-3">
              Munājāt Companion is a spiritual tool designed to assist users in reading, reflecting on, and listening to selected Islamic supplications. While every effort has been made to ensure the authenticity, accuracy, and respectful presentation of the content, this app is not a substitute for formal religious study or scholarly consultation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">Content Sources & Accuracy</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• The du'ās included are sourced from trusted compilations such as Munājāt Maqbūl by Ashraf ʿAlī Thānwī and other traditional texts</li>
              <li>• Translations are provided for personal understanding and may vary slightly depending on interpretation</li>
              <li>• Audio recitations, where included, aim to support pronunciation and spiritual reflection but are not intended for instructional tajwīd purposes</li>
            </ul>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-800 mb-2">Important Limitations</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• The app does not offer religious rulings (fatāwā) and should not be used as a sole guide for religious practice</li>
            <li>• By using this app, you agree that the developers, designers, and contributors are not liable for any decisions or actions taken based on the content presented</li>
            <li>• We encourage all users to consult qualified scholars for matters of Islamic law or interpretation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
