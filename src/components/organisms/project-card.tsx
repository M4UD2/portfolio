import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TagIcon } from '@phosphor-icons/react';
import Button from '../atoms/button';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  tags?: string[];
  productLogo?: string;
  productName?: string;
}

export default function ProjectCard({ title, description, link, imageUrl, imageAlt, reversed = false, tags, productLogo, productName }: ProjectCardProps) {
  const isExternal = link.startsWith('http');
  const isComingSoon = link === '#';

  const ImageContent = () => (
    <motion.div
      className={`aspect-video w-full relative overflow-hidden rounded-sm bg-muted border border-border/50 ${
        isComingSoon ? 'opacity-70' : ''
      }`}
      whileHover={{ scale: isComingSoon ? 1 : 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <img 
        src={imageUrl || '/placeholder.jpg'} 
        alt={imageAlt} 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = '/placeholder.jpg';
        }}
      />
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
            <img src={productLogo} alt={productName ?? ''} className="h-6 w-auto opacity-80" />
          )}
          <h3 className={`hyphens-none leading-tight text-balance ${
            isComingSoon ? 'text-muted-foreground' : 'text-foreground'
          }`}>{title}</h3>
          <p className="text-[1rem] leading-[1.7] text-muted-foreground w-full">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground">
                  <TagIcon size={11} weight="bold" />
                  {tag}
                </span>
              ))}
            </div>
          )}
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