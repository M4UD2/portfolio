import { useEffect } from 'react';
import ProjectLayout from '../../../components/templates/project-layout';
import ProjectHero from '../../../components/organisms/project-hero';
import ProjectImage from '../../../components/molecules/project-image';
import ProjectNavigation from '../../../components/organisms/project-navigation';
import FadeInView from '../../../components/atoms/fade-in-view';
import GoalResultCard from '../../../components/molecules/goal-result-card';
import ProjectRoadmap from '../../../components/organisms/project-roadmap';
import MetricsGrid from '../../../components/organisms/metrics-grid';
import KpiCard from '../../../components/atoms/kpi-card';
import { ShieldCheck, Clock } from '@phosphor-icons/react';

const sections = [
  { id: 'visao-geral', label: 'Visão geral' },
  { id: 'estados-sync', label: 'Estados de sincronização' },
  { id: 'metadados', label: 'Metadados e taxonomia' },
  { id: 'automacao', label: 'Automação e controle' },
  { id: 'gestao-lote', label: 'Gestão em lote' },
  { id: 'resultados', label: 'Resultados e impacto' },
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

export default function GovernanceFlow() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ProjectLayout
      projectId="governance"
      customSections={sections}
    >
      <ProjectHero
        title="O cérebro da IA: fluxo de governança de fontes"
        subtitle={<>Como estruturei a interface de gerenciamento que alimenta o modelo de GenAI do <strong>NetChart</strong>, garantindo respostas <strong>seguras</strong>, <strong>rastreáveis</strong> e baseadas estritamente em fontes do usuário.</>}
        date="2025"
        role="Product Designer (End-to-end)"
        tools={["Figma"]}
        tags={['Governança de Dados', 'RAG', 'B2B SaaS', 'Telecom']}
        productName="NetChart"
        productLogo="/logos/netchart-logo.svg"
      />

      <ProjectImage
        src="/governance/thumbnail.png"
        alt="Interface de fluxo de governança de fontes"
        delay={0.2}
        fullWidth
      />

      <FadeInView delay={0.1}>
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="flex flex-col gap-16">

            <Section id="visao-geral" title="1. Visão geral e o cenário">
              <p>
                Uma IA conversacional corporativa é tão boa quanto os dados que a alimentam. Durante a Design Sprint da interface de troubleshooting do NetChart, um ponto crítico foi levantado repetidamente pelos usuários: a <strong>segurança e o sigilo das fontes</strong>.
              </p>
              <p>
                Operadoras de telecomunicações lidam com manuais técnicos e especificações de rede estritamente confidenciais, que definem parâmetros vitais de operação e jamais podem vazar ou ser expostos. Embora a governança desses arquivos não tenha sido o escopo central daquela sprint, a segurança das fontes tornou-se imediatamente a nossa <strong>prioridade número dois</strong> logo após a saída do workshop.
              </p>
              <p>
                Como este era um módulo administrativo focado em controle rígido e alta densidade de dados, aproveitamos a oportunidade para explorar novos padrões visuais na plataforma. Testamos uma abordagem baseada em interfaces <strong>borderless</strong> (sem bordas excessivas) e componentes modulares para modernizar o ecossistema visual do produto, preparando-o para o futuro.
              </p>

              <GoalResultCard
                goal={<><strong>Como automatizar a extração de metadados</strong> de arquivos confidenciais, garantindo ao mesmo tempo que o administrador tenha total liberdade para editar e calibrar exatamente como a IA lê e interpreta aquela documentação?</>}
                result={<>Garantir a conformidade (<strong>Compliance</strong>) de segurança das operadoras e a precisão técnica das respostas, mitigando drasticamente as <strong>alucinações do modelo</strong> antes que qualquer insight chegue ao usuário final.</>}
              />
            </Section>

            <Section id="estados-sync" title="2. Estados de sincronização (Feedback de sistema)">
              <p>
                A ingestão de dados para IA não é instantânea. Para gerenciar a expectativa do usuário e evitar a ansiedade operacional de achar que o sistema travou, projetei indicadores visuais claros de status: <strong>Uploading</strong> (Enviando arquivo), <strong>Unverified</strong> (Aguardando revisão), <strong>Verified</strong> (Pronto/Válido) e <strong>Failed</strong> (Erro no processamento).
              </p>
              <blockquote>
                <strong>O Pulo do Gato (Syncing...):</strong> Indica visualmente quando a IA está processando e absorvendo os vetores de dados em background.
              </blockquote>
              <p>
                No ambiente real de telecom, documentos podem corromper, ter encoding incompatível ou falhar na leitura. Tratar o <strong>"caminho infeliz"</strong> com elegância foi crucial para a segurança do administrador. Ao mapear o status de <em>Failed</em>, a interface não exibe apenas um erro genérico. Ela aponta com precisão cirúrgica a causa raiz técnica (ex: <em>"Encoding incompatível"</em> ou <em>"Arquivo corrompido"</em>), oferecendo uma ação contextual de re-upload imediato exatamente no mesmo ponto da linha da tabela.
              </p>
            </Section>

            <Section id="metadados" title="3. Metadados e taxonomia automática">
              <p>
                Alimentar uma arquitetura RAG (Retrieval-Augmented Generation) exige engenharia de dados complexa (quebra de texto, vetorização e indexação). Aplicamos heurísticas clássicas e princípios do <strong>Google PAIR Guidebook</strong> para traduzir essa complexidade em controle humano.
              </p>
              
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-border">
                <h3 className="text-foreground font-bold">A. Visibilidade do Status do Sistema (Heurística #1) & Confiança Calibrada</h3>
                <p>
                  A ingestão de dados para IA não é instantânea. Para mitigar a ansiedade operacional e evitar que o usuário assuma que o sistema travou, estruturamos indicadores visuais claros de estado:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li><strong>Uploading:</strong> Arquivo sendo enviado.</li>
                  <li><strong>Unverified:</strong> Documento na base, mas aguardando auditoria humana.</li>
                  <li><strong>Verified:</strong> Pronto e aprovado para responder no chat.</li>
                  <li><strong>Syncing:</strong> Indica visualmente que o motor da IA está quebrando e absorvendo os vetores de dados em background. O usuário sabe exatamente em que estágio o "conhecimento" se encontra.</li>
                </ul>

                <h3 className="text-foreground font-bold mt-4">B. Design de Erros e Recuperação (Heurística #9)</h3>
                <p>
                  No ambiente real de telecom, documentos podem corromper ou ter encoding incompatível. Em vez de mensagens genéricas, projetamos um Caminho Infeliz contextual: o status <em>Failed</em> aponta a causa raiz cirúrgica e oferece um gatilho de re-upload na própria linha da tabela, reduzindo o custo de interação.
                </p>
              </div>
            </Section>

            <Section id="automacao" title="4. Automação assistida e controle de tags (Homem-IA)">
              <p>
                Um dos pilares do Google PAIR é definir o equilíbrio entre automação e controle. O sistema varre o arquivo no upload para extrair metadados automáticos (versão, data, autor), mas a gestão de tags exigeu um refinamento visual específico para manter o <strong>Modelo Mental</strong> do usuário alinhado:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-foreground">Tags Sugeridas pela IA (AI-Generated):</strong> Exibidas com um estilo visual sutil (fundo tracejado/itálico) e um indicador de que foram geradas pela máquina (ex: <em>✨ Huawei</em>). Elas servem para acelerar o processo, mas exigem validação.
                </li>
                <li>
                  <strong className="text-foreground">Controle Total e Liberdade (Heurística #3):</strong> O administrador pode excluir qualquer sugestão falha da IA com um clique ou adicionar suas próprias tags personalizadas.
                </li>
                <li>
                  <strong className="text-foreground">Aprovação de Leitura:</strong> A IA só passa a interpretar o documento com base nessas tags após a confirmação do usuário, garantindo inteligência híbrida (a máquina propõe, o humano chancela).
                </li>
              </ul>

              <ProjectImage 
                src="/governance/modal-upload-revisao.png" 
                alt="Modal de Upload e Revisão de Metadados" 
                caption="Tela 02 — Fluxo drag-and-drop de arquivos com a clara distinção visual entre taxonomias recomendadas pela IA e campos editáveis pelo humano."
              />
            </Section>

            <Section id="gestao-lote" title="5. Lógica de gestão em lote (Bulk Actions)">
              <p>
                A eficiência de sistemas complexos está em gerir grandes volumes (<strong>Heurística #7 - Flexibilidade e Eficiência</strong>). Para evitar erros operacionais e cliques repetitivos em bases com centenas de itens, criamos uma regra de negócio inteligente para Status Mistos na ativação/desativação de fontes:
              </p>
              <blockquote>
                <strong>Regra de Predominância:</strong> Ao selecionar múltiplos arquivos com status diferentes:<br />
                • Se mais da metade estiver ativa ➔ A ação em massa desativa todos (foco em segurança).<br />
                • Se menos da metade estiver ativa ➔ O sistema ativa todos de forma unificada.
              </blockquote>
              <p>
                <strong>Impacto:</strong> Redução drástica de atrito e prevenção de segurança para evitar que documentos obsoletos fiquem ativos por acidente.
              </p>

              <ProjectImage 
                src="/governance/gestao-lote-filtros.png" 
                alt="Gestão em Lote e Filtros Rápidos" 
                caption="Tela 03 — Seleção múltipla de arquivos acionando a barra de comandos rápidos e filtros preditivos."
              />
            </Section>

            <Section id="resultados" title="6. Resultados e impacto de negócio">
              <p>
                O refinamento visual atrativo aliado à robustez lógica transformou este painel administrativo em um grande argumento comercial. O protótipo de alta fidelidade foi peça-chave em demonstrações estratégicas de novos produtos para contas globais de alta exigência, como a <strong>Nokia Global</strong>.
              </p>

              <MetricsGrid
                metrics={[
                  { 
                    value: '98%', 
                    label: <>de <strong>assertividade técnica</strong>. O índice de acerto das respostas no chat principal subiu devido à curadoria fina dos dados de entrada.</> 
                  },
                  { 
                    value: '1 clique', 
                    label: <>para a <strong>revogação de acesso</strong> instantânea, limpando o escopo de respostas da IA em tempo real.</> 
                  },
                ]}
              />

              <h3 className="text-foreground">KPIs de sucesso monitorados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <KpiCard index={0} icon={ShieldCheck} metric="Compliance Rate" label="Rastreabilidade" description="Porcentagem de respostas geradas que mantêm rastreabilidade de ponta a ponta com fontes ativas e validadas (Meta: 100%)." />
                <KpiCard index={1} icon={Clock} metric="Time to Verify" label="Tempo de Curadoria" description="Redução do tempo que o administrador leva entre fazer o upload e aprovar o arquivo, validando a eficácia do auto-tagging." />
              </div>
            </Section>

            <Section id="roadmap" title="7. Roadmap de evolução">
              <p>
                Para direcionar a evolução do produto de forma estratégica a longo prazo, definimos os seguintes marcos de engenharia de design:
              </p>
              <ProjectRoadmap
                items={[
                  { title: "V1 — MVP (Foco Atual)", description: "Ingestão manual de arquivos, taxonomia assistida por IA com revisão humana e controle de status unificado.", status: "done" },
                  { title: "V2 — Conectores Automáticos", description: "Sincronização agendada (Scheduled Sync) automática com repositórios externos e nuvens privadas (AWS S3, Google Drive, SharePoint corporativo).", status: "in-progress" },
                  { title: "V3 — Auditoria e Desempenho", description: "Painel analítico mostrando quais documentos são mais citados pela IA e quais estão obsoletos ou gerando contradições no modelo.", status: "planned" },
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
              Projetar o "backstage" da IA do NetChart provou que interfaces administrativas de segurança técnica precisam de tanto apuro visual e refinamento de UX quanto o produto final do usuário.
            </p>
            <p>
              O maior aprendizado foi entender que confiança em IA não se cria automatizando tudo, mas sim dando <strong>visibilidade e controle sobre as regras do jogo</strong>. Ao equilibrar o auto-tagging com a autonomia de edição do administrador, entregamos um produto robusto, seguro contra vazamentos e altamente estratégico para o mercado de Telecom.
            </p>
          </Section>
        </div>
      </FadeInView>

      <FadeInView delay={0.15}>
        <ProjectNavigation
          nextProject={{ title: "Voltar ao Portfólio", url: "/projects", comingSoon: false }}
        />
      </FadeInView>
    </ProjectLayout>
  );
}