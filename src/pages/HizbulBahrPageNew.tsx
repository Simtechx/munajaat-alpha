import React from 'react';
import { useNavigate } from 'react-router-dom';

const HizbulBahrPageNew: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Hizbul Bahr</h1>
        <p className="text-muted-foreground mb-6">
          The Litany of the Sea - A powerful spiritual protection.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 mr-2"
        >
          Back to Home
        </button>
        <button 
          onClick={() => navigate('/munajaat')}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
        >
          Go to Munajaat
        </button>
      </div>
    </div>
  );
};

export default HizbulBahrPageNew;