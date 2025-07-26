import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Same background as the main app */}
      <BackgroundLayers 
        selectedDay="Monday"
        selectedTheme="color"
        backgroundOpacity={0.2}
      />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Two Options Container */}
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12 items-center justify-center max-w-6xl w-full h-full lg:h-auto">
          
          {/* Munajaat-e-Maqbool Option */}
          <div 
            onClick={() => navigate('/munajaat')}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 w-full max-w-md lg:max-w-lg h-48 md:h-56 lg:h-64"
          >
            <div className="relative h-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-amber-400/60 overflow-hidden">
              {/* Gold Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-amber-300/80" />
              
              <div className="h-full flex items-center justify-between p-6 md:p-8">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg">
                    <img 
                      src="/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png" 
                      alt="Munajaat-e-Maqbool Logo"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-1 ml-4 md:ml-6">
                  <div className="bg-amber-700/90 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                      MUNAJAAT E MAQBOOL
                    </h2>
                    <div className="w-full h-px bg-amber-300 my-2" />
                    <p className="text-sm md:text-base text-center text-amber-100">
                      Hazrat Maulana Ashraf Ali Thanvi (R.A)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hizbul Bahr Option */}
          <div 
            onClick={() => navigate('/hizbul-bahr')}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 w-full max-w-md lg:max-w-lg h-48 md:h-56 lg:h-64"
          >
            <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-amber-400/60 overflow-hidden">
              {/* Gold Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-amber-300/80" />
              
              <div className="h-full flex items-center justify-between p-6 md:p-8">
                {/* Text Section */}
                <div className="flex-1 mr-4 md:mr-6">
                  <div className="bg-slate-700/90 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                      HIZBUL BAHAR
                    </h2>
                    <div className="w-full h-px bg-amber-300 my-2" />
                    <p className="text-sm md:text-base text-center text-slate-200">
                      Shaykh Abul Hasan ash-Shadhili
                    </p>
                  </div>
                </div>
                
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-white/90 rounded-2xl shadow-lg">
                    <img 
                      src="/lovable-uploads/53eaf063-25d7-445e-80b0-ef9d97981a33.png" 
                      alt="Hizbul Bahr Logo"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;