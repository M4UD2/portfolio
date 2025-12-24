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
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0">
      {/* Seção Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 md:gap-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-[800px]"
        >
          <h1 className="text-balance">
            Oi, eu sou a Lívia!<br /><span className="whitespace-nowrap">Bem-vindo(a) ao meu portfólio ;)</span>
          </h1>
          <p className="text-[16px] leading-[1.7] text-muted-foreground mx-auto max-w-[600px] text-balance">
            Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a otimizar suas redes
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <p className="text-[12px] leading-[1.7] text-muted-foreground font-sans">Conheça o meu trabalho</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDownIcon size={24} weight="bold" />
          </motion.div>
        </motion.div>
      </section>

      <div className="w-full border-t border-border mb-12 md:mb-20" />

      {/* Seção de Projetos */}
      <section id="projetos" className="flex flex-col gap-16 md:gap-20 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
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