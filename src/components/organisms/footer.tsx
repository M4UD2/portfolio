import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import SocialLink from '../atoms/social-link';
import NavLink from '../atoms/nav-link';
import Logo from '../atoms/logo';

const currentYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="w-full border-t border-border mt-6 bg-background">
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10 py-6">
        
        {/* Grid System - 4 colunas mobile, 12 desktop */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">

          {/* Coluna 1: Identidade - 4 colunas mobile, 3 desktop */}
          <div className="col-span-4 md:col-span-3 flex flex-col gap-1">
            <Logo />
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">
              © {currentYear} • BH, MG
            </p>
          </div>

          {/* Coluna 2: Navegação - 4 colunas mobile, 3 desktop */}
          <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Navegação</p>
            <nav aria-label="Navegação do rodapé" className="flex flex-col gap-1">
              <NavLink to="/" label="Início" />
              <NavLink to="/sobre-mim" label="Sobre mim" />
            </nav>
          </div>

          {/* Coluna 3: Contacto - 4 colunas mobile, 3 desktop */}
          <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
            <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Contato</p>
            <div className="flex flex-col gap-1">
              <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
              <SocialLink href="https://www.linkedin.com/in/liviamirandadeoliveira/" label="LinkedIn" />
            </div>
          </div>

          {/* Coluna 4: Ação de Topo - 4 colunas mobile, 3 desktop */}
          <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
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