import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowSquareOutIcon, LinkIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface ProjectStickyHeaderProps {
  title: string;
  prototypeLink?: string;
}

export default function ProjectStickyHeader({ title, prototypeLink }: ProjectStickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  const sections = [
    { id: 'visao-geral', label: 'Visão Geral' },
    { id: 'desafio', label: 'Desafio' },
    { id: 'solucao', label: 'Solução' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'depoimento', label: 'Depoimento' },
    { id: 'resultados', label: 'Resultados' }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const projectImage = document.querySelector('[data-project-image]');
      const imageBottom = projectImage ? projectImage.getBoundingClientRect().bottom + scrollY : 400;
      
      setIsVisible(scrollY > imageBottom);
      setScrollProgress(documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -70% 0px' }
    );

    // Setup scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Setup intersection observer
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border ${
        isMobile ? 'h-12' : 'h-14'
      }`}
      initial={{ y: -60 }}
      animate={{ y: isVisible ? 0 : -60 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-[1040px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        {/* Left: Back Button + Title (title hidden on mobile when sticky) */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] px-1 md:px-0"
            aria-label="Voltar para início"
          >
            <ArrowLeftIcon size={14} weight="bold" />
            {!isMobile && 'Voltar'}
          </button>
          {!isMobile && <div className="h-4 w-px bg-border"></div>}
          {!isMobile && (
            <h1 className="text-[14px] leading-[1.7] font-medium text-foreground max-w-[200px] truncate">
              {title}
            </h1>
          )}
        </div>

        {/* Center: Navigation */}
        <nav className={`flex items-center flex-1 justify-center ${
          isMobile ? 'overflow-x-auto scrollbar-hide gap-4 mx-4' : 'gap-2'
        }`}>
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative text-[11px] uppercase font-medium tracking-[0.15em] transition-colors duration-300 focus-ring rounded-sm py-2 px-3 whitespace-nowrap ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Prototype Link */}
        {prototypeLink && (
          <a
            href={prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] flex-shrink-0 px-2 md:px-0"
            aria-label="Ver protótipo (abre em nova aba)"
          >
            {isMobile ? (
              <LinkIcon size={14} weight="bold" />
            ) : (
              <>
                Protótipo
                <ArrowSquareOutIcon size={14} weight="bold" />
              </>
            )}
          </a>
        )}
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-0 left-0 right-0 bg-border ${
        isMobile ? 'h-0.5' : 'h-0.5'
      }`}>
        <motion.div
          className="h-full bg-foreground"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.header>
  );
}