import { useEffect, useState } from 'react';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  HandWavingIcon,
  CameraIcon,
  GameControllerIcon,
  CatIcon,
  BarbellIcon,
  ArrowsClockwiseIcon
} from '@phosphor-icons/react';
import FadeInView from '../components/atoms/fade-in-view';
import SocialLink from '../components/atoms/social-link';
import Button from '../components/atoms/button';

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePhotoInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const hobbies = [
    { 
      icon: CameraIcon, 
      label: "Com a câmera na mão",
      detail: "Capturando momentos únicos"
    },
    { 
      icon: GameControllerIcon, 
      label: "Mergulhada nos games",
      detail: "RPGs e aventuras épicas"
    },
    { 
      icon: CatIcon, 
      label: "Mimando meu gato",
      detail: "Melhor companheiro de trabalho"
    },
    { 
      icon: BarbellIcon, 
      label: "Gastando energia no treino",
      detail: "Kickboxing e endorfina"
    }
  ];

  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      <div className="py-8 md:py-12">
        
        {/* HERO */}
        <section className="mb-20">
          <FadeInView>
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-36 h-36 md:w-52 md:h-52 mb-8 relative group cursor-pointer min-h-[44px] focus-ring rounded-full"
                onClick={handlePhotoInteraction}
                tabIndex={0}
                role="button"
                aria-label={isMobile ? "Tocar para alternar entre foto profissional e casual" : "Foto de Lívia Miranda"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePhotoInteraction();
                  }
                }}
              >
                <img
                  alt="Foto de Lívia Miranda"
                  className={`w-full h-full object-cover rounded-full border border-border/50 relative z-10 bg-muted transition-opacity duration-300 ${
                    isFlipped ? 'opacity-0' : 'opacity-100'
                  }`}
                  src="/eu.jpg"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  alt="Foto casual de Lívia Miranda"
                  className={`absolute inset-0 w-full h-full object-cover rounded-full border border-border/50 z-10 bg-muted transition-opacity duration-300 ${
                    isFlipped ? 'opacity-100' : 'opacity-0'
                  }`}
                  src="/eu-casual.jpg"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className={`absolute bottom-2 right-2 bg-background border border-border p-2.5 rounded-full z-20 text-foreground transition-transform duration-300 hover:scale-110 group hover:rotate-0 ${
                  isFlipped ? 'rotate-0' : 'rotate-12'
                }`}>
                  <HandWavingIcon size={20} weight="bold" />
                </div>
              </div>
              
              <div className="space-y-6 max-w-[70ch] mx-auto">
                <h1 className="text-balance">Oi, eu sou a Lívia!</h1>
                
                <div className="space-y-4 text-[1rem] leading-[1.7] text-muted-foreground">
                  <p>
                    Sou <strong className="text-foreground">publicitária apaixonada por tecnologia</strong> que encontrou no design de produtos digitais uma forma de conectar pessoas e resolver problemas reais.
                  </p>
                  <p>
                    Acredito que para criar experiências autênticas, é preciso viver experiências autênticas — por isso estou sempre aprendendo, seja no trabalho ou na vida.
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* BENTO GRID - CONTEXTO PROFISSIONAL */}
        <section className="mb-12">
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              
              {/* Card Trabalho */}
              <div className="flex items-center gap-4 p-6 rounded-sm hover:bg-muted active:scale-95 transition-all duration-300 group border border-border/30 hover:border-border min-h-[44px]">
                <div className="p-3 bg-muted rounded-sm text-foreground group-hover:scale-110 transition-transform">
                  <BriefcaseIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Atualmente
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">UX/UI Designer @ Bwtech</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">Produtos B2B que fazem diferença</p>
                </div>
              </div>

              {/* Card Estudos */}
              <div className="flex items-center gap-4 p-6 rounded-sm hover:bg-muted active:scale-95 transition-all duration-300 group border border-border/30 hover:border-border min-h-[44px]">
                <div className="p-3 bg-muted rounded-sm text-foreground group-hover:scale-110 transition-transform">
                  <GraduationCapIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Estudando
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">MBA em IA & Data @ PUC RS</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">O futuro do design com dados</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* TRANSIÇÃO PARA HOBBIES */}
        <section className="mb-12">
          <FadeInView delay={0.3}>
            <div className="text-center max-w-[60ch] mx-auto">
              <p className="text-[1rem] leading-[1.7] text-muted-foreground">
                E para criar experiências reais, gosto de viver o mundo real. Quando desconecto do trabalho:
              </p>
            </div>
          </FadeInView>
        </section>

        {/* BENTO GRID - HOBBIES */}
        <section className="mb-20">
          <FadeInView delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-[800px] mx-auto">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="group flex flex-col items-center gap-4 p-6 rounded-sm border border-border/30 hover:border-border hover:bg-muted/50 active:scale-95 transition-all duration-300 md:hover:scale-105 cursor-default min-h-[44px]"
                >
                  <div className="p-4 bg-muted rounded-sm text-foreground group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-300">
                    <hobby.icon size={20} weight="bold" className="md:group-hover:animate-pulse" />
                  </div>
                  <div className="text-center">
                    <span className="text-[12px] leading-[1.7] text-muted-foreground md:group-hover:text-foreground transition-colors font-medium block">
                      {hobby.label}
                    </span>
                    <span className={`text-[10px] leading-[1.7] text-muted-foreground/70 md:group-hover:text-muted-foreground transition-colors block mt-1 ${
                      isMobile ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                    }`}>
                      {hobby.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-12">
          <FadeInView delay={0.4}>
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h2 className="text-balance">Vamos conversar?</h2>
                <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[60ch] mx-auto">
                  Se quiser saber mais detalhes da minha trajetória ou trocar ideias sobre design e tecnologia:
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  href="https://drive.google.com/file/d/10QUVd-f9ORjKOVvJE-wWdbR3pSSobbyc/view?usp=drive_link"
                  isExternal={true}
                >
                  Ver meu currículo
                </Button>
                
                <div className="flex items-center gap-4">
                  <SocialLink 
                    href="https://www.linkedin.com/in/liviamirandadeoliveira/" 
                    label="LinkedIn"
                  />
                  <SocialLink 
                    href="mailto:livia146miranda@gmail.com" 
                    label="Email"
                    isExternal={false}
                  />
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

      </div>
    </main>
  );
}