import { useEffect } from 'react';
import ProjectLayout from '../../../components/templates/project-layout';
import ProjectHero from '../../../components/organisms/project-hero';
import ProjectImage from '../../../components/molecules/project-image';
import ProjectNavigation from '../../../components/organisms/project-navigation';
import FadeInView from '../../../components/atoms/fade-in-view';
import QuoteGrid from '../../../components/molecules/quote-grid';
import GoalResultCard from '../../../components/molecules/goal-result-card';
import SocialLink from '../../../components/atoms/social-link';
import ProjectRoadmap from '../../../components/organisms/project-roadmap';
import MetricsGrid from '../../../components/organisms/metrics-grid';
import KpiCard from '../../../components/atoms/kpi-card';
import ProjectVideo from '../../../components/molecules/project-video';
import { UsersThree, Brain, Timer } from '@phosphor-icons/react';

const sections = [
  { id: 'cenario', label: 'Cenário' },
  { id: 'descoberta', label: 'Descoberta' },
  { id: 'solucao', label: 'Solução' },
  { id: 'decisoes', label: 'Decisões de design' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'conclusao', label: 'Conclusão' },
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

export default function IATroubleshooting() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      projectId="netchart-ia"
      customSections={sections}
    >
      <ProjectHero
        title="Integração de GenAI para troubleshooting de redes"
        subtitle={<>Neste case, apresento como <strong>colaborei</strong> no design de uma interface de <strong>GenAI</strong> via <strong>Design Sprint</strong>. A solução transforma dados massivos em insights estratégicos, reduzindo o tempo de <strong>busca por documentações</strong> em <strong>70%</strong>.</>}
        date="2025"
        role="Product Designer (End-to-end)"
        tools={["Adobe XD", "Conceptboard"]}
        productName="NetChart"
        productLogo="/logos/netchart-logo.svg"
        productLogoDark="/logos/netchart-logo-dark.svg"
      />

      <ProjectImage
        src="/netchart-ai/thumbnail.png"
        alt="Integração de GenAI para troubleshooting de redes"
        delay={0.2}
        fullWidth
      />

      <FadeInView delay={0.1}>
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="flex flex-col gap-16">

            <Section id="cenario" title="Cenário e problema">
              <p>
                O <strong>NetChart</strong> é uma solução consolidada para gestão e monitoramento de redes móveis (<strong>2G a 5G</strong>). O desafio deste projeto foi <strong>evoluir a funcionalidade de comparação de parâmetros</strong>, onde engenheiros de performance monitoram milhares de dados e parâmetros técnicos vitais. Em um cenário de <strong>alta complexidade</strong>, qualquer desvio de configuração sem o devido contexto técnico pode <strong>comprometer o sinal de regiões inteiras</strong>, impactando diretamente os <strong>SLAs</strong> e a experiência de milhões de usuários.
              </p>

              <p>Apesar da alta capacidade analítica, a ferramenta sofria com o <strong>"Paradoxo do Valor"</strong>: entregava dados massivos, mas sem contexto técnico. Essa lacuna gerava sobrecarga cognitiva e forçava os engenheiros a consultarem manuais externos.</p>
            </Section>

            <Section id="descoberta" title="Descoberta">
              <p>
                Durante a etapa de <em>Discovery</em>, ouvimos especialistas seniores e profissionais em início de carreira para validar nossas hipóteses. As falas deixaram claro que o problema não era apenas a volumetria de dados, mas a <strong>interrupção de fluxo</strong>: a necessidade de pausar a análise para buscar respostas em manuais externos gerava <strong>fadiga e lentidão operacional</strong>.
              </p>
              
              <QuoteGrid quotes={[
                "Gasto muito tempo analisando mudanças de parâmetros sem contexto.",
                "Dependo de colegas ou de manuais extensos para achar a solução.",
                "Vejo muitas alterações, mas é difícil saber quais representam problemas reais.",
                "Sofro pressão constante para otimizar parâmetros críticos mais rápido.",
              ]} />
              <p>
                Com essa dor mapeada, definimos com o time de Ciência de Dados que a <strong>GenAI</strong> seria a tecnologia ideal para <strong>traduzir os desvios de parâmetros diretamente em causas raiz e instruções de resolução.</strong>
              </p>
              <p>A estratégia foi utilizar a arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong> para alimentar o modelo com os <strong>manuais técnicos dos próprios clientes</strong>, garantindo precisão e segurança, sem as "alucinações" de modelos genéricos.</p>

              <p>
                A partir desse cenário, definimos o desafio central e o objetivo da nossa <em>Design Sprint</em>:
              </p>
              
              <GoalResultCard
                goal={<><strong>Reduzir o esforço de investigação técnica</strong>, mantendo o engenheiro focado no fluxo de análise?</>}
                result={<>Implementar uma camada de inteligência que reduza o <strong>MTTR</strong> e a carga cognitiva dos usuários.</>}
              />

            </Section>

            <Section id="solucao" title="Solução e fluxo da experiência">
            <p>A análise de desvio de parâmetros era apenas a primeira oportunidade para a IA gerar valor no NetChart. Para garantir consistência, escalabilidade e evitar a poluição visual com insights soltos nas tabelas de dados, tomamos a decisão estratégica de centralizar a IA em uma <strong>interface lateral dividida</strong>.</p>

            <p>A partir dessa estrutura, mapeamos o fluxo do usuário focado em três formatos de interação:</p>

              <ProjectImage src="/netchart-ai/user-flow.png" alt="User flow" delay={0.1} caption="Mapeamento do fluxo do usuário (User flow)"/>

              <div className="flex flex-col gap-8 mt-2">

              <div className="flex flex-col gap-8 mt-2">

<div className="flex flex-col gap-2">
  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
    1. Diagnóstico "Zero-Prompt"
  </h3>
  <p>
    É o principal diferencial da solução. Ao ativar o gatilho na tela de comparação de parâmetros, o sistema realiza uma <em>auto-context injection</em> em <em>background</em>, enviando logs e configurações para a IA, <strong>sem que o usuário precise redigir uma única linha de prompt</strong>:
  </p>
  <ProjectVideo src="/netchart-ai/zero-prompt.mp4" caption="Protótipo do diagnóstico Zero-Prompt" />
</div>

<div className="flex flex-col gap-2">
  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
    2. Chat global
  </h3>
  <p>
    Um fluxo complementar acionado manualmente a qualquer momento. Funciona como um assistente técnico integrado, <strong>no qual</strong> o engenheiro pode enviar <em>prompts</em> livremente sobre equipamentos ou dúvidas de documentação, recebendo respostas fundamentadas na <strong>base de dados (RAG)</strong>:
  </p>
  <ProjectVideo src="/netchart-ai/chat-global.mp4" caption="Protótipo do acionamento do Chat Global" />
</div>

<div className="flex flex-col gap-2">
  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
    3. Chat expandido
  </h3>
  <p>
    Como engenheiros de telecomunicações frequentemente operam com múltiplos monitores, desenhamos a opção de expandir a interface. Isso permite desatracar o chat para utilizá-lo em <strong>tela cheia, em uma nova aba ou em um segundo monitor</strong>, maximizando a área útil de análise de dados:
  </p>
  <ProjectVideo src="/netchart-ai/chat-expandido.mp4" caption="Protótipo de chat expandido em nova aba" />
</div>

</div>
                
              </div>
            </Section>

            <Section id="decisoes" title="Decisões de design">
              <div className="flex flex-col gap-4">
                <p>
                  Para garantir que essa nova experiência fosse adotada com segurança em um ambiente crítico de configuração de redes de telecom, fundamentamos nossas decisões de design no <strong>People + AI Guidebook (PAIR)</strong> do Google. As diretrizes desse guia nos ajudaram a traduzir um sistema complexo em uma interface focada em autonomia, transparência e na otimização do fluxo de trabalho.  As principais decisões de design foram estruturadas em:
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  <SocialLink 
                    href="https://pair.withgoogle.com/guidebook/" 
                    label="People + AI Guidebook"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-12">
                {/* Tópico 1 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    1. Integração e autonomia
                  </h3>
                  <p>
                    O guia do Google orienta a criar experiências que se integrem <strong>nativamente ao fluxo de trabalho</strong> do usuário, respeitando sua autonomia.
                  </p>
                  <p>
                    Para que o chat não tomasse o espaço útil da plataforma, transformamos um painel fixo em uma <strong>sidebar colapsável que abre à direita</strong>, permitindo uma visualização dividida entre os dados da rede e o suporte da IA:
                  </p>
                  <ProjectImage src="/netchart-ai/sidepanel-antigo.png" alt="Sidebar fixa com tabs antes da redesign" caption="Antes: Sidebar fixa com tabs" />
                  <ProjectVideo src="/netchart-ai/sidebar.mp4" caption="Depois: protótipo da sidebar com painel colapsável" />
                  
                </div>

                {/* Tópico 2 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    2. Confiança calibrada
                  </h3>
                  <p>
                    Em sistemas críticos, a IA não pode ser uma "caixa-preta". O design foi focado em gerar confiança calibrada (<em>calibrated trust</em>), permitindo validação constante.
                  </p>
                  <p>
  Como a solução utiliza a arquitetura <strong>RAG</strong> baseada nos manuais da empresa, cada insight gerado exibe links e referências diretas aos documentos originais. Isso permite que o engenheiro <strong>valide a informação direto na fonte</strong>.
</p>
                  <ProjectVideo src="/netchart-ai/source.mp4" caption="Protótipo de exibição das fontes mapeadas pelo RAG" />
                </div>

                {/* Tópico 3 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    3. Controle e aprendizado
                  </h3>
                  <p>
                    Interações humano-IA são vias de mão dupla. Aplicamos isso de duas formas:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Controle total:</strong> O usuário sempre tem o poder de ditar o ritmo da IA. Ele pode <strong>interromper o processamento</strong> a qualquer momento ou <strong>editar o último prompt</strong> enviado para refinar a análise.
                    </li>
                  </ul>
                  <ProjectVideo src="/netchart-ai/interrupção-edição-prompt.mp4" caption="Protótipo de interrupção e edição de prompt" />
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Loop de feedback (RLHF):</strong> Implementamos interações de <em>thumbs up/down</em> com tags de erro. Esse feedback qualitativo serve para <strong>treinar e adaptar o modelo</strong> continuamente à rotina real de uso.
                    </li>
                  </ul>
                  <ProjectVideo src="/netchart-ai/feedback.mp4" caption="Protótipo de feedback de resposta" />
                </div>

                {/* Tópico 4 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    4. Redução do custo de interação
                  </h3>
                  <p>
                    Equilibramos estrategicamente a automação da máquina com o <strong>controle humano</strong> para eliminar fricção no fluxo:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Zero-Prompt:</strong> O sistema puxa automaticamente <em>em background</em> as configurações selecionadas, evitando a digitação de detalhes técnicos redundantes.
                    </li>
                    <li>
                      <strong className="text-foreground">Contexto blindado:</strong> Cada chat ativado por gatilho é imutável, preservando o histórico exato dos parâmetros e o racional da IA para garantir <strong>rastreabilidade futura</strong>.
                    </li>
                    <li>
                      <strong className="text-foreground">Retomada de sessão:</strong> Retorna à última conversa se a IA for acionada pelo botão global em até 3 minutos.
                    </li>
                  </ul>
                  <ProjectVideo src="/netchart-ai/context.mp4" caption="Protótipo de componente de contexto do chat" />
                </div>
              </div>
            </Section>
                          
            <Section id="resultados" title="Resultados projetados">
              <p>
                A solução foi desenhada para mitigar a <strong>sobrecarga cognitiva</strong> dos engenheiros, transformando a operação de rede de um modelo <strong>reativo para proativo</strong> por meio de contexto técnico imediato. Com isso, projetamos:
              </p>
              <MetricsGrid
                metrics={[
                  { 
                    value: '−70%', 
                    label: <>no <strong>tempo de troubleshooting</strong>, eliminando a busca manual em documentações.</> 
                  },
                  { 
                    value: '+30%', 
                    label: <>na <strong>eficiência de análise de desvios</strong> reduzindo a carga cognitiva na comparação de dados.</> 
                  },
                ]}
              />
              <h3 className="text-foreground">KPIs de sucesso</h3>
              <p>Para garantir que a solução escale orientada a dados pós-lançamento, definimos duas métricas principais de acompanhamento que validarão o sucesso da solução:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <KpiCard index={0} icon={UsersThree} metric="DAU/MAU" label="Adoção" description="Métrica para avaliar a frequência de uso e o engajamento diário da IA na rotina dos engenheiros." />
                <KpiCard index={1} icon={Timer} metric="MTTR" label="Eficiência Operacional" description="Acompanhamento do tempo médio de resolução de falhas para comprovar o ganho de agilidade." />
              </div>
            </Section>

            <Section id="roadmap" title="Roadmap">
  <p>
    Para direcionar a evolução do produto <strong>pós-MVP</strong>, estruturamos um roadmap estratégico focado em escalar a <strong>autonomia do engenheiro</strong> e o alcance da ferramenta:
  </p>
  <ProjectRoadmap
    items={[
      { title: "Base de conhecimento", description: "Upload e gerenciamento autônomo de manuais técnicos na plataforma pelos próprios usuários.", status: "done" },
      { title: "Evolução guiada por feedback", description: "Refinamento das respostas e ajustes de interface baseados nas tags de erro reportadas no dia a dia.", status: "in-progress" },
      { title: "Novas integrações", description: "Integração dos gatilhos de Zero-Prompt a outros fluxos do NetChart, ampliando a inteligência contextual do sistema.", status: "planned" },
    ]}
  />
</Section>

          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.1}>
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <Section id="conclusao" title="Conclusão e aprendizados">
          <p>
  Projetar uma GenAI para um fluxo crítico de engenheiros de telecom provou que o papel do <strong>Product Designer</strong> vai muito além do visual: é um exercício de <strong>gerar segurança</strong> no uso da tecnologia e eliminar fricções no fluxo de trabalho. Aplicar as diretrizes do <strong>PAIR Guidebook</strong> permitiu transformar uma engenharia complexa em uma interface de suporte fluida, que equilibra a flexibilidade de um chat com a automação inteligente do <strong>Zero-Prompt</strong>.
</p>
<p>
  O maior aprendizado deste projeto foi entender que o verdadeiro valor da IA não está na automação total, mas no <strong>suporte à decisão</strong>. Ao entregar o contexto exato no momento certo, reduzimos o <strong>tempo de busca por documentações</strong> e pavimentamos o caminho para a redução do <strong>MTTR</strong>, mantendo o engenheiro sempre no <strong>controle final</strong> da operação.
</p>
          </Section>
        </div>
      </FadeInView>

      <FadeInView delay={0.15}>
        <ProjectNavigation
          nextProject={{ title: "O cérebro da IA: fluxo de governança de fontes", url: "/projects/netchart/genai-governance", comingSoon: true }}
        />
      </FadeInView>
    </ProjectLayout>
  );
}
