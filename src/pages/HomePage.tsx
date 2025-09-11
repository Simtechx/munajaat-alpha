import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundLayers } from '@/components/layout/BackgroundLayers';

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Use same background as Munajaat page */}
      <BackgroundLayers 
        selectedDay="Sunday"
        selectedTheme="color"
        backgroundOpacity={3}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Spiritual Companion
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Embark on your spiritual journey with either Munājāt e Maqbool or Hizbul Bahr
            </p>
          </div>

          {/* Main Toggle Switch like original design */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
              <div className="flex">
                {/* Munājāt Toggle */}
                <Link to="/munajaat" className="group">
                  <div className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-munajaat-primary to-munajaat-secondary text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-scheherazade mb-1">مُناجاتِ مقبول</div>
                      <div className="text-sm opacity-90">Munājāt e Maqbool</div>
                    </div>
                  </div>
                </Link>
                
                {/* Hizbul Bahr Toggle */}
                <Link to="/hizbul-bahr" className="group">
                  <div className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-hizbul-primary to-hizbul-secondary text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ml-2">
                    <div className="text-center">
                      <div className="text-2xl font-scheherazade mb-1">حِزْبُ البَحْر</div>
                      <div className="text-sm opacity-90">Hizbul Bahr</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Munājāt Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-foreground">
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Munājāt e Maqbool</h2>
                  <p className="text-lg opacity-80 mb-4">
                    Seven days of spiritual elevation through divine conversations
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-munajaat-primary rounded-full" />
                    <span className="text-sm opacity-80">Weekly prayer structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-munajaat-primary rounded-full" />
                    <span className="text-sm opacity-80">Heart purification focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-munajaat-primary rounded-full" />
                    <span className="text-sm opacity-80">Spiritual transformation</span>
                  </div>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-70">
                    By Hazrat Maulana Ashraf Ali Thanvi (R.A)
                  </p>
                </div>
              </div>
            </div>

            {/* Hizbul Bahr Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-foreground">
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Hizbul Bahr</h2>
                  <p className="text-lg opacity-80 mb-4">
                    Sacred protection through the litany of the sea
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hizbul-primary rounded-full" />
                    <span className="text-sm opacity-80">Divine protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hizbul-primary rounded-full" />
                    <span className="text-sm opacity-80">Spiritual safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hizbul-primary rounded-full" />
                    <span className="text-sm opacity-80">Sacred supplications</span>
                  </div>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-70">
                    By Shaykh Abul Hasan ash-Shadhili
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-munajaat-primary">7</div>
              <div className="text-sm text-muted-foreground">Days of Munājāt</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hizbul-primary">∞</div>
              <div className="text-sm text-muted-foreground">Divine Protection</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-munajaat-secondary">2</div>
              <div className="text-sm text-muted-foreground">Sacred Collections</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hizbul-secondary">✦</div>
              <div className="text-sm text-muted-foreground">Spiritual Elevation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;