import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
// 1. Importar os componentes de Tooltip
import { Tooltip, TooltipContent, TooltipTrigger } from '../atoms/tooltip';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre-mim', label: 'Sobre mim' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">

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
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="mailto:livia146miranda@gmail.com" 
                    aria-label='Enviar email para Lívia' 
                    className="text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-sm"
                  >
                    <EnvelopeSimpleIcon size={20} weight="bold" aria-hidden="true" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enviar email</p>
                </TooltipContent>
              </Tooltip>

              {/* LinkedIn */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.linkedin.com/in/liviamirandadeoliveira/" 
                    aria-label='LinkedIn (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-sm"
                  >
                    <LinkedinLogoIcon size={20} weight="bold" aria-hidden="true" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              {/* Currículo */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://drive.google.com/file/d/10QUVd-f9ORjKOVvJE-wWdbR3pSSobbyc/view?usp=drive_link" 
                    aria-label='Currículo de Lívia (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-sm"
                  >
                    <ReadCvLogoIcon size={20} weight="bold" aria-hidden="true" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>CV</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:opacity-60 transition-opacity duration-300 ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
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
                    href="mailto:livia146miranda@gmail.com" 
                    aria-label='Enviar email para Lívia' 
                    className="p-2 rounded-sm text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  >
                    <EnvelopeSimpleIcon size={24} weight="bold" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/liviamirandadeoliveira/" 
                    aria-label='LinkedIn (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-sm text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  >
                    <LinkedinLogoIcon size={24} weight="bold" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/10QUVd-f9ORjKOVvJE-wWdbR3pSSobbyc/view?usp=drive_link" 
                    aria-label='Currículo de Lívia (abre em nova aba)' 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-sm text-foreground hover:opacity-60 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
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