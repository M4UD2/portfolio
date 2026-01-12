import { useEffect } from 'react';
import ProjectDetail from '../../../components/organisms/project-detail';

export default function EditorSQL() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectDetail
      productName="Yrden"
      productLogo="/logos/yrden-logo.svg"
      title="Editor SQL"
      subtitle="Interface intuitiva para consultas e análise de dados"
      date="Janeiro 2024"
      role="Product Designer (End-to-end)"
      tools={["Figma", "Miro", "User Testing", "Analytics"]}
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      description={
        `Desenvolvimento de um editor SQL intuitivo para a plataforma Yrden, focado em democratizar o acesso a consultas de dados. ` +
        `O desafio era criar uma interface que atendesse tanto usuários técnicos quanto analistas de negócio, ` +
        `mantendo a funcionalidade avançada sem comprometer a usabilidade.`
      }
      challenge={`Usuários não-técnicos tinham dificuldade para escrever consultas SQL, dependendo constantemente da equipe técnica. Isso criava gargalos no processo de análise e impactava a autonomia dos analistas de negócio.`}
      solution={`Criei um editor híbrido que combina: 1) Interface visual para construção de consultas básicas; 2) Editor de código com autocomplete inteligente; 3) Biblioteca de templates pré-configurados; 4) Validação em tempo real com sugestões de correção.`}
      technologies={["Figma", "Miro", "User Testing", "Prototyping", "SQL"]}
      galleryImages={[
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]}
      metrics={[
        { value: "65%", label: "Redução em consultas à TI", icon: "users" },
        { value: "40%", label: "Aumento na autonomia", icon: "trending" },
        { value: "3 sem", label: "Tempo de desenvolvimento", icon: "zap" }
      ]}
      nextProject={{
        title: "Axii — GenAI em chat",
        url: "/projects/axii/genai-chat"
      }}
      projectId="yrden-editor-sql"
    />
  );
}