import imgEu71 from "figma:asset/5f6ebe676a5141fd55f82268d568797104511a79.png";
import { Coffee, Trophy, Briefcase } from 'lucide-react';

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

function ProfileImage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center w-full max-w-[200px] mx-auto">
      <div className="aspect-square relative rounded-full shrink-0 w-full">
        <img 
          alt="Lívia Miranda" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-full size-full" 
          src={imgEu71} 
        />
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-3 gap-[24px] w-full border-t border-b border-black py-[24px] my-[32px]">
      <div className="flex flex-col items-center gap-[8px]">
        <Briefcase className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">3+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Anos de experiência</p>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <Trophy className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">15+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Projetos completados</p>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <Coffee className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">∞</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Cafés tomados</p>
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    'Figma',
    'Design Systems',
    'UI/UX Design',
    'Prototipagem',
    'Pesquisa com usuários',
    'IA & Dados',
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Habilidades & Ferramentas</h3>
      <div className="flex flex-wrap gap-[8px]">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="border border-black px-[12px] py-[6px] font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] hover:bg-black hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  const experiences = [
    { year: '2024', role: 'Product Designer Jr.', company: 'Bwtech' },
    { year: '2023', role: 'MBA Inteligência Artificial', company: 'Para Negócios' },
    { year: '2021', role: 'Designer Gráfico & Marketing', company: 'Freelancer' },
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Trajetória</h3>
      <div className="flex flex-col gap-[12px] border-l-2 border-black pl-[16px]">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-[4px] relative">
            <div className="absolute left-[-20px] top-[6px] size-[8px] bg-black rounded-full" />
            <p className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-[#212529] opacity-60">{exp.year}</p>
            <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529]">{exp.role}</p>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529]">{exp.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Interests() {
  const interests = [
    { icon: '🎬', label: 'Cinema' },
    { icon: '📚', label: 'Leitura' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '📷', label: 'Fotografia' },
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Interesses</h3>
      <div className="grid grid-cols-4 gap-[12px]">
        {interests.map((interest) => (
          <div 
            key={interest.label}
            className="border border-black p-[12px] flex flex-col items-center gap-[8px] hover:bg-black hover:text-white transition-all cursor-default group"
          >
            <span className="text-[28px]">{interest.icon}</span>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[11px] text-center">{interest.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <article className="content-stretch flex flex-col gap-[24px] not-italic text-[#212529] w-full">
      <div>
        <h1 className="font-['Space_Mono:Bold',sans-serif] leading-[normal] text-[24px] text-center mb-[8px]">
          Oi, eu sou a Lívia Miranda!
        </h1>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[14px] opacity-80 text-center">
          Product Designer apaixonada por inovação, IA e boas conversas ☕
        </p>
      </div>

      <Stats />

      <div className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[14px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px]">Sobre mim</h3>
          <p>
            Sou <strong>publicitária de formação</strong> e apaixonada por inovação e boas conversas. Minha trajetória começou no design gráfico e marketing e, hoje, me dedico ao <strong>design de produto digital</strong>, com foco na criação de interfaces e na experiência do usuário.
          </p>
          <p>
            Atualmente, curso um <strong>MBA em Inteligência Artificial para Negócios</strong>. Busco sempre me orientar por dados e incorporar tecnologias de IA de forma prática e proativa no meu dia a dia.
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px]">Filosofia</h3>
          <p>
            Acredito que o crescimento profissional acontece por meio da <strong>troca constante</strong>. Por isso, estou sempre aprendendo e compartilhando conhecimento (de preferência, acompanhada de um café ☕).
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px]">Além do design</h3>
          <p>
            No meu tempo livre, sou fã de filmes, leitora curiosa, <strong>gamer dedicada</strong> (adoro platinar um bom jogo) e fotógrafa, explorando a fotografia como forma de registrar e contar histórias.
          </p>
        </div>
      </div>

      <Skills />
      <Timeline />
      <Interests />

      <div className="border-t border-black pt-[32px] mt-[16px]">
        <div className="flex flex-col gap-[16px] items-center text-center">
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[18px] text-[#212529]">
            Vamos conversar?
          </h3>
          <p className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-[#212529]">
            Estou sempre aberta a novos projetos, colaborações e trocas de ideias.
          </p>
          <div className="flex gap-[16px] mt-[8px]">
            <a 
              href="mailto:contato@liviamiranda.com"
              className="border-2 border-black px-[24px] py-[12px] font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529] hover:bg-black hover:text-white transition-all"
            >
              Enviar email
            </a>
            <a 
              href="/cv.pdf"
              className="border-2 border-black px-[24px] py-[12px] font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529] hover:bg-black hover:text-white transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function AboutSection() {
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-center justify-center w-full">
      <ProfileImage />
      <AboutContent />
    </section>
  );
}

export default function AboutTablet() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-[60px] pt-[60px] pb-[80px]">
        <AboutSection />
      </main>
    </div>
  );
}