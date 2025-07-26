
import { ApiData } from '@/types';

const CACHE_KEY = 'munajaat_spiritual_data';
const CACHE_TIMESTAMP_KEY = 'munajaat_data_timestamp';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export const isCacheValid = (): boolean => {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return false;
  const cacheAge = Date.now() - parseInt(timestamp);
  return cacheAge < CACHE_DURATION;
};

export const getCachedData = (): ApiData | null => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (err) {
    console.error('Error parsing cached data:', err);
    return null;
  }
};

export const cacheData = (apiData: ApiData): void => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(apiData));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    console.log('✅ Spiritual content cached for offline use');
  } catch (err) {
    console.error('Error caching data:', err);
  }
};
