
const ASSETS_CACHE_KEY = 'munajaat_assets_cached';
const FONTS_CACHE_KEY = 'munajaat_fonts_cached';

export const cacheAssets = async (): Promise<void> => {
  if ('caches' in window) {
    try {
      const cache = await caches.open('munajaat-assets-v2');
      
      // Core application assets
      const coreAssets = [
        '/',
        '/index.html',
        '/manifest.json',
        '/src/main.tsx',
        '/src/index.css',
        '/src/styles/fonts.css'
      ];

      // Image assets
      const imageAssets = [
        '/lovable-uploads/aff6b74d-10a2-4fa2-8b4b-3df7c73d6f5f.png',
        '/lovable-uploads/a469b1ff-e447-400a-a8f1-bf6f57f28201.png'
      ];

      // Font assets
      const fontAssets = [
        '/indopak.ttf',
        'https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      ];

      // Cache core assets
      const coreResponses = await Promise.allSettled(
        coreAssets.map(url => 
          fetch(url)
            .then(response => response.ok ? cache.put(url, response) : Promise.reject(`Failed to fetch ${url}`))
            .catch(err => console.log(`Core asset cache failed for ${url}:`, err))
        )
      );

      // Cache images
      const imageResponses = await Promise.allSettled(
        imageAssets.map(url => 
          fetch(url)
            .then(response => response.ok ? cache.put(url, response) : Promise.reject(`Failed to fetch ${url}`))
            .catch(err => console.log(`Image cache failed for ${url}:`, err))
        )
      );

      // Cache fonts with CORS handling
      const fontResponses = await Promise.allSettled(
        fontAssets.map(url => 
          fetch(url, { mode: url.startsWith('http') ? 'cors' : 'same-origin' })
            .then(response => response.ok ? cache.put(url, response) : Promise.reject(`Failed to fetch ${url}`))
            .catch(err => console.log(`Font cache failed for ${url}:`, err))
        )
      );

      const successfulCaches = [
        ...coreResponses.filter(r => r.status === 'fulfilled'),
        ...imageResponses.filter(r => r.status === 'fulfilled'),
        ...fontResponses.filter(r => r.status === 'fulfilled')
      ].length;

      localStorage.setItem(ASSETS_CACHE_KEY, 'true');
      localStorage.setItem(FONTS_CACHE_KEY, 'true');
      
      console.log(`✅ Assets cached successfully: ${successfulCaches} items cached for offline use`);
      console.log('📱 App is now ready for offline use!');
      
    } catch (err) {
      console.error('Error caching assets:', err);
    }
  }
};

export const isAssetsCached = (): boolean => {
  return !!localStorage.getItem(ASSETS_CACHE_KEY);
};

export const isFontsCached = (): boolean => {
  return !!localStorage.getItem(FONTS_CACHE_KEY);
};

export const getCacheStatus = () => {
  return {
    assets: isAssetsCached(),
    fonts: isFontsCached(),
    isFullyCached: isAssetsCached() && isFontsCached()
  };
};
