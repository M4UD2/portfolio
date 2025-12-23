import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
// Mantenha o ProjectYrden se já estiver criado, ou comente a linha abaixo se ainda não existir
import ProjectYrden from './pages/ProjectYrden';

// Componente extra para rolar para o topo sempre que mudar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<About />} />
        <Route path="/projeto/yrden" element={<ProjectYrden />} />
      </Routes>
    </BrowserRouter>
  );
}
