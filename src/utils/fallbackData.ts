
import { ApiData } from '@/types';

export const getFallbackData = (): ApiData => ({
  Sunday: {
    Number: [1, 2, 3],
    Arabic: ['اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ', 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ'],
    English: ['O Allah, send blessings upon Muhammad and the family of Muhammad', 'Our Lord, forgive us our sins', 'Glory be to Allah and praise be to Him']
  },
  Monday: {
    Number: [1, 2],
    Arabic: ['لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ', 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ'],
    English: ['There is no god but Allah, Muhammad is the messenger of Allah', 'I seek forgiveness from Allah, the Magnificent']
  },
  Tuesday: {
    Number: [1, 2],
    Arabic: ['بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ'],
    English: ['In the name of Allah, the Most Gracious, the Most Merciful', 'All praise is due to Allah, Lord of all the worlds']
  },
  Wednesday: {
    Number: [1, 2],
    Arabic: ['اللَّهُمَّ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ'],
    English: ['O Allah, guide us to the straight path', 'The path of those You have blessed']
  },
  Thursday: {
    Number: [1, 2],
    Arabic: ['قُلْ هُوَ اللَّهُ أَحَدٌ', 'اللَّهُ الصَّمَدُ'],
    English: ['Say: He is Allah, the One', 'Allah, the Eternal, Absolute']
  },
  Friday: {
    Number: [1, 2],
    Arabic: ['اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', 'وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ'],
    English: ['O Allah, send prayers and peace upon our Prophet Muhammad', 'And upon his family and all his companions']
  },
  Saturday: {
    Number: [1, 2],
    Arabic: ['سُبْحَانَ رَبِّيَ الْعَظِيمِ', 'سُبْحَانَ رَبِّيَ الْأَعْلَى'],
    English: ['Glory be to my Lord, the Magnificent', 'Glory be to my Lord, the Most High']
  }
});
