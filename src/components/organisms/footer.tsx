import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import SocialLink from '../atoms/social-link';
import NavLink from '../atoms/nav-link';
import Logo from '../atoms/logo'; // Importação do novo componente Logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-20 bg-background">
      {/* Container centralizado 1040px */}
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* Layout principal: Bio | Navegação | Contato | Topo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">

          {/* Bloco 1: Bio (Ocupa 2 colunas no desktop para equilíbrio) */}
          <div className="flex flex-col gap-3 md:col-span-2 max-w-xs">
            <Logo /> {/* Substituído o h3 pelo componente Logo */}
            <p className="text-[14px] leading-[1.7] text-muted-foreground">
              Product Designer Jr. na Bwtech. Transformando complexidade técnica em experiências intuitivas.
            </p>
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mt-2">
              © {currentYear} • Belo Horizonte, MG
            </p>
          </div>

          {/* Bloco 2: Navegação (Empilhado) */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground/60">Navegação</p>
            <nav className="flex flex-col gap-3">
              <NavLink to="/" label="Início" />
              <NavLink to="/sobre-mim" label="Sobre mim" />
                    </nav>
          </div>

          {/* Bloco 3: Contatos e Botão Topo (Empilhados) */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground/60">Contato</p>
            <div className="flex flex-col gap-3 mb-8">
              <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
              <SocialLink href="https://www.linkedin.com/in/liviamirandadeoliveira/" label="LinkedIn" />
            </div>

            {/* Botão Voltar ao topo - Linha estranha removida daqui */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Voltar ao topo da página"
              className="group flex items-center gap-3 text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit"
              whileHover={{ y: -2 }}
            >
              Voltar ao topo
              <span className="group-hover:animate-bounce" aria-hidden="true">
                <ArrowUpIcon size={24} weight="bold" />
              </span>
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}