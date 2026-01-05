import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, WrenchIcon } from '@phosphor-icons/react';
import Tooltip from '../atoms/tooltip-simple';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  date: string;
  role: string;
  tools: string[];
  link?: string;
}

export default function ProjectHero({ title, subtitle, date, role, tools }: ProjectHeroProps) {
  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-10 pt-0 pb-2 md:pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Title */}
        <h1 dangerouslySetInnerHTML={{ __html: title.replace(/—/g, '—&nbsp;').replace(/De /g, 'De&nbsp;').replace(/a /g, 'a&nbsp;') }} />
        
        {/* Subtitle */}
        <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[70ch] whitespace-normal" dangerouslySetInnerHTML={{ __html: subtitle.replace(/de valor/g, 'de&nbsp;valor') }}>
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-[0.875rem] leading-[1.7] text-muted-foreground">
          <Tooltip content="Data do projeto">
            <div className="flex items-center gap-1.5">
              <CalendarIcon size={14} weight="bold" className="text-foreground" />
              <span>{date}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Meu papel no projeto">
            <div className="flex items-center gap-1.5">
              <UserIcon size={14} weight="bold" className="text-foreground" />
              <span>{role}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Ferramentas utilizadas">
            <div className="flex items-center gap-1.5">
              <WrenchIcon size={14} weight="bold" className="text-foreground" />
              <span>{tools.join(', ')}</span>
            </div>
          </Tooltip>
        </div>
      </div>
    </motion.section>
  );
}