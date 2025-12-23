import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LinkedinLogoIcon, ReadCvLogoIcon } from '@phosphor-icons/react';

export default function navbar() {
  return (
    <nav className="relative w-full py-6 px-4 sm:px-6 flex justify-between items-center max-w-[1200px] mx-auto bg-background text-foreground font-sans">
      <Link 
        to="/" 
        className="z-10 font-mono font-bold text-xl tracking-tighter uppercase"
      >
        Lívia Miranda<span className="text-primary">.</span>
      </Link>
      
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex gap-6 font-mono text-sm font-bold uppercase tracking-widest">
        <Link 
          to="/" 
          className="transition-all hover:line-through hover:text-primary"
        >
          Projetos
        </Link>
        <Link 
          to="/sobre-mim" 
          className="transition-all hover:line-through hover:text-primary"
        >
          Sobre
        </Link>
      </div>
      
      <div className="z-10 flex gap-4 border-l border-border pl-6 items-center">
        <a 
          href="mailto:livia146miranda@gmail.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:scale-110 transition-transform hover:text-primary"
        >
          <EnvelopeIcon size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/livia-miranda" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:scale-110 transition-transform hover:text-primary"
        >
          <LinkedinLogoIcon size={24} />
        </a>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:scale-110 transition-transform hover:text-primary"
        >
          <ReadCvLogoIcon size={24} />
        </a>
      </div>
    </nav>
  );
}