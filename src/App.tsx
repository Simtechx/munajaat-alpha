import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MunajaatPage from './pages/MunajaatPage';
import HizbulBahrPage from './pages/HizbulBahrPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/munajaat" element={<MunajaatPage />} />
        <Route path="/hizbul-bahr" element={<HizbulBahrPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;