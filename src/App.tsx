import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import Footer from './components/organisms/footer';
import Home from './pages/Home';
import About from './pages/About';

// Projetos Yrden
import { OnboardingProdutivo, EditorSQL } from './pages/projects/yrden';

// Projetos Axii
import { GenAIChat, GerenciadorDadosGenAI } from './pages/projects/axii';

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
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/sobre-mim" 
          element={
            <Layout>
              <About />
            </Layout>
          } 
        />
        {/* Projetos Yrden */}
        <Route 
          path="/projects/yrden/onboarding-produtivo" 
          element={<OnboardingProdutivo />} 
        />
        <Route 
          path="/projects/yrden/editor-sql" 
          element={<EditorSQL />} 
        />
        
        {/* Projetos Axii */}
        <Route 
          path="/projects/axii/genai-chat" 
          element={<GenAIChat />} 
        />
        <Route 
          path="/projects/axii/gerenciador-dados-genai" 
          element={<GerenciadorDadosGenAI />} 
        />
      </Routes>
    </Router>
  );
};

export default App;