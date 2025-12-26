import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  index?: number;
}

export default function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  return (
    <motion.span
      className="px-5 py-2.5 border border-border rounded-sm text-[1rem] leading-[1.7] hover:border-foreground transition-colors duration-500 focus-ring"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {tech}
    </motion.span>
  );
}