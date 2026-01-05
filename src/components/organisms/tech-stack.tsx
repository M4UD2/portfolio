import React from 'react';
import { motion } from 'framer-motion';
import TechBadge from '../atoms/tech-badge';

interface TechStackProps {
  technologies: string[];
  delay?: number;
}

export default function TechStack({ technologies, delay = 0 }: TechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <motion.div
      id="tecnologias"
      className="flex flex-col gap-5 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] max-w-[35ch] text-balance">Tecnologias utilizadas</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} index={index} />
        ))}
      </div>
    </motion.div>
  );
}