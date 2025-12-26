import React from 'react';
import { motion } from 'framer-motion';

interface TableOfContentsProps {
  delay?: number;
}

export default function TableOfContents({ delay = 0 }: TableOfContentsProps) {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <motion.nav
        className="sticky top-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        <div className="border-l-2 border-border pl-6 flex flex-col gap-4">
          <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-2">
            Neste Projeto
          </p>
          <a
            href="#visao-geral"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            Visão Geral
          </a>
          <a
            href="#desafio"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            O Desafio
          </a>
          <a
            href="#solucao"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            A Solução
          </a>
          <a
            href="#tecnologias"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            Tecnologias
          </a>
          <a
            href="#galeria"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            Galeria
          </a>
          <a
            href="#depoimento"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            Depoimento
          </a>
          <a
            href="#resultados"
            className="text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-300 focus-ring rounded-sm"
          >
            Resultados
          </a>
        </div>
      </motion.nav>
    </div>
  );
}