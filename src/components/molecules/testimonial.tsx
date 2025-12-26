import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export default function Testimonial({ quote, author, role, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      id="depoimento"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className="border-l-4 border-foreground pl-8 py-8">
        <p className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-muted-foreground italic mb-8 max-w-[70ch]">
          "{quote}"
        </p>
        <div className="flex flex-col gap-1.5">
          <p className="text-[1rem] leading-[1.7] font-bold">{author}</p>
          <p className="text-[1rem] leading-[1.7] text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}