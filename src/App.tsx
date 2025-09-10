import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import SimpleTest from "./SimpleTest";

console.log('App.tsx loading - React version:', React.version);

// Error boundary component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center max-w-md p-6">
      <h2 className="text-lg font-semibold text-destructive mb-2">Something went wrong</h2>
      <p className="text-muted-foreground text-sm mb-4">{error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
      >
        Reload App
      </button>
    </div>
  </div>
);

const App = () => {
  console.log('App component rendering successfully, React version:', React.version);
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SimpleTest />
    </ErrorBoundary>
  );
};

export default App;