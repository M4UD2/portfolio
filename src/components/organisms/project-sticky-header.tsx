import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowSquareOutIcon, LinkIcon } from '@phosphor-icons/react';

export interface StickyHeaderProps {
  prototypeLink?: string;
  sections?: { id: string; label: string }[];
}

export default function ProjectStickyHeader({ prototypeLink, sections }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [availableSections, setAvailableSections] = useState<string[]>([]);
  
  // Referência para o container de navegação
  const navRef = useRef<HTMLElement>(null);

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

      // Aparece quando o primeiro tópico entra em foco OU quando rola um pouco
      const firstSection = document.getElementById('visao-geral');
      const minScrollThreshold = 200; // Fallback se não encontrar a seção

      let shouldBeVisible = scrollY > minScrollThreshold; // Fallback

      if (firstSection) {
        const sectionTop = firstSection.getBoundingClientRect().top + scrollY;
        // Aparece quando o topo da primeira seção está próximo ao topo da viewport
        shouldBeVisible = scrollY > (sectionTop - window.innerHeight * 0.3);
      }

      setIsVisible(shouldBeVisible);
      setScrollProgress(documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar seções disponíveis
  useEffect(() => {
    const checkAvailableSections = () => {
      const available = sections ? sections.map(({ id }) => id) : [];
      setAvailableSections(available);
    };

    // Verificar inicialmente
    checkAvailableSections();

    // Re-verificar quando o conteúdo mudar
    const contentObserver = new MutationObserver(checkAvailableSections);
    contentObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => contentObserver.disconnect();
  }, [sections]);

  // Intersection Observer para navegação
  useEffect(() => {
    if (availableSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -70% 0px'
      }
    );

    availableSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [availableSections]);

  // Efeito para scroll horizontal automático no mobile
  useEffect(() => {
    if (isMobile && activeSection && navRef.current) {
      const activeItem = document.getElementById(`nav-item-${activeSection}`);
      
      if (activeItem) {
        const nav = navRef.current;
        const navWidth = nav.offsetWidth;
        const itemOffset = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;

        // Centraliza o item ativo na tela
        nav.scrollTo({
          left: itemOffset - (navWidth / 2) + (itemWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection, isMobile]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border ${
        isMobile ? 'h-12' : 'h-14'
      }`}
      initial={{ y: -60 }}
      animate={{ y: isVisible ? 0 : -60 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="h-full flex items-center justify-between">
        {/* Navigation */}
        <nav 
          ref={navRef}
          className={`flex items-center flex-1 relative ${
            isMobile
              ? 'overflow-x-auto scrollbar-hide gap-1 px-6'
              : 'justify-center gap-2 max-w-[1040px] mx-auto px-10 w-full'
          }`}
        >
          {sections && sections.filter(({ id }) => availableSections.includes(id)).map(({ id, label }) => {
            const isActive = activeSection === id;
            const isFirst = sections.findIndex(s => availableSections.includes(s.id)) === sections.findIndex(s => s.id === id);

            return isFirst ? (
              <button
                key={id}
                id={`nav-item-${id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 focus-ring rounded-sm py-2 whitespace-nowrap flex-shrink-0 ${
                  isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                } ${isMobile ? 'px-2' : 'px-3'}`}
              >
                {label}
              </button>
            ) : (
              <a
                key={id}
                id={`nav-item-${id}`}
                href={`#${id}`}
                className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 focus-ring rounded-sm py-2 whitespace-nowrap flex-shrink-0 ${
                  isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                } ${isMobile ? 'px-2' : 'px-3'}`}
              >
                {label}
              </a>
            );
          }) || []}
        </nav>

        {/* Right: Prototype Link */}
        {prototypeLink && (
          <a
            href={prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] flex-shrink-0 px-6 md:px-0"
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
      <div className="absolute bottom-0 left-0 right-0 bg-border h-0.5">
        <motion.div
          className="h-full bg-foreground"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.header>
  );
}