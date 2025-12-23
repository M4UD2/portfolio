import svgPaths from "../imports/svg-7jcuggu47t";
import imgRectangle1 from "figma:asset/06e35dd2293fe8b729c00f550c200d1a62c1fbf5.png";
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

function ProjectCard({ 
  title, 
  description, 
  link, 
  year,
  company,
  imageUrl,
  imageAlt
}: { 
  title: string; 
  description: string; 
  link: string;
  year: string;
  company: string;
  imageUrl: string;
  imageAlt: string;
}) {
  const isExternal = link.startsWith('http');
  
  return (
    <article className="flex flex-col gap-[20px] w-full group">
      <div className="h-[240px] relative overflow-hidden border-2 border-black">
        <ImageWithFallback 
          alt={imageAlt} 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={imageUrl} 
        />
      </div>
      
      <div className="content-stretch flex flex-col gap-[12px] not-italic text-black">
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] text-[16px]">{title}</p>
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[11px] opacity-60">
            {company} • {year}
          </p>
        </div>
        
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[13px] opacity-80">
          {description}
        </p>
        
        <a 
          className="inline-flex items-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[13px] border-2 border-black px-[16px] py-[10px] hover:bg-black hover:text-white transition-all group/btn mt-[8px] self-start" 
          href={link}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          Ver case completo
          <ArrowRight className="size-[14px] group-hover/btn:translate-x-1 transition-transform" strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

function HeroSection() {
  return (
    <section className="content-stretch flex flex-col gap-[24px] items-center justify-center w-full">
      <h1 className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[32px] text-center max-w-[315px]">
        <span className="block">Oi, eu sou a Lívia!</span>
        <span className="block">Bem-vindo(a) ao meu portfólio ;)</span>
      </h1>
      <div className="flex w-full max-w-[343px] px-4">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[#212529] text-[14px] text-center w-full">
          Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes
        </p>
      </div>
    </section>
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
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center w-[216px]">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center">
        Conheça o meu trabalho
      </p>
      <DownArrowIcon />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[152px] items-center w-full">
      <HeroSection />
      <CallToAction />
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_763)">
          <path d="M4 8H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 16H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_11_763">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#f8f9fa] box-border content-stretch flex items-start justify-between px-[16px] py-[12px] w-full border-b border-black">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <button aria-label="Menu" className="hover:opacity-70 transition-opacity">
        <MenuIcon />
      </button>
    </header>
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

export default function Mobile() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-[16px] pt-[120px] pb-[60px] gap-[60px]">
        <HeroContainer />
        
        <div className="w-full border-t border-black my-[20px]" />
        
        <section id="projetos" className="flex flex-col gap-[40px] w-full">
          <h2 className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[16px] text-black">
            Projetos
          </h2>
          
          <ProjectCard 
            title="De 60 minutos de espera a um onboarding produtivo"
            description="Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor."
            link="/projeto/yrden"
            year="2024"
            company="Yrden"
            imageUrl="https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMGludGVyZmFjZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NjQ2MTkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Yrden Onboarding Project"
          />
          
          <ProjectCard 
            title="Implementando múltiplas visualizações de dados"
            description="Como redesenhei a interface de análise de dados com diferentes visões e maior flexibilidade."
            link="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD?node-id=3-419"
            year="2024"
            company="Axiom"
            imageUrl="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ1MjI4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Axiom Data Visualization Project"
          />
        </section>
      </main>
    </div>
  );
}