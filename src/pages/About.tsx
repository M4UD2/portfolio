import React from 'react';
import navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { Coffee, Trophy, Briefcase, EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react';

// @ts-ignore
import imgProfile from "../assets/eu.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-foreground">
      <navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          <motion.div 
            className="w-full max-w-[280px] md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 shadow-sm">
               <img 
                alt="Foto de Lívia Miranda" 
                className="w-full h-full object-cover" 
                src={imgProfile} 
              />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-8">
            <motion.h1 
              className="font-mono font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Oi, eu sou a Lívia! 👋
            </motion.h1>

            {/* Stats - Cores e Fontes sincronizadas */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
              <div className="flex flex-col items-center gap-1">
                <Briefcase size={24} className="text-primary" />
                <p className="font-mono font-bold text-xl md:text-2xl">3+</p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Anos exp.</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Trophy size={24} className="text-primary" />
                <p className="font-mono font-bold text-xl md:text-2xl">15+</p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Projetos</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Coffee size={24} className="text-primary" />
                <p className="font-mono font-bold text-xl md:text-2xl">∞</p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Cafés</p>
              </div>
            </div>

            {/* Textos biográficos restaurados */}
            <div className="font-sans text-sm md:text-base flex flex-col gap-6 text-justify md:text-left leading-relaxed opacity-90">
              <p>
                Sou <strong className="text-foreground">publicitária de formação</strong> e migrei para o design de produto digital. 
                Hoje combino minha visão estética com dados, cursando um <strong className="text-foreground">MBA em Inteligência Artificial</strong>.
              </p>
              <p>
                No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa amadora. Acredito que a tecnologia deve servir às pessoas, e não o contrário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="mailto:livia146miranda@gmail.com" 
                className="flex items-center justify-center gap-3 border-2 border-border px-6 py-4 font-mono font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <EnvelopeSimple size={20} /> Enviar Email
              </a>
              <a 
                href="https://linkedin.com/in/livia-miranda" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-3 border-2 border-border px-6 py-4 font-mono font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <LinkedinLogo size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}