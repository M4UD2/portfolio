import { useEffect } from 'react';
import ProjectDetail from '../../../components/organisms/project-detail';

export default function GerenciadorDadosGenAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectDetail
      productName="Axii"
      productLogo="/logos/axiom-logo.svg"
      title="Gerenciador de base de dados para GenAI"
      subtitle="Sistema de gestão de dados otimizado para modelos de IA generativa"
      date="Abril 2024"
      role="Product Designer (End-to-end)"
      tools={["Figma", "Miro", "User Research", "System Design"]}
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      description={
        `Desenvolvimento de um sistema de gerenciamento de bases de dados especificamente otimizado para alimentar ` +
        `modelos de IA generativa. O foco foi criar uma interface que permitisse configurar, monitorar e otimizar ` +
        `o fluxo de dados para garantir a qualidade e relevância das respostas da IA.`
      }
      challenge={`Modelos de GenAI precisam de dados estruturados e contextualizados para gerar respostas precisas. O desafio era criar uma interface que permitisse aos usuários configurar e gerenciar essas bases de dados sem conhecimento técnico profundo, garantindo qualidade e performance.`}
      solution={`Projetei um sistema modular que: 1) Interface visual para mapeamento de dados; 2) Dashboard de monitoramento da qualidade dos dados; 3) Sistema de versionamento e rollback; 4) Ferramentas de teste e validação em tempo real; 5) Alertas automáticos para inconsistências.`}
      technologies={["Figma", "Miro", "Database Design", "AI/ML Systems", "Data Architecture"]}
      galleryImages={[
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]}
      testimonial={{
        quote: "O gerenciador revolucionou nossa capacidade de manter dados consistentes para IA. A interface intuitiva permitiu que nossa equipe não-técnica contribuísse ativamente na curadoria dos dados.",
        author: "Ana Costa",
        role: "AI Product Manager, TechFlow"
      }}
      metrics={[
        { value: "95%", label: "Melhoria na qualidade dos dados", icon: "trending" },
        { value: "60%", label: "Redução no tempo de configuração", icon: "zap" },
        { value: "4x", label: "Aumento na precisão da IA", icon: "users" }
      ]}
      nextProject={{
        title: "Yrden — De 60 minutos de espera a um onboarding produtivo",
        url: "/projects/yrden/onboarding-produtivo"
      }}
      projectId="axii-gerenciador-dados-genai"
    />
  );
}