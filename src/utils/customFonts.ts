
// Custom Arabic Fonts Configuration
// Supporting both direct download links and local font files

// Convert Google Drive links to direct download format  
const CUSTOM_ARABIC_FONTS = {
  // Local Indo-Pak font
  indoPak: {
    name: 'Indo-Pak Nastaleeq',
    localPath: '/indopak.ttf',
    className: 'font-indopak',
    fallback: 'Scheherazade New, serif',
    isLocal: true
  }
};

// Function to load local TTF font
const loadLocalFont = async (fontConfig: { name: string; localPath: string; className: string; fallback: string }) => {
  console.log(`🔄 Loading local font: ${fontConfig.name}`);
  console.log(`📍 Font path: ${fontConfig.localPath}`);
  
  try {
    const font = new FontFace(fontConfig.name, `url(${fontConfig.localPath})`);
    await font.load();
    document.fonts.add(font);
    
    // Add CSS class dynamically
    const style = document.createElement('style');
    style.textContent = `
      .${fontConfig.className} {
        font-family: "${fontConfig.name}", ${fontConfig.fallback};
      }
    `;
    document.head.appendChild(style);
    
    console.log(`✅ SUCCESS: ${fontConfig.name} loaded successfully`);
    return true;
  } catch (error) {
    console.log(`❌ FAILED: ${fontConfig.name} failed to load`);
    console.log(`📝 Error details:`, error);
    
    // Fallback to system font
    const style = document.createElement('style');
    style.textContent = `
      .${fontConfig.className} {
        font-family: ${fontConfig.fallback};
      }
    `;
    document.head.appendChild(style);
    
    console.log(`🔄 FALLBACK: Using system font for ${fontConfig.name}: ${fontConfig.fallback}`);
    return false;
  }
};

// Function to dynamically load fonts with enhanced testing
export const loadCustomFont = async (fontConfig: { name: string; localPath?: string; className: string; fallback: string; isLocal?: boolean; directUrl?: string; base64?: string }) => {
  if (fontConfig.isLocal) {
    return await loadLocalFont(fontConfig);
  }

  console.log(`🔄 Testing font: ${fontConfig.name}`);
  console.log(`📍 Font URL: ${fontConfig.directUrl}`);
  
  try {
    // Method 1: Try direct download
    const font = new FontFace(fontConfig.name, `url(${fontConfig.directUrl})`);
    await font.load();
    document.fonts.add(font);
    
    // Add CSS class dynamically
    const style = document.createElement('style');
    style.textContent = `
      .${fontConfig.className} {
        font-family: "${fontConfig.name}", ${fontConfig.fallback};
      }
    `;
    document.head.appendChild(style);
    
    console.log(`✅ SUCCESS: ${fontConfig.name} loaded successfully via direct URL`);
    return true;
  } catch (error) {
    console.log(`❌ FAILED: ${fontConfig.name} failed to load via direct URL`);
    console.log(`📝 Error details:`, error);
    
    // Method 2: Base64 fallback
    if (fontConfig.base64) {
      try {
        const font = new FontFace(fontConfig.name, `url(data:font/woff2;base64,${fontConfig.base64})`);
        await font.load();
        document.fonts.add(font);
        
        const style = document.createElement('style');
        style.textContent = `
          .${fontConfig.className} {
            font-family: "${fontConfig.name}", ${fontConfig.fallback};
          }
        `;
        document.head.appendChild(style);
        
        console.log(`✅ SUCCESS: ${fontConfig.name} loaded via Base64 fallback`);
        return true;
      } catch (base64Error) {
        console.log(`❌ FAILED: ${fontConfig.name} failed to load via Base64 fallback`);
        console.log(`📝 Base64 Error:`, base64Error);
      }
    } else {
      console.log(`⚠️  INFO: No Base64 fallback available for ${fontConfig.name}`);
    }
    
    // Method 3: Fallback to system font
    const style = document.createElement('style');
    style.textContent = `
      .${fontConfig.className} {
        font-family: ${fontConfig.fallback};
      }
    `;
    document.head.appendChild(style);
    
    console.log(`🔄 FALLBACK: Using system font for ${fontConfig.name}: ${fontConfig.fallback}`);
    return false;
  }
};

// Initialize custom fonts with enhanced logging and performance optimization
export const initializeCustomFonts = async () => {
  // Only initialize fonts in production or when explicitly needed
  if (process.env.NODE_ENV === 'development' && !window.location.search.includes('fonts=true')) {
    console.log('🚀 Skipping font initialization in development mode');
    return;
  }

  console.log('🚀 Initializing custom Arabic fonts...');
  console.log('📊 Font Loading Test Results:');
  console.log('================================');
  
  let successCount = 0;
  let totalCount = 0;
  
  // Load fonts in parallel for better performance
  const fontPromises = Object.entries(CUSTOM_ARABIC_FONTS).map(async ([key, config]) => {
    totalCount++;
    const success = await loadCustomFont(config);
    if (success) successCount++;
    console.log('--------------------------------');
    return { key, success };
  });

  await Promise.allSettled(fontPromises);
  
  console.log('📈 SUMMARY:');
  console.log(`✅ Successfully loaded: ${successCount}/${totalCount} fonts`);
  console.log(`❌ Failed to load: ${totalCount - successCount}/${totalCount} fonts`);
  console.log('🔍 Check console above for individual font loading details');
  
  if (successCount === 0) {
    console.log('🔴 RECOMMENDATION: Font loading issues detected');
    console.log('💡 SOLUTION: Check font file paths and permissions');
  } else if (successCount < totalCount) {
    console.log('🟡 PARTIAL SUCCESS: Some fonts loaded, others failed');
  } else {
    console.log('🟢 ALL FONTS LOADED SUCCESSFULLY!');
  }
  
  console.log('================================');
};

// Export font configurations for use in components
export const AVAILABLE_CUSTOM_FONTS = CUSTOM_ARABIC_FONTS;

// Updated Arabic fonts list with only desired fonts
export const EXTENDED_ARABIC_FONTS = [
  { id: 'indopak', name: 'Indo-Pak Nastaleeq', className: 'font-indopak' },
  { id: 'scheherazade', name: 'Scheherazade New', className: 'font-scheherazade' },
  { id: 'amiri', name: 'Amiri', className: 'font-amiri' }
];
