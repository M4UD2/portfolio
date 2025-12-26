import React from 'react';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export default function ProjectImage({ src, alt, delay = 0 }: ProjectImageProps) {
  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-10 py-6 md:py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className="w-full h-[300px] md:h-[500px] rounded-sm overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.section>
  );
}