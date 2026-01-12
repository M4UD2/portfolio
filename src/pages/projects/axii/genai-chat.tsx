import { useEffect } from 'react';
import ProjectDetail from '../../../components/organisms/project-detail';

export default function GenAIChat() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectDetail
      productName="Axii"
      productLogo="/logos/axiom-logo.svg"
      title="GenAI em chat"
      subtitle="Interface conversacional para análise de dados com IA generativa"
      date="Março 2024"
      role="Product Designer (End-to-end)"
      tools={["Figma", "Miro", "User Research", "Prototyping"]}
      imageUrl="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      description={
        `Desenvolvimento de uma interface de chat com IA generativa para análise de dados na plataforma Axii. ` +
        `O objetivo era permitir que usuários fizessem perguntas em linguagem natural e recebessem insights ` +
        `e visualizações de dados de forma conversacional e intuitiva.`
      }
      challenge={`Usuários precisavam conhecer linguagens de consulta específicas para extrair insights dos dados. Isso limitava o acesso à análise apenas para usuários técnicos, criando dependência e reduzindo a democratização dos dados.`}
      solution={`Projetei uma interface de chat que: 1) Interpreta perguntas em linguagem natural; 2) Gera visualizações automáticas baseadas no contexto; 3) Oferece sugestões de perguntas relacionadas; 4) Permite refinamento iterativo das consultas através da conversa.`}
      technologies={["Figma", "Miro", "AI/ML Design", "Conversational UI", "Data Visualization"]}
      galleryImages={[
        "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]}
      testimonial={{
        quote: "A interface de chat transformou como nossa equipe interage com os dados. Agora qualquer pessoa pode fazer perguntas complexas e obter respostas visuais imediatas.",
        author: "Carlos Silva",
        role: "Head of Analytics, DataCorp"
      }}
      metrics={[
        { value: "80%", label: "Redução no tempo de análise", icon: "trending" },
        { value: "3x", label: "Aumento no uso da plataforma", icon: "users" },
        { value: "92%", label: "Satisfação dos usuários", icon: "zap" }
      ]}
      nextProject={{
        title: "Axii — Gerenciador de base de dados para GenAI",
        url: "/projects/axii/gerenciador-dados-genai"
      }}
      projectId="axii-genai-chat"
    />
  );
}