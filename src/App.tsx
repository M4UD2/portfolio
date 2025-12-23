import { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import About from './pages/About';
import ProjectYrden from './pages/ProjectYrden';

export default function App() {
  const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'project-yrden'>('home');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setScreenSize('desktop');
      } else if (width >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simple client-side routing
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/sobre-mim' || path === '/sobre-mim/') {
        setCurrentPage('about');
      } else if (path === '/projeto/yrden' || path === '/projeto/yrden/') {
        setCurrentPage('project-yrden');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    
    // Intercept link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && link.origin === window.location.origin) {
        e.preventDefault();
        window.history.pushState({}, '', link.href);
        handleNavigation();
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (currentPage === 'about') {
    return <About />;
  }

  if (currentPage === 'project-yrden') {
    return <ProjectYrden />;
  }

  return (
    <>
      {screenSize === 'desktop' && <Desktop />}
      {screenSize === 'tablet' && <Tablet />}
      {screenSize === 'mobile' && <Mobile />}
    </>
  );
}