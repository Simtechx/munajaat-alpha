import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Bookmark, Shield, Calendar, Infinity, Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Spiritual Companion
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Embark on your spiritual journey with authentic Islamic invocations and protective litanies
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Munājāt Card */}
            <Link to="/munajaat" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-munajaat-primary to-munajaat-secondary p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-scheherazade font-bold">م</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Munājāt e Maqbool</h2>
                    <p className="text-lg opacity-90 mb-4">
                      Seven days of spiritual elevation through divine conversations
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Weekly prayer structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Heart purification focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Spiritual transformation</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm opacity-80">
                      By Hazrat Maulana Ashraf Ali Thanvi (R.A)
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-6">
                    <div className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-3 rounded-lg text-center font-semibold">
                      Start Spiritual Journey
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Hizbul Bahr Card */}
            <Link to="/hizbul-bahr" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-hizbul-primary to-hizbul-secondary p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-scheherazade font-bold">ح</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Hizbul Bahr</h2>
                    <p className="text-lg opacity-90 mb-4">
                      Sacred protection through the litany of the sea
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Divine protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Spiritual safety</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-sm opacity-90">Sacred supplications</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm opacity-80">
                      By Shaykh Abul Hasan ash-Shadhili
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-6">
                    <div className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors px-6 py-3 rounded-lg text-center font-semibold">
                      Access Sacred Litany
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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