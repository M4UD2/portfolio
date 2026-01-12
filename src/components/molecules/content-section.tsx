import React from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  delay?: number;
}

export default function ContentSection({ id, title, content, delay = 0 }: ContentSectionProps) {
  return (
    <motion.div
      id={id}
      className="flex flex-col gap-4 scroll-mt-24 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] -tracking-[0.02em] text-balance">{title}</h2>
      <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[70ch]">{content}</p>
    </motion.div>
  );
}