import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./TestComponent";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import HizbulBahrPage from "./pages/HizbulBahrPageNew";
import NotFound from "./pages/NotFound";

// Clean QueryClient - no complex options
const queryClient = new QueryClient();

// Simple error fallback
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

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<TestComponent />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/munajaat" element={<Index />} />
            {/* <Route path="/hizbul-bahr" element={<HizbulBahrPage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* NO TOASTERS - completely removed to fix React context issues */}
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;