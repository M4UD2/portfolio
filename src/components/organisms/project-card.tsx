import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowRightIcon } from '@phosphor-icons/react'; // Ajustado para Phosphor Icons

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function ProjectCard({
  title,
  description,
  link,
  imageUrl,
  imageAlt,
  reversed = false,
}: ProjectCardProps) {
  const isExternal = link.startsWith('http');

  return (
    <motion.article
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: "easeOut" }} // Transição sutil conforme diretriz
    >
      {/* Gap seguindo o sistema de 4px (gap-6 ou gap-8) */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full`}>
        
        {/* Seção de Imagem */}
        <div className={`w-full ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <motion.div
            className="aspect-video w-full relative overflow-hidden rounded-[24px] bg-muted" // Border radius de 24px
            whileHover={{ scale: 1.01 }} // Scale mínimo de 1.01
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Seção de Conteúdo - Gap-3 para componentes internos */}
        <div className={`w-full flex flex-col gap-3 items-start ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Tipografia explícita para consistência */}
          <h3 className="text-foreground break-words hyphens-auto text-balance">{title}</h3>

          <p className="text-[16px] leading-[1.7] text-muted-foreground break-words hyphens-auto text-balance">{description}</p>

          {isExternal ? (
            <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border px-6 py-4 mt-2 rounded-full hover:bg-foreground hover:text-background transition-all duration-500 font-sans text-[14px] leading-[1.7]" // Botão arredondado (pill shape)
            whileHover={{ x: 4 }} // Movimento horizontal de 4px no hover
            transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Confira
              <ArrowRightIcon size={16} weight="bold" />
            </motion.a>
          ) : (
            <Link to={link}>
              <motion.div 
              className="inline-flex items-center gap-3 border border-border px-6 py-4 mt-2 rounded-full hover:bg-foreground hover:text-background transition-all duration-500 font-sans text-[14px] leading-[1.7]"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Confira
                <ArrowRightIcon size={16} weight="bold" />
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}