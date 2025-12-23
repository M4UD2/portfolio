import svgPaths from "../imports/svg-7jcuggu47t";
import { ArrowLeft, Menu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

function BackButton() {
  return (
    <a 
      href="/" 
      className="inline-flex items-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529] hover:opacity-70 transition-opacity"
    >
      <ArrowLeft className="size-[24px]" strokeWidth={2} />
      Voltar
    </a>
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
      <a href="/" className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center text-nowrap whitespace-pre hover:underline transition-all">
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
    <header className="box-border content-stretch flex items-center justify-between px-[40px] py-[12px] w-full border-b border-black">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Navigation />
      <ActionIcons />
    </header>
  );
}

function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>('resumo');

  const sections = [
    { id: 'resumo', number: '01', title: 'Resumo do projeto' },
    { id: 'contexto', number: '02', title: 'Contexto' },
    { id: 'desafio', number: '03', title: 'O Desafio' },
    { id: 'solucao', number: '04', title: 'A Solução' },
    { id: 'resultados', number: '05', title: 'Resultados' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-[80px] h-fit">
      <div className="flex items-center gap-[12px] mb-[32px]">
        <div className="h-[2px] w-[40px] bg-black"></div>
        <h3 className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-black tracking-wider">
          NAVEGAÇÃO
        </h3>
      </div>
      
      <ul className="flex flex-col gap-[24px] relative">
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left flex items-start gap-[16px] group transition-all duration-300 ${
                activeSection === section.id ? 'translate-x-3' : 'hover:translate-x-3'
              }`}
            >
              {/* Número grande e bold */}
              <span className={`font-['Space_Mono:Bold',sans-serif] text-[32px] leading-none transition-all duration-300 ${
                activeSection === section.id 
                  ? 'text-black scale-110' 
                  : 'text-black opacity-20 group-hover:opacity-60 group-hover:scale-105'
              }`}>
                {section.number}
              </span>
              
              {/* Título com animação */}
              <div className="flex-1 pt-[6px]">
                <span className={`font-['Space_Mono:Regular',sans-serif] text-[13px] text-black transition-all duration-300 block ${
                  activeSection === section.id 
                    ? 'opacity-100 font-["Space_Mono:Bold",sans-serif]' 
                    : 'opacity-50 group-hover:opacity-100'
                }`}>
                  {section.title}
                </span>
                
                {/* Linha decorativa que aparece no hover */}
                <div className={`h-[2px] bg-black mt-[6px] transition-all duration-300 origin-left ${
                  activeSection === section.id 
                    ? 'w-full opacity-100' 
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ProjectYrdenDesktop() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col px-[120px] pt-[40px] pb-[80px]">
        <BackButton />
        
        <div className="mt-[40px] flex gap-[40px] max-w-[1200px] mx-auto w-full">
          {/* Sidebar com TOC */}
          <aside className="w-[200px] shrink-0">
            <TableOfContents />
          </aside>

          {/* Conteúdo principal */}
          <div className="flex-1 flex flex-col gap-[24px]">
            {/* Título do projeto */}
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-['Space_Mono:Bold',sans-serif] text-[40px] text-black leading-[1.2]">
                De 60 minutos de espera a um onboarding produtivo
              </h1>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[18px] text-black opacity-60 leading-[1.5]">
                Um case sobre como transformar uma limitação técnica em uma jornada de boas-vindas produtiva
              </p>
            </div>

            {/* Informações do projeto */}
            <div className="grid grid-cols-3 gap-[40px] mt-[32px] pb-[32px] border-b border-black">
              <div>
                <p className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-black opacity-40 mb-[8px] tracking-wider">ROLE</p>
                <p className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-black">Product Designer</p>
              </div>
              <div>
                <p className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-black opacity-40 mb-[8px] tracking-wider">TIMELINE</p>
                <p className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-black">Outubro 2024</p>
              </div>
              <div>
                <p className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-black opacity-40 mb-[8px] tracking-wider">FERRAMENTAS</p>
                <p className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-black">Figma, Miro, Maze</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-[32px] border-2 border-black">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763296479464-fe8bee23eb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmJvYXJkaW5nJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDYxOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Axiom Onboarding Interface"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="w-full border-t border-black my-[40px]" />

            {/* Seção 1: Resumo do projeto */}
            <section id="resumo" className="flex flex-col gap-[32px] scroll-mt-[100px]">
              <h2 className="font-['Space_Mono:Bold',sans-serif] text-[28px] text-black leading-[1.3]">
                01. Resumo do projeto
              </h2>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[24px]">
                <p>
                  <span className="font-['Space_Mono:Bold',sans-serif]">Produto:</span> Axiom, uma plataforma de BI Headless (preparação e integração de dados) fictícia para empresas SaaS (B2B).
                </p>
                
                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Meu Papel: Product Designer (End-to-end)</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[12px]">
                    <li>Liderei a estratégia de produto e a descoberta (discovery) para a jornada do novo usuário.</li>
                    <li>Defini os problemas de usuário e de negócio, bem como as métricas de sucesso (KPIs).</li>
                    <li>Criei a solução completa, desde o fluxo e wireframes até o protótipo de alta fidelidade e a validação.</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-[24px]">
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">O Desafio de Produto:</p>
                  <p>Uma limitação técnica de 60 minutos de sincronização causava uma péssima primeira impressão (UX) — uma tela cheia de ações bloqueadas, resultando em frustração. Isso impactava diretamente a principal métrica de negócio B2B: a Taxa de Ativação de novas contas, e aumentava o Time to Value (TTV) do produto.</p>
                </div>

                <div className="bg-white border-2 border-black p-[24px]">
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">A Solução:</p>
                  <p>Em vez de uma solução de engenharia de alto custo, priorizei um redesenho da experiência. Criei um fluxo de onboarding produtivo que aproveita o tempo de espera para educar o usuário e provar o valor do Axiom imediatamente.</p>
                </div>
              </div>
            </section>

            <div className="w-full border-t border-black my-[40px]" />

            {/* Seção 2: Contexto */}
            <section id="contexto" className="flex flex-col gap-[32px] scroll-mt-[100px]">
              <h2 className="font-['Space_Mono:Bold',sans-serif] text-[28px] text-black leading-[1.3]">
                02. Contexto
              </h2>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[24px]">
                <p>
                  Software como Serviço (SaaS) é um modelo onde empresas acessam softwares pela internet através de uma assinatura. Empresas SaaS B2B, como a "Momentum", dependem de dados para sobreviver: precisam entender como os usuários se comportam, por que clientes cancelam assinaturas (churn) e quais funcionalidades são mais usadas.
                </p>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Qual problema o Axiom resolve?</p>
                  <p className="mb-[16px]">
                    O problema é que esses dados estão espalhados em dezenas de ferramentas (vendas, suporte, uso do produto) e em formatos incompatíveis. Antes que uma equipe possa sequer pensar em criar um gráfico, alguém precisa gastar horas ou dias limpando, combinando e unificando essas fontes manualmente.
                  </p>
                  <p>
                    O Axiom foi projetado para automatizar exatamente esse trabalho de base: ele unifica os dados em um só lugar confiável, permitindo que as equipes usem seu tempo para analisar insights em suas ferramentas de BI externas, em vez de preparar dados.
                  </p>
                </div>
              </div>
            </section>

            {/* Persona */}
            <div className="mt-[16px] p-[32px] bg-white border-2 border-black">
              <h3 className="font-['Space_Mono:Bold',sans-serif] text-[20px] text-[#212529] mb-[24px]">
                A Persona: Conheça a Sofia Gonçalves
              </h3>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[16px]">
                <p><span className="font-['Space_Mono:Bold',sans-serif]">Nome:</span> Sofia, 32 anos</p>
                <p><span className="font-['Space_Mono:Bold',sans-serif]">Cargo:</span> Product Manager na Momentum (empresa SaaS B2B).</p>
                
                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Objetivos:</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[8px]">
                    <li>Entender rapidamente o que os usuários estão fazendo no seu produto.</li>
                    <li>Tomar decisões de novas funcionalidades baseadas em dados, não em achismos.</li>
                    <li>Identificar problemas antes que eles levem a cancelamentos.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Frustrações:</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[8px]">
                    <li>"Perco horas juntando dados do Stripe, Zendesk e Google Analytics em planilhas."</li>
                    <li>"Dependo da boa vontade dos engenheiros para conseguir um relatório específico."</li>
                    <li>"Eu sinto que passo mais tempo caçando dados do que realmente usando-os para tomar decisões."</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-black my-[40px]" />

            {/* Seção 3: O Desafio */}
            <section id="desafio" className="flex flex-col gap-[32px] scroll-mt-[100px]">
              <h2 className="font-['Space_Mono:Bold',sans-serif] text-[28px] text-black leading-[1.3]">
                03. O Desafio: A Primeira Impressão Define o Contrato
              </h2>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[24px]">
                <p>
                  Após um administrador criar a conta para a Sofia, uma limitação técnica exigia ~60 minutos para sincronizar todos os dados da empresa.
                </p>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Problema de UX:</p>
                  <p>Frustração, confusão e uma tela cheia de ações bloqueadas, levando a um enorme risco de abandono da sessão.</p>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Problema de Negócio (PO):</p>
                  <p className="mb-[16px]">Em um produto B2B, o abandono na primeira sessão é crítico. Ele impactava diretamente o sucesso do cliente:</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[16px]">
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Risco de Adoção e Churn:</span> Uma primeira experiência frustrante pode levar ao abandono imediato. Se os funcionários da Momentum não adotam a ferramenta pela qual a empresa pagou, o contrato será cancelado na próxima renovação por falta de uso.
                    </li>
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Quebra da Promessa de Valor:</span> Nosso objetivo era provar o valor do Axiom (entregar um insight) nos primeiros minutos. O tempo de espera de 60 minutos quebrava essa promessa. O usuário não via nenhum valor por uma hora, aumentando drasticamente a chance de ele nunca mais voltar e julgar o produto como "lento" ou "complicado".
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-[24px] italic">
                  <p className="font-['Space_Mono:Bold',sans-serif] text-[18px]">
                    "Como podemos redesenhar esses 60 minutos para engajar, educar e provar o valor do Axiom imediatamente, garantindo a adoção do produto?"
                  </p>
                </div>
              </div>
            </section>

            {/* Placeholder: Problema - Dashboard bloqueado */}
            <div className="border-2 border-black bg-white">
              <div className="p-[16px] border-b-2 border-black bg-[#f8f9fa]">
                <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-black">O PROBLEMA: Experiência bloqueada durante sincronização</p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631551045549-9a735b8e4ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGRhc2hib2FyZCUyMGludGVyZmFjZSUyMGJsb2NrZWR8ZW58MXx8fHwxNzY0NjIxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard bloqueado - Estado anterior"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="w-full border-t border-black my-[40px]" />

            {/* Seção 4: A Solução */}
            <section id="solucao" className="flex flex-col gap-[32px] scroll-mt-[100px]">
              <h2 className="font-['Space_Mono:Bold',sans-serif] text-[28px] text-black leading-[1.3]">
                04. A Solução
              </h2>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[24px]">
                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Priorização: Por que essa solução?</p>
                  <p className="mb-[16px]">
                    Meu processo de design começou por entender o "porquê" por trás da restrição técnica. Em colaboração com o time de produto e engenharia, analisamos as opções com uma matriz de Custo x Impacto:
                  </p>
                  <ol className="list-decimal ml-[24px] flex flex-col gap-[12px]">
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Solução de Engenharia (Alto Custo):</span> Tentar re-arquitetar o backend para reduzir o tempo de 60 minutos. (Custo: ~6 meses de engenharia, Impacto: Alto).
                    </li>
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Solução de Design/Produto (Baixo Custo):</span> Aceitar a limitação técnica e redesenhar a experiência de espera. (Custo: ~2 semanas de design/dev, Impacto: Alto).
                    </li>
                  </ol>
                  <p className="mt-[16px]">
                    Ficou claro para o time que, embora a Solução 1 fosse ideal a longo prazo, a Solução 2 entregava o mesmo impacto (resolver a frustração e garantir a ativação) com uma fração do custo.
                  </p>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">A Jornada de Onboarding Guiada (Recompensa {">"} Esforço)</p>
                  <p className="mb-[16px]">
                    Para garantir o engajamento, desenhei um fluxo que entrega valor imediato antes de pedir qualquer esforço do usuário.
                  </p>
                  
                  <ul className="list-none flex flex-col gap-[20px]">
                    <li className="bg-white border-2 border-black p-[20px]">
                      <span className="font-['Space_Mono:Bold',sans-serif] text-[18px]">Passo 1: Boas-vindas com Transparência</span>
                      <p className="mt-[8px]">O e-mail já alinha as expectativas de forma positiva, convidando o usuário para um setup produtivo, em vez de uma espera. A criação de senha é simples e guiada.</p>
                    </li>
                    <li className="bg-white border-2 border-black p-[20px]">
                      <span className="font-['Space_Mono:Bold',sans-serif] text-[18px]">Passo 2: O "Aha! Moment" Instantâneo (Recompensa)</span>
                      <p className="mt-[8px]">Em vez de uma tela vazia, a Sofia vê imediatamente uma lista de relatórios de demonstração (com status variados). Ela pode clicar, explorar e entender o poder do Axiom antes de fazer qualquer esforço.</p>
                    </li>
                    <li className="bg-white border-2 border-black p-[20px]">
                      <span className="font-['Space_Mono:Bold',sans-serif] text-[18px]">Passo 3: Ação Motivada (Esforço)</span>
                      <p className="mt-[8px]">Após ver o que o Axiom pode fazer, a Sofia agora está motivada. O sistema a guia para conectar sua primeira fonte de dados (ex: Stripe, Zendesk).</p>
                    </li>
                    <li className="bg-white border-2 border-black p-[20px]">
                      <span className="font-['Space_Mono:Bold',sans-serif] text-[18px]">Passo 4: Conclusão e Próximos Passos</span>
                      <p className="mt-[8px]">O usuário é notificado da sincronização completa e guiado para criar seu primeiro relatório real, usando os métodos flexíveis (Template, No-Code, SQL).</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Placeholders de telas da solução */}
            <div className="flex flex-col gap-[24px]">
              {/* Email de boas-vindas */}
              <div className="border-2 border-black bg-white">
                <div className="p-[16px] border-b-2 border-black bg-[#f8f9fa]">
                  <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-black">PASSO 1: Email de boas-vindas</p>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1685381949388-bb0402fbe133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHdlbGNvbWUlMjBzY3JlZW4lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NjIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Email de boas-vindas"
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Interface de demonstração */}
              <div className="border-2 border-black bg-white">
                <div className="p-[16px] border-b-2 border-black bg-[#f8f9fa]">
                  <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-black">PASSO 2: Dashboard com relatórios demo interativos</p>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwaW50ZWdyYXRpb24lMjBwbGF0Zm9ybSUyMHNjcmVlbnxlbnwxfHx8fDE3NjQ2MjEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dashboard com demonstrações"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="w-full border-t border-black my-[40px]" />

            {/* Seção 5: Resultados */}
            <section id="resultados" className="flex flex-col gap-[32px] scroll-mt-[100px]">
              <h2 className="font-['Space_Mono:Bold',sans-serif] text-[28px] text-black leading-[1.3]">
                05. Resultados e Aprendizados
              </h2>
              
              <div className="font-['Space_Mono:Regular',sans-serif] text-[16px] text-[#212529] leading-[1.8] flex flex-col gap-[24px]">
                <p className="text-[14px] opacity-60 italic">
                  Para proteger informações confidenciais do projeto real que inspirou este case, os resultados são apresentados de forma qualitativa, focando nos objetivos de negócio definidos e nos aprendizados.
                </p>

                <div className="bg-white border-2 border-black p-[24px]">
                  <p className="font-['Space_Mono:Bold',sans-serif] text-[20px] mb-[16px]">Resultado de UX</p>
                  <p>
                    A solução transformou um ponto de atrito em um diferencial. O feedback qualitativo dos testes de usabilidade (e observações de usuários reais) mostrou que os usuários se sentiram "produtivos" e "guiados", em vez de "frustrados" ou "perdidos".
                  </p>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Impacto no Negócio (KPIs-Alvo):</p>
                  <p className="mb-[16px]">O projeto foi desenhado com métricas de sucesso claras em mente:</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[12px]">
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Time to Value (TTV):</span> O novo fluxo foi projetado para reduzir o TTV de ~60 minutos (o tempo de espera) para {"<"} 5 minutos (o tempo de explorar o relatório demo).
                    </li>
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">Taxa de Ativação:</span> O objetivo principal era aumentar a Taxa de Ativação de Novas Contas ao eliminar o principal ponto de abandono.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Principais Aprendizados:</p>
                  <ul className="list-disc ml-[24px] flex flex-col gap-[12px]">
                    <li>Uma restrição técnica pode ser o ponto de partida para uma solução de design inovadora.</li>
                    <li>Ser transparente com o usuário sobre o status do sistema é fundamental para construir confiança.</li>
                    <li>Em B2B, provar o valor do produto (TTV) nos primeiros minutos é crucial para garantir a ativação e retenção do contrato.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-['Space_Mono:Bold',sans-serif] mb-[12px]">Próximos Passos (Visão de Roadmap):</p>
                  <p className="mb-[16px]">O onboarding V1 foi focado em resolver o problema da espera. O roadmap para evoluir essa experiência incluiria:</p>
                  <ul className="list-decimal ml-[24px] flex flex-col gap-[12px]">
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">V2 (Personalização):</span> Personalizar os relatórios de demonstração com base no cargo do usuário (ex: Marketing vs. Finanças) para aumentar a relevância do "Aha! moment".
                    </li>
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">V3 (Otimização):</span> Iniciar um discovery técnico com a engenharia para otimizar a sincronização em segundo plano, visando reduzir o tempo de 60 para 30 minutos.
                    </li>
                    <li>
                      <span className="font-['Space_Mono:Bold',sans-serif]">V4 (Métricas):</span> Implementar um funil de analytics no onboarding para medir em qual etapa os usuários desistem (explorar demo vs. conectar fonte) e otimizar o fluxo.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Placeholder comparativo antes/depois */}
            <div className="border-2 border-black bg-white">
              <div className="p-[16px] border-b-2 border-black bg-[#f8f9fa]">
                <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-black">IMPACTO: Comparativo da experiência antes e depois</p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGludGVyZmFjZSUyMGNvbXBhcmlzb258ZW58MXx8fHwxNzY0NjIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Comparativo antes e depois"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* CTA Final */}
            <div className="border-t border-black pt-[40px] mt-[40px]">
              <div className="flex justify-between items-center">
                <a 
                  href="/"
                  className="inline-flex items-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[14px] border-2 border-black px-[24px] py-[12px] hover:bg-black hover:text-white transition-all"
                >
                  <ArrowLeft className="size-[16px]" strokeWidth={2} />
                  Voltar para projetos
                </a>
                <a 
                  href="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD?node-id=3-419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] font-['Space_Mono:Bold',sans-serif] text-[14px] border-2 border-black px-[24px] py-[12px] hover:bg-black hover:text-white transition-all"
                >
                  Ver protótipo no Figma →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}