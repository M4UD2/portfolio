import imgRectangle1 from "figma:asset/06e35dd2293fe8b729c00f550c200d1a62c1fbf5.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185px] items-end justify-center leading-[normal] not-italic opacity-80 relative shrink-0 text-black w-full">
      <p className="font-['Space_Mono:Bold',sans-serif] h-[70px] relative shrink-0 text-[16px] w-full">[Yrden] De 60 minutos de espera a um onboarding produtivo</p>
      <p className="font-['Space_Mono:Regular',sans-serif] h-[79px] relative shrink-0 text-[14px] w-full">Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor</p>
      <p className="[text-underline-position:from-font] decoration-solid font-['Space_Mono:Regular',sans-serif] relative shrink-0 text-[14px] underline w-full">Confira →</p>
    </div>
  );
}

function ProjectPreview() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[344px] items-start left-[calc(16.67%-8.5px)] right-[calc(16.67%-9.5px)] top-[847px]" data-name="project preview">
      <div className="h-[344px] relative rounded-[24px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle1} />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#212529] text-[32px] text-center w-[315px]">
        <p className="mb-0">{`Oi, eu sou a Lívia! `}</p>
        <p>Bem-vindo(a) ao meu portfólio ;)</p>
      </div>
      <div className="code-behavior-wrapper flex relative shrink-0 tailwind w-[343px]">
        <div className="font-['Space_Mono:Regular',sans-serif] leading-[0] not-italic relative text-[#212529] text-[14px] text-center w-[343px]">
          <p className="leading-[normal]">Sou Product Designer Jr. na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_745)" id="Frame">
          <g id="Vector"></g>
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M18 13L12 19" id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M6 13L12 19" id="Vector_4" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[216px]">
      <div className="flex flex-col font-['Space_Mono:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#212529] text-[16px] text-center w-[min-content]">
        <p className="leading-[normal]">Conheça o meu trabalho</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[152px] items-center left-0 top-[196px] w-[375px]">
      <Frame6 />
      <Frame4 />
    </div>
  );
}

function Anchor() {
  return (
    <div className="absolute h-0 left-[-332.5px] top-[516px] w-[1040px]" data-name="anchor">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1040 1">
          <g id="anchor">
            <path d="M0 0.5H1040" id="anchor_2" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185px] items-end justify-center leading-[normal] not-italic opacity-80 relative shrink-0 text-black w-full">
      <p className="font-['Space_Mono:Bold',sans-serif] h-[70px] relative shrink-0 text-[16px] w-full">[Yrden] De 60 minutos de espera a um onboarding produtivo</p>
      <p className="font-['Space_Mono:Regular',sans-serif] h-[79px] relative shrink-0 text-[14px] w-full">Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor</p>
      <p className="[text-underline-position:from-font] decoration-solid font-['Space_Mono:Regular',sans-serif] relative shrink-0 text-[14px] underline w-full">Confira →</p>
    </div>
  );
}

function ProjectPreview1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[344px] items-start right-[calc(16.67%-3.5px)] top-[1460px] w-[256px]" data-name="project preview">
      <div className="h-[344px] relative rounded-[24px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgRectangle1} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_763)" id="Frame">
          <g id="Vector"></g>
          <path d="M4 8H20" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 16H20" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function MenuCelular() {
  return (
    <header className="absolute bg-[#f8f9fa] box-border content-stretch flex h-[51px] items-start justify-between left-0 px-[16px] py-[12px] right-0 top-0" data-name="menu celular">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Frame1 />
    </header>
  );
}

function MeusUltimosProjetos() {
  return (
    <div className="absolute h-[24px] left-[calc(66.67%+35px)] top-[712px] w-[206px]" data-name="Meus últimos projetos">
      <p className="absolute font-['Space_Mono:Bold',sans-serif] inset-0 leading-[normal] not-italic text-[16px] text-black text-nowrap whitespace-pre">Meus últimos projetos</p>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="Mobile">
      <ProjectPreview />
      <Frame5 />
      <Anchor />
      <ProjectPreview1 />
      <MenuCelular />
      <MeusUltimosProjetos />
    </div>
  );
}