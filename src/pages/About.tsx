import { useState, useEffect } from 'react';
import AboutDesktop from '../components/AboutDesktop';
import AboutTablet from '../components/AboutTablet';
import AboutMobile from '../components/AboutMobile';

export default function About() {
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

  return (
    <>
      {screenSize === 'desktop' && <AboutDesktop />}
      {screenSize === 'tablet' && <AboutTablet />}
      {screenSize === 'mobile' && <AboutMobile />}
    </>
  );
}
