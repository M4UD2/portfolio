import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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
      data-project-image
    >
      <div className="rounded-sm overflow-hidden border border-border w-fit mx-auto [&_[data-rmiz-wrap]]:w-full [&_[data-rmiz-wrap]]:h-full">
        <Zoom>
          <img
            src={src || '/placeholder.jpg'}
            alt={alt}
            className="block max-w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.jpg';
            }}
          />
        </Zoom>
      </div>
    </motion.section>
  );
}
