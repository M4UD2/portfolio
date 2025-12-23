import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; // Opcional: Instale 'npm i react-responsive' ou use CSS
import Desktop from './components/Desktop';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import About from './pages/About';
import ProjectYrden from './pages/ProjectYrden';

// Componente para decidir qual Home exibir
function Home() {
  // Media queries simples via CSS/Tailwind são melhores, mas para manter sua lógica:
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  
  if (isDesktop) return <Desktop />;
  if (isTablet) return <Tablet />;
  return <Mobile />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<About />} />
        <Route path="/projeto/yrden" element={<ProjectYrden />} />
      </Routes>
    </BrowserRouter>
  );
}
