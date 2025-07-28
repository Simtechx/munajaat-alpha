import React from 'react';
import { useNavigate } from 'react-router-dom';
import HizbulBahrPageNew from './HizbulBahrPageNew';

const HizbulBahrPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/')}
          className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-300 transition-all"
        >
          ← Back to Home
        </button>
      </div>
      <HizbulBahrPageNew />
    </div>
  );
};

export default HizbulBahrPage;