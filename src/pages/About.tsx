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

export default function About() {
  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0 py-12 md:py-20">
      <div className="flex flex-col items-center gap-12 md:gap-16">
        
        {/* Profile Image - Centered */}
        <motion.div
          className="w-full max-w-[280px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-square relative rounded-full overflow-hidden border border-border hover:opacity-90 transition-all duration-700">
            <img
              alt="Foto de Lívia Miranda"
              className="w-full h-full object-cover"
              src="/src/assets/eu.png" 
            />
          </div>
        </motion.div>

        {/* Title - Centered com Ícone Phosphor */}
        <motion.h1
          className="text-[clamp(2rem,4vw,3rem)] leading-tight text-center flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Oi, eu sou a Lívia! 
          <HandWavingIcon size={40} weight="bold" className="text-foreground" aria-hidden="true" />
        </motion.h1>

        {/* Stats - Usando o StatItem do projeto */}
        <section className="w-full max-w-[700px] grid grid-cols-3 gap-6 py-8 border-y border-border">
          <StatItem icon={BriefcaseIcon} value="3+" label="Anos exp." />
          <StatItem icon={TrophyIcon} value="15+" label="Projetos" />
          <StatItem icon={CoffeeIcon} value="∞" label="Cafés" />
        </section>

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

        {/* Grid de Formação com Ícones */}
        <motion.section
          className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <BriefcaseIcon size={24} weight="bold" className="text-muted-foreground/60" aria-hidden="true" />
            <p className="text-[12px] uppercase tracking-widest text-muted-foreground/60">Atual</p>
            <p className="font-medium">Product Designer</p>
            <p className="text-sm text-muted-foreground">Bwtech</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GraduationCapIcon size={24} weight="bold" className="text-muted-foreground/60" aria-hidden="true" />
            <p className="text-[12px] uppercase tracking-widest text-muted-foreground/60">Formação</p>
            <p className="font-medium">MBA IA (cursando)</p>
            <p className="text-sm text-muted-foreground">Publicidade (2020)</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <WrenchIcon size={24} weight="bold" className="text-muted-foreground/60" aria-hidden="true" />
            <p className="text-[12px] uppercase tracking-widest text-muted-foreground/60">Stack</p>
            <p className="font-medium">Figma · React</p>
            <p className="text-sm text-muted-foreground">Tailwind · Framer</p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}