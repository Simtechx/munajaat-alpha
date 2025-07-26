import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Same background as the main app */}
      <BackgroundLayers 
        selectedDay="Monday"
        selectedTheme="color"
        backgroundOpacity={0.3}
      />
      
      {/* Content Layer */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Welcome Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Choose your spiritual journey
          </p>
        </div>
        
        {/* Two Options */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center max-w-4xl w-full">
          
          {/* Munajaat-e-Maqbool Option */}
          <div 
            onClick={() => navigate('/munajaat')}
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-background/50 rounded-xl overflow-hidden border-2 border-border/30 group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png" 
                    alt="Munajaat-e-Maqbool Logo"
                    className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    MUNAJAAT-E-MAQBOOL
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Daily spiritual supplications and prayers
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hizbul Bahr Option */}
          <div 
            onClick={() => navigate('/hizbul-bahr')}
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-background/50 rounded-xl overflow-hidden border-2 border-border/30 group-hover:border-primary/50 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/53eaf063-25d7-445e-80b0-ef9d97981a33.png" 
                    alt="Hizbul Bahr Logo"
                    className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    HIZBUL BAHR
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    The Litany of the Sea
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer Text */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Tap on any option to begin your spiritual practice
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;