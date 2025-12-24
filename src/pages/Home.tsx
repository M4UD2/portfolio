import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@phosphor-icons/react';
import ProjectCard from '../components/organisms/project-card';

export default function Home() {
  const projects = [
    {
      title: '[Yrden] De 60 minutos de espera a um onboarding produtivo',
      description: 'Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor',
      link: '/projeto/yrden',
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Yrden Case - Interface de onboarding',
      reversed: false,
    },
    {
      title: 'Axiom - Implementando múltiplas visualizações',
      description: 'Como redesenhei a interface de análise de dados permitindo que usuários alternem entre diferentes visões',
      link: 'https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD',
      imageUrl: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      imageAlt: 'Axiom Project - Dashboard de análise de dados',
      reversed: true,
    },
  ];

  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 overflow-x-hidden">
      {/* Seção Hero */}
      <section className="min-h-[70vh] w-full flex flex-col justify-center items-center text-center gap-10 md:gap-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full max-w-[800px] items-center"
        >
          {/* H1: Tipografia via clamp e leading-tight conforme guidelines */}
          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-tight flex flex-col items-center">
            <span className="block">Oi, eu sou a Lívia!</span>
            {/* whitespace-nowrap impede a viúva em "portfólio ;)" */}
            <span className="block whitespace-nowrap">
              Bem-vindo(a) ao meu portfólio ;)
            </span>
          </h1>

          {/* Body: text-[1rem] e leading-[1.7] conforme guidelines */}
          <p className="text-[1rem] leading-[1.7] text-muted-foreground mx-auto max-w-[600px] w-full">
            Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a otimizar suas redes
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          {/* Legenda: text-[12px] conforme guidelines */}
          <p className="text-[12px] leading-[1.7] text-muted-foreground font-sans">
            Conheça o meu trabalho
          </p>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDownIcon 
              size={24} 
              weight="bold" 
              aria-hidden="true" 
            />
          </motion.span>
        </motion.div>
      </section>

      {/* Divisor Visual */}
      <div className="w-full border-t border-border mb-12 md:mb-20" />

      {/* Seção de Projetos */}
      <section id="projetos" className="flex flex-col gap-16 md:gap-20 pb-20 w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          Projetos
        </motion.h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}