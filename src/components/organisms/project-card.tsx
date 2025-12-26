import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Button from '../atoms/button';

export default function ProjectCard({ title, description, link, imageUrl, imageAlt, reversed = false }: any) {
  const isExternal = link.startsWith('http');

  const ImageContent = () => (
    <motion.div
      className="aspect-video w-full relative overflow-hidden rounded-sm bg-muted border border-border/50"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <img src={imageUrl} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
    </motion.div>
  );

  return (
    <motion.article className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className={`w-full ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {isExternal ? (
            <a href={link} target="_blank" rel="noopener noreferrer"><ImageContent /></a>
          ) : (
            <Link to={link}><ImageContent /></Link>
          )}
        </div>

        <div className={`w-full flex flex-col gap-3 items-start ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <h3 className="text-foreground hyphens-none leading-tight">{title}</h3>
          <p className="text-[16px] leading-[1.7] text-muted-foreground w-full">{description}</p>
          <Button href={link} isExternal={isExternal} icon={ArrowRightIcon}>Confira</Button>
        </div>
      </div>
    </motion.article>
  );
}