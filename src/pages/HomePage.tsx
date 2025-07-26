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
      <div className="absolute inset-0 z-10 bg-white/30" />
      
      {/* Content Layer */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Welcome Text */}
        <div className="mb-6 md:mb-10 text-center px-2">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-3 max-w-2xl mx-auto" style={{ borderColor: '#555c66' }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
              Welcome
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium">
              Choose your spiritual journey
            </p>
          </div>
        </div>
        
        {/* Two Options Container */}
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12 items-center justify-center max-w-6xl w-full h-full lg:h-auto">
          
          {/* Munajaat-e-Maqbool Option */}
          <div 
            onClick={() => navigate('/munajaat')}
            className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] w-full max-w-md lg:max-w-lg h-40 md:h-48 lg:h-56"
          >
            <div className="relative h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border-3 border-amber-300 overflow-hidden" style={{ backgroundColor: '#735b40' }}>
              
              <div className="h-full flex items-center justify-between p-4 md:p-6">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white/95 rounded-xl shadow-md">
                    <img 
                      src="/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png" 
                      alt="Munajaat-e-Maqbool Logo"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                    />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-1 ml-3 md:ml-4">
                  <div className="rounded-xl p-3 md:p-4 shadow-md" style={{ backgroundColor: '#d2cabf', color: '#4a3d2a' }}>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-center leading-tight">
                      MUNAJAAT E MAQBOOL
                    </h2>
                    <div className="w-full h-px my-1 md:my-2" style={{ backgroundColor: '#735b40' }} />
                    <p className="text-xs md:text-sm text-center opacity-90 leading-tight">
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
            className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] w-full max-w-md lg:max-w-lg h-40 md:h-48 lg:h-56"
          >
            <div className="relative h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border-3 border-amber-300 overflow-hidden" style={{ backgroundColor: 'rgb(51, 65, 85)' }}>
              
              <div className="h-full flex items-center justify-between p-4 md:p-6">
                {/* Text Section */}
                <div className="flex-1 mr-3 md:mr-4">
                  <div className="bg-slate-800/95 text-white rounded-xl p-3 md:p-4 shadow-md">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-center leading-tight">
                      HIZBUL BAHR
                    </h2>
                    <div className="w-full h-px bg-amber-300 my-1 md:my-2" />
                    <p className="text-xs md:text-sm text-center text-slate-200 leading-tight">
                      Shaykh Abul Hasan ash-Shadhili
                    </p>
                  </div>
                </div>
                
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white/95 rounded-xl shadow-md">
                    <img 
                      src="/lovable-uploads/53eaf063-25d7-445e-80b0-ef9d97981a33.png" 
                      alt="Hizbul Bahr Logo"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
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