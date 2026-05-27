import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Button from '../atoms/button';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  productLogo?: string;
  productLogoDark?: string;
  productName?: string;
}

export default function ProjectCard({ title, description, link, imageUrl, imageAlt, reversed = false, productLogo, productLogoDark, productName }: ProjectCardProps) {
  const isExternal = link.startsWith('http');
  const isComingSoon = link === '#';

  const ImageContent = () => (
    <motion.div
      className={`aspect-video w-full relative overflow-hidden rounded-sm bg-muted border border-border/50 ${
        isComingSoon ? 'opacity-60' : ''
      }`}
      whileHover={{ scale: isComingSoon ? 1 : 1.01 }}
      transition={{ duration: 0.4 }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/60">
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-border/80" />
          <span className="text-[11px] uppercase tracking-widest text-border/80">Em breve...</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <motion.article className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className={`w-full ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {isComingSoon ? (
            <ImageContent />
          ) : isExternal ? (
            <a href={link} target="_blank" rel="noopener noreferrer"><ImageContent /></a>
          ) : (
            <Link to={link}><ImageContent /></Link>
          )}
        </div>

        <div className={`w-full flex flex-col gap-3 items-start ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {productLogo && (
            <>
              <img
                src={productLogo}
                alt={productName ?? ''}
                className="h-7 w-auto dark:hidden"
              />
              {productLogoDark && (
                <img
                  src={productLogoDark}
                  alt={productName ?? ''}
                  className="hidden h-7 w-auto dark:block"
                />
              )}
            </>
          )}
          <h3 className={`hyphens-none leading-tight text-balance ${
            isComingSoon ? 'text-muted-foreground' : 'text-foreground'
          }`}>{title}</h3>
          <p className="text-[1rem] leading-[1.7] text-muted-foreground w-full">{description}</p>
          {isComingSoon ? (
            <div className="inline-flex items-center gap-3 border border-border px-5 py-2.5 mt-2 rounded-sm text-[14px] leading-[1.7] text-muted-foreground cursor-not-allowed">
              Em breve
            </div>
          ) : (
            <Button href={link} isExternal={isExternal} icon={ArrowRightIcon}>Ver projeto</Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
