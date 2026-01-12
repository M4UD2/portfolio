import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  delay?: number;
}

export default function TableOfContents({ delay = 0 }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'visao-geral', label: 'Visão Geral' },
    { id: 'desafio', label: 'O Desafio' },
    { id: 'solucao', label: 'A Solução' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'depoimento', label: 'Depoimento' },
    { id: 'resultados', label: 'Resultados' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:block lg:col-span-2">
      <motion.nav
        className="sticky top-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        <div className="border-l-2 border-border pl-6 flex flex-col gap-4">
          <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-2">
            Neste projeto
          </p>
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm leading-[1.7] transition-colors duration-300 focus-ring rounded-sm ${
                  isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}