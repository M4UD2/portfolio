import React from 'react';
import { motion } from 'framer-motion';

interface ProjectGalleryProps {
  images: string[];
  delay?: number;
}

export default function ProjectGallery({ images, delay = 0 }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <motion.div
      id="galeria"
      className="flex flex-col gap-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] max-w-[35ch]">Processo & Resultados Visuais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-[300px] rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={image}
              alt={`Project gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}