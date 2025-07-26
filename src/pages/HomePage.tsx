import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* New Islamic Geometric Pattern Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ac6957f1-9d22-45c7-b0fe-cc8a1ae31c81.png')`,
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-white/20" />
      
      {/* Content Layer */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Welcome Text */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-amber-300/60">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              Welcome
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
              Choose your spiritual journey
            </p>
          </div>
        </div>
        
        {/* Two Options Container */}
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12 items-center justify-center max-w-6xl w-full h-full lg:h-auto">
          
          {/* Munajaat-e-Maqbool Option */}
          <div 
            onClick={() => navigate('/munajaat')}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 w-full max-w-md lg:max-w-lg h-48 md:h-56 lg:h-64"
          >
            <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-amber-400/60 overflow-hidden">
              {/* Gold Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-amber-300/80" />
              
              <div className="h-full flex items-center justify-between p-6 md:p-8">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-white/90 rounded-2xl shadow-lg">
                    <img 
                      src="/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png" 
                      alt="Munajaat-e-Maqbool Logo"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-1 ml-4 md:ml-6">
                  <div className="rounded-2xl p-4 md:p-6 shadow-lg text-white" style={{ backgroundColor: '#d2cabf' }}>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                      MUNAJAAT E MAQBOOL
                    </h2>
                    <div className="w-full h-px bg-white my-2" />
                    <p className="text-sm md:text-base text-center text-white/90">
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