import { useEffect } from 'react';
import ProjectLayout from '../../../components/templates/project-layout';
import ProjectHero from '../../../components/organisms/project-hero';
import ProjectImage from '../../../components/molecules/project-image';
import ProjectNavigation from '../../../components/organisms/project-navigation';
import FadeInView from '../../../components/atoms/fade-in-view';
import QuoteGrid from '../../../components/molecules/quote-grid';
import GoalResultCard from '../../../components/molecules/goal-result-card';
import SocialLink from '../../../components/atoms/social-link';

const sections = [
  { id: 'cenario', label: 'Cenário' },
  { id: 'descoberta', label: 'Descoberta' },
  { id: 'solucao', label: 'Solução' },
  { id: 'decisoes', label: 'Decisões de design' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'roadmap', label: 'Próximos passos' },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="flex flex-col gap-6 scroll-mt-32 md:scroll-mt-24">
      <h2>{title}</h2>
      <div className="flex flex-col gap-4 text-[1rem] leading-[1.7] text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="w-full h-[400px] rounded-sm bg-muted flex items-center justify-center text-muted-foreground text-[0.875rem]">
      {label}
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-foreground mt-[0.45rem] text-[0.4rem]">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IATroubleshooting() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      projectId="ia-troubleshooting"
      prototypeLink={undefined}
      customSections={sections}
    >
      <ProjectHero
  title="Integração de IA Generativa para Troubleshooting de Redes"
  subtitle={<>Neste case, apresento como <strong>colaborei</strong> no design de uma interface de <strong>IA Generativa</strong> via <strong>Design Sprint</strong>. A solução transforma dados massivos em insights estratégicos, reduzindo o tempo de troubleshooting em <strong>70%</strong>.</>}
  date="2025"
  role="Product Designer (End-to-end)"
  tools={["Adobe XD", "Conceptboard"]}
  productName="Netchart"
  productLogo="/logos/netchart-logo.svg"
/>

      <ProjectImage
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="Integração de IA Generativa para Troubleshooting de Redes"
        delay={0.2}
      />

      <FadeInView delay={0.1}>
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="flex flex-col gap-16">

            <Section id="cenario" title="Cenário e problema">
              <p>
              O <strong>NetChart</strong> é uma solução consolidada para gestão e monitoramento de redes móveis (2G a 5G). O desafio deste projeto foi <strong>evoluir a funcionalidade de comparação de parâmetros</strong>, onde engenheiros de performance monitoram milhares de dados e parâmetros técnicos vitais. Em um cenário de <strong>alta complexidade</strong>, qualquer desvio de configuração sem o devido contexto técnico pode <strong>comprometer o sinal de regiões inteiras</strong>, impactando diretamente em SLAs e na experiência de milhões de usuários.
              </p>

              <p>
              Embora a funcionalidade oferecesse uma alta capacidade analítica, nós identificamos o <strong>"Paradoxo do Valor"</strong> durante o seu uso: a ferramenta entregava uma volumetria massiva de dados e alterações, mas carecia de <strong>contexto técnico</strong> sobre o significado daquelas mudanças e o seu <strong>impacto real</strong> na rede.
              </p>

              <p>
              Essa lacuna gerava uma imensa <strong>sobrecarga cognitiva</strong> e fadiga nos engenheiros. Como eles precisavam interromper constantemente o fluxo no NetChart para buscar respostas em manuais externos, o processo de investigação tornava-se lento e exaustivo. Como consequência, a causa raiz dos problemas muitas vezes só era totalmente compreendida quando algum parâmetro já apresentava um <strong>sobrecarga cognitiva</strong> na qualidade da rede.
              </p>
            </Section>

            <Section id="descoberta" title="Descoberta">
              <p>
              Durante a etapa de <em>Discovery</em>, ouvimos especialistas seniores e profissionais em início de carreira para validar nossas hipóteses. As falas deixaram claro que o problema não era apenas a volumetria de dados, mas a <strong>interrupção de fluxo</strong>: a necessidade de pausar a análise para buscar respostas em manuais externos gerava <strong>fadiga e lentidão operacional.</strong>
              </p>
              
              <QuoteGrid quotes={[
                "Gasto muito tempo analisando mudanças de parâmetros sem contexto",
                "Dependo de colegas ou de manuais extensos para achar a solução",
                "Vejo muitas alterações, mas é difícil saber quais representam problemas reais",
                "Sofro pressão constante para otimizar parâmetros críticos mais rápido",
              ]} />
      <p>
      Com essa dor mapeada, definimos com o time de Ciência de Dados que a IA Generativa seria a tecnologia ideal para <strong>traduzir os desvios de parâmetros diretamente em causas raiz e instruções de resolução.</strong>
              </p>
              <p>A estratégia foi utilizar a arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong> para alimentar o modelo com os <strong>manuais técnicos dos próprios clientes</strong>, garantindo precisão e segurança, sem as "alucinações" de modelos genéricos.</p>

      <p>
      A partir desse cenário, definimos o desafio central e o objetivo da nossa <em>Design Sprint</em>:
              </p>
              
              <GoalResultCard
                goal={<>Reduzir o esforço de investigação técnica, mantendo o engenheiro focado no fluxo de análise?</>}
                result={<>Implementar uma camada de inteligência que reduza o MTTR e a carga cognitiva dos usuários.</>}
              />

            </Section>

            <Section id="solucao" title="Solução">
  <p>
  A análise de desvio de parâmetros era apenas a primeira oportunidade para a IA gerar valor no NetChart. Para garantir a <strong>consistência, escalabilidade e não poluir a interface,</strong> tomamos a decisão estratégica de centralizar a experiência em uma <strong>interface lateral dividida</strong>, em vez de espalhar insights soltos pelas tabelas de dados.
  </p>

  <Placeholder label="[ Imagem — User flow ]" />

  <div className="flex flex-col gap-8 mt-2">

  <div className="flex flex-col gap-2">
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
        Diagnóstico "Zero-Prompt”
      </h3>
      <p>
      É o caminho de maior valor e o diferencial da solução. Ao ativar o gatilho na funcionalidade de comparação de parâmetros, o sistema utiliza a <strong>mesma interface lateral</strong> para realizar uma <em>auto-context injection</em>: ele envia automaticamente em <em>background</em> o contexto dos parâmetros, configurações e logs para a IA. O resultado é uma resposta com <em>insights</em> e referências diretas à fonte, sem que o usuário precise redigir uma linha sequer.
      </p>
      <Placeholder label="[ Imagem — interface do Chat Global ]" />
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
        Chat Global
      </h3>
      <p>
      Fluxo em que a <strong>mesma interface de chat</strong> é acionada manualmente a qualquer momento. Funciona como um suporte técnico sob demanda, onde o engenheiro pode enviar prompts sobre equipamentos ou dúvidas gerais de documentação, recebendo respostas fundamentadas na <strong>base de dados (RAG).</strong>
      </p>
      <Placeholder label="[ Imagem — User flow ]" />
    </div>
    
  </div>

  
</Section>

<Section id="decisoes" title="Decisões de design">
  <div className="flex flex-col gap-4">
    <p>
      Para garantir que essa nova experiência fosse adotada com segurança em um ambiente crítico de configuração de redes de Telecom, fundamentamos nossas decisões de Design no <strong>People + AI Guidebook (PAIR)</strong> do Google. As diretrizes desse guia nos ajudaram a traduzir um sistema complexo em uma interface focada em autonomia, transparência e na redução de esforço operacional. As principais frentes de atuação foram:
    </p>
    
    <div className="flex items-center gap-2 mb-6">
      <SocialLink 
        href="https://pair.withgoogle.com/guidebook/" 
        platform="github" 
        label="People + AI Guidebook"
      />
    </div>
  </div>

  <div className="flex flex-col gap-12">
    {/* Tópico 1 */}
    <div className="flex flex-col gap-4">
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
        Evolução da interface
      </h3>
      <p>
      O guia do Google orienta a criar experiências que se integrem <strong>nativamente ao fluxo de trabalho</strong> do usuário, respeitando sua autonomia.
      </p>
      <p> Para que o chat não tomasse o espaço útil da plataforma, transformamos um painel fixo em uma <strong>sidebar colapsável que abre à direita</strong>, permitindo uma visualização dividida entre os dados da rede e o suporte da IA:</p>
      <Placeholder label="[ Imagem — Antes: NetChart com o painel fixo]" />
      <Placeholder label="[ Imagem — Depois: Sidebar colapsável e o chat abrindo]" />
      <p>Além disso, desenhamos a opção de <strong>expandir o chat</strong>.Isso permite que o engenheiro utilize a interface da IA em uma janela independente ou em uma segunda tela, alinhando-se a um setup de trabalho multi-monitores, comum em cenários de troubleshooting:
      </p>
      <Placeholder label="[ Imagem — Chat expandindo]" />
    </div>

    {/* Tópico 2 */}
    <div className="flex flex-col gap-4">
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
        Design de confiança
      </h3>
      <p>
        Em sistemas críticos, a IA não pode ser uma "caixa-preta". O design foi focado em gerar confiança calibrada (<em>calibrated trust</em>), permitindo validação constante.
        </p>
        <p>Como a solução utiliza a arquitetura RAG para buscar respostas nos manuais da empresa, o design reflete essa confiabilidade elaborando explicações úteis. Cada insight gerado exibe links e referências diretas aos documentos originais de onde aquela informação foi retirada, permitindo que o engenheiro valide a informação na fonte e não confie cegamente na máquina:
      </p>
      <Placeholder label="[ Imagem — Detalhes de Trust & Safety e Explicabilidade ]" />
    </div>

   {/* Tópico 3 */}
<div className="flex flex-col gap-4">
  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
    Controle e aprendizado
  </h3>
  <p>
    Interações humano-IA são vias de mão dupla. Aplicamos isso de duas formas:
  </p>
      <p>
        <strong>Controle total:</strong> O usuário sempre tem o poder de ditar o ritmo da IA. Ele pode interromper o processamento a qualquer momento ou editar o último prompt enviado para refinar a análise.
      </p>
      <Placeholder label="[ Imagem — Exemplo de Controle: Interrupção e Edição de Prompt ]" />
      <p>
        <strong>Loop de feedback (RLHF):</strong> Na interseção entre Design e Ciência de Dados, implementamos interações de thumbs up/down com tags de erro. Esse modelo garante que o feedback qualitativo do usuário treine e adapte o modelo de linguagem continuamente ao contexto real de uso:
      </p>
      <Placeholder label="[ Imagem — Exemplo de RLHF: Interface de Feedback e Tags de Erro ]" />
    </div>

    {/* Tópico 4 */}
    <div className="flex flex-col gap-4">
      <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
        Redução do custo de interação
      </h3>
      <p>Decidimos equilibrar estrategicamente o que a máquina automatiza e o que o humano controla.</p>
      <p>Como já apresentado, ao acionar a IA na funcionalidade de comparação de parâmetros, o sistema puxa automaticamente "no background" todas as configurações que o usuário já havia selecionado, sem que ele precise digitar uma linha sequer. Isso evita perda de tempo com tecnicalidades:</p>
      <Placeholder label="[ Imagem — Fluxo Contextual e Histórico de IA ]" />
      <p>Esse contexto, de um chat ativado a partir de um gatilho, não pode ser alterado. O objetivo é que cada chat tenha um contexto único e blindado: se o usuário precisar revisitar uma análise no futuro para entender por que tomou determinada ação naquele dia, todos os parâmetros capturados pelo gatilho e o racional da IA estarão perfeitamente preservados, garantindo a rastreabilidade.</p>
    </div>
  </div>
</Section>
              
<Section id="impacto" title="Impacto projetado">
  <p>
    A solução foi desenhada para mitigar a extrema sobrecarga cognitiva dos engenheiros, entregando contexto técnico imediato e transformando a operação de rede de um processo puramente reativo para proativo.
  </p>
  
  <BulletList items={[
    <><strong>Resultados Projetados:</strong> Através dos testes de usabilidade validados com os usuários, estimamos uma redução de 70% no tempo de troubleshoot (ao eliminar a busca manual em documentações) e um aumento de 30% na adoção proativa (solucionando anomalias antes que virem crises na rede).</>,
  ]} />

  <p>
    <strong>KPIs de Sucesso:</strong> Para garantir que a solução escale orientada a dados pós-lançamento, definimos três métricas principais de acompanhamento:
  </p>

  <BulletList items={[
    <><strong>DAU/MAU (Daily Active Users / Monthly Active Users):</strong> Mede a taxa de adoção e o engajamento com o chat. Essa proporção nos mostra se a IA se tornou uma ferramenta essencial de uso diário na rotina dos engenheiros ou se é acessada apenas ocasionalmente.</>,
    <><strong>Volume de Aprendizado via RLHF (Reinforcement Learning from Human Feedback):</strong> Acompanha a quantidade de avaliações feitas pelos usuários no chat (através de thumbs up/down e tags de erro). Essa métrica valida se o ciclo de co-aprendizado está funcionando e garantindo o refinamento contínuo do modelo de linguagem.</>,
    <><strong>Redução do MTTR (Mean Time to Resolution):</strong> Significa o "Tempo Médio de Resolução" de uma falha na rede. Monitorada através do analytics da plataforma, é a nossa principal métrica de negócio para provar que a ferramenta reduziu o erro humano e acelerou o tempo de resposta.</>,
  ]} />
</Section>

            <Section id="roadmap" title="Próximos passos">
              <p>1. **Gestão de Base de Dados:** Permitir que os próprios usuários façam o *upload* e a gestão autônoma de seus manuais técnicos.
2. **Evolução Baseada em Feedback:** Priorizar e implementar melhorias contínuas na interface e nas respostas da IA a partir das avaliações e necessidades reais relatadas pelos usuários.
3. **Expansão do Ecossistema:** Integrar os gatilhos contextuais a outras *features* críticas da plataforma, usando o modelo de RLHF para melhorar a latência e a precisão contínua.</p>
            </Section>

          </div>
        </div>


      </FadeInView>

      <FadeInView delay={0.15}>
        <ProjectNavigation
          nextProject={{ title: "Próximo projeto", url: "/" }}
        />
      </FadeInView>
    </ProjectLayout>
  );
}
