import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import navbar from './components/navbar';
import footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        <navbar />

        <main className="flex-grow w-full max-w-[1040px] mx-auto px-6 lg:px-0 py-12 flex flex-col gap-16 md:gap-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mim" element={<About />} />
          </Routes>
        </main>

        <footer />
      </div>
    </Router>
  );
}

export default App;