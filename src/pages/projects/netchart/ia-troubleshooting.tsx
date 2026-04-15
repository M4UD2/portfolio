import { useEffect } from 'react';
import ProjectLayout from '../../../components/templates/project-layout';
import ProjectHero from '../../../components/organisms/project-hero';
import ProjectImage from '../../../components/molecules/project-image';
import ProjectNavigation from '../../../components/organisms/project-navigation';
import FadeInView from '../../../components/atoms/fade-in-view';
import QuoteGrid from '../../../components/molecules/quote-grid';
import GoalResultCard from '../../../components/molecules/goal-result-card';
import UserFlowDiagram from '../../../components/molecules/user-flow-diagram';

const sections = [
  { id: 'cenario', label: 'Cenário' },
  { id: 'descoberta', label: 'Descoberta' },
  { id: 'oportunidade', label: 'Oportunidade' },
  { id: 'solucao', label: 'Solução' },
  { id: 'decisoes', label: 'Decisões de Design' },
  { id: 'impacto', label: 'Impacto' },
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
        subtitle="Colaborei no processo completo (via Design Sprint) no design de uma interface conversacional baseada em IA Generativa para transformar volumes massivos de dados em insights, reduzindo o tempo de troubleshooting em 70%."
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
                O <strong>NetChart</strong> é uma solução para gestão de redes móveis (2G a 5G) onde engenheiros
                monitoram milhares de parâmetros técnicos vitais. Nesse cenário, qualquer alteração não mapeada
                pode comprometer o sinal de regiões inteiras.
              </p>
              <p>
                Embora o sistema tivesse <strong>alta capacidade analítica</strong>, enfrentávamos o{' '}
                <strong>"Paradoxo do Valor"</strong>: a plataforma entregava dados massivos, mas sem contexto
                sobre o significado das mudanças.
              </p>
              <p>
                Essa falta de clareza gerava sobrecarga cognitiva e fadiga, forçando os usuários a atuar de
                forma puramente <strong>reativa</strong> diante de problemas críticos de rede.
              </p>
            </Section>

            <Section id="descoberta" title="Descoberta">
              <p>
                Para validar nosso problema, focamos em ouvir nossos <strong>usuários</strong>. Durante o{' '}
                <em>discovery</em>, suas falas deixaram claro que a funcionalidade de comparação de parâmetros
                precisava de uma camada de inteligência para mitigar a sobrecarga e a incerteza técnica:
              </p>
              <QuoteGrid quotes={[
                "Gasto muito tempo analisando mudanças de parâmetros sem contexto",
                "Dependo de colegas ou de manuais extensos para achar a solução",
                "Vejo muitas alterações, mas é difícil saber quais representam problemas reais",
                "Sofro pressão constante para otimizar parâmetros críticos mais rápido",
              ]} />
            </Section>

            <Section id="oportunidade" title="Oportunidade">
              <p>
                Em alinhamento com o time de Ciência de Dados, validamos que a{' '}
                <strong>Inteligência Artificial Generativa</strong> era a ferramenta ideal para transformar dados
                brutos em <strong>diagnósticos acionáveis</strong>. A equipe técnica definiu a utilização da{' '}
                <strong>arquitetura RAG</strong> (<em>Retrieval-Augmented Generation</em>), alimentando o modelo
                diretamente com os manuais técnicos exclusivos de cada cliente.
              </p>
              <p>
                Para traduzir essa capacidade técnica em uma experiência para os nossos usuários, realizamos o{' '}
                <strong>Problem Framing</strong> e o levantamento de hipóteses na Design Sprint. Com isso, definimos:
              </p>
              <GoalResultCard
                goal={<>Eliminar a investigação manual de falhas através de diagnósticos contextualizados</>}
                result={<>Redução no MTTR (<em>Mean Time to Resolution</em>) e <br />na carga cognitiva dos usuários</>}
              />
            </Section>

            <Section id="solucao" title="Solução">
              <p>
                Diante da complexidade técnica, tomamos a decisão estratégica de{' '}
                <strong>não fragmentar a experiência</strong>. A solução foi desenhada em torno de um ponto de
                contato unificado:
              </p>
              <UserFlowDiagram
                start="Login"
                paths={[
                  [
                    { label: "Parameters Compare", type: "action", preview: {
                      gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZhMzFtcWozemp4NHpxMzFxcWozemp4NHpxMzFxcWozemp4NHpx/giphy.gif",
                      description: "Tela de comparação de parâmetros de rede com múltiplas colunas de dados."
                    }},
                    { label: "Ativa Gatilho de IA", type: "action", highlight: true, preview: {
                      gif: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
                      description: "Botão de acionamento da IA aparece contextualmente na interface."
                    }},
                    { label: "Auto-context injection", type: "system", preview: {
                      gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
                      description: "O sistema injeta automaticamente o contexto da tela atual no prompt."
                    }},
                    { label: "Processamento", type: "system" },
                    { label: "Diagnóstico Contextualizado", type: "result", preview: {
                      gif: "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif",
                      description: "IA retorna diagnóstico com referências técnicas e sugestão de ação."
                    }},
                  ],
                  [
                    { label: "Abre Chat Global", type: "action" },
                    { label: "Envia Prompt", type: "action", preview: {
                      gif: "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif",
                      description: "Interface de chat conversacional com histórico de mensagens."
                    }},
                    { label: "IA gera resposta via RAG", type: "system", preview: {
                      gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
                      description: "Modelo busca nos manuais técnicos do cliente para fundamentar a resposta."
                    }},
                  ],
                ]}
                convergence="Usuário interage com a IA (Refinamento / Feedback RLHF)"
              />
              <Placeholder label="[ Imagem — interface do Chat Global ]" />

              
              <BulletList items={[
                <><strong>Chat Global de IA:</strong> Uma interface conversacional centralizada e acessível de
                  qualquer ponto da plataforma. Funciona como um "parceiro sênior", pronto para responder dúvidas
                  sobre toda a infraestrutura do projeto do cliente e sobre o próprio produto NetChart.</>,
                <><strong>Gatilhos de Análise Contextual:</strong> Em vez de construir múltiplas interfaces de IA,
                  adicionamos <strong>gatilhos inteligentes</strong> nas ferramentas do sistema. Na funcionalidade
                  de comparação de desvio de parâmetros, o usuário aciona a IA com um clique — o Chat Global se
                  abre carregando o contexto daquela tela e analisa o impacto técnico respondendo "por que isso
                  importa" e como resolver.</>,
              ]} />
              <Placeholder label="[ Imagem — interface do Chat Global ]" />
            </Section>

            <Section id="decisoes" title="Decisões de design">
              <BulletList items={[
                <><strong>Evolução da Interface (Otimização do Workspace):</strong> Para garantir que a adição do
                  chat não resultasse em perda de espaço útil, transformamos um painel fixo que exibia a{' '}
                  <em>treeview</em> da rede em uma <em>sidebar</em> colapsável.</>,
                <><strong>Explicabilidade com Referências:</strong> Cada insight gerado pela IA é acompanhado de
                  referências técnicas aos manuais de origem, permitindo que o analista recupere a confiança técnica.</>,
                <><strong>Controle Total:</strong> O usuário pode interromper o processamento da IA ou editar o
                  último <em>prompt</em> enviado para refinar a análise.</>,
                <><strong>Loop de Feedback (RLHF):</strong> Implementamos interações de thumbs up/down com tags
                  de erro. Esse modelo garante que o feedback qualitativo seja transformado em dados estruturados,
                  treinando e refinando o modelo continuamente.</>,
              ]} />
              <Placeholder label="[ Imagem — Antes e Depois do workspace ]" />
              <Placeholder label="[ Imagem — detalhes de Trust & Safety ]" />
            </Section>
              
            <Section id="impacto" title="Impacto projetado">
              <p>
                O projeto visou transformar o analista júnior em um operador com suporte de nível sênior através
                da base de conhecimento da IA.
              </p>
              <BulletList items={[
                <><strong>Resultados Projetados:</strong> Redução de <strong>70% no tempo de troubleshoot</strong>{' '}
                  ao eliminar a busca manual em documentações, e estimativa de{' '}
                  <strong>30% de aumento em adoção proativa</strong> (problemas prevenidos antes de virarem crises).</>,
                <><strong>KPIs de Sucesso:</strong> <em>Taxa de engajamento com o chat (DAU/MAU), volume de
                  feedbacks via RLHF e redução percentual do MTTR medida via analytics da plataforma.</em></>,
                <><strong>Roadmap:</strong> Persistência de contexto da IA por 5 minutos após o fechamento do chat
                  e possibilidade de executar comandos diretos (ex: "Reiniciar Serviço") via interface.</>,
              ]} />
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
