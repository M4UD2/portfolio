import React from 'react';
import ProjectLayout from '../templates/project-layout';
import ProjectHero from '../organisms/project-hero';
import ProjectImage from '../molecules/project-image';
import TableOfContents from '../organisms/table-of-contents';
import ContentSection from '../molecules/content-section';
import TechStack from '../organisms/tech-stack';
import ProjectGallery from '../organisms/project-gallery';
import Testimonial from '../molecules/testimonial';
import MetricsGrid from '../organisms/metrics-grid';
import ProjectNavigation from '../organisms/project-navigation';

interface Metric {
  value: string;
  label: string;
  icon?: 'trending' | 'users' | 'zap';
}

interface ProjectDetailProps {
  // Dados básicos
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  link?: string;
  imageUrl: string;
  
  // Conteúdo
  description: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  galleryImages?: string[];
  
  // Depoimento
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  
  // Resultados
  metrics?: Metric[];
  results?: string[];
  
  // Navegação
  previousProject?: {
    title: string;
    url: string;
  };
  nextProject?: {
    title: string;
    url: string;
  };
  
  // Customizações opcionais
  customHero?: React.ReactNode;
  customImage?: React.ReactNode;
  customContent?: React.ReactNode;
  customSections?: React.ReactNode[];
  hideTableOfContents?: boolean;
}

export default function ProjectDetail({
  title,
  subtitle,
  date,
  tags,
  link,
  imageUrl,
  description,
  challenge,
  solution,
  technologies,
  galleryImages,
  testimonial,
  metrics,
  results,
  previousProject,
  nextProject,
  customHero,
  customImage,
  customContent,
  customSections,
  hideTableOfContents = false
}: ProjectDetailProps) {
  
  // Renderiza conteúdo customizado ou padrão
  const renderContent = () => {
    if (customContent) return customContent;
    
    if (customSections) {
      return (
        <div className="lg:col-span-9 flex flex-col gap-12">
          {customSections}
        </div>
      );
    }
    
    // Conteúdo padrão
    return (
      <div className="lg:col-span-9 flex flex-col gap-12">
        <ContentSection
          id="visao-geral"
          title="Visão Geral"
          content={description}
          delay={0.3}
        />
        
        {challenge && (
          <ContentSection
            id="desafio"
            title="O Desafio"
            content={challenge}
            delay={0.4}
          />
        )}
        
        {solution && (
          <ContentSection
            id="solucao"
            title="A Solução"
            content={solution}
            delay={0.5}
          />
        )}
        
        {technologies && (
          <TechStack
            technologies={technologies}
            delay={0.6}
          />
        )}
        
        {galleryImages && (
          <ProjectGallery
            images={galleryImages}
            delay={0.7}
          />
        )}
        
        {testimonial && (
          <Testimonial
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            delay={0.9}
          />
        )}
        
        {(metrics || results) && (
          <MetricsGrid
            metrics={metrics}
            results={results}
            delay={1.0}
          />
        )}
      </div>
    );
  };

  return (
    <ProjectLayout>
      {/* Hero customizável */}
      {customHero || (
        <ProjectHero
          title={title}
          subtitle={subtitle}
          date={date}
          tags={tags}
          link={link}
        />
      )}

      {/* Imagem customizável */}
      {customImage || (
        <ProjectImage
          src={imageUrl}
          alt={title}
          delay={0.2}
        />
      )}

      {/* Conteúdo principal */}
      <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Table of Contents opcional */}
          {!hideTableOfContents && <TableOfContents delay={0.3} />}
          
          {/* Conteúdo */}
          {renderContent()}
        </div>
      </div>

      {/* Navegação entre projetos */}
      {(previousProject || nextProject) && (
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      )}
    </ProjectLayout>
  );
}