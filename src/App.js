import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BuyNow from './pages/BuyNow';
import RecycleNow from './pages/RecycleNow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyNow />} />
          <Route path="/recycle" element={<RecycleNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
