import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BeeScene from './components/BeeScene';
import WarningPage from './components/WarningPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeeScene />} />
        <Route path="/WarningPage" element={<WarningPage />} />
      </Routes>
    </Router>
  );
};

export default App;
