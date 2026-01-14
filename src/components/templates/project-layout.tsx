import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';
import BackButton from '../atoms/back-button';
import ScrollToTop from '../atoms/scroll-to-top';
import ProjectStickyHeader from '../organisms/project-sticky-header';

// Import StickyHeaderProps from project-sticky-header.tsx
import { StickyHeaderProps } from '../organisms/project-sticky-header';

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string | null;
  title?: string; // Remove or comment out if not needed
  prototypeLink?: string;
  customSections?: StickyHeaderProps['sections'];
}

export default function ProjectLayout({ 
  children, 
  projectId, 
  title, // Remove or comment out if not needed
  prototypeLink, 
  customSections 
}: ProjectLayoutProps) {
  if (!children) {
    return null;
  }

  const validProjectId = projectId && typeof projectId === 'string' && projectId.trim() ? projectId.trim() : undefined;

  try {
    return (
      <div className="min-h-screen bg-background">
        <div className="relative">
          <Navbar />
        </div>

        {/* Sticky Header */}
        <ProjectStickyHeader
          prototypeLink={prototypeLink}
          sections={customSections} // Pass custom sections to the header
        />

        {/* Back Button */}
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-4 md:pb-8">
          <BackButton fromProject={validProjectId} />
        </div>

        {/* Project Content */}
        {children}

        <Footer />
        
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Error loading project layout</p>
      </div>
    );
  }
}