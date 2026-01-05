import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CoffeeIcon, 
  TrophyIcon, 
  BriefcaseIcon, 
  HandWavingIcon,
  GraduationCapIcon,
  WrenchIcon 
} from '@phosphor-icons/react';
import StatItem from '../components/atoms/stat-item';
import FadeInView from '../components/atoms/fade-in-view';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        
        {/* Profile Image - Centered */}
        <FadeInView className="w-full max-w-[200px]">
          <div className="aspect-square relative rounded-full overflow-hidden border border-border hover:opacity-90 transition-all duration-700">
            <img
              alt="Foto de Lívia Miranda"
              className="w-full h-full object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg" 
            />
          </div>
        </FadeInView>

        {/* Title - Centered com Ícone Phosphor */}
        <FadeInView delay={0.05}>
          <h1 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] -tracking-[0.02em] text-center flex items-center justify-center gap-3 text-balance">
            Oi, eu sou a Lívia! 
            <HandWavingIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
          </h1>
        </FadeInView>

        {/* Stats - Usando o StatItem do projeto */}
        <FadeInView delay={0.1}>
          <section className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border text-center">
            <div className="flex flex-col items-center gap-2">
              <BriefcaseIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
              <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Emprego</p>
              <p className="text-[1rem] leading-[1.7] font-bold">Product Designer</p>
              <p className="text-[1rem] leading-[1.7] text-muted-foreground">na Bwtech</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCapIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
              <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Formação</p>
              <p className="text-[1rem] leading-[1.7] font-bold">MBA IA (cursando)</p>
              <p className="text-[1rem] leading-[1.7] text-muted-foreground">Publicidade (2020)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrophyIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
              <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Projetos</p>
              <p className="text-[1rem] leading-[1.7] font-bold">15+ Realizados</p>
              <p className="text-[1rem] leading-[1.7] text-muted-foreground">B2B e B2C</p>
            </div>
          </section>
        </FadeInView>

        {/* Bio - Alinhada à esquerda e Justificada */}
        <FadeInView delay={0.15}>
          <div className="flex flex-col gap-6 text-base leading-[1.7] text-muted-foreground text-left text-justify max-w-[70ch] w-full">
            <p>
              Sou <strong>publicitária de formação</strong> e migrei para o
              design de produto digital. Hoje combino minha visão estética com
              dados, cursando um <strong>MBA em Inteligência&nbsp;Artificial</strong>.
            </p>
            <p>
              No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa
              amadora. Acredito que a tecnologia deve servir às pessoas,
              garantindo que cada interface tenha um propósito&nbsp;claro.
            </p>
          </div>
        </FadeInView>

      </div>
    </main>
  );
}