import { useState, useEffect } from 'react';
import ProjectYrdenDesktop from '../components/ProjectYrdenDesktop';
import ProjectYrdenTablet from '../components/ProjectYrdenTablet';
import ProjectYrdenMobile from '../components/ProjectYrdenMobile';

export default function ProjectYrden() {
  const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

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

  if (screenSize === 'mobile') {
    return <ProjectYrdenMobile />;
  }

  if (screenSize === 'tablet') {
    return <ProjectYrdenTablet />;
  }

  return <ProjectYrdenDesktop />;
}
