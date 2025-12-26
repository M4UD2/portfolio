import React from 'react';
import ProjectDetail from '../../components/organisms/project-detail';

export default function Yrden() {
  return (
    <ProjectDetail
      title="[Yrden] De 60 minutos de espera a um onboarding produtivo"
      subtitle="Como transformei uma limitação técnica em uma jornada de boas-vindas de valor"
      date="Dezembro 2024"
      tags={["UX Design", "Onboarding", "Product Strategy"]}
      link="https://www.figma.com/design/example"
      imageUrl="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      description="Durante o desenvolvimento do Yrden, nos deparamos com uma limitação técnica significativa: o tempo de processamento inicial do sistema era de aproximadamente 60 minutos. Esse período de espera representava um grande obstáculo para a experiência do usuário e poderia resultar em abandono durante a fase crítica de onboarding."
      challenge="O principal desafio era transformar um tempo de espera inevitável de 60 minutos em uma experiência valiosa para o usuário. Era necessário manter o engajamento, educar sobre a plataforma e estabelecer expectativas claras, tudo isso enquanto o sistema processava os dados em background."
      solution="Desenvolvi um onboarding progressivo que transforma o tempo de espera em valor. A solução incluiu tutoriais interativos sobre as funcionalidades principais, configurações personalizadas do perfil, e uma série de tooltips contextuais que educam o usuário sobre como maximizar o uso da plataforma. Além disso, implementei um indicador de progresso transparente que mantém o usuário informado sobre cada etapa do processamento."
      technologies={["Figma", "React", "TypeScript", "Framer Motion", "Tailwind CSS"]}
      galleryImages={[
        "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]}
      testimonial={{
        quote: "O novo onboarding transformou completamente a experiência dos nossos usuários. A taxa de abandono caiu drasticamente e recebemos feedback extremamente positivo sobre a clareza do processo.",
        author: "Ana Silva",
        role: "Product Manager, Yrden"
      }}
      metrics={[
        { value: "73%", label: "Redução no abandono", icon: "trending" },
        { value: "2.5k+", label: "Usuários ativos", icon: "users" },
        { value: "45%", label: "Mais engajamento", icon: "zap" }
      ]}
      nextProject={{
        title: "Axiom - Implementando múltiplas visualizações",
        url: "/projects/axiom"
      }}
    />
  );
}