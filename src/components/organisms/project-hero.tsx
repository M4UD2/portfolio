import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, WrenchIcon } from '@phosphor-icons/react';
import Tooltip from '../atoms/tooltip-simple';

interface ProjectHeroProps {
  title: string;
  subtitle: React.ReactNode;
  date: string;
  role: string;
  tools: string[];
  link?: string;
  productName?: string;
  productLogo?: string;
  productLogoDark?: string;
}

export default function ProjectHero({ title, subtitle, date, role, tools, productName, productLogo, productLogoDark }: ProjectHeroProps) {
  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-10 pt-0 pb-2 md:pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6">
        {/* Product Logo + Title */}
        <div className="flex max-w-[860px] flex-col gap-2">
          {(productName || productLogo) && (
            <div className="flex items-center gap-3">
              {productLogo ? (
                <>
                  <img 
                    src={productLogo} 
                    alt={`${productName} logo`}
                    className="h-8 w-auto object-contain dark:hidden"
                  />
                  {productLogoDark && (
                    <img 
                      src={productLogoDark} 
                      alt={`${productName} logo`}
                      className="hidden h-8 w-auto object-contain dark:block"
                    />
                  )}
                </>
              ) : (
                <div className="text-[12px] leading-[1.7] uppercase tracking-widest font-bold text-muted-foreground">
                  {productName}
                </div>
              )}
            </div>
          )}
          <h1 className="text-balance">
            {title}
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="max-w-[72ch] text-[1rem] leading-[1.7] text-muted-foreground">
          {subtitle}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-[0.875rem] leading-[1.7] text-muted-foreground">
          <Tooltip content="Data do projeto">
            <div className="flex items-center gap-1.5 cursor-default">
              <CalendarIcon size={14} weight="bold" className="text-muted-foreground" />
              <span>{date}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Meu papel no projeto">
            <div className="flex items-center gap-1.5 cursor-default">
              <UserIcon size={14} weight="bold" className="text-muted-foreground" />
              <span>{role}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Ferramentas utilizadas">
            <div className="flex items-center gap-1.5 cursor-default">
              <WrenchIcon size={14} weight="bold" className="text-muted-foreground" />
              <span>{tools.join(', ')}</span>
            </div>
          </Tooltip>
        </div>
      </div>
    </motion.section>
  );
}
