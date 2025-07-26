
// Centralized font utility functions with Indo-Pak as default

export const getArabicFontClass = (fontId: string): string => {
  console.log('Getting Arabic font class for:', fontId);
  
  const fontClassMap: Record<string, string> = {
    'indopak': 'font-indopak',
    'scheherazade': 'font-scheherazade',
    'amiri': 'font-amiri'
  };
  
  const fontClass = fontClassMap[fontId] || 'font-indopak'; // Default to Indo-Pak
  console.log('Returning Arabic font class:', fontClass);
  return fontClass;
};

export const getEnglishFontClass = (fontId: string): string => {
  const fontClassMap: Record<string, string> = {
    'poppins': 'font-poppins',
    'georgia': 'font-georgia',
    'times': 'font-times',
    'inter': 'font-inter',
    'roboto': 'font-roboto'
  };
  
  return fontClassMap[fontId] || 'font-poppins';
};

export const getFontClassName = (language: 'arabic' | 'english', fontId: string): string => {
  if (language === 'arabic') {
    return getArabicFontClass(fontId);
  } else {
    return getEnglishFontClass(fontId);
  }
};

// Font validation helper
export const isValidArabicFont = (fontId: string): boolean => {
  return ['indopak', 'scheherazade', 'amiri'].includes(fontId);
};

export const isValidEnglishFont = (fontId: string): boolean => {
  return ['poppins', 'georgia', 'times', 'inter', 'roboto'].includes(fontId);
};

// Debug function to check font loading
export const debugFontLoading = () => {
  console.log('=== Font Loading Debug ===');
  console.log('Available fonts:', document.fonts);
  console.log('Indo-Pak font elements:', document.querySelectorAll('.font-indopak'));
  
  // Check if Indo-Pak font is loaded
  const indoPakElements = document.querySelectorAll('.font-indopak');
  indoPakElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    console.log(`Element ${index} font-family:`, computedStyle.fontFamily);
  });
};
