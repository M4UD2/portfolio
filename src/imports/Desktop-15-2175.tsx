import svgPaths from "./svg-o8ls4ipke4";

function Frame() {
  return (
    <button className="absolute block cursor-pointer left-[120px] size-[24px] top-[135px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_15_2298)" id="Frame">
          <g id="Vector"></g>
          <path d="M5 12H19" id="Vector_2" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M5 12L11 18" id="Vector_3" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
          <path d="M5 12L11 6" id="Vector_4" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_15_2298">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

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
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#212529] text-[16px] text-center text-nowrap whitespace-pre">Sobre mim</p>
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

function Frame1() {
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

function Frame2() {
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

function Frame3() {
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
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[40px] py-[12px] right-0 top-0" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Lívia Miranda</p>
      <Frame6 />
      <Frame7 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="Desktop">
      <div className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[120px] not-italic text-[#212529] text-[16px] text-nowrap top-[307px] whitespace-pre">
        <p className="mb-0">Role →</p>
        <p className="font-['Space_Mono:Regular',sans-serif]">Product Designer</p>
      </div>
      <div className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic right-[calc(12.5%+202px)] text-[#212529] text-[0px] text-nowrap top-[307px] translate-x-[100%] whitespace-pre">
        <p className="mb-0 text-[16px]">Timeline →</p>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[14px]">Outubro 2025</p>
      </div>
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[calc(37.5%+39px)] not-italic text-[#212529] text-[16px] text-nowrap top-[307px] whitespace-pre">Ferramentas →</p>
      <div className="absolute bg-[#d9d9d9] h-[395px] left-[120px] right-[120px] top-[401px]" />
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] left-[calc(37.5%+115px)] text-[#212529] text-[24px] text-nowrap top-[580px] whitespace-pre">mockup</p>
      <div className="absolute h-0 left-[121px] right-[120px] top-[890px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(33, 37, 41, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1039 1">
            <path d="M0 0.5H1039" id="Vector 2" stroke="var(--stroke-0, #212529)" />
          </svg>
        </div>
      </div>
      <Frame />
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[120px] not-italic text-[24px] text-black text-nowrap top-[181px] whitespace-pre">Axiom - De 60 minutos de espera a um onboarding produtivo</p>
      <p className="absolute font-['Space_Mono:Bold',sans-serif] leading-[normal] left-[120px] not-italic text-[18px] text-black text-nowrap top-[225px] whitespace-pre">Um case sobre como transformar uma limitação técnica em uma jornada de boas-vindas produtiva</p>
      <div className="absolute bg-[#d9d9d9] h-[395px] left-[120px] right-[120px] top-[1870.5px]" />
      <div className="absolute font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic right-[120px] text-[#212529] text-[14px] top-[5173.5px]">
        <p className="leading-[normal] mb-0">Para proteger informações confidenciais do projeto real que inspirou este case, os resultados são apresentados de forma qualitativa, focando nos objetivos de negócio definidos e nos aprendizados.</p>
        <p className="leading-[normal] mb-0">{`Resultado de UX: A solução transformou um ponto de atrito em um diferencial. O feedback qualitativo dos testes de usabilidade (e observações de usuários reais) mostrou que os usuários se sentiram "produtivos" e "guiados", em vez de "frustrados" ou "perdidos".`}</p>
        <p className="leading-[normal] mb-0">Impacto no Negócio (KPIs-Alvo): O projeto foi desenhado com métricas de sucesso claras em mente:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">{`Time to Value (TTV): O novo fluxo foi projetado para reduzir o TTV de ~60 minutos (o tempo de espera) para < 5 minutos (o tempo de explorar o relatório demo).`}</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">Taxa de Ativação: O objetivo principal era aumentar a Taxa de Ativação de Novas Contas ao eliminar o principal ponto de abandono.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0">Principais Aprendizados</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">Uma restrição técnica pode ser o ponto de partida para uma solução de design inovadora.</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">Ser transparente com o usuário sobre o status do sistema é fundamental para construir confiança.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">Em B2B, provar o valor do produto (TTV) nos primeiros minutos é crucial para garantir a ativação e retenção do contrato.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0">Próximos Passos (Visão de Roadmap) O onboarding V1 foi focado em resolver o problema da espera. O roadmap para evoluir essa experiência incluiria:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">{`V2 (Personalização): Personalizar os relatórios de demonstração com base no cargo do usuário (ex: Marketing vs. Finanças) para aumentar a relevância do "Aha! moment".`}</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">V3 (Otimização): Iniciar um discovery técnico com a engenharia para otimizar a sincronização em segundo plano, visando reduzir o tempo de 60 para 30 minutos.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">V4 (Métricas): Implementar um funil de analytics no onboarding para medir em qual etapa os usuários desistem (explorar demo vs. conectar fonte) e otimizar o fluxo.</span>
          </li>
        </ul>
      </div>
      <div className="absolute font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic right-[120px] text-[#212529] text-[14px] top-[3708.5px]">
        <p className="leading-[normal] mb-0">5.1. Priorização: Por que essa solução?</p>
        <p className="leading-[normal] mb-0">{`Meu processo de design começou por entender o "porquê" por trás da restrição técnica. Em colaboração com o time de produto e engenharia, analisamos as opções com uma matriz de Custo x Impacto:`}</p>
        <ol className="list-decimal mb-0" start="1">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">Solução de Engenharia (Alto Custo): Tentar re-arquitetar o backend para reduzir o tempo de 60 minutos. (Custo: ~6 meses de engenharia, Impacto: Alto).</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">Solução de Design/Produto (Baixo Custo): Aceitar a limitação técnica e redesenhar a experiência de espera. (Custo: ~2 semanas de design/dev, Impacto: Alto).</span>
          </li>
        </ol>
        <p className="leading-[normal] mb-0">Ficou claro para o time que, embora a Solução 1 fosse ideal a longo prazo, a Solução 2 entregava o mesmo impacto (resolver a frustração e garantir a ativação) com uma fração do custo.</p>
        <p className="leading-[normal] mb-0">Aceitando essa diretriz estratégica, meu desafio como Product Designer foi transformar o que era um problema de engenharia em uma oportunidade de produto.</p>
        <p className="leading-[normal] mb-0">{`5.2. A Jornada de Onboarding Guiada (Recompensa > Esforço)`}</p>
        <p className="leading-[normal] mb-0">Para garantir o engajamento, desenhei um fluxo que entrega valor imediato antes de pedir qualquer esforço do usuário.</p>
        <p className="leading-[normal] mb-0">(Aqui você insere seu User Flow finalizado)</p>
        <ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Passo 1: Boas-vindas com Transparência:</span>
          </li>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">(Tela do E-mail e Tela de Criar Senha)</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">O e-mail já alinha as expectativas de forma positiva, convidando o usuário para um setup produtivo, em vez de uma espera. A criação de senha é simples e guiada.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">{`Passo 2: O "Aha! Moment" Instantâneo (Recompensa):`}</span>
          </li>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">(Tela de Relatórios com a tabela de Demonstração)</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">Em vez de uma tela vazia, a Sofia vê imediatamente uma lista de relatórios de demonstração (com status variados). Ela pode clicar, explorar e entender o poder do Axiom antes de fazer qualquer esforço.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Passo 3: Ação Motivada (Esforço):</span>
          </li>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">(Tela de Fontes de Dados)</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">Após ver o que o Axiom pode fazer, a Sofia agora está motivada. O sistema a guia para conectar sua primeira fonte de dados (ex: Stripe, Zendesk).</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Passo 4: Conclusão e Próximos Passos:</span>
          </li>
          <ul className="list-disc">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">(Tela de Notificação e Criação de Relatório)</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">O usuário é notificado da sincronização completa e guiado para criar seu primeiro relatório real, usando os métodos flexíveis (Template, No-Code, SQL).</span>
            </li>
          </ul>
        </ul>
      </div>
      <div className="absolute font-['Space_Mono:Regular',sans-serif] leading-[0] not-italic right-[1160px] text-[#212529] text-[14px] top-[2971.5px] translate-x-[100%] w-[1037px]">
        <p className="leading-[normal] mb-0">O Desafio: A Primeira Impressão Define o Contrato</p>
        <p className="leading-[normal] mb-0">Após um administrador criar a conta para a Sofia, uma limitação técnica exigia ~60 minutos para sincronizar todos os dados da empresa.</p>
        <ul className="mb-0">
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Problema de UX: Frustração, confusão e uma tela cheia de ações bloqueadas, levando a um enorme risco de abandono da sessão.</span>
          </li>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Problema de Negócio (PO): Em um produto B2B, o abandono na primeira sessão é crítico. Ele impactava diretamente o sucesso do cliente:</span>
          </li>
          <ol className="list-[lower-alpha]" start="1">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">Risco de Adoção e Churn (Cancelamento): Uma primeira experiência frustrante pode levar ao abandono imediato. Se os funcionários da Momentum (os usuários finais) não adotam a ferramenta pela qual a empresa pagou, o contrato será cancelado na próxima renovação por falta de uso.</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">{`Quebra da Promessa de Valor: Nosso objetivo era provar o valor do Axiom (entregar um insight) nos primeiros minutos. O tempo de espera de 60 minutos quebrava essa promessa. O usuário não via nenhum valor por uma hora, aumentando drasticamente a chance de ele nunca mais voltar e julgar o produto como "lento" ou "complicado".`}</span>
            </li>
          </ol>
        </ul>
        <p className="leading-[normal] mb-0">Nosso desafio de produto foi:</p>
        <p className="leading-[normal]">{`"Como podemos redesenhar esses 60 minutos para engajar, educar e provar o valor do Axiom imediatamente, garantindo a adoção do produto?"`}</p>
      </div>
      <div className="absolute font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic right-[120px] text-[#212529] text-[14px] top-[2582.5px]">
        <p className="leading-[normal] mb-0">A Persona: Conheça a Sofia Gonçalves</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Nome: Sofia, 32 anos</span>
          </li>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal] text-[14px]">&nbsp;</span>
          </li>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Cargo: Product Manager na Momentum (empresa SaaS B2B).</span>
          </li>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Objetivos:</span>
          </li>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">Entender rapidamente o que os usuários estão fazendo no seu produto.</span>
            </li>
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">Tomar decisões de novas funcionalidades baseadas em dados, não em achismos.</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">Identificar problemas antes que eles levem a cancelamentos.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[21px]">
            <span className="leading-[normal]">Frustrações:</span>
          </li>
          <ul className="list-disc">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">{`"Perco horas juntando dados do Stripe, Zendesk e Google Analytics em planilhas."`}</span>
            </li>
            <li className="mb-0 ms-[42px]">
              <span className="leading-[normal]">{`"Dependo da boa vontade dos engenheiros para conseguir um relatório específico."`}</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[normal]">{`"Eu sinto que passo mais tempo caçando dados do que realmente usando-os para tomar decisões."`}</span>
            </li>
          </ul>
        </ul>
      </div>
      <div className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic right-[120px] text-[#212529] text-[14px] top-[2332.5px]">
        <p className="mb-0">Qual problema o Axiom resolve?</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">O problema é que esses dados estão espalhados em dezenas de ferramentas (vendas, suporte, uso do produto) e em formatos incompatíveis. Antes que uma equipe possa sequer pensar em criar um gráfico, alguém precisa gastar horas ou dias limpando, combinando e unificando essas fontes manualmente.</p>
        <p className="mb-0">&nbsp;</p>
        <p>O Axiom foi projetado para automatizar exatamente esse trabalho de base: ele unifica os dados em um só lugar confiável, permitindo que as equipes usem seu tempo para analisar insights em suas ferramentas de BI externas, em vez de preparar dados.</p>
      </div>
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic right-[120px] text-[#212529] text-[14px] top-[1659.5px]">{`Software como Serviço (SaaS) é um modelo onde empresas acessam softwares pela internet através de uma assinatura. Empresas SaaS B2B, como a "Momentum", dependem de dados para sobreviver: precisam entender como os usuários se comportam, por que clientes cancelam assinaturas (churn) e quais funcionalidades são mais usadas.`}</p>
      <ul className="absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic text-[#212529] text-[14px] top-[1529.5px] w-[1038px]">
        <li className="ms-[21px]">
          <span className="leading-[normal]">A Solução: Em vez de uma solução de engenharia de alto custo, priorizei um redesenho da experiência. Criei um fluxo de onboarding produtivo que aproveita o tempo de espera para educar o usuário e provar o valor do Axiom imediatamente.</span>
        </li>
      </ul>
      <ul className="absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic text-[#212529] text-[14px] top-[1378.5px] w-[1038px]">
        <li className="ms-[21px]">
          <span className="leading-[normal]">O Desafio de Produto: Uma limitação técnica de 60 minutos de sincronização causava uma péssima primeira impressão (UX) — uma tela cheia de ações bloqueadas, resultando em frustração. Isso impactava diretamente a principal métrica de negócio B2B: a Taxa de Ativação de novas contas, e aumentava o Time to Value (TTV) do produto.</span>
        </li>
      </ul>
      <ul className="absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] not-italic text-[#212529] text-[14px] top-[1208.5px] w-[1038px]">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Meu Papel: Product Designer (End-to-end)</span>
        </li>
        <ul className="absolute left-[120px] list-disc top-[1208.5px] w-[1038px]">
          <li className="mb-0 ms-[42px]">
            <span className="leading-[normal]">Liderei a estratégia de produto e a descoberta (discovery) para a jornada do novo usuário.</span>
          </li>
          <li className="mb-0 ms-[42px]">
            <span className="leading-[normal]">Defini os problemas de usuário e de negócio, bem como as métricas de sucesso (KPIs).</span>
          </li>
          <li className="ms-[42px]">
            <span className="leading-[normal]">Criei a solução completa, desde o fluxo e wireframes até o protótipo de alta fidelidade e a validação.</span>
          </li>
        </ul>
      </ul>
      <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#212529] text-[14px] top-[1095.5px] w-[1034px]">Produto: Axiom, uma plataforma de BI Headless (preparação e integração de dados) fictícia para empresas SaaS (B2B).</p>
      <Menu />
      <ol className="absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] list-decimal not-italic text-[16px] text-black top-[1030.5px] w-[302px]" start="1">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Resumo do projeto</span>
        </li>
      </ol>
      <ol className="absolute block font-['Space_Mono:Regular',sans-serif] leading-[0] left-[120px] list-decimal not-italic text-[16px] text-black top-[2287.5px] w-[159px]" start="2">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Contexto</span>
        </li>
      </ol>
      <div className="absolute bottom-0 h-[calc(100%-929px)] left-[26px] pointer-events-none top-[929px]">
        <div className="h-[100dvh] pointer-events-auto sticky tailwind top-0 w-[375px]" />
      </div>
    </div>
  );
}