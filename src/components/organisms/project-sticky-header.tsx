import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowSquareOutIcon, LinkIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface ProjectStickyHeaderProps {
  prototypeLink?: string;
}

const SECTIONS = [
  { id: 'visao-geral', label: 'Visão Geral' },
  { id: 'desafio', label: 'Desafio' },
  { id: 'solucao', label: 'Solução' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'depoimento', label: 'Depoimento' },
  { id: 'resultados', label: 'Resultados' }
];

export default function ProjectStickyHeader({ prototypeLink }: ProjectStickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [availableSections, setAvailableSections] = useState<string[]>([]);
  const navigate = useNavigate();

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
      const available = SECTIONS
        .map(({ id }) => id)
        .filter(id => document.getElementById(id));
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
  }, []);

  // Intersection Observer para navegação
  useEffect(() => {
    if (availableSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Encontrar a seção mais próxima do topo da viewport
        let closestSection = '';
        let closestDistance = Infinity;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const distance = Math.abs(rect.top);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = entry.target.id;
            }
          }
        });

        if (closestSection && closestSection !== activeSection) {
          setActiveSection(closestSection);

          // Auto-scroll navigation to show active section on mobile
          if (isMobile) {
            setTimeout(() => {
              const activeElement = document.querySelector(`a[href="#${closestSection}"]`) as HTMLElement;
              if (activeElement) {
                const navContainer = activeElement.closest('nav') as HTMLElement;
                if (navContainer) {
                  const containerRect = navContainer.getBoundingClientRect();
                  const elementRect = activeElement.getBoundingClientRect();

                  // Verificar se o elemento já está visível
                  const elementLeft = elementRect.left - containerRect.left;
                  const elementRight = elementRect.right - containerRect.left;
                  const isVisible = elementLeft >= 0 && elementRight <= containerRect.width;

                  if (!isVisible) {
                    const scrollLeft = navContainer.scrollLeft;
                    let targetScrollLeft;

                    // Se for a primeira seção, ir para o início
                    if (availableSections.indexOf(closestSection) === 0) {
                      targetScrollLeft = 0;
                    } else {
                      // Para outras seções, centralizar
                      targetScrollLeft = scrollLeft + elementRect.left - containerRect.left - (containerRect.width / 2) + (elementRect.width / 2);
                    }

                    navContainer.scrollTo({
                      left: Math.max(0, targetScrollLeft),
                      behavior: 'smooth'
                    });
                  }
                }
              }
            }, 100);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -80% 0px'
      }
    );

    // Observar apenas seções disponíveis
    availableSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [availableSections, isMobile, activeSection]);

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
        {/* Left: Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] px-1 md:px-0 flex-shrink-0"
          aria-label="Voltar para início"
        >
          <ArrowLeftIcon size={14} weight="bold" />
          {!isMobile && 'Voltar'}
        </button>

        {/* Center: Navigation - Clean Horizontal Scroll for Mobile */}
        <nav className={`flex items-center flex-1 justify-center ${
          isMobile ? 'overflow-x-auto scrollbar-hide px-2 gap-1' : 'gap-2'
        }`}>
          {SECTIONS.filter(({ id }) => availableSections.includes(id)).map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 focus-ring rounded-sm py-2 whitespace-nowrap flex-shrink-0 ${
                  isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                } ${isMobile ? 'px-2' : 'px-3'}`}
              >
                {label}
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
