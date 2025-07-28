import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Index from './pages/Index';
import HizbulBahrPageNew from './pages/HizbulBahrPageNew';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  console.log("🚀 App component loaded - React Router setup");
  console.log("🔍 React available in App:", !!React);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/munajaat" element={<Index />} />
        <Route path="/hizbul-bahr" element={<HizbulBahrPageNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;