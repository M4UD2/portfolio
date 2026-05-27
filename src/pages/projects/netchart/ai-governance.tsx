import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectLayout from '../../../components/templates/project-layout';
import ProjectHero from '../../../components/organisms/project-hero';
import ProjectImage from '../../../components/molecules/project-image';
import ProjectVideo from '../../../components/molecules/project-video';
import ProjectNavigation from '../../../components/organisms/project-navigation';
import FadeInView from '../../../components/atoms/fade-in-view';
import GoalResultCard from '../../../components/molecules/goal-result-card';
import MetricsGrid from '../../../components/organisms/metrics-grid';
import KpiCard from '../../../components/atoms/kpi-card';
import SocialLink from '../../../components/atoms/social-link';
import { ShieldCheck, Clock } from '@phosphor-icons/react';

const sections = [
  { id: 'cenario', label: 'Cenário' },
  { id: 'solucao', label: 'Solução' },
  { id: 'decisoes', label: 'Decisões de design' },
  { id: 'resultados', label: 'Resultados projetados' },
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

export default function GovernanceFlow() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      projectId="governance"
      customSections={sections}
    >
      <ProjectHero
        title="O cérebro da IA: fluxo de governança de fontes"
        subtitle={<>Como estruturei a <strong>interface de governança de fontes</strong> da GenAI do NetChart para dar ao usuário <strong>controle</strong> sobre as fontes que alimentam a IA, permitindo uma <strong>curadoria segura e rastreável</strong>.</>}
        date="2025"
        role="Product Designer (End-to-End)"
        tools={["Figma"]}
        productName="NetChart"
        productLogo="/logos/netchart-logo.svg"
        productLogoDark="/logos/netchart-logo-dark.svg"
      />

      <ProjectImage
        src="https://placehold.co/1040x600/1a1a1a/555555?text=Thumbnail"
        alt="Thumbnail — Fluxo de governança de fontes"
        delay={0.2}
        fullWidth
      />

      <FadeInView delay={0.1}>
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="flex flex-col gap-16">

            <Section id="cenario" title="Cenário e problema">
              <p>
                O fluxo de governança de fontes é a infraestrutura de segurança por trás da <Link to="/projects/netchart-ia" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">interface de troubleshooting do NetChart</Link>. Para que uma IA conversacional diagnostique falhas complexas em redes móveis, o modelo precisa consultar uma base densa de conhecimento.
              </p>
              <p>
                Durante a nossa <em>Design Sprint</em>, operadoras de telecomunicações levantaram uma barreira crítica: os manuais técnicos e especificações de rede necessários para alimentar o modelo são estritamente confidenciais. O receio de vazamento de dados e a falta de mecanismos de governança bloqueavam a adoção da tecnologia.
              </p>
              <p>
                Como esses documentos são vitais para dar precisão às respostas da IA, projetei de ponta a ponta um painel restrito a usuários administradores. O objetivo foi transformar uma engenharia de dados complexa em uma interface visual que entrega controle e autonomia na curadoria do ecossistema de RAG.
              </p>

              <p>A partir desse cenário, defini o desafio central e o objetivo da solução:</p>
              
              <GoalResultCard
                goal={<>Como equilibrar a automação da IA com o controle humano na curadoria de dados confidenciais?</>}
                result={<>Criar uma interface transparente onde administradores gerenciem fontes para a IA consumir com segurança e flexibilidade.</>}
              />
            </Section>

            <Section id="solucao" title="Solução e fluxo da experiência">
              <p>
                Alimentar uma arquitetura RAG (Retrieval-Augmented Generation) exige processamento complexo: envolve quebra de texto, vetorização e indexação. Para garantir que a interface traduzisse essa complexidade sem sobrecarregar o usuário, centralizei a governança em um fluxo focado em autonomia e clareza.
              </p>
              <p>
                Mapeei a jornada conectando as ações do administrador no backoffice ao impacto direto na experiência do chat, evidenciando os caminhos infelizes e os momentos críticos de validação humana:
              </p>

              <ProjectImage 
                src="https://placehold.co/1040x600/1a1a1a/555555?text=User+Flow"
                alt="User Flow conectando o upload de arquivos à experiência de busca no chat" 
                caption="Mapeamento da ingestão de dados, tratamento de erros e seleção de modo de busca."
              />
              
              <div className="flex flex-col gap-8 mt-2">
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    1. Ingestão e Automação de Metadados
                  </h3>
                  <p>
                    Para acelerar a curadoria, o sistema varre o arquivo logo no upload para extrair metadados essenciais de forma automática, diminuindo drásticamente o trabalho manual inicial do usuário ao categorizar a documentação.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    2. Validação Humana e Gestão em Lote
                  </h3>
                  <p>
                    Apesar da assistência da máquina, a gestão exige validação humana. O administrador mantém total liberdade para aceitar ou editar campos. Para evitar cliques repetitivos em bases densas, criei a <strong>Regra de Predominância</strong>: se múltiplos arquivos forem selecionados e a maioria estiver ativa, a ação em massa desativa todos, priorizando o comportamento de segurança.
                  </p>
                  <ProjectImage 
                    src="https://placehold.co/1040x600/1a1a1a/555555?text=Gestao+em+Lote"
                    alt="Gestão em Lote e Filtros Rápidos" 
                    caption="Seleção múltipla acionando a barra de comandos rápidos."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    3. Extensão da Governança para o Chat
                  </h3>
                  <p>
                    A governança construída no painel administrativo reflete diretamente na ponta. Desenhei um seletor de modo de busca embutido na interface do chat para que o consumidor da IA também tenha controle sobre o escopo das respostas geradas pelo modelo.
                  </p>
                </div>

              </div>
            </Section>

            <Section id="decisoes" title="Decisões de design">
              <div className="flex flex-col gap-4">
                <p>
                  Para gerar confiança em um ambiente corporativo de alto sigilo, fundamentei a interface nos princípios do <strong>People + AI Guidebook (PAIR)</strong> do Google, focando em dar visibilidade e controle sobre as regras de funcionamento da IA.
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  <SocialLink 
                    href="https://pair.withgoogle.com/guidebook/" 
                    label="People + AI Guidebook"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-12">
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    1. Gerenciamento de Expectativas e Status
                  </h3>
                  <p>
                    A ingestão de dados para IA não é instantânea. Para gerenciar a expectativa do usuário e mitigar a ansiedade operacional, projetei indicadores claros de status ao longo de todo o processamento na tabela de fontes (Uploading, Unverified, Syncing e Verified). 
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    2. Design de Recuperação Contextual
                  </h3>
                  <p>
                    Para o caminho infeliz (Failed), evitei mensagens de erro genéricas. A interface aponta a <strong>causa raiz técnica</strong> (ex: "Encoding inválido") e oferece ações contextuais imediatas na própria linha ("Tentar novamente" ou "Substituir arquivo"), reduzindo o custo de interação e o tempo de frustração.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    3. Explicabilidade da Máquina
                  </h3>
                  <p>
                    Para evitar a sensação de "caixa-preta", as tags sugeridas pela máquina recebem um tratamento visual sutil (ícone ✨) e contam com <strong>tooltips de explicabilidade</strong> (ex: <em>"Tag sugerida porque o termo foi detectado 42 vezes"</em>). Isso garante que o administrador compreenda o raciocínio por trás da recomendação antes de validá-la.
                  </p>
                  <ProjectImage 
                    src="https://placehold.co/1040x600/1a1a1a/555555?text=Modal+de+Upload"
                    alt="Modal de Upload e Revisão de Metadados" 
                    caption="Fluxo com distinção visual entre taxonomias recomendadas pela IA e campos editáveis."
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-[1.4] text-balance text-foreground">
                    4. Confiança Calibrada e Rigidez de Busca
                  </h3>
                  <p>
                    Seguindo o princípio de <em>Calibrated Trust</em>, garantimos que o usuário possa limitar a IA apenas ao que ele confia. Desenhamos duas configurações de rigidez no chat:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-muted-foreground">
                    <li><strong className="text-foreground">Strict Mode:</strong> A IA restringe 100% de suas respostas aos documentos enviados pelo usuário. Ideal para troubleshooting focado em manuais confidenciais.</li>
                    <li><strong className="text-foreground">Standard Mode:</strong> Permite que o modelo cruze as informações da base RAG com seu conhecimento geral de engenharia, útil para dúvidas teóricas mais amplas.</li>
                  </ul>
                  <ProjectVideo 
                    src=""
                    poster="https://placehold.co/1040x600/1a1a1a/555555?text=Video+Placeholder"
                    caption="Protótipo do seletor de modos de busca no chat" 
                  />
                </div>

              </div>
            </Section>

            <Section id="resultados" title="Resultados projetados">
              <p>
                O protótipo de alta fidelidade tornou-se peça-chave em demonstrações estratégicas de novos produtos para contas globais de alta exigência. Como o projeto encontra-se em fase de validação pré-implementação, estimo as seguintes projeções de impacto com base nos testes de usabilidade:
              </p>

              <MetricsGrid
                metrics={[
                  { 
                    value: '~90%', 
                    label: <>de redução projetada no risco de <strong>alucinação e vazamento</strong>. A curadoria fina e o <em>Strict Mode</em> garantem blindagem de contexto baseada apenas em fatos documentados.</> 
                  },
                  { 
                    value: '~60%', 
                    label: <>de eficiência estimada no <strong>tempo de curadoria de arquivos</strong>. A extração automática de metadados transforma o trabalho manual em apenas revisão e aprovação.</> 
                  },
                ]}
              />

              <h3 className="text-foreground mt-8">KPIs para Acompanhamento</h3>
              <p>Métricas de produto mapeadas para validar o sucesso da governança pós-lançamento:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <KpiCard index={0} icon={ShieldCheck} metric="Compliance Rate" label="Rastreabilidade" description="% de respostas da IA que mantêm rastreabilidade de ponta a ponta com fontes ativas e validadas." />
                <KpiCard index={1} icon={Clock} metric="Time to Verify" label="Eficiência de Curadoria" description="Tempo médio que o administrador leva para revisar e aprovar um arquivo após o auto-tagging." />
              </div>
            </Section>

            <Section id="conclusao" title="Conclusão e aprendizados">
              <p>
                Projetar o backstage da IA do NetChart provou que interfaces administrativas precisam de tanto apuro visual e refinamento de UX quanto o produto final. Confiança em IA não se cria automatizando tudo, mas sim dando <strong>visibilidade e controle sobre as regras do jogo</strong>. 
              </p>
              <p>
                Ao equilibrar a automação da máquina com a autonomia do administrador — e refletir essa governança na ponta através dos modos de busca —, consegui desenhar uma infraestrutura de dados robusta, pronta para as mais rigorosas exigências do mercado de telecomunicações.
              </p>
            </Section>

          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.15}>
        <ProjectNavigation
          nextProject={{ title: "Integração de GenAI para troubleshooting de redes", url: "/projects/netchart/genai-troubleshooting" }}
        />
      </FadeInView>
    </ProjectLayout>
  );
}