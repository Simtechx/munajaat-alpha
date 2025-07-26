import React from 'react';
import { Repeat, Building2, RotateCcw, Play, SkipForward, X } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';
import { Button } from '@/components/ui/button';

interface AudioHelpPanelProps {
  selectedDay: DayOfWeek;
  isVisible: boolean;
  onClose: () => void;
  currentAudioIndex: number;
  totalBlocks: number;
  audioMode: 'block' | 'all';
}

export const AudioHelpPanel: React.FC<AudioHelpPanelProps> = ({ 
  selectedDay, 
  isVisible, 
  onClose,
  currentAudioIndex,
  totalBlocks,
  audioMode
}) => {
  const theme = DAY_THEMES[selectedDay];

  if (!isVisible) return null;

  return (
    <div className="mx-4 mb-4">
      <div 
        className="rounded-xl shadow-xl backdrop-blur-sm border overflow-hidden"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderColor: `${theme.color}20`
        }}
      >
        {/* Header */}
        <div 
          className="px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: theme.color }}
        >
          <h3 className="text-white font-semibold text-lg">
            Audio Player Guide
          </h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Play Modes Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base">Playback Modes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div 
                  className="p-2 rounded-lg flex items-center gap-2"
                  style={{ backgroundColor: theme.color, color: 'white' }}
                >
                  <Repeat className="w-4 h-4" />
                  <span className="text-xs font-medium">ALL</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">All Mode</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Plays all blocks continuously from first to last
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div 
                  className="p-2 rounded-lg flex items-center gap-2 border"
                  style={{ 
                    backgroundColor: 'white',
                    color: theme.color,
                    borderColor: theme.color
                  }}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-medium">DUA</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Block Mode</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Plays current block only, stops at end
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base">Player Controls</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${theme.color}15`, color: theme.color }}
                >
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Restart</div>
                  <div className="text-sm text-muted-foreground">Reset to beginning of current block</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: theme.color, color: 'white' }}
                >
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Play/Pause</div>
                  <div className="text-sm text-muted-foreground">Control audio playback</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${theme.color}15`, color: theme.color }}
                >
                  <SkipForward className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Next Block</div>
                  <div className="text-sm text-muted-foreground">Skip to next audio block</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};