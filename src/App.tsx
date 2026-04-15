import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';
import { IATroubleshooting } from './pages/projects/netchart';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sobre-mim" element={<Layout><About /></Layout>} />
        <Route path="/projects/netchart/ia-troubleshooting" element={<IATroubleshooting />} />
      </Routes>
    </Router>
  );
};

export default App;
