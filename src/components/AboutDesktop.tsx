import svgPaths from "../imports/svg-c1oyzh9jac";
import imgEu71 from "figma:asset/5f6ebe676a5141fd55f82268d568797104511a79.png";
import { Coffee, Trophy, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <a href="/sobre-mim" className="[text-underline-position:from-font] decoration-solid font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#212529] text-[16px] text-center text-nowrap underline whitespace-pre hover:opacity-70 transition-opacity">
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

function ProfileImage() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-center justify-center w-full"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div 
        className="aspect-square relative rounded-full shrink-0 w-[280px]"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          alt="Lívia Miranda" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-full size-full" 
          src={imgEu71} 
        />
      </motion.div>
    </motion.div>
  );
}

function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-3 gap-[32px] w-full border-t border-b border-black py-[24px] my-[32px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="flex flex-col items-center gap-[8px]" variants={itemVariants}>
        <Briefcase className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">3+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Anos de experiência</p>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-[8px]" variants={itemVariants}>
        <Trophy className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">15+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Projetos completados</p>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-[8px]" variants={itemVariants}>
        <Coffee className="size-[24px]" strokeWidth={1.5} />
        <p className="font-['Space_Mono:Bold',sans-serif] text-[24px] text-[#212529]">∞</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] text-center">Cafés tomados</p>
      </motion.div>
    </motion.div>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Habilidades & Ferramentas</h3>
      <motion.div 
        className="flex flex-wrap gap-[8px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.span 
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border border-black px-[12px] py-[6px] font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529] hover:bg-black hover:text-white transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Timeline() {
  const experiences = [
    { year: '2024', role: 'Product Designer Jr.', company: 'Bwtech' },
    { year: '2023', role: 'MBA Inteligência Artificial', company: 'Para Negócios' },
    { year: '2021', role: 'Designer Gráfico & Marketing', company: 'Freelancer' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Trajetória</h3>
      <motion.div 
        className="flex flex-col gap-[12px] border-l-2 border-black pl-[16px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col gap-[4px] relative"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute left-[-20px] top-[6px] size-[8px] bg-black rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
            />
            <p className="font-['Space_Mono:Bold',sans-serif] text-[12px] text-[#212529] opacity-60">{exp.year}</p>
            <p className="font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529]">{exp.role}</p>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-[#212529]">{exp.company}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Interests() {
  const interests = [
    { icon: '🎬', label: 'Cinema' },
    { icon: '📚', label: 'Leitura' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '📷', label: 'Fotografia' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-['Space_Mono:Bold',sans-serif] text-[16px] text-[#212529]">Interesses</h3>
      <motion.div 
        className="grid grid-cols-4 gap-[12px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {interests.map((interest, index) => (
          <motion.div 
            key={interest.label}
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -4, rotate: index % 2 === 0 ? 2 : -2 }}
            whileTap={{ scale: 0.95 }}
            className="border border-black p-[16px] flex flex-col items-center gap-[8px] hover:bg-black hover:text-white transition-colors cursor-default group"
          >
            <span className="text-[32px]">{interest.icon}</span>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[12px] text-center">{interest.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function AboutContent() {
  return (
    <motion.article 
      className="content-stretch flex flex-col gap-[24px] not-italic text-[#212529] w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h1 className="font-['Space_Mono:Bold',sans-serif] leading-[normal] text-[24px] mb-[8px]">
          Oi, eu sou a Lívia Miranda!
        </h1>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[14px] opacity-80">
          Product Designer apaixonada por inovação, IA e boas conversas ☕
        </p>
      </motion.div>

      <Stats />

      <motion.div 
        className="font-['Space_Mono:Regular',sans-serif] leading-[normal] text-[14px] flex flex-col gap-[24px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
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
      </motion.div>

      <Skills />
      <Timeline />
      <Interests />

      <motion.div 
        className="border-t border-black pt-[32px] mt-[16px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-[16px] items-center text-center">
          <h3 className="font-['Space_Mono:Bold',sans-serif] text-[18px] text-[#212529]">
            Vamos conversar?
          </h3>
          <p className="font-['Space_Mono:Regular',sans-serif] text-[14px] text-[#212529] max-w-[500px]">
            Estou sempre aberta a novos projetos, colaborações e trocas de ideias.
          </p>
          <div className="flex gap-[16px] mt-[8px]">
            <motion.a 
              href="mailto:contato@liviamiranda.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black px-[24px] py-[12px] font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529] hover:bg-black hover:text-white transition-colors"
            >
              Enviar email
            </motion.a>
            <motion.a 
              href="/cv.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black px-[24px] py-[12px] font-['Space_Mono:Bold',sans-serif] text-[14px] text-[#212529] hover:bg-black hover:text-white transition-colors"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function AboutSection() {
  return (
    <section className="content-stretch flex flex-col items-center justify-center gap-[48px] max-w-[800px] mx-auto w-full">
      <ProfileImage />
      <AboutContent />
    </section>
  );
}

export default function AboutDesktop() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-[120px] pt-[80px] pb-[80px]">
        <AboutSection />
      </main>
    </div>
  );
}