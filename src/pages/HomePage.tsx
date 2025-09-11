import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/munajaat" className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
            Munājāt e Maqbool
          </Link>
          <Link to="/hizbul-bahr" className="block w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center">
            Hizbul Bahr
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;