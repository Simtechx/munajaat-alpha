
import { useState, useEffect } from 'react';
import { ApiData } from '@/types';
import { useNetworkStatus } from './useNetworkStatus';
import { isCacheValid, getCachedData, cacheData } from '@/utils/cacheUtils';
import { getFallbackData } from '@/utils/fallbackData';
import { cacheAssets, isAssetsCached } from '@/utils/assetsCache';
import { fetchApiData } from '@/utils/apiUtils';

export const useOfflineData = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isOffline } = useNetworkStatus();

  useEffect(() => {
    const fetchData = async () => {
      console.log('🔄 Initializing offline-capable data fetcher...');
      
      // Cache assets on first load
      if (!isAssetsCached()) {
        cacheAssets();
      }
      
      const cachedData = getCachedData();
      if (cachedData && isCacheValid()) {
        console.log('✅ Using valid cached data');
        setData(cachedData);
        setLoading(false);
        return;
      }

      if (isOffline && cachedData) {
        console.log('📱 Offline mode: Using expired cached data');
        setData(cachedData);
        setLoading(false);
        setError('Using offline data (may be outdated)');
        return;
      }

      if (!isOffline) {
        try {
          console.log('🌐 Fetching fresh data from API...');
          const result = await fetchApiData();
          console.log('✅ Fresh data fetched successfully');
          setData(result);
          cacheData(result);
          setError(null);
        } catch (err) {
          console.error('❌ Error fetching fresh data:', err);
          
          if (cachedData) {
            console.log('📱 Using cached data as fallback');
            setData(cachedData);
            setError('Using cached data (network unavailable)');
          } else {
            console.log('🆘 Using built-in fallback data');
            const fallbackData = getFallbackData();
            setData(fallbackData);
            cacheData(fallbackData);
            setError('Using offline mode with sample content');
          }
        }
      } else {
        console.log('🆘 Offline with no cache - using fallback data');
        const fallbackData = getFallbackData();
        setData(fallbackData);
        cacheData(fallbackData);
        setError('Offline mode: Using sample content');
      }
      
      setLoading(false);
    };

    fetchData();
  }, [isOffline]);

  const refreshData = async () => {
    if (isOffline) {
      console.log('📱 Cannot refresh while offline');
      return;
    }

    setLoading(true);
    try {
      console.log('🔄 Manually refreshing data...');
      const result = await fetchApiData();
      setData(result);
      cacheData(result);
      setError(null);
      console.log('✅ Data refreshed successfully');
    } catch (err) {
      console.error('❌ Manual refresh failed:', err);
      setError(err instanceof Error ? err.message : 'Refresh failed');
    } finally {
      setLoading(false);
    }
  };

  return { 
    data, 
    loading, 
    error, 
    isOffline,
    refreshData,
    isCacheValid: isCacheValid()
  };
};
