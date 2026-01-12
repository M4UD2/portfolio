import { useEffect } from 'react';
import ProjectDetail from '../../../components/organisms/project-detail';

export default function Yrden() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectDetail
      productName="Yrden"
      productLogo="/logos/yrden-logo.svg"
      title="De 60 minutos de espera a um onboarding produtivo"
      subtitle="Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor"
      date="Dezembro 2024"
      role="Product Designer (End-to-end)"
      tools={["Figma", "Miro", "Hotjar", "Analytics"]}
      imageUrl="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      description={
        `Yrden é uma plataforma de BI Headless (preparação e integração de dados) fictícia para empresas SaaS (B2B). ` +
        `Como Product Designer, liderei a estratégia de produto e descoberta para a jornada do novo usuário, ` +
        `definindo problemas de usuário e negócio, bem como as métricas de sucesso (KPIs). ` +
        `O desafio: uma limitação técnica de 60 minutos de sincronização causava uma péssima primeira impressão, ` +
        `impactando a Taxa de Ativação de novas contas e aumentando o Time to Value (TTV) do produto`
      }
      challenge={`Uma limitação técnica exigia ~60 minutos para sincronizar todos os dados da empresa, resultando em uma tela cheia de ações bloqueadas e causando frustração. Em um produto B2B, o abandono na primeira sessão é crítico, impactando diretamente: Risco de Adoção e Churn (cancelamento) - uma primeira experiência frustrante pode levar ao abandono imediato; Quebra da Promessa de Valor - nosso objetivo era provar o valor do Yrden nos primeiros minutos, mas o tempo de espera quebrava essa promessa. O desafio: Como redesenhar esses 60 minutos para engajar, educar e provar o valor do Yrden imediatamente?`}
      solution={`Em vez de uma solução de desenvolvimento de alto custo, priorizei um redesenho da experiência. Criei um fluxo de onboarding produtivo que aproveita o tempo de espera para educar o usuário e provar valor imediatamente. Dividi a solução em: 1) Modal de Boas-vindas (contexto) - explica o que é o Yrden e por que há espera; 2) Checklist Produtivo (ação) - guia tarefas durante a espera; 3) Estratégia 'Recompensa > Esforço' - mostrar valor (relatórios demo) antes de pedir esforço (conectar dados). O resultado: transformei 60 minutos de frustração em uma jornada produtiva que reduz o Time to Value para < 5 minutos`}
      technologies={["Figma", "Miro", "Hotjar", "Analytics", "User Testing"]}
      galleryImages={[
        "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]}
      testimonial={{
        quote: "A solução transformou um ponto de atrito em um diferencial. O feedback dos testes mostrou que os usuários se sentiram 'produtivos' e 'guiados', em vez de 'frustrados' ou 'perdidos'.",
        author: "Sofia Gonçalves",
        role: "Product Manager, Momentum"
      }}
      metrics={[
        { value: "< 5min", label: "Time to Value", icon: "trending" },
        { value: "73%", label: "Redução no abandono", icon: "users" },
        { value: "2 sem", label: "Tempo de desenvolvimento", icon: "zap" }
      ]}
      nextProject={{
        title: "Yrden — Editor SQL",
        url: "/projects/yrden/editor-sql"
      }}
      projectId="yrden"
    />
  );
}