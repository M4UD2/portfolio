import ProjectLayout from '../templates/project-layout';
import ProjectHero from '../organisms/project-hero';
import ProjectImage from '../molecules/project-image';
import ContentSection from '../molecules/content-section';
import TechStack from '../organisms/tech-stack';
import ProjectGallery from '../organisms/project-gallery';
import Testimonial from '../molecules/testimonial';
import MetricsGrid from '../organisms/metrics-grid';
import ProjectNavigation from '../organisms/project-navigation';
import FadeInView from '../atoms/fade-in-view';

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
  role: string;
  tools: string[];
  link?: string;
  imageUrl: string;
  productName?: string;
  productLogo?: string;
  
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
  projectId?: string;
}

export default function ProjectDetail({
  title,
  subtitle,
  date,
  role,
  tools,
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
  hideTableOfContents = false,
  projectId,
  productName,
  productLogo
}: ProjectDetailProps) {
  
  const containerClassName = "max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12";
  const gridClassName = "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16";
  
  // Animation delays
  const delays = {
    overview: 0.3,
    challenge: 0.4,
    solution: 0.5,
    tech: 0.6,
    gallery: 0.7,
    testimonial: 0.9,
    metrics: 1.0
  };
  
  // Renderiza conteúdo customizado ou padrão
  const renderContent = () => {
    if (customContent) return customContent;
    
    if (customSections) {
      return (
        <div className="flex flex-col gap-12">
          {customSections}
        </div>
      );
    }
    
    // Conteúdo padrão
    return (
      <div className="flex flex-col gap-12">
        <ContentSection
          id="visao-geral"
          title="Visão Geral"
          content={description}
          delay={delays.overview}
        />
        
        {challenge && (
          <ContentSection
            id="desafio"
            title="O Desafio"
            content={challenge}
            delay={delays.challenge}
          />
        )}
        
        {solution && (
          <ContentSection
            id="solucao"
            title="A Solução"
            content={solution}
            delay={delays.solution}
          />
        )}
        
        {technologies && (
          <TechStack
            technologies={technologies}
            delay={delays.tech}
          />
        )}
        
        {galleryImages && (
          <ProjectGallery
            images={galleryImages}
            delay={delays.gallery}
          />
        )}
        
        {testimonial && (
          <Testimonial
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            delay={delays.testimonial}
          />
        )}
        
        {(metrics || results) && (
          <MetricsGrid
            metrics={metrics}
            results={results}
            delay={delays.metrics}
          />
        )}
      </div>
    );
  };

  return (
    <ProjectLayout 
      projectId={projectId}
      title={title}
      prototypeLink={link}
    >
      {/* Hero customizável */}
      {customHero || (
        <ProjectHero
          title={title}
          subtitle={subtitle}
          date={date}
          role={role}
          tools={tools}
          link={link}
          productName={productName}
          productLogo={productLogo}
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
      <FadeInView delay={0.1}>
        <div className={containerClassName}>
          <div className="flex flex-col gap-12">
            {/* Conteúdo */}
            {renderContent()}
          </div>
        </div>
      </FadeInView>

      {/* Navegação entre projetos */}
      {(previousProject || nextProject) && (
        <FadeInView delay={0.15}>
          <ProjectNavigation
            previousProject={previousProject}
            nextProject={nextProject}
          />
        </FadeInView>
      )}
    </ProjectLayout>
  );
}