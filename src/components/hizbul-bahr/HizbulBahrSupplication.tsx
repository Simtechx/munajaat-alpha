import React from 'react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { getFontClassName } from '@/utils/fontUtils';

interface HizbulBahrSupplicationProps {
  selectedDay: DayOfWeek;
  arabicVisible: boolean;
  englishVisible: boolean;
  arabicFont?: string;
  englishFont?: string;
}

export const HizbulBahrSupplication: React.FC<HizbulBahrSupplicationProps> = ({
  selectedDay,
  arabicVisible,
  englishVisible,
  arabicFont = 'indopak', // Default to Indo-Pak
  englishFont = 'poppins'
}) => {
  const theme = DAY_THEMES[selectedDay];
  const arabicFontClass = getFontClassName('arabic', arabicFont);
  const englishFontClass = getFontClassName('english', englishFont);

  console.log('HizbulBahr Font Debug:', { arabicFont, arabicFontClass, englishFont, englishFontClass });

  const hizbulBahrContent = [
    {
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
      english: 'In the name of Allah, the Most Gracious, the Most Merciful'
    },
    {
      arabic: 'اللَّهُمَّ يَا عَلِيُّ يَا عَظِيمُ يَا حَلِيمُ يَا عَلِيمُ',
      english: 'O Allah, O Most High, O Most Great, O Most Forbearing, O All-Knowing'
    },
    {
      arabic: 'أَنْتَ رَبِّي وَعِلْمُكَ حَسْبِي',
      english: 'You are my Lord and Your knowledge is sufficient for me'
    },
    {
      arabic: 'فَنِعْمَ الرَّبُّ رَبِّي وَنِعْمَ الْحَسْبُ حَسْبِي',
      english: 'How excellent is my Lord as Lord, and how excellent is my sufficiency as sufficiency'
    },
    {
      arabic: 'تَنْصُرُ مَنْ تَشَاءُ وَأَنْتَ الْعَزِيزُ الرَّحِيمُ',
      english: 'You help whom You will, and You are the Mighty, the Merciful'
    },
    {
      arabic: 'نَسْأَلُكَ الْعِصْمَةَ فِي الْحَرَكَاتِ وَالسَّكَنَاتِ',
      english: 'We ask You for protection in our movements and in our times of rest'
    },
    {
      arabic: 'وَالْكَلِمَاتِ وَالْإِرَادَاتِ وَالْخَطَرَاتِ',
      english: 'And in our words, intentions, and passing thoughts'
    },
    {
      arabic: 'مِنَ الشُّكُوكِ وَالظُّنُونِ وَالْأَوْهَامِ',
      english: 'From doubts, suspicions, and illusions'
    },
    {
      arabic: 'السَّاتِرَةِ لِلْقُلُوبِ عَنْ مُطَالَعَةِ الْغُيُوبِ',
      english: 'That veil hearts from witnessing the unseen'
    },
    {
      arabic: 'فَقَدِ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا',
      english: 'For the believers have been tested and shaken with severe shaking',
      action: 'Point index finger to sky at "شديداً"'
    },
    {
      arabic: 'وَقَالَ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِمْ مَرَضٌ',
      english: 'And the hypocrites and those in whose hearts is disease said'
    },
    {
      arabic: 'مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ إِلَّا غُرُورًا',
      english: '"What Allah and His Messenger promised us was nothing but delusion"'
    },
    {
      arabic: 'وَإِذْ قَالَتْ طَائِفَةٌ مِنْهُمْ يَا أَهْلَ يَثْرِبَ',
      english: 'And when a faction of them said, "O people of Yathrib"'
    },
    {
      arabic: 'لَا مُقَامَ لَكُمْ فَارْجِعُوا',
      english: '"There is no stand for you, so return"'
    },
    {
      arabic: 'وَيَسْتَأْذِنُ فَرِيقٌ مِنْهُمُ النَّبِيَّ',
      english: 'And a party of them asked permission of the Prophet'
    },
    {
      arabic: 'يَقُولُونَ إِنَّ بُيُوتَنَا عَوْرَةٌ وَمَا هِيَ بِعَوْرَةٍ',
      english: 'Saying, "Indeed, our houses are unprotected," while they were not unprotected'
    },
    {
      arabic: 'إِنْ يُرِيدُونَ إِلَّا فِرَارًا',
      english: 'They intended nothing but flight'
    },
    {
      arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      english: 'Allah is sufficient for us and [He is] the best Disposer of affairs'
    },
    {
      arabic: 'نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ',
      english: 'Excellent is the protector, and excellent is the helper'
    },
    {
      arabic: 'كـهـيـعـص',
      english: 'Kaf Ha Ya Ain Sad',
      action: 'Close fingers: little→ring→middle→index→thumb'
    },
    {
      arabic: 'حـمـعـسـق',
      english: 'Ha Meem Ain Seen Qaf',
      action: 'Open fingers: little→ring→middle→index→thumb'
    },
    {
      arabic: 'أُمُورَنَا',
      english: 'Our affairs',
      action: 'Open little finger, think of your purpose'
    },
    {
      arabic: 'وَافْتَحْ لَنَا',
      english: 'And open for us',
      action: 'Open ring finger'
    },
    {
      arabic: 'وَاغْفِرْ لَنَا',
      english: 'And forgive us',
      action: 'Open middle finger'
    },
    {
      arabic: 'وُجُوهِ',
      english: 'Faces',
      action: 'Think of enemies, close fist pointing down, then open'
    },
    {
      arabic: 'شَاهَتِ الْوُجُوهُ',
      english: 'The faces are humiliated',
      action: 'Repeat 3x, strike back of hand on ground each time'
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {hizbulBahrContent.map((verse, index) => (
        <div 
          key={index} 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderLeft: `4px solid ${theme.color}` }}
        >
          <div className="mb-3">
            <span 
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
              style={{ backgroundColor: theme.color }}
            >
              {index + 1}
            </span>
          </div>
          
          {arabicVisible && (
            <div className="text-right mb-4">
              <p 
                className={`text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 px-2 ${arabicFontClass} arabic-text`}
                dir="rtl"
              >
                {verse.arabic}
              </p>
            </div>
          )}
          
          {englishVisible && (
            <div className="text-left mb-2">
              <p 
                className={`text-base md:text-lg leading-relaxed text-gray-700 px-2 ${englishFontClass} english-text`}
              >
                {verse.english}
              </p>
            </div>
          )}

          {verse.action && (
            <div className="mt-3 pt-2 border-t border-gray-200">
              <p 
                className="text-xs md:text-sm italic text-amber-700 px-2"
                style={{ backgroundColor: '#FEF7ED', borderRadius: '6px', padding: '6px 12px' }}
              >
                <strong>Action:</strong> {verse.action}
              </p>
            </div>
          )}
        </div>
      ))}
      
      {(!arabicVisible && !englishVisible) && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">Please select a language to display the Hizbul Bahr</p>
        </div>
      )}
    </div>
  );
};
