import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics />
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
