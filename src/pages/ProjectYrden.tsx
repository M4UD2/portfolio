import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente para seções de texto reutilizável
function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <h2 className="font-mono font-bold text-xl md:text-2xl text-black">{title}</h2>
      <div className="font-mono text-base text-[#212529] opacity-80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

export default function ProjectYrden() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-6 py-12 md:py-20">
        
        {/* Botão Voltar */}
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-sm hover:underline mb-8 opacity-60 hover:opacity-100 transition-opacity">
          <ArrowLeft size={16} /> Voltar para o início
        </Link>

        {/* Cabeçalho do Projeto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-mono font-bold text-3xl md:text-5xl mb-6 text-black">
            Yrden Onboarding
          </h1>
          <p className="font-mono text-lg md:text-xl opacity-70 max-w-2xl">
            De 60 minutos de espera a um onboarding produtivo: transformando uma limitação técnica em experiência de valor.
          </p>

          {/* Grid de Informações */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-6 border-y border-black/10">
            <div>
              <p className="font-mono font-bold text-xs uppercase tracking-wider opacity-50 mb-1">Cliente</p>
              <p className="font-mono font-bold">Yrden</p>
            </div>
            <div>
              <p className="font-mono font-bold text-xs uppercase tracking-wider opacity-50 mb-1">Ano</p>
              <p className="font-mono font-bold">2024</p>
            </div>
            <div>
              <p className="font-mono font-bold text-xs uppercase tracking-wider opacity-50 mb-1">Papel</p>
              <p className="font-mono font-bold">Product Designer</p>
            </div>
            <div>
              <p className="font-mono font-bold text-xs uppercase tracking-wider opacity-50 mb-1">Plataforma</p>
              <p className="font-mono font-bold">Web App / SaaS</p>
            </div>
          </div>
        </motion.div>

        {/* Imagem de Capa (Placeholder) */}
        <motion.div 
          className="w-full aspect-video bg-gray-200 mb-16 rounded-lg overflow-hidden border border-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80&w=1200" 
            alt="Capa do projeto" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Conteúdo do Case */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Coluna Principal de Texto */}
            <div className="w-full md:w-2/3">
              <Section title="O Desafio">
                <p>
                  O sistema da Yrden demorava 60 minutos para processar os dados iniciais. O usuário via uma tela de carregamento vazia, causando frustração e abandono.
                </p>
              </Section>

              <Section title="A Solução">
                <p>
                  Criamos um "Wizard" de configuração que guia o usuário por tutoriais e configurações de perfil enquanto os dados são processados em segundo plano, transformando a espera em aprendizado.
                </p>
              </Section>
              
              <Section title="Resultados">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Redução de 40% na taxa de abandono (churn).</li>
                  <li>Aumento da satisfação do usuário (NPS).</li>
                </ul>
              </Section>
            </div>

            {/* Coluna Lateral (Ferramentas) */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24 p-6 bg-white border border-black/10 rounded-lg">
                <h3 className="font-mono font-bold mb-4">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Miro', 'React', 'Jira'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full font-mono text-xs text-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.article>

      </main>
    </div>
  );
}
