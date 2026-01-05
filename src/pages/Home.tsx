import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@phosphor-icons/react';
import ProjectCard from '../components/organisms/project-card';
import FadeInView from '../components/atoms/fade-in-view';

export default function Home() {
  useEffect(() => {
    // Verifica se veio de um projeto específico
    const urlParams = new URLSearchParams(window.location.search);
    const fromProject = urlParams.get('from');
    
    if (fromProject) {
      // Aguarda um pouco para garantir que a página carregou
      setTimeout(() => {
        const projectCards = document.querySelectorAll('[data-project]');
        const targetCard = Array.from(projectCards).find(card => 
          card.getAttribute('data-project') === fromProject
        );
        
        if (targetCard) {
          const navbarHeight = 64;
          const extraSpacing = 32;
          const elementPosition = (targetCard as HTMLElement).offsetTop - navbarHeight - extraSpacing;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  const projects = [
    {
      title: '[Yrden] De 60 minutos de espera a um onboarding produtivo',
      description: 'Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor',
      link: '/projects/yrden',
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Yrden Case - Interface de onboarding',
      reversed: false,
    },
    {
      title: 'Axiom - Implementando múltiplas visualizações',
      description: 'Como redesenhei a interface de análise de dados permitindo que usuários alternem entre diferentes visões',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Axiom Project - Dashboard de análise de dados',
      reversed: true,
    },
    {
      title: 'Nexus - Sistema de design escalável',
      description: 'Desenvolvimento de um design system completo para produtos B2B com foco em consistência e eficiência',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Nexus Design System - Componentes e tokens',
      reversed: false,
    },
    {
      title: 'Pulse - Dashboard de métricas em tempo real',
      description: 'Interface intuitiva para visualização de dados complexos com foco na experiência do usuário analista',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Pulse Dashboard - Interface de métricas',
      reversed: true,
    },
  ];

  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 overflow-x-hidden">
      {/* Seção Hero */}
      <section className="min-h-[85vh] w-full flex flex-col justify-center items-center text-center gap-10 md:gap-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full max-w-[800px] items-center"
        >
          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-tight flex flex-col items-center hyphens-none">
            <span className="block">Boas-vindas ao</span>
            <span className="block">meu portfólio ;)</span>
          </h1>

          <p className="text-[1rem] leading-[1.7] text-muted-foreground mx-auto max-w-[700px] w-full text-center flex flex-col items-center">
            <span className="block sm:hidden">Sou Product Designer em Belo Horizonte,</span>
            <span className="block sm:hidden"> focada em construir produtos digitais intuitivos e estratégicos</span>
            <span className="hidden sm:block">Sou Product Designer em Belo Horizonte, focada em</span>
            <span className="hidden sm:block">construir produtos digitais intuitivos e estratégicos</span>
          </p>
        </motion.div>

        {/* Scroll Indicator: Clicável, ícone 14px e feedback de scale */}
        <motion.button
          onClick={() => {
            const projectsTitle = document.getElementById('projetos-title');
            if (projectsTitle) {
              const navbarHeight = 64; // h-16 = 64px
              const extraSpacing = 32; // espaçamento extra
              const elementPosition = projectsTitle.offsetTop - navbarHeight - extraSpacing;
              window.scrollTo({ top: elementPosition, behavior: 'smooth' });
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
      <section id="projetos" className="flex flex-col gap-16 md:gap-20 pb-20 w-full">
        <FadeInView>
          <h2
            id="projetos-title"
            className="text-center"
          >
            Projetos
          </h2>
        </FadeInView>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            // Extrai identificador do projeto baseado no título
            let projectId = 'axiom';
            if (project.title.toLowerCase().includes('yrden')) projectId = 'yrden';
            else if (project.title.toLowerCase().includes('nexus')) projectId = 'nexus';
            else if (project.title.toLowerCase().includes('pulse')) projectId = 'pulse';
            
            return (
              <FadeInView key={index} delay={index * 0.05}>
                <div data-project={projectId}>
                  <ProjectCard {...project} />
                </div>
              </FadeInView>
            );
          })}
        </div>
      </section>
    </main>
  );
}