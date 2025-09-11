import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import HizbulBahrPageNew from './HizbulBahrPageNew';

const HizbulBahrPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-background/90 hover:bg-accent text-foreground px-4 py-2 rounded-lg shadow-lg border border-border transition-all backdrop-blur-sm"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>
      <HizbulBahrPageNew />
    </div>
  );
};

export default HizbulBahrPage;