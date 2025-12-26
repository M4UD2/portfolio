import React from 'react';
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
import eu from '../assets/eu.png';

export default function About() {
  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        
        {/* Profile Image - Centered */}
        <motion.div
          className="w-full max-w-[200px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-square relative rounded-full overflow-hidden border border-border hover:opacity-90 transition-all duration-700">
            <img
              alt="Foto de Lívia Miranda"
              className="w-full h-full object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg" 
            />
          </div>
        </motion.div>

        {/* Title - Centered com Ícone Phosphor */}
        <motion.h1
          className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] -tracking-[0.02em] text-center flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Oi, eu sou a Lívia! 
          <HandWavingIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
        </motion.h1>

        {/* Stats - Usando o StatItem do projeto */}
        <motion.section 
          className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <BriefcaseIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Atual</p>
            <p className="font-bold">Product Designer</p>
            <p className="text-[1rem] leading-[1.7] text-muted-foreground">Bwtech</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GraduationCapIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Formação</p>
            <p className="font-bold">MBA IA (cursando)</p>
            <p className="text-[1rem] leading-[1.7] text-muted-foreground">Publicidade (2020)</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WrenchIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Stack</p>
            <p className="font-bold">Figma · React</p>
            <p className="text-[1rem] leading-[1.7] text-muted-foreground">Tailwind · Framer</p>
          </div>
        </motion.section>

        {/* Bio - Alinhada à esquerda e Justificada */}
        <motion.div 
          className="flex flex-col gap-6 text-base leading-[1.7] text-muted-foreground text-left text-justify max-w-[70ch] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <p>
            Sou <strong>publicitária de formação</strong> e migrei para o
            design de produto digital. Hoje combino minha visão estética com
            dados, cursando um <strong>MBA em Inteligência Artificial</strong>.
          </p>
          <p>
            No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa
            amadora. Acredito que a tecnologia deve servir às pessoas, garantindo que cada interface tenha um propósito claro.
          </p>
        </motion.div>

      </div>
    </main>
  );
}