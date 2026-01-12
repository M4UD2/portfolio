import { motion } from 'framer-motion';

interface ProjectGalleryProps {
  images: string[];
  delay?: number;
}

export default function ProjectGallery({ images, delay = 0 }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  const imageClassName = "w-full h-full object-cover";

  return (
    <motion.div
      id="galeria"
      className="flex flex-col gap-8 scroll-mt-32 md:scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <h3>Processo & Resultados Visuais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => {
          const safeImageSrc = image && typeof image === 'string' ? image : '/placeholder.jpg';
          
          return (
            <motion.div
              key={`gallery-${index}-${image}`}
              className="w-full h-[300px] rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: delay + index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={safeImageSrc}
                alt={`Project gallery ${index + 1}`}
                className={imageClassName}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
