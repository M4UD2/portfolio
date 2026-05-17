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
  { id: 'resultado', label: 'Resultado' },
  { id: 'roadmap', label: 'Próximos passos' },
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
        subtitle={<>Neste case, apresento como <strong>colaborei</strong> no design de uma interface de <strong>GenAI</strong> via <strong>Design Sprint</strong>. A solução transforma dados massivos em insights estratégicos, reduzindo o tempo de troubleshooting em <strong>70%</strong>.</>}
        date="2025"
        role="Product Designer (End-to-end)"
        tools={["Adobe XD", "Conceptboard"]}
        productName="Netchart"
        productLogo="/logos/netchart-logo.svg"
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

              <p>
                Embora a funcionalidade oferecesse uma alta capacidade analítica, identificamos o <strong>"Paradoxo do Valor"</strong> durante o seu uso: a ferramenta entregava uma volumetria massiva de dados e alterações, mas carecia de <strong>contexto técnico</strong> sobre o significado daquelas mudanças e o seu <strong>impacto real</strong> na rede.
              </p>

              <p>
                Essa lacuna gerava uma imensa <strong>sobrecarga cognitiva</strong> e fadiga nos engenheiros. Como eles precisavam interromper constantemente o fluxo no NetChart para buscar respostas em manuais externos, o processo de investigação tornava-se lento e exaustivo. Como consequência, a causa raiz dos problemas muitas vezes só era totalmente compreendida quando algum parâmetro já apresentava uma <strong>degradação crítica</strong> na qualidade da rede.
              </p>
            </Section>

            <Section id="descoberta" title="Descoberta">
              <p>
                Durante a etapa de <em>Discovery</em>, ouvimos especialistas seniores e profissionais em início de carreira para validar nossas hipóteses. As falas deixaram claro que o problema não era apenas a volumetria de dados, mas a <strong>interrupção de fluxo</strong>: a necessidade de pausar a análise para buscar respostas em manuais externos gerava <strong>fadiga e lentidão operacional</strong>.
              </p>
              
              <QuoteGrid quotes={[
                "Gasto muito tempo analisando mudanças de parâmetros sem contexto",
                "Dependo de colegas ou de manuais extensos para achar a solução",
                "Vejo muitas alterações, mas é difícil saber quais representam problemas reais",
                "Sofro pressão constante para otimizar parâmetros críticos mais rápido",
              ]} />
              <p>
                Com essa dor mapeada, definimos com o time de Ciência de Dados que a <strong>GenAI</strong> seria a tecnologia ideal para <strong>traduzir os desvios de parâmetros diretamente em causas raiz e instruções de resolução.</strong>
              </p>
              <p>A estratégia foi utilizar a arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong> para alimentar o modelo com os <strong>manuais técnicos dos próprios clientes</strong>, garantindo precisão e segurança, sem as "alucinações" de modelos genéricos.</p>

              <p>
                A partir desse cenário, definimos o desafio central e o objetivo da nossa <em>Design Sprint</em>:
              </p>
              
              <GoalResultCard
                goal={<>Reduzir o esforço de investigação técnica, mantendo o engenheiro focado no fluxo de análise?</>}
                result={<>Implementar uma camada de inteligência que reduza o <strong>MTTR</strong> e a carga cognitiva dos usuários.</>}
              />

            </Section>

            <Section id="solucao" title="Solução">
              <p>
                A análise de desvio de parâmetros era apenas a primeira oportunidade para a IA gerar valor no NetChart. Para garantir a <strong>consistência, escalabilidade e não poluir a interface</strong>, tomamos a decisão estratégica de centralizar a experiência em uma <strong>interface lateral dividida</strong>, em vez de espalhar insights soltos pelas tabelas de dados.
              </p>

              <ProjectImage src="/netchart-ai/user-flow.png" alt="User flow" delay={0.1} caption="Mapeamento do fluxo do usuário (User flow)"/>

              <div className="flex flex-col gap-8 mt-2">

                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    Diagnóstico "Zero-Prompt"
                  </h3>
                  <p>
                    É o caminho de maior valor e o diferencial da solução. Ao ativar o gatilho na funcionalidade de comparação de parâmetros, o sistema utiliza a <strong>mesma interface lateral</strong> para realizar uma <em>auto-context injection</em>: ele envia automaticamente em <em>background</em> o contexto dos parâmetros, configurações e logs para a IA. O resultado é uma resposta com <em>insights</em> e referências diretas à fonte, sem que o usuário precise redigir uma linha sequer:
                  </p>
                  <ProjectVideo src="/netchart-ai/zero-prompt.mp4" caption="Protótipo do diagnóstico Zero-Prompt" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    Chat Global
                  </h3>
                  <p>
                    Fluxo em que a <strong>mesma interface de chat</strong> é acionada manualmente a qualquer momento. Funciona como um suporte técnico sob demanda, onde o engenheiro pode enviar prompts sobre equipamentos ou dúvidas gerais de documentação, recebendo respostas fundamentadas na <strong>base de dados (RAG)</strong>:
                  </p>
                  <ProjectVideo src="/netchart-ai/chat-global.mp4" caption="Protótipo do acionamento do Chat Global" />
                  <p>
                    Além disso, desenhamos a opção de <strong>expandir o chat</strong>. Isso permite que o engenheiro utilize a interface da IA em uma nova aba ou em uma segunda tela:
                  </p>
                  <ProjectVideo src="/netchart-ai/chat-expandido.mp4" caption="Protótipo de chat expandido em nova aba" />
                </div>
                
              </div>
            </Section>

            <Section id="decisoes" title="Decisões de design">
              <div className="flex flex-col gap-4">
                <p>
                  Para garantir que essa nova experiência fosse adotada com segurança em um ambiente crítico de configuração de redes de Telecom, fundamentamos nossas decisões de Design no <strong>People + AI Guidebook (PAIR)</strong> do Google. As diretrizes desse guia nos ajudaram a traduzir um sistema complexo em uma interface focada em autonomia, transparência e na redução de fluxo de trabalho. As principais frentes de atuação foram:
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
                    Evolução da interface
                  </h3>
                  <p>
                    O guia do Google orienta a criar experiências que se integrem <strong>nativamente ao fluxo de trabalho</strong> do usuário, respeitando sua autonomia.
                  </p>
                  <p>
                    Para que o chat não tomasse o espaço útil da plataforma, transformamos um painel fixo em uma <strong>sidebar colapsável que abre à direita</strong>, permitindo uma visualização dividida entre os dados da rede e o suporte da IA:
                  </p>
                  <ProjectImage src="/netchart-ai/sidepanel-antigo.png" alt="Sidebar fixa com tabs antes da redesign" caption="Antes: Sidebar fixa com tabs" />
                  <ProjectVideo src="/netchart-ai/sidebar.mp4" caption="Protótipo da sidebar com painel colapsável" />
                  
                </div>

                {/* Tópico 2 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    Design de confiança
                  </h3>
                  <p>
                    Em sistemas críticos, a IA não pode ser uma "caixa-preta". O design foi focado em gerar confiança calibrada (<em>calibrated trust</em>), permitindo validação constante.
                  </p>
                  <p>
                    Como a solução utiliza a arquitetura <strong>RAG</strong> para buscar respostas nos manuais da empresa, o design reflete essa confiabilidade elaborando explicações úteis. Cada insight gerado exibe links e referências diretas aos documentos originais de onde aquela informação foi retirada, permitindo que o engenheiro valide a informação na fonte e não confie cegamente na máquina:
                  </p>
                  <ProjectVideo src="/netchart-ai/source.mp4" caption="Protótipo de exibição das fontes mapeadas pelo RAG" />
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
                    <strong>Controle total:</strong> O usuário sempre tem o poder de ditar o ritmo da IA. Ele pode interromper o processamento a qualquer momento ou editar o último prompt enviado para refinar a análise:
                  </p>
                  <ProjectVideo src="/netchart-ai/interrupção-edição-prompt.mp4" caption="Protótipo de interrupção e edição de prompt" />
                  <p>
                    <strong>Loop de feedback (RLHF):</strong> Na interseção entre Design e Ciência de Dados, implementamos interações de <em>thumbs up/down</em> com tags de erro. Esse modelo garante que o feedback qualitativo do usuário treine e adapte o modelo de linguagem continuamente ao contexto real de uso:
                  </p>
                  <ProjectVideo src="/netchart-ai/feedback.mp4" caption="Protótipo de feedback de resposta" />
                </div>

                {/* Tópico 4 */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    Redução do custo de interação
                  </h3>
                  <p>Decidimos equilibrar estrategicamente o que a máquina automatiza e o que o humano controla.</p>
                  <p>Como já apresentado, ao acionar a IA na funcionalidade de comparação de parâmetros, o sistema puxa automaticamente "no background" todas as configurações que o usuário já havia selecionado, sem que ele precise digitar uma linha sequer. Isso evita perda de tempo com tecnicalidades.</p>
                  <p>Esse contexto, de um chat ativado a partir de um gatilho, não pode ser alterado. O objetivo é que cada chat tenha um contexto único e blindado: se o usuário precisar revisitar uma análise no futuro para entender por que tomou determinada ação naquele dia, todos os parâmetros capturados pelo gatilho e o racional da IA estarão perfeitamente preservados, garantindo a rastreabilidade.</p>
                  <p>Além disso, implementamos uma regra de <strong>persistência de contexto</strong>: o usuário continua exatamente de onde parou ao reabrir a interface pelo botão ‘Ask IA’ em até 5 minutos após o fechamento. Se um novo insight for solicitado após esse intervalo, o chat antigo é arquivado de forma segura no histórico. Para complementar a usabilidade, a janela sempre herda o último tamanho configurado pelo usuário:</p>
                  <ProjectVideo src="/netchart-ai/context.mp4" caption="Protótipo de componente de contexto do chat" />
                  
                </div>
              </div>
            </Section>
                          
            <Section id="resultado" title="Resultados projetados">
              <p>
                A solução foi desenhada para mitigar a sobrecarga cognitiva dos engenheiros, transformando a operação de rede de um modelo reativo para proativo por meio de contexto técnico imediato. Com isso, projetamos:
              </p>
              <MetricsGrid
                metrics={[
                  { 
                    value: '−70%', 
                    label: <>no <strong>tempo de troubleshoot</strong>, ao eliminar a busca manual em documentações</> 
                  },
                  { 
                    value: '+30%', 
                    label: <>na <strong>adoção proativa</strong>, solucionando anomalias antes que virem crises na rede</> 
                  },
                ]}
              />
              <h3 className="text-foreground">KPIs de sucesso</h3>
              <p>Para garantir que a solução escale orientada a dados pós-lançamento, definimos três métricas principais de acompanhamento que validarão o sucesso da solução:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KpiCard index={0} icon={UsersThree} metric="DAU/MAU" label="Adoção" description="Frequência de uso para avaliar o engajamento diário da IA na rotina dos engenheiros" />
                <KpiCard index={1} icon={Brain} metric="RLHF" label="Assertividade" description="Volume de interações (thumbs up/down e tags de erro) para avaliar a precisão e o refinamento contínuo das respostas" />
                <KpiCard index={2} icon={Timer} metric="MTTR" label="Eficiência Operacional" description="Tempo Médio de Resolução de falhas para comprovar o ganho de agilidade operacional gerado pela IA" />
              </div>
            </Section>

            <Section id="roadmap" title="Próximos passos">
              <p>
                Com a experiência base consolidada, o objetivo é transformar o suporte da IA em um ecossistema maduro e escalável. O roadmap está estruturado em três frentes de atuação:
              </p>
              <ProjectRoadmap
                items={[
                  { title: "Gestão de base de fontes", description: "Permitir que os próprios usuários façam o upload e o gerenciamento de seus manuais técnicos na plataforma.", status: "done" },
                  { title: "Evolução guiada por feedback", description: "Priorizar melhorias de interface e refinamento de respostas a partir das tags de erro reportadas no dia a dia.", status: "in-progress" },
                  { title: "Expansão de ecossistema", description: "Integrar os gatilhos contextuais (Zero-Prompt) a outras funcionalidades críticas da plataforma, ampliando a inteligência preditiva do sistema.", status: "planned" },
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
              Projetar para GenAI em cenários de alta criticidade técnica exigiu muito mais do que desenhar interfaces: foi um exercício complexo de <strong>calibrar confiança e mitigar o custo de interação</strong>. Aplicar as diretrizes do PAIR Guidebook garantiu que o sistema complexo se transformasse em uma ferramenta fluida e perfeitamente integrada à rotina operacional do engenheiro.
            </p>
            <p>
              O maior aprendizado deste projeto foi entender que o verdadeiro valor do design centrado em IA não está na complexidade das respostas ou na automação total, mas sim em entregar o <strong>contexto exato no momento certo</strong>, preservando a autonomia e a tomada de decisão humana no controle da rede.
            </p>

          </Section>
        </div>
      </FadeInView>

      <FadeInView delay={0.15}>
        <ProjectNavigation
          nextProject={{ title: "O cérebro da IA: fluxo de governança de fontes", url: "/projects/governance", comingSoon: true }}
        />
      </FadeInView>
    </ProjectLayout>
  );
}