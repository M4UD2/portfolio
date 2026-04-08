import { useEffect, useState } from 'react';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  HandWavingIcon,
  BeerBottleIcon,
  GameControllerIcon,
  CatIcon,
  SpotifyLogo
} from '@phosphor-icons/react';
import FadeInView from '../components/atoms/fade-in-view';
import SocialLink from '../components/atoms/social-link';
import Button from '../components/atoms/button';

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mock da API do Spotify (Mude explicit para true para testar a censura)
  const currentSong = {
    isPlaying: true,
    name: "Basket Case",
    artist: "Green Day",
    explicit: false 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
      id: "roles",
      icon: BeerBottleIcon, 
      label: "Em rolês com os amigos",
      detail: "O respiro essencial longe das telas",
      hoverImage: "/barzinho.jpg"
    },
    { 
      id: "games",
      icon: GameControllerIcon, 
      label: "Jogando alguma coisa",
      detail: "E só parando quando está 100%",
      hoverImage: "/games.jpg"
    },
    { 
      id: "gata",
      icon: CatIcon, 
      label: "Sendo mãe da Abigail",
      detail: "A companhia oficial no home office",
      hoverImage: "/gata.jpg"
    },
    { 
      id: "spotify",
      icon: SpotifyLogo,
      label: "Escutando alguma música",
      detail: currentSong.explicit 
        ? "🤫 No fone agora... (Censurado pelo RH)" 
        : `No fone agora: ${currentSong.name} - ${currentSong.artist}`,
      hoverImage: null
    }
  ];

  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      <div className="py-8 md:py-12">
        
        {/* HERO E STORYTELLING */}
        <section className="mb-20">
          <FadeInView>
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-36 h-36 md:w-52 md:h-52 mb-8 relative group cursor-pointer focus-ring rounded-full"
                onClick={handlePhotoInteraction}
                tabIndex={0}
                role="button"
                aria-label="Foto de Lívia Miranda"
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
                />
                <img
                  alt="Foto casual de Lívia Miranda"
                  className={`absolute inset-0 w-full h-full object-cover rounded-full border border-border/50 z-10 bg-muted transition-opacity duration-300 ${
                    isFlipped ? 'opacity-100' : 'opacity-0'
                  }`}
                  src="/eu-casual.jpg"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute bottom-2 right-2 bg-background border border-border p-2.5 rounded-full z-20 text-foreground transition-transform duration-300 hover:scale-110 group hover:rotate-0 ${
                  isFlipped ? 'rotate-0' : 'rotate-12'
                }`}>
                  <HandWavingIcon size={20} weight="bold" />
                </div>
              </div>
              
              <div className="space-y-6 max-w-[70ch] mx-auto">
                <h1 className="text-balance">Oi, eu sou a Lívia!</h1>
                
                <div className="space-y-4 text-[1rem] leading-[1.7] text-muted-foreground text-left md:text-center">
                  <p>
                    Vim da <strong className="text-foreground">Publicidade</strong>, onde aprendi a entender pessoas. Hoje, como UX/UI Designer, uso essa base para construir produtos digitais lógicos, funcionais e estratégicos.
                  </p>
                  <p>
                    Acredito que o design ganha força quando anda junto com os dados. Por isso, faço MBA em <strong className="text-foreground">Inteligência Artificial e Data Science</strong>, explorando como a automação e as métricas podem moldar o futuro das interfaces.
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* STATUS ATUAL */}
        <section className="mb-6">
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              <div className="flex items-center gap-4 p-6 rounded-sm bg-muted/30 border border-border/30 min-h-[44px]">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <BriefcaseIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Trabalhando como
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">UX/UI Designer II na Bwtech</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">Projetando soluções B2B e melhorando processos internos.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-sm bg-muted/30 border border-border/30 min-h-[44px]">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <GraduationCapIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Estudando
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">MBA em IA & Data Science na PUC RS</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">Entendendo como aliar métricas, automação e IA com design.</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CONECTOR VISUAL (Timeline bridge) */}
        <FadeInView delay={0.3}>
          <div className="flex flex-col items-center justify-center h-24 relative max-w-[800px] mx-auto mb-6">
            <div className="w-px h-full bg-border/40"></div>
            <div className="absolute top-1/2 -translate-y-1/2 bg-background px-4 py-1.5 border border-border/30 rounded-full text-[11px] font-medium uppercase tracking-widest text-muted-foreground z-10 shadow-sm">
              E quando o Figma fecha
            </div>
          </div>
        </FadeInView>

        {/* GRID DE INTERESSES PADRONIZADO */}
        <section className="mb-20">
          <FadeInView delay={0.4}>
            <div className="max-w-[800px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                {hobbies.map((hobby) => (
                  <div 
                    key={hobby.id}
                    className={`group relative flex flex-col items-center justify-center p-6 rounded-sm border border-border/30 transition-all duration-300 md:hover:scale-105 cursor-default h-[180px] overflow-hidden hover:border-border hover:bg-muted/50 ${
                      hobby.id === 'spotify' ? 'hover:border-[#1DB954]/40' : ''
                    }`}
                  >
                    {/* Fundo Hover */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {hobby.hoverImage ? (
                        <>
                          <img 
                            src={hobby.hoverImage} 
                            alt={hobby.label} 
                            className="w-full h-full object-cover opacity-40"
                          />
                          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
                        </>
                      ) : hobby.id === 'spotify' ? (
                        <div className="w-full h-full bg-[#1DB954]/10 backdrop-blur-[2px]"></div>
                      ) : null}
                    </div>

                    {/* Base Content — sobe no hover */}
                    <div className="relative z-10 flex flex-col items-center gap-3 w-full transition-transform duration-300 group-hover:-translate-y-5">
                      <div className={`p-3 bg-background/90 backdrop-blur-sm rounded-sm text-foreground shadow-sm border border-border/30 transition-colors ${
                        hobby.id === 'spotify' ? 'group-hover:text-[#1DB954] group-hover:border-[#1DB954]/30' : ''
                      }`}>
                        <hobby.icon size={24} weight={hobby.id === 'spotify' ? 'fill' : 'bold'} />
                      </div>
                      <span className="text-[14px] leading-[1.4] text-foreground font-medium text-center w-full">
                        {hobby.label}
                      </span>
                    </div>

                    {/* Texto Detalhe — aparece abaixo do conteúdo */}
                    <div className="absolute bottom-5 left-0 right-0 px-5 text-center z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <span className={`text-[12px] leading-[1.5] font-medium block ${
                        hobby.id === 'spotify' && !currentSong.explicit ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {hobby.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-12">
          <FadeInView delay={0.5}>
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h2 className="text-balance">Quer saber mais?</h2>
                <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[60ch] mx-auto">
                  Dê uma olhada no meu currículo para ver minha trajetória completa, ou me chame para conversar sobre design, IA e gatos no teclado:
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