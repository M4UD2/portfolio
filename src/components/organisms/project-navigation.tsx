import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

interface ProjectNavigationProps {
  previousProject?: {
    title: string;
    url: string;
  };
  nextProject?: {
    title: string;
    url: string;
  };
}

export default function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  if (!previousProject && !nextProject) return null;

  return (
    <section className="border-t border-border py-16">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Project */}
          {previousProject ? (
            <Link to={previousProject.url} className="focus-ring rounded-sm">
              <motion.div
                className="flex items-center gap-4 p-6 border border-border rounded-sm hover:border-foreground transition-all duration-500 group"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CaretLeftIcon size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Anterior</p>
                  <p className="text-[1rem] leading-[1.7]">{previousProject.title}</p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Project */}
          {nextProject ? (
            <Link to={nextProject.url} className="focus-ring rounded-sm">
              <motion.div
                className="flex items-center justify-end gap-4 p-6 border border-border rounded-sm hover:border-foreground transition-all duration-500 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Próximo</p>
                  <p className="text-[1rem] leading-[1.7]">{nextProject.title}</p>
                </div>
                <CaretRightIcon size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}