import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';
import Yrden from './pages/projects/Yrden';

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/projects/yrden" element={<Yrden />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;