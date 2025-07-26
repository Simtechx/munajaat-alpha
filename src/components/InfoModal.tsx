import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { X } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { AboutTab } from './info-modal/AboutTab';
import { NavigationTab } from './info-modal/NavigationTab';
import { ViewControlsTab } from './info-modal/ViewControlsTab';
import { AudioMediaTab } from './info-modal/AudioMediaTab';
import { OfflineTab } from './info-modal/OfflineTab';
import { DisclaimerTab } from './info-modal/DisclaimerTab';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDay: DayOfWeek;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl">
        <CardContent className="p-0">
          {/* Themed Header */}
          <div 
            className="p-4 sm:p-6 rounded-t-2xl"
            style={{ backgroundColor: theme.color }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/2af23d57-0868-43d3-9c84-fbfe7a82db3a.png" 
                  alt="Munājāat Maqbūl Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Munājāat-e-Maqbūl App Guide</h2>
              </div>
              <Button 
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 sm:p-6">
            <Tabs defaultValue="about" className="w-full">
              <TabsList 
                className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 h-auto p-1"
                style={{ backgroundColor: `${theme.color}20` }}
              >
                <TabsTrigger 
                  value="about" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  About
                </TabsTrigger>
                <TabsTrigger 
                  value="navigation" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  Navigation
                </TabsTrigger>
                <TabsTrigger 
                  value="view-controls" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  View Controls
                </TabsTrigger>
                <TabsTrigger 
                  value="audio-media" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  Audio & Media
                </TabsTrigger>
                <TabsTrigger 
                  value="offline" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  Offline
                </TabsTrigger>
                <TabsTrigger 
                  value="disclaimer" 
                  className="text-xs px-1 py-2 data-[state=active]:text-white"
                  style={{ 
                    backgroundColor: `${theme.color}30`,
                    color: theme.color,
                    '--active-bg': theme.color,
                  } as React.CSSProperties}
                  data-theme-color={theme.color}
                >
                  Disclaimer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-4 sm:mt-6">
                <AboutTab />
              </TabsContent>

              <TabsContent value="navigation" className="mt-4 sm:mt-6">
                <NavigationTab />
              </TabsContent>

              <TabsContent value="view-controls" className="mt-4 sm:mt-6">
                <ViewControlsTab />
              </TabsContent>

              <TabsContent value="audio-media" className="mt-4 sm:mt-6">
                <AudioMediaTab />
              </TabsContent>


              <TabsContent value="offline" className="mt-4 sm:mt-6">
                <OfflineTab />
              </TabsContent>

              <TabsContent value="disclaimer" className="mt-4 sm:mt-6">
                <DisclaimerTab />
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Themed Footer */}
          <div 
            className="p-3 sm:p-4 rounded-b-2xl border-t"
            style={{ 
              backgroundColor: theme.color,
              borderColor: `${theme.color}40`
            }}
          >
            <div className="text-center">
              <p className="text-white text-xs sm:text-sm">
                © 2026 Munājāat Companion
              </p>
              <p className="text-white/80 text-xs">
                by Simtech W. All rights reserved.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
