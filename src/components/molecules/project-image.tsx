import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { CornersOut, CornersIn } from '@phosphor-icons/react';

interface ProjectImageProps {
  src: string;
  alt: string;
  delay?: number;
  caption?: string;
  fullWidth?: boolean;
}

export default function ProjectImage({ src, alt, delay = 0, caption, fullWidth = false }: ProjectImageProps) {
  return (
    <motion.section
      className={fullWidth ? "max-w-[1040px] mx-auto px-6 md:px-10 py-6 md:py-8" : "py-2"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      data-project-image
    >
      <div className="relative group rounded-sm overflow-hidden border border-border w-full [&_[data-rmiz-wrap]]:w-full [&_[data-rmiz-wrap]]:h-full">
        <Zoom
          IconUnzoom={() => <CornersIn weight="bold" className="w-5 h-5 text-foreground group-hover:text-background" />}
          classDialog="[&_[data-rmiz-btn-unzoom]]:!top-auto [&_[data-rmiz-btn-unzoom]]:!bottom-10 [&_[data-rmiz-btn-unzoom]]:!right-1/2 [&_[data-rmiz-btn-unzoom]]:!translate-x-1/2 [&_[data-rmiz-btn-unzoom]]:!bg-background/80 [&_[data-rmiz-btn-unzoom]]:!backdrop-blur-sm [&_[data-rmiz-btn-unzoom]]:!border [&_[data-rmiz-btn-unzoom]]:!border-border [&_[data-rmiz-btn-unzoom]]:!rounded-sm [&_[data-rmiz-btn-unzoom]]:!p-2 [&_[data-rmiz-btn-unzoom]]:!flex [&_[data-rmiz-btn-unzoom]]:!items-center [&_[data-rmiz-btn-unzoom]]:!justify-center [&_[data-rmiz-btn-unzoom]]:!transition-all [&_[data-rmiz-btn-unzoom]]:!duration-300 hover:[&_[data-rmiz-btn-unzoom]]:!bg-foreground group"
        >
          <img
            src={src || '/placeholder.jpg'}
            alt={alt}
            className="block max-w-full h-auto object-contain cursor-zoom-in"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.jpg';
            }}
          />
        </Zoom>

        {/* Botão de expandir (Sempre visível no mobile, hover no desktop) */}
        <div className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-sm text-foreground pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <CornersOut weight="bold" className="w-5 h-5" />
        </div>
      </div>

      {/* Legenda (Caption) */}
      {caption && (
        <p className="mt-3 text-center text-[14px] leading-[1.7] text-muted-foreground font-sans">
          {caption}
        </p>
      )}
    </motion.section>
  );
}