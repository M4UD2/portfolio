import svgPaths from "./svg-c1oyzh9jac";
import imgEu71 from "figma:asset/5f6ebe676a5141fd55f82268d568797104511a79.png";

function MenuOption() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="menu option">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#212529] text-[16px] text-center text-nowrap whitespace-pre">Ínicio</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#212529] text-[16px] text-center text-nowrap whitespace-pre">Projetos</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-underline-position:from-font] decoration-solid font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#212529] text-[16px] text-center text-nowrap underline whitespace-pre">Sobre mim</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-[307px]">
      <MenuOption />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_758)" id="Frame">
          <g id="Vector"></g>
          <path d={svgPaths.p210145c0} id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M3 7L12 13L21 7" id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
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

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3">
          <g id="Vector"></g>
          <path d="M8 11V16" id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M8 8V8.01" id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M12 16V11" id="Vector_4" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e315b80} id="Vector_5" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1f00f300} id="Vector_6" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_751)" id="Frame">
          <g id="Vector"></g>
          <path d={svgPaths.p2c7f0600} id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p18d48b80} id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1137c610} id="Vector_4" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M13 11L14.5 17L16 11" id="Vector_5" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
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

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-[50px] pr-0 py-0 relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-1/2 px-[40px] py-[12px] top-0 translate-x-[-50%] w-[1280px]" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[283px] items-center justify-between relative shrink-0 w-[242px]">
      <div className="aspect-[2408/2408] relative rounded-[168px] shrink-0 w-full" data-name="Eu-7 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[168px] size-full" src={imgEu71} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[470px] items-center justify-between not-italic relative shrink-0 text-[#212529] w-[707px]">
      <p className="font-['Space_Mono:Bold',sans-serif] h-[32px] leading-[normal] relative shrink-0 text-[24px] w-full">Oi, eu sou a Lívia Miranda!</p>
      <div className="font-['Space_Mono:Regular',sans-serif] h-[414px] leading-[normal] relative shrink-0 text-[14px] w-full">
        <p className="mb-0">Sou publicitária de formação e apaixonada por inovação e boas conversas. Minha trajetória começou no design gráfico e marketing e, hoje, me dedico ao design de produto digital, com foco na criação de interfaces e na experiência do usuário.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Atualmente, curso um MBA em Inteligência Artificial para Negócios. Busco sempre me orientar por dados e incorporar tecnologias de IA de forma prática e proativa no meu dia a dia.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Acredito que o crescimento profissional acontece por meio da troca constante. Por isso, estou sempre aprendendo e compartilhando conhecimento (de preferência, acompanhada de um café ☕).</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">No meu tempo livre, sou fã de filmes, leitora curiosa, gamer dedicada (adoro platinar um bom jogo) e fotógrafa, explorando a fotografia como forma de registrar e contar histórias.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Também tenho verdadeiro prazer em estudar e descobrir novas áreas de conhecimento. Meu objetivo é continuar evoluindo como Product Designer, contribuindo para soluções digitais que unam tecnologia, dados e propósito, sempre com foco na experiência real das pessoas.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[90px] items-center justify-center left-1/2 top-[158px] translate-x-[-50%] w-[1040px]">
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function Group() {
  return <div className="absolute contents left-0 top-0" />;
}

export default function Desktop() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="Desktop">
      <Menu />
      <Frame9 />
      <Group />
    </div>
  );
}