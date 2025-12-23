import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 sm:px-6 flex justify-between items-center max-w-[1200px] mx-auto">
      <Link to="/" className="font-mono font-bold text-xl tracking-tighter uppercase">
        LÍVIA MIRANDA<span className="text-primary">.</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex gap-6 font-mono text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="hover:line-through transition-all">Projetos</Link>
          <Link to="/sobre-mim" className="hover:line-through transition-all">Sobre</Link>
        </div>
        
        <div className="flex gap-4 border-l border-black pl-6">
          <a href="https://github.com/liviaaoli" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <GithubLogo size={24} />
          </a>
          <a href="https://linkedin.com/in/livia-miranda" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}