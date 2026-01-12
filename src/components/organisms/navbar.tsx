import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ListIcon,
  XIcon,
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from '@phosphor-icons/react';
import NavItem from '../atoms/nav-item';
import Logo from '../atoms/logo';
import Tooltip from '../atoms/tooltip-simple';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Verifica se está em uma página de projeto
  const isProjectPage = location.pathname.startsWith('/projects/');

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre-mim', label: 'Sobre mim' },
  ];

  const linkClassName = "text-foreground hover:opacity-60 transition-opacity duration-300 focus-ring rounded-sm";
  const mobileLinkClassName = "p-2 rounded-sm text-foreground hover:opacity-60 transition-opacity duration-300 focus-ring";
  
  const socialLinks = {
    email: "mailto:livia146miranda@gmail.com",
    linkedin: "https://www.linkedin.com/in/liviamirandadeoliveira/",
    cv: "https://drive.google.com/file/d/10QUVd-f9ORjKOVvJE-wWdbR3pSSobbyc/view?usp=drive_link"
  };

  return (
    <nav className={`${isProjectPage ? 'relative' : 'sticky top-0'} z-50 bg-background border-b border-border`}>
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-12 md:h-14">

          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                to={item.path}
                label={item.label}
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          {/* Social Icons com Tooltips */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-4 md:gap-6">
              {/* Email */}
              <Tooltip content="Enviar email">
                <a 
                  href={socialLinks.email}
                  aria-label='Enviar email para Lívia' 
                  className={linkClassName}
                >
                  <EnvelopeSimpleIcon size={20} weight="bold" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* LinkedIn */}
              <Tooltip content="LinkedIn">
                <a 
                  href={socialLinks.linkedin}
                  aria-label='LinkedIn (abre em nova aba)' 
                  target="_blank" 
                  rel="noreferrer" 
                  className={linkClassName}
                >
                  <LinkedinLogoIcon size={20} weight="bold" aria-hidden="true" />
                </a>
              </Tooltip>

              {/* Currículo */}
              <Tooltip content="CV">
                <a 
                  href={socialLinks.cv}
                  aria-label='Currículo de Lívia (abre em nova aba)' 
                  target="_blank" 
                  rel="noreferrer" 
                  className={linkClassName}
                >
                  <ReadCvLogoIcon size={20} weight="bold" aria-hidden="true" />
                </a>
              </Tooltip>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:opacity-60 transition-opacity duration-300 ml-2 focus-ring rounded-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <XIcon size={24} weight="bold" aria-hidden="true" /> : <ListIcon size={24} weight="bold" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 bg-background border-b border-border px-6 pb-8 shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-6 pt-4">
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    to={item.path}
                    label={item.label}
                    onClick={() => setIsMenuOpen(false)}
                    isActive={location.pathname === item.path}
                  />
                ))}
                {/* Ícones sociais abaixo dos nav-links no mobile */}
                <div className="flex items-center justify-center gap-6 pt-2">
                  <a 
                    href={socialLinks.email}
                    aria-label='Enviar email para Lívia' 
                    className={mobileLinkClassName}
                  >
                    <EnvelopeSimpleIcon size={24} weight="bold" aria-hidden="true" />
                  </a>
                  <a 
                    href={socialLinks.linkedin}
                    aria-label='LinkedIn (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className={mobileLinkClassName}
                  >
                    <LinkedinLogoIcon size={24} weight="bold" aria-hidden="true" />
                  </a>
                  <a 
                    href={socialLinks.cv}
                    aria-label='Currículo de Lívia (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className={mobileLinkClassName}
                  >
                    <ReadCvLogoIcon size={24} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
