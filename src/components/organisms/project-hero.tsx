import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, TagIcon } from '@phosphor-icons/react';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  link?: string;
}

export default function ProjectHero({ title, subtitle, date, tags }: ProjectHeroProps) {
  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-10 py-12 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarIcon size={16} weight="bold" className="text-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <TagIcon size={14} weight="bold" className="text-foreground" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1>{title}</h1>
        
        {/* Subtitle */}
        <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[70ch]">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}