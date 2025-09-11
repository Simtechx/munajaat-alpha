import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Spiritual Companion
        </h1>
        <p className="text-gray-600 mb-6">
          Choose your spiritual journey
        </p>
        <div className="space-y-4">
          <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Munājāt e Maqbool
          </button>
          <button className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Hizbul Bahr
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;