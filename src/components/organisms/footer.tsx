import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import SocialLink from '../atoms/social-link';
import NavLink from '../atoms/nav-link';
import Logo from '../atoms/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-10 bg-background">
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-10">
        
        {/* Grid de 4 colunas iguais para distribuição perfeita */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start">

          {/* Coluna 1: Identidade */}
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">
              © {currentYear} • BH, MG
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Navegação</p>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" label="Início" />
              <NavLink to="/sobre-mim" label="Sobre mim" />
            </nav>
          </div>

          {/* Coluna 3: Contacto */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Contato</p>
            <div className="flex flex-col gap-2">
              <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
              <SocialLink href="https://www.linkedin.com/in/liviamirandadeoliveira/" label="LinkedIn" />
            </div>
          </div>

          {/* Coluna 4: Ação de Topo */}
          <div className="flex flex-col gap-3">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Ações</p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Voltar ao topo da página"
              className="group flex items-center gap-2 text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit focus-ring rounded-sm"
              whileHover={{ y: -2 }}
            >
              <span>Voltar ao topo</span>
              <span className="group-hover:animate-bounce" aria-hidden="true">
                <ArrowUpIcon size={16} weight="bold" />
              </span>
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}