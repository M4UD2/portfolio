import Navbar from '../components/Navbar';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// CORREÇÃO: Importando o placeholder com o nome original
import imgPlaceholder from "../assets/06e35dd2293fe8b729c00f550c200d1a62c1fbf5.png";

function ProjectCard({ 
  title, description, link, year, company, imageUrl, imageAlt, reversed = false
}: { 
  title: string; description: string; link: string; year: string; company: string; imageUrl: string; imageAlt: string; reversed?: boolean;
}) {
  const isExternal = link.startsWith('http');
  
  return (
    <motion.article 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center w-full group py-8 md:py-12`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="w-full md:w-1/2">
        <div className="aspect-video md:h-[400px] relative overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <ImageWithFallback 
            alt={imageAlt} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            src={imageUrl} 
          />
        </div>
      </motion.div>
      
      <motion.div className="w-full md:w-1/2 flex flex-col gap-4 text-foreground items-start">
        <div>
          <h3 className="font-mono font-bold text-xl md:text-2xl mb-2">{title}</h3>
          <p className="font-mono text-sm opacity-60 uppercase tracking-wider">
            {company} • {year}
          </p>
        </div>
        
        <p className="font-mono text-sm md:text-base opacity-80 leading-relaxed">
          {description}
        </p>
        
        {isExternal ? (
           <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono font-bold text-sm border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all group/btn mt-2">
            Ver projeto <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
           </a>
        ) : (
           <Link to={link} className="inline-flex items-center gap-2 font-mono font-bold text-sm border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all group/btn mt-2">
            Ver case completo <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
           </Link>
        )}
      </motion.div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pb-20">
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-mono font-bold text-3xl md:text-5xl text-foreground leading-tight mb-6">
              <span className="block">Oi, eu sou a Lívia!</span>
              <span className="block text-opacity-80">Bem-vindo(a) ao meu portfólio ;)</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="font-mono font-bold text-sm uppercase tracking-widest text-muted-foreground">Conheça o meu trabalho</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="w-6 h-6 text-foreground" />
            </motion.div>
          </motion.div>
        </section>
        
        <div className="w-full border-t border-border mb-12" />
        
        <section id="projetos" className="flex flex-col gap-12">
          <motion.h2 
            className="font-mono font-bold text-2xl text-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projetos Selecionados
          </motion.h2>
          
          <ProjectCard 
            title="De 60 minutos de espera a um onboarding produtivo"
            description="Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor."
            link="/projeto/yrden"
            year="2024"
            company="Yrden"
            imageUrl={imgPlaceholder} // Usando o placeholder local
            imageAlt="Yrden Onboarding Project"
          />
          
          <ProjectCard 
            title="Implementando múltiplas visualizações de dados"
            description="Como redesenhei a interface de análise de dados permitindo que usuários alternem entre diferentes visões."
            link="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD"
            year="2024"
            company="Axiom"
            imageUrl={imgPlaceholder} // Usando o placeholder local
            imageAlt="Axiom Data Visualization Project"
            reversed={true}
          />
        </section>
      </main>
    </div>
  );
}
