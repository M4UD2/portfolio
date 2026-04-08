import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@phosphor-icons/react';
import ProjectCard from '../components/organisms/project-card';
import FadeInView from '../components/atoms/fade-in-view';

// Constantes para valores de layout
const NAVBAR_HEIGHT = 64;
const EXTRA_SPACING = 32;
const SCROLL_DELAY = 100;

export default function Home() {
  const projectsSectionRef = useRef<HTMLElement>(null);

  // Função utilitária para calcular posição de scroll
  const calculateScrollPosition = (element: HTMLElement): number => {
    return element.offsetTop - NAVBAR_HEIGHT - EXTRA_SPACING;
  };

  // Função para fazer scroll suave
  const scrollToElement = (element: HTMLElement) => {
    const position = calculateScrollPosition(element);
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromProject = urlParams.get('from');
    
    if (fromProject) {
      setTimeout(() => {
        const targetCard = document.querySelector(`[data-project="${fromProject}"]`) as HTMLElement;
        if (targetCard) {
          scrollToElement(targetCard);
        }
      }, SCROLL_DELAY);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const projects = [
    {
      id: 'yrden-onboarding',
      title: 'De 60 minutos de espera a um onboarding produtivo',
      description: 'Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Yrden - Interface de onboarding produtivo',
      reversed: false,
      tags: ['UX Research', 'Product Design', 'Onboarding'],
    },
    {
      id: 'yrden-editor',
      title: 'Editor SQL',
      description: 'Interface intuitiva para consultas e análise de dados democratizando o acesso ao SQL',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Yrden - Editor SQL intuitivo',
      reversed: true,
      tags: ['Product Design', 'Data', 'SQL'],
    },
  ];

  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      {/* Seção Hero */}
      <section className="min-h-[85vh] w-full flex flex-col justify-center items-center text-center gap-10 md:gap-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full max-w-[800px] items-center"
        >
          <h1 className="leading-tight flex flex-col items-center hyphens-none">
            <span className="block">Boas-vindas ao</span>
            <span className="block">meu portfólio ;)</span>
          </h1>

          <p className="text-[1rem] leading-[1.7] text-muted-foreground mx-auto max-w-[700px] w-full text-center flex flex-col items-center">
            <span className="block sm:hidden">Sou Product Designer em Belo Horizonte,</span>
            <span className="block sm:hidden">unindo criatividade, dados e visão de usuário</span>
            <span className="block sm:hidden">pra construir produtos que fazem sentido.</span>
            <span className="hidden sm:block">Sou Product Designer em Belo Horizonte, unindo criatividade,</span>
            <span className="hidden sm:block">dados e visão de usuário pra construir produtos que fazem sentido.</span>
          </p>
        </motion.div>

        {/* Scroll Indicator: Clicável, ícone 14px e feedback de scale */}
        <motion.button
          onClick={() => {
            if (projectsSectionRef.current) {
              scrollToElement(projectsSectionRef.current);
            }
          }}
          className="group flex items-center gap-2 text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit focus-ring rounded-sm"
          whileHover={{ y: -2 }}
        >
          <span>Conheça os meus projetos</span>
          <span className="group-hover:animate-bounce" aria-hidden="true">
            <ArrowDownIcon 
              size={16}
              weight="bold" 
            />
          </span>
        </motion.button>
      </section>

      <div className="w-full border-t border-border mb-12 md:mb-20" />

      {/* Seção de Projetos */}
      <section ref={projectsSectionRef} id="projetos" className="flex flex-col gap-16 md:gap-20 pb-20 w-full">
        <FadeInView>
          <h2
            id="projetos-title"
            className="text-center"
          >
            Projetos
          </h2>
        </FadeInView>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 0.05}>
              <div data-project={project.id}>
                <ProjectCard {...project} />
              </div>
            </FadeInView>
          ))}
        </div>
      </section>
    </main>
  );
}