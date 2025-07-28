import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import HizbulBahrPageNew from './pages/HizbulBahrPageNew';
import NotFound from './pages/NotFound';

const MainApp = () => {
  console.log("🚀 MainApp with proper routing initialized");
  console.log("📍 React version check:", React.version);
  console.log("📍 Router available:", typeof Router);
  console.log("📍 React available in MainApp:", !!React);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hizbul-bahr-page-new" element={<HizbulBahrPageNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MainApp;