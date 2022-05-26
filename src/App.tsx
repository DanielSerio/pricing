import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PricingPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;
