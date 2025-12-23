import React from 'react';
import { Link } from 'react-router-dom';

export default function footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12 mt-20 md:mt-32">
      <div className="max-w-[1040px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm opacity-80">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                Home
              </Link>
              <Link
                to="/sobre-mim"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                Sobre mim
              </Link>
              <Link
                to="/projetos"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                Projetos
              </Link>
              <Link
                to="/fotografia"
                className="text-sm opacity-50 hover:opacity-70 transition-opacity duration-500"
              >
                Fotografia
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm opacity-80">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:livia146miranda@gmail.com"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                livia146miranda@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/livia-miranda"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/liviaaoli"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:opacity-70 transition-opacity duration-500"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm opacity-80">Vamos trabalhar juntos?</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Estou sempre aberta a novos projetos e colaborações. Entre em contato!
            </p>
            <a
              href="mailto:livia146miranda@gmail.com"
              className="text-sm underline hover:opacity-70 transition-opacity duration-500 inline-flex items-center gap-1"
            >
              Enviar mensagem →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            © 2024 Lívia Miranda · Product Designer
          </p>
          <p className="text-xs opacity-40">
            Feito com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}