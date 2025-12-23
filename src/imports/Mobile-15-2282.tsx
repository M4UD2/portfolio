function Frame() {
  return (
    <button className="absolute block cursor-pointer left-[20px] size-[24px] top-[80px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_15_2306)" id="Frame">
          <g id="Vector"></g>
          <path d="M5 12H19" id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M5 12L11 18" id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M5 12L11 6" id="Vector_4" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_15_2306">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
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
    <div className="bg-[#f8f9fa] box-border content-stretch flex h-[51px] items-center justify-between pointer-events-auto px-[16px] py-[12px] sticky top-0 translate-x-[-50%] w-[375px]" data-name="Menu celular">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Frame1 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="Mobile">
      <div className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#212529] text-[16px] text-nowrap top-[377px] whitespace-pre">
        <p className="mb-0">Role →</p>
        <p className="font-['Space_Mono:Regular',sans-serif]">Product Designer</p>
      </div>
      <div className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#212529] text-[0px] text-nowrap top-[538px] whitespace-pre">
        <p className="mb-0 text-[16px]">Timeline →</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[14px]">Outubro 2025</p>
      </div>
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic text-[#212529] text-[16px] text-nowrap top-[calc(50%-874.5px)] whitespace-pre">Ferramentas →</p>
      <div className="absolute bg-[#d9d9d9] h-[233px] left-[16px] right-[16px] top-[612px]" />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] left-[calc(50%-44.5px)] text-[#212529] text-[24px] text-nowrap top-[710px] whitespace-pre">mockup</p>
      <div className="absolute h-0 left-[17px] right-[16px] top-[977px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(33, 37, 41, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Vector 2" stroke="var(--stroke-0, #212529)" />
          </svg>
        </div>
      </div>
      <Frame />
      <div className="absolute bottom-0 left-1/2 pointer-events-none top-0">
        <MenuCelular />
      </div>
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic right-[16px] text-[24px] text-black top-[128px]">Axiom - De 60 minutos de espera a um onboarding produtivo</p>
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[16px] not-italic right-[16px] text-[18px] text-black top-[249px]">Um case sobre como transformar uma limitação técnica em uma jornada de boas-vindas produtiva</p>
      <div className="absolute bg-[#d9d9d9] bottom-[55px] h-[395px] left-[calc(16.67%-9.5px)] w-[135px]" />
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[17px] not-italic right-[16px] text-[#212529] text-[14px] top-[1026px]">Produto: Axiom, uma plataforma de BI Headless (preparação e integração de dados) fictícia para empresas SaaS (B2B).</p>
      <ol className="[white-space-collapse:collapse] absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[-946.5px] list-decimal not-italic text-[16px] text-black text-nowrap top-[9380px]" start="1">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Resumo do projeto</span>
        </li>
      </ol>
      <div className="absolute bottom-0 h-[calc(100%-929px)] left-[26px] pointer-events-none top-[929px]">
        <div className="h-[100dvh] pointer-events-auto sticky tailwind top-0 w-[375px]" />
      </div>
    </div>
  );
}