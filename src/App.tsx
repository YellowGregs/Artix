import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Falcon from './pages/Falcon';
import Astralis from './pages/Astralis';
import Developers from './pages/Developers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/falcon" element={<Falcon />} />
          <Route path="/astralis" element={<Astralis />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;