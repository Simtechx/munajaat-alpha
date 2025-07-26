
import { ApiData } from '@/types';

const API_URL = 'https://script.google.com/macros/s/AKfycbwnStYTIkgdOipSkxcfs_KlAk0HmZXnl1Dp-qXe8l720nLCOszQXO9TFN63jalq8DGo/exec';

export const fetchApiData = async (): Promise<ApiData> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
