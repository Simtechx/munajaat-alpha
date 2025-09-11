import React from 'react';
import { Link } from 'react-router-dom';

const HizbulBahrPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hizbul Bahr
        </h1>
        <p className="text-gray-600 mb-6">
          The Litany of the Sea - A powerful spiritual protection
        </p>
        <div className="space-y-4">
          <Link to="/" className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
            Back to Home
          </Link>
          <Link to="/munajaat" className="block w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center">
            Go to Munajaat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HizbulBahrPage;