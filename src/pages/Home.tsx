import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import navbar from '../components/navbar';
import ProjectCard from '../components/project-card';
import Footer from '../components/footer';

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
    <div className="bg-background min-h-screen flex flex-col">
      <navbar />

      <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0">
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 md:gap-12 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1>
              Oi, eu sou a Lívia!<br />
              Bem-vindo(a) ao meu portfólio ;)
            </h1>
            <p className="mx-auto">
              Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            <p className="text-sm opacity-60 font-sans">Conheça o meu trabalho</p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={24} weight="bold" />
            </motion.div>
          </motion.div>
        </section>

        <div className="w-full border-t border-border mb-12 md:mb-20" />

        <section id="projetos" className="flex flex-col gap-16 md:gap-20 pb-20">
          <div className="flex items-center justify-between">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Projetos em Destaque
            </motion.h2>

            <Link to="/projetos">
              <motion.div
                className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity duration-500"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Ver todos os projetos
                <ArrowRight size={16} weight="bold" />
              </motion.div>
            </Link>
          </div>

          <div className="flex flex-col gap-20">
            {projects.map((project, index) => {
              // RESOLUÇÃO: Desestruturamos para que a 'key' não entre no spread das props
              const { ...projectProps } = project;
              return (
                <ProjectCard 
                  key={index} 
                  {...projectProps} 
                />
              );
            })}
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
}