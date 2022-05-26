import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PricingPage />} />
    </Routes>
  );
}

export default App;
