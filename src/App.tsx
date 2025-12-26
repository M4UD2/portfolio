import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';
import Yrden from './pages/projects/Yrden';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
            <Navbar />
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/sobre-mim" element={
          <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
            <Navbar />
            <About />
            <Footer />
          </div>
        } />
        <Route path="/projects/yrden" element={<Yrden />} />
      </Routes>
    </Router>
  );
}

export default App;