import React from 'react';
import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';
import BackButton from '../atoms/back-button';

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string;
}

export default function ProjectLayout({ children, projectId }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-[1040px] mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-4 md:pb-8">
        <BackButton fromProject={projectId} />
      </div>

      {/* Project Content */}
      {children}

      <Footer />
    </div>
  );
}