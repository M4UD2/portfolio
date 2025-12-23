import React from 'react';
import Navbar from '../components/navbar';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// @ts-ignore
import imgPlaceholder from "../assets/mockup.png";

function ProjectCard({ 
  title, description, link, year, company, imageUrl, imageAlt, reversed = false
}: { 
  title: string; description: string; link: string; year: string; company: string; imageUrl: string; imageAlt: string; reversed?: boolean;
}) {
  const isExternal = link.startsWith('http');
  
  return (
    <motion.article 
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-16 items-center w-full group py-8 lg:py-12`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full lg:w-1/2">
        <div className="aspect-video lg:h-[400px] relative overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col gap-4 text-foreground items-start">
        <div>
          <h3 className="font-mono font-bold text-lg sm:text-xl lg:text-2xl mb-2">{title}</h3>
          <p className="font-mono text-sm opacity-60 uppercase tracking-wider">
            {company} • {year}
          </p>
        </div>
        
        <p className="font-mono text-sm lg:text-base opacity-80 leading-relaxed">
          {description}
        </p>
        
        {isExternal ? (
           <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all group/btn mt-2">
            Ver projeto 
            <span className="group-hover/btn:translate-x-1 transition-transform">
              <ArrowRight />
            </span>
           </a>
        ) : (
           <Link to={link} className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm border-2 border-black px-4 sm:px-6 py-3 hover:bg-black hover:text-white transition-all group/btn mt-2">
            Ver case completo 
            <span className="group-hover/btn:translate-x-1 transition-transform">
              <ArrowRight />
            </span>
           </Link>
        )}
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-mono font-bold text-2xl sm:text-3xl lg:text-5xl text-foreground leading-tight mb-6 uppercase tracking-tighter">
              Oi, eu sou a Lívia!
            </h1>
          </motion.div>

          <motion.div className="mt-12 flex flex-col items-center gap-2">
            <p className="font-mono font-bold text-sm uppercase tracking-widest text-muted-foreground">Conheça o meu trabalho</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-foreground">
                <ArrowDown size={32} />
              </span>
            </motion.div>
          </motion.div>
        </section>
        
        <div className="w-full border-t border-border mb-12" />
        
        <section id="projetos" className="flex flex-col gap-8 lg:gap-12">
          <ProjectCard 
            title="De 60 minutos de espera a um onboarding produtivo"
            description="Case sobre onboarding para a Yrden."
            link="/projeto/yrden"
            year="2024"
            company="Yrden"
            imageUrl={imgPlaceholder}
            imageAlt="Yrden Onboarding Project"
          />
        </section>
      </main>
    </div>
  );
}