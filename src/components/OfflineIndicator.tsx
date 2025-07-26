
import React from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const { isOffline } = useNetworkStatus();

  if (!isOffline) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-pulse">
      <Badge variant="secondary" className="bg-orange-100 text-orange-800 border border-orange-200">
        <WifiOff className="w-3 h-3 mr-1" />
        Offline Mode
      </Badge>
    </div>
  );
};
