
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface HizbulBahrHistoryProps {
  selectedDay: DayOfWeek;
}

export const HizbulBahrHistory: React.FC<HizbulBahrHistoryProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">History & Origin</h3>
      </div>

      <div className="grid gap-6">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2">Divine Origin</h4>
          <p className="text-gray-700 leading-relaxed">
            Imam Shadhili received this litany through spiritual vision from Prophet Muhammad ﷺ, who taught it 
            as a protection for travelers, especially those journeying by sea.
          </p>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2">The Ship Miracle</h4>
          <p className="text-gray-700 leading-relaxed">
            During a sea voyage, Imam Shadhili's ship was surrounded by enemy vessels. Upon reciting this litany, 
            a great fog descended, hiding their ship until they reached safety. The enemies could not see them 
            despite being very close.
          </p>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2">Christian Conversions</h4>
          <p className="text-gray-700 leading-relaxed">
            Historical accounts tell of Christian sailors who witnessed the power of this supplication and embraced 
            Islam after seeing its miraculous effects during storms and dangers at sea.
          </p>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2">Deathbed Advice</h4>
          <p className="text-gray-700 leading-relaxed">
            On his deathbed, Imam Shadhili advised his disciples: 'Hold fast to the Hizbul Bahr, for I received 
            it from the Prophet ﷺ, and whoever recites it will be safe from drowning, burning, theft, and all calamities.'
          </p>
        </div>

        <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${theme.color}20`, borderLeft: `4px solid ${theme.color}` }}>
          <h4 className="font-bold text-gray-800 mb-2">🌟 Spiritual Significance</h4>
          <p className="text-gray-700 leading-relaxed italic">
            "This litany connects the reciter to the prophetic tradition and the spiritual lineage of the righteous. 
            It is not merely words, but a means of divine protection and spiritual elevation."
          </p>
          <p className="text-sm text-gray-600 mt-2">— From the teachings of the Shadhili tradition</p>
        </div>
      </div>
    </div>
  );
};
