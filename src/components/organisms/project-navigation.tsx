import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!previousProject && !nextProject) return null;

  const cardClassName = `flex items-center gap-4 p-6 border border-border rounded-sm hover:border-foreground active:scale-95 transition-all duration-500 group min-h-[44px] ${
    isMobile ? 'p-4' : 'p-6'
  }`;
  const iconClassName = "text-muted-foreground group-hover:text-foreground transition-colors duration-500";

  return (
    <section className="border-t border-border py-16">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Previous Project */}
          {previousProject ? (
            <Link to={previousProject.url} className="focus-ring rounded-sm">
              <motion.div
                className={cardClassName}
                whileHover={!isMobile ? { x: -4 } : {}}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CaretLeftIcon size={20} weight="bold" className={iconClassName} />
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Anterior</p>
                  <p className={`leading-[1.7] ${
                    isMobile ? 'text-[14px]' : 'text-[1rem]'
                  }`}>{previousProject.title}</p>
                </div>
              </motion.div>
            </Link>
          ) : null}

          {/* Next Project */}
          {nextProject ? (
            <Link to={nextProject.url} className="focus-ring rounded-sm">
              <motion.div
                className={`${cardClassName} justify-end`}
                whileHover={!isMobile ? { x: 4 } : {}}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Próximo</p>
                  <p className={`leading-[1.7] ${
                    isMobile ? 'text-[14px]' : 'text-[1rem]'
                  }`}>{nextProject.title}</p>
                </div>
                <CaretRightIcon size={20} weight="bold" className={iconClassName} />
              </motion.div>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}