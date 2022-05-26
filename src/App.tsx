import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PricingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<Navigate replace to={'/'} />} />
    </Routes>
  );
}

export default App;
