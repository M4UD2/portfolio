import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';
import { NetChartAI } from './pages/projects/netchart';
import AIGovernance from './pages/projects/netchart/ai-governance';

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
        <Route path="/projects/netchart/genai-troubleshooting" element={<NetChartAI />} />
        <Route path="/projects/netchart/genai-governance" element={<AIGovernance />} />
      </Routes>
    </Router>
  );
};

export default App;
