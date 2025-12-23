import { ArrowLeft, Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

function BackButton() {
  return (
    <a 
      href="/" 
      className="inline-flex items-center gap-[6px] font-['Space_Mono:Bold',sans-serif] text-[13px] text-[#212529] hover:opacity-70 transition-opacity"
    >
      <ArrowLeft className="size-[20px]" strokeWidth={2} />
      Voltar
    </a>
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

function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('resumo');

  const sections = [
    { id: 'resumo', number: '01', title: 'Resumo' },
    { id: 'contexto', number: '02', title: 'Contexto' },
    { id: 'desafio', number: '03', title: 'Desafio' },
    { id: 'solucao', number: '04', title: 'Solução' },
    { id: 'resultados', number: '05', title: 'Resultados' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="mb-[24px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-[12px] active:opacity-70 transition-opacity"
      >
        <div className="flex items-center gap-[8px]">
          <div className="h-[2px] w-[24px] bg-black"></div>
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[11px] text-black tracking-wider">
            ÍNDICE
          </h3>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="size-[18px]" strokeWidth={2} />
        </div>
      </button>
      
      <div className={`transition-all duration-300 origin-top ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-[12px]">
          <ul className="flex flex-col gap-[12px]">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center gap-[10px] group transition-all duration-300 ${
                    activeSection === section.id ? 'translate-x-1' : 'active:translate-x-1'
                  }`}
                >
                  <span className={`font-['Space_Mono:Bold',sans-serif] text-[20px] leading-none transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-black opacity-100'
                      : 'text-black opacity-30 group-active:opacity-80'
                  }`}>
                    {section.number}
                  </span>
                  
                  <div className="flex-1">
                    <span className={`font-['Space_Mono:Regular',sans-serif] text-[11px] text-black transition-all duration-300 block ${
                      activeSection === section.id
                        ? 'opacity-100 font-["Space_Mono:Bold",sans-serif]'
                        : 'opacity-60 group-active:opacity-100'
                    }`}>
                      {section.title}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'w-full' : 'w-0'}`}></div>
    </nav>
  );
}

export default function ProjectYrdenMobile() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col px-[16px] pt-[32px] pb-[60px]">
        <BackButton />
        
        <div className="mt-[32px] flex flex-col gap-[20px] w-full">
          {/* Título do projeto */}
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-['Space_Mono:Bold',sans-serif] text-[20px] text-black leading-[1.3]">
              De 60 minutos de espera a um onboarding produtivo
            </h1>
            <p className="font-['Space_Mono:Bold',sans-serif] text-[15px] text-black opacity-80 leading-[1.4]">
              Um case sobre como transformar uma limitação técnica em uma jornada de boas-vindas produtiva
            </p>
          </div>

          {/* Informações do projeto */}
          <div className="flex flex-col gap-[16px] mt-[8px]">
            <div className="font-['Space_Mono:Bold',sans-serif] text-[13px] text-[#212529]">
              <p className="mb-[4px]">Role →</p>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[12px]">Product Designer</p>
            </div>
            <div className="font-['Space_Mono:Bold',sans-serif] text-[13px] text-[#212529]">
              <p className="mb-[4px]">Timeline →</p>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[12px]">Outubro 2024</p>
            </div>
            <div className="font-['Space_Mono:Bold',sans-serif] text-[13px] text-[#212529]">
              <p className="mb-[4px]">Ferramentas →</p>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[12px]">Figma, Miro, Maze</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-[16px] border-2 border-black">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763296479464-fe8bee23eb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmJvYXJkaW5nJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDYxOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Axiom Onboarding Interface"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="w-full border-t border-black my-[24px]" />

          {/* Sumário */}
          <TableOfContents />

          {/* Conteúdo */}
          <section id="resumo" className="flex flex-col gap-[16px] scroll-mt-[80px]">
            <h2 className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-black">
              1. Resumo do projeto
            </h2>
            
            <div className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] leading-[1.6] flex flex-col gap-[12px]">
              <p>
                <strong>Produto:</strong> Axiom, uma plataforma de BI Headless fictícia para empresas SaaS (B2B).
              </p>
              
              <div>
                <p className="mb-[6px]"><strong>Meu Papel:</strong> Product Designer (End-to-end)</p>
                <ul className="list-disc ml-[18px] flex flex-col gap-[4px]">
                  <li>Liderei a estratégia de produto e descoberta para a jornada do novo usuário.</li>
                  <li>Defini problemas de usuário, negócio e métricas de sucesso (KPIs).</li>
                  <li>Criei a solução completa, do fluxo ao protótipo de alta fidelidade.</li>
                </ul>
              </div>

              <p>
                <strong>O Desafio:</strong> 60 minutos de sincronização causavam uma péssima primeira impressão — uma tela de ações bloqueadas e frustração.
              </p>

              <p>
                <strong>A Solução:</strong> Redesenho da experiência criando um fluxo de onboarding produtivo que aproveita o tempo de espera para educar o usuário.
              </p>
            </div>
          </section>

          <div className="w-full border-t border-black my-[24px]" />

          <section id="contexto" className="flex flex-col gap-[16px] scroll-mt-[80px]">
            <h2 className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-black">
              2. O Desafio
            </h2>
            
            <div className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] leading-[1.6] flex flex-col gap-[12px]">
              <p>
                Uma limitação técnica exigia ~60 minutos para sincronizar dados, causando frustração e risco de abandono na primeira sessão.
              </p>

              <p className="italic border-l-4 border-black pl-[10px] py-[6px] text-[11px]">
                "Como redesenhar esses 60 minutos para engajar e provar o valor do Axiom imediatamente?"
              </p>
            </div>
          </section>

          <div className="mt-[16px] border-2 border-black">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzY0NjE5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Axiom Platform Interface"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="w-full border-t border-black my-[24px]" />

          <section id="solucao" className="flex flex-col gap-[16px] scroll-mt-[80px]">
            <h2 className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-black">
              3. A Solução
            </h2>
            
            <div className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] leading-[1.6] flex flex-col gap-[12px]">
              <p>
                Criei um fluxo que entrega valor imediato antes de pedir esforço do usuário:
              </p>
              
              <ul className="list-disc ml-[18px] flex flex-col gap-[8px]">
                <li>
                  <strong>Passo 1:</strong> Boas-vindas com transparência
                </li>
                <li>
                  <strong>Passo 2:</strong> "Aha! Moment" com relatórios demo
                </li>
                <li>
                  <strong>Passo 3:</strong> Conexão motivada da fonte de dados
                </li>
                <li>
                  <strong>Passo 4:</strong> Criação do primeiro relatório real
                </li>
              </ul>
            </div>
          </section>

          <div className="w-full border-t border-black my-[24px]" />

          <section id="resultados" className="flex flex-col gap-[16px] scroll-mt-[80px]">
            <h2 className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-black">
              4. Resultados
            </h2>
            
            <div className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] leading-[1.6] flex flex-col gap-[12px]">
              <p>
                A solução transformou um ponto de atrito em um diferencial. Usuários se sentiram "produtivos" e "guiados".
              </p>

              <div>
                <p className="mb-[6px]"><strong>Aprendizados:</strong></p>
                <ul className="list-disc ml-[18px] flex flex-col gap-[4px]">
                  <li>Restrições técnicas podem gerar soluções inovadoras.</li>
                  <li>Transparência constrói confiança.</li>
                  <li>Em B2B, provar valor nos primeiros minutos é crucial.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="border-t border-black pt-[24px] mt-[24px]">
            <div className="flex flex-col gap-[12px]">
              <a 
                href="/"
                className="inline-flex items-center justify-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[12px] border-2 border-black px-[16px] py-[10px] hover:bg-black hover:text-white transition-all"
              >
                <ArrowLeft className="size-[14px]" strokeWidth={2} />
                Voltar para projetos
              </a>
              <a 
                href="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD?node-id=3-419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[12px] border-2 border-black px-[16px] py-[10px] hover:bg-black hover:text-white transition-all"
              >
                Ver protótipo no Figma →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}