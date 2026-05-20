import { useEffect, useState } from 'react';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  HandWavingIcon,
  BeerBottleIcon,
  GameControllerIcon,
  CatIcon,
  MusicNoteIcon,
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
      detail: "O respiro essencial longe das telas"
    },
    {
      id: "games",
      icon: GameControllerIcon,
      label: "Jogando até chegar no 100%",
      detail: "E só parando quando está 100%"
    },
    {
      id: "gata",
      icon: CatIcon,
      label: "Sendo humana de estimação da Abigail",
      detail: "A companhia oficial no home office"
    },
    {
      id: "spotify",
      icon: MusicNoteIcon,
      label: "Organizando minha playlists",
      detail: currentSong.explicit
        ? "🤫 No fone agora... (Censurado pelo RH)"
        : `No fone agora: ${currentSong.name} - ${currentSong.artist}`
    }
  ];

  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      <div className="py-8 md:py-12 max-w-[808px] mx-auto">
        
        {/* HERO E STORYTELLING */}
        <section className="mb-10" aria-label="História e apresentação">
          <FadeInView delay={0.1}>
            <div className="flex flex-col items-center">
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
              
              <div className="w-full">
                <h1 className="text-balance text-center mb-6">Oi, eu sou a Lívia!</h1>
                
                <div className="space-y-4 text-[1rem] leading-[1.7] text-muted-foreground text-left">
                  <p>
                  Sempre tive interesse por tecnologia, criatividade, e uma curiosidade genuína de entender e me comunicar com pessoas. Foi essa combinação que me levou a cursar <strong>Publicidade e Propaganda</strong>, onde aprendi que dá para ser criativo com estratégia e que entender o comportamento humano é o que faz com que as soluções sejam capazes de ter impacto.
                  </p>

                  <p>
                    Minha trajetória começou no design gráfico e no marketing, mas quando surgiu a chance de aplicar tudo isso através de interfaces, não tive dúvida: era aqui que eu queria estar. Ser <strong>Product Designer</strong> é usar criatividade e entendimento de pessoas e de tecnologias pra remover fricção, facilitar a vida de quem está do outro lado da tela e movimentar o negócio. Por isso vou além das telas: reviso processos, questiono fluxos e uso <strong>IA e dados</strong> pra tomar decisões mais certeiras, não só mais bonitas.
                  </p>
                  <p>E é por causa disso que hoje estou:</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* STATUS ATUAL */}
        <section className="mb-4" aria-label="Status atual">
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-6 rounded-sm border border-border min-h-[44px]">
                <div className="p-3 bg-muted/30 rounded-sm text-foreground border border-border">
                  <BriefcaseIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">Atuando como</p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">UX/UI Designer II na Bwtech</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-sm border border-border min-h-[44px]">
                <div className="p-3 bg-muted/30 rounded-sm text-foreground border border-border">
                  <GraduationCapIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">Especializando em</p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">AI, DS e Big Data na PUC RS</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CONECTOR VISUAL */}
        <FadeInView delay={0.3}>
          <div className="w-full mb-10 mt-10">
            <p className="text-[1rem] leading-[1.7] text-muted-foreground text-left">
            Mas não só de pixels e processos eu sou resumida. Quando o trabalho pausa, fora das telas (nem sempre fora) você me encontra:
            </p>
          </div>
        </FadeInView>

        {/* GRID DE INTERESSES PADRONIZADO */}
        <section className="mb-10" aria-label="Interesses e hobbies">
          <FadeInView delay={0.4}>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.id}
                    className="relative flex flex-col items-center justify-center p-6 rounded-sm border border-border h-[180px] overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                      <div className="p-3 bg-muted/30 rounded-sm text-foreground border border-border">
                        <hobby.icon size={24} weight="bold" />
                      </div>
                      <span className="text-[14px] leading-[1.4] text-foreground font-medium text-center w-full">
                        {hobby.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-10" aria-label="Contato e links">
          <FadeInView delay={0.5}>
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h2 className="text-balance">Quer saber mais sobre mim?</h2>
                <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[60ch] mx-auto">
                No meu currículo você encontra mais da minha trajetória, e se quiser trocar uma ideia sobre design, IA ou gatos no teclado, é só me chamar:
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  href="https://drive.google.com/file/d/1HZnWmJj1f2kNpLmexcbxyCu2Za0uUr8j/view?usp=sharing"
                  isExternal={true}
                >
                  Ver currículo
                </Button>
                
                <div className="flex items-center gap-4">
                  <SocialLink 
                    href="https://www.linkedin.com/in/liviamirandadeoliveira/" 
                    label="LinkedIn"
                  />
                  <SocialLink 
                    href="mailto:livia146miranda@gmail.com" 
                    label="Email"
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