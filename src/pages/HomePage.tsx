import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-screen w-full relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ac6957f1-9d22-45c7-b0fe-cc8a1ae31c81.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 z-10" />
        
        {/* Content */}
        <div className="relative z-30 h-full flex flex-col items-center justify-center p-8">
          
          {/* Welcome Section */}
          <div className="mb-10 text-center">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-3 border-gray-600 max-w-lg mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Welcome
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Choose your spiritual journey
              </p>
            </div>
          </div>
          
          {/* Navigation Options */}
          <div className="flex flex-col gap-8 items-center max-w-4xl w-full">
            
            {/* Munajaat Option */}
            <div 
              onClick={() => navigate('/munajaat')}
              className="cursor-pointer transition-transform hover:scale-105 w-full max-w-md h-48"
            >
              <div className="relative h-full rounded-2xl shadow-lg border-3 border-yellow-400 overflow-hidden bg-amber-800">
                <div className="h-full flex items-center justify-between p-6">
                  
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-white/95 rounded-xl shadow-md">
                      <img 
                        src="/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png" 
                        alt="Munajaat-e-Maqbool Logo"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 ml-4">
                    <div className="bg-amber-200 text-amber-900 rounded-xl p-4 shadow-md">
                      <h2 className="text-xl font-bold mb-2 text-center leading-tight">
                        MUNAJAAT E MAQBOOL
                      </h2>
                      <div className="w-full h-px bg-amber-800 my-2" />
                      <p className="text-sm text-center opacity-90 leading-tight">
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
              className="cursor-pointer transition-transform hover:scale-105 w-full max-w-md h-48"
            >
              <div className="relative h-full rounded-2xl shadow-lg border-3 border-yellow-400 overflow-hidden bg-slate-700">
                <div className="h-full flex items-center justify-between p-6">
                  
                  {/* Text */}
                  <div className="flex-1 mr-4">
                    <div className="bg-slate-800/95 text-white rounded-xl p-4 shadow-md">
                      <h2 className="text-xl font-bold mb-2 text-center leading-tight">
                        HIZBUL BAHR
                      </h2>
                      <div className="w-full h-px bg-yellow-400 my-2" />
                      <p className="text-sm text-center text-slate-300 leading-tight">
                        Shaykh Abul Hasan ash-Shadhili
                      </p>
                    </div>
                  </div>
                  
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-white/95 rounded-xl shadow-md">
                      <img 
                        src="/lovable-uploads/53eaf063-25d7-445e-80b0-ef9d97981a33.png" 
                        alt="Hizbul Bahr Logo"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-4 py-2 shadow-lg border-2 border-gray-600">
              <p className="text-sm font-medium text-gray-700 leading-tight">
                © 2026 Munajaat.com • Simtech W. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;