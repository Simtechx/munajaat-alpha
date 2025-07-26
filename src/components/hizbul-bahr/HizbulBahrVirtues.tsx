
import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface HizbulBahrVirtuesProps {
  selectedDay: DayOfWeek;
}

export const HizbulBahrVirtues: React.FC<HizbulBahrVirtuesProps> = ({ selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Virtues of Hizb al-Bahr</h3>
        <p className="text-base md:text-lg text-gray-600 mb-4">by Imam Abul Hasan al-Shadhili (d. 1258 CE)</p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed px-2">
          Hizb al-Baḥr is a powerful and widely recited litany attributed to the great Moroccan Sufi master 
          Imam Abul Hasan al-Shadhili, founder of the Shadhili Sufi order. Composed during a sea voyage, 
          it is known for its majestic language, Quranic invocations, and spiritual potency.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6">
        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Protection from Harm and Calamity</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            Imam al-Shadhili composed this litany when his ship was caught in a severe storm. Upon completion 
            and recitation, the storm miraculously calmed—hence the name 'Litany of the Sea.' It has since been 
            read for safety during travel and protection from enemies, evil forces, and natural disasters.
          </p>
        </div>

        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Strengthening of Tawakkul (Reliance on God)</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            The litany repeatedly emphasizes tawakkul 'ala Allah (reliance upon Allah), reminding the reciter 
            that true safety, victory, and guidance come solely from Him. It fosters spiritual surrender and 
            inner confidence rooted in divine trust.
          </p>
        </div>

        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Spiritual Empowerment and Courage</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            The supplication includes powerful invocations for izzah (dignity), nusrah (divine help), and 
            ghalabah (victory over adversaries). It instills a sense of spiritual authority and fearlessness 
            when facing challenges.
          </p>
        </div>

        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Divine Assistance in Times of Uncertainty</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            Ideal for moments of confusion, fear, or decision-making—whether personal, professional, or spiritual. 
            The phrase: 'O Allah, if You have written me among the wretched, erase it and write me among the blessed' 
            appeals for divine reordering of one's destiny.
          </p>
        </div>

        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Shield Against Evil Eye and Hidden Forces</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            The litany includes supplications for protection from jinn, magic, the evil eye, and secret plots. 
            It is traditionally believed to guard against spiritual harm and unseen threats.
          </p>
        </div>

        <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: `${theme.color}10` }}>
          <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Gateway to Divine Intimacy</h4>
          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
            The rhythm and divine names draw the heart into a state of remembrance (dhikr), leading to presence 
            (hudūr) with Allah. For Sufis and seekers, it is a tool for spiritual connection and alignment with divine will.
          </p>
        </div>
      </div>
    </div>
  );
};
