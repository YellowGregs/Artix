import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Falcon from './pages/Falcon';
import Astra from './pages/Astralis';
import Developers from './pages/Developers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/falcon" element={<Falcon />} />
            <Route path="/astralis" element={<Astra />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
