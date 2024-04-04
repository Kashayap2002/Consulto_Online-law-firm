import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/profile'; // Import ProfilePage

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
