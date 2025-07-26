import React from 'react';

// Clean HizbulBahr component - no hooks, no complex logic
export default function HizbulBahrPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Hizbul Bahr</h1>
        <p className="text-muted-foreground mb-6">
          This page is temporarily simplified while we fix React context issues.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}