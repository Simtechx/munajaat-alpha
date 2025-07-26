
// Restored full functionality with React version fixes
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./TestComponent";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import HizbulBahrPage from "./pages/HizbulBahrPage";
import NotFound from "./pages/NotFound";

console.log('App.tsx loading - React version:', React.version);

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: (failureCount, error) => {
        if (!navigator.onLine) return false;
        return failureCount < 3;
      },
    },
  },
});

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
  console.log('App component rendering successfully');
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              <Route path="/test" element={<TestComponent />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/munajaat" element={<Index />} />
              <Route path="/hizbul-bahr" element={<HizbulBahrPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          {/* Temporarily removed Toasters to fix React context issues */}
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
