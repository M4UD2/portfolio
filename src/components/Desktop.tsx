import svgPaths from "../imports/svg-7jcuggu47t";
import imgRectangle1 from "figma:asset/06e35dd2293fe8b729c00f550c200d1a62c1fbf5.png";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

function ProjectCard({ 
  title, 
  description, 
  link, 
  year,
  company,
  imageUrl,
  imageAlt,
  reversed = false
}: { 
  title: string; 
  description: string; 
  link: string;
  year: string;
  company: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}) {
  const isExternal = link.startsWith('http');
  
  return (
    <motion.article 
      className={`gap-[40px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] items-center w-full group ${reversed ? 'direction-rtl' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div 
        className={`${reversed ? 'order-2' : 'order-1'}`}
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="h-[400px] relative overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <ImageWithFallback 
            alt={imageAlt} 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full group-hover:scale-105 transition-transform duration-300" 
            src={imageUrl} 
          />
        </div>
      </motion.div>
      
      <motion.div 
        className={`content-stretch flex flex-col gap-[16px] not-italic text-black ${reversed ? 'order-1 items-start' : 'order-2 items-end text-right'}`}
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] text-[20px]">{title}</p>
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[12px] opacity-60">
            {company} • {year}
          </p>
        </div>
        
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[14px] opacity-80">
          {description}
        </p>
        
        <motion.a 
          className="inline-flex items-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[14px] border-2 border-black px-[20px] py-[10px] hover:bg-black hover:text-white transition-all group/btn mt-[8px]" 
          href={link}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          Ver case completo
          <ArrowRight className="size-[16px] group-hover/btn:translate-x-1 transition-transform" strokeWidth={2} />
        </motion.a>
      </motion.div>
    </motion.article>
  );
}

function HeroSection() {
  return (
    <motion.section 
      className="content-stretch flex flex-col gap-[24px] items-center justify-center w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.h1 
        className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[40px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.span 
          className="block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Oi, eu sou a Lívia!
        </motion.span>
        <motion.span 
          className="block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Bem-vindo(a) ao meu portfólio ;)
        </motion.span>
      </motion.h1>
      <motion.div 
        className="flex w-full max-w-[783px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[#212529] text-[16px] text-center w-full">
          Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes
        </p>
      </motion.div>
    </motion.section>
  );
}

function DownArrowIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_745)">
          <path d="M12 5V19" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M18 13L12 19" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M6 13L12 19" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_11_745">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CallToAction() {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[4px] items-center justify-center w-[216px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center">
        Conheça o meu trabalho
      </p>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <DownArrowIcon />
      </motion.div>
    </motion.div>
  );
}

function HeroContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[224px] items-center w-full max-w-[863px] mx-auto">
      <HeroSection />
      <CallToAction />
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_758)">
          <path d={svgPaths.p210145c0} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M3 7L12 13L21 7" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_11_758">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M8 11V16" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M8 8V8.01" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M12 16V11" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e315b80} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1f00f300} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CVIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_751)">
          <path d={svgPaths.p2c7f0600} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p18d48b80} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1137c610} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M13 11L14.5 17L16 11" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_11_751">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-[50px] pr-0 py-0">
      <a href="mailto:contato@liviamiranda.com" className="hover:opacity-70 transition-opacity" aria-label="Email">
        <EmailIcon />
      </a>
      <a href="https://linkedin.com" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="/cv.pdf" className="hover:opacity-70 transition-opacity" aria-label="Download CV">
        <CVIcon />
      </a>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="content-stretch flex gap-[40px] items-center justify-center w-[187px]">
      <a href="/" className="[text-underline-position:from-font] decoration-solid font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center text-nowrap underline whitespace-pre hover:opacity-70 transition-opacity">
        Ínicio
      </a>
      <a href="/sobre-mim" className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center text-nowrap whitespace-pre hover:underline transition-all">
        Sobre mim
      </a>
    </nav>
  );
}

function Header() {
  return (
    <header 
      className="box-border content-stretch flex items-center justify-between px-[40px] py-[12px] w-full border-b border-black fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]"
    >
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Navigation />
      <ActionIcons />
    </header>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-[120px] pt-[227px] pb-[80px] gap-[80px]">
        <HeroContainer />
        
        <motion.div 
          className="w-full border-t border-black my-[40px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />
        
        <section id="projetos" className="flex flex-col gap-[64px] max-w-[1040px] mx-auto w-full">
          <motion.h2 
            className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[20px] text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            Projetos
          </motion.h2>
          
          <ProjectCard 
            title="De 60 minutos de espera a um onboarding produtivo"
            description="Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor, criando uma experiência engajante durante o tempo de configuração inicial do sistema."
            link="/projeto/yrden"
            year="2024"
            company="Yrden"
            imageUrl="https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMGludGVyZmFjZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NjQ2MTkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Yrden Onboarding Project"
          />
          
          <ProjectCard 
            title="Implementando múltiplas visualizações de dados"
            description="Como redesenhei a interface de análise de dados permitindo que usuários alternem entre diferentes visões, melhorando a tomada de decisão e flexibilidade da plataforma."
            link="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD?node-id=3-419"
            year="2024"
            company="Axiom"
            imageUrl="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ1MjI4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Axiom Data Visualization Project"
            reversed={true}
          />
        </section>
      </main>
    </div>
  );
}