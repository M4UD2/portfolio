import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInView({ children, delay = 0, className = '' }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}